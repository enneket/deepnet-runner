import { bus } from '../core/event-bus.js';
import { ENEMIES } from '../data/enemies.js';
import { SKILLS } from '../data/skills.js';
import { getItem } from '../data/items.js';
import { randInt, roll } from '../utils/random.js';
import { formatStat } from '../utils/text.js';

/**
 * CombatSystem - Turn-based combat engine
 */
export class CombatSystem {
  constructor(state, renderer) {
    this._state = state;
    this._renderer = renderer;
    this._enemy = null;

    bus.on('combat:start', ({ enemyId, isBoss }) => this.startCombat(enemyId, isBoss));
  }

  startCombat(enemyId, isBoss = false) {
    const template = ENEMIES[enemyId];
    if (!template) {
      bus.emit('ui:message', { text: 'ERROR: Enemy not found.', className: 'combat-log' });
      return;
    }

    const layer = this._state.get('game.currentLayer') || 1;
    const scale = 1 + (layer - 1) * 0.3;

    this._enemy = {
      ...template,
      hp: Math.round(template.hp * scale),
      maxHp: Math.round(template.maxHp * scale),
      attack: Math.round(template.attack * scale),
      defense: Math.round(template.defense * scale),
      isBoss
    };

    bus.emit('ui:message', {
      text: `⚔ 战斗：${this._enemy.name}`,
      className: 'combat-title'
    });

    this._showCombatStatus();
    this._showCombatChoices();
  }

  _showCombatStatus() {
    const player = this._state.get('player');
    const enemy = this._enemy;

    bus.emit('ui:message', {
      text: `[你]  ${formatStat('HP', player.hp, player.maxHp)}  ${formatStat('RAM', player.ram, player.maxRam)}`,
      className: 'event-text'
    });
    bus.emit('ui:message', {
      text: `[敌人] ${formatStat('HP', enemy.hp, enemy.maxHp)}  类型：${enemy.type}`,
      className: 'combat-log'
    });
  }

  _showCombatChoices() {
    const player = this._state.get('player');
    const choices = [];

    choices.push({
      label: `⚔ 攻击协议 [${player.attack} 伤害]`,
      action: () => this._playerAttack()
    });

    const unlockedSkills = this._state.get('player.skills') || [];
    for (const skillId of unlockedSkills) {
      const skill = SKILLS[skillId];
      if (skill && player.ram >= skill.ramCost) {
        choices.push({
          label: `🔮 ${skill.name} [${skill.ramCost} RAM]`,
          action: () => this._playerSkill(skill)
        });
      }
    }

    const inventory = this._state.get('player.inventory') || [];
    const consumables = inventory.filter(id => {
      const item = getItem(id);
      return item && item.type === 'consumable';
    });
    if (consumables.length > 0) {
      choices.push({
        label: `💊 使用物品 (${consumables.length} 可用)`,
        action: () => this._showItemChoices()
      });
    }

    bus.emit('ui:choices', choices);
  }

  _playerAttack() {
    const player = this._state.get('player');
    const isCrit = roll(player.critChance || 0.15);
    const baseDmg = player.attack;
    const dmg = Math.max(1, baseDmg - this._enemy.defense);
    const finalDmg = isCrit ? Math.round(dmg * 1.5) : dmg;

    this._enemy.hp = Math.max(0, this._enemy.hp - finalDmg);

    bus.emit('ui:message', {
      text: `你造成 ${finalDmg} 点伤害${isCrit ? ' — 暴击！' : ''}`,
      className: isCrit ? 'loot-text' : 'event-text'
    });

    if (this._enemy.hp <= 0) {
      this._combatVictory();
    } else {
      this._enemyTurn();
    }
  }

  _playerSkill(skill) {
    const player = this._state.get('player');
    this._state.set('player.ram', player.ram - skill.ramCost);

    switch (skill.effect) {
      case 'damage': {
        const baseDmg = player.attack * skill.damageMultiplier;
        const dmg = Math.max(1, Math.round(baseDmg) - this._enemy.defense);
        this._enemy.hp = Math.max(0, this._enemy.hp - dmg);
        bus.emit('ui:message', {
          text: `${skill.name} 造成 ${dmg} 点伤害！`,
          className: 'loot-text'
        });
        break;
      }
      case 'debuff': {
        const reduction = Math.round(this._enemy.defense * skill.defenseReduction);
        this._enemy.defense -= reduction;
        bus.emit('ui:message', {
          text: `${skill.name} 降低敌人防御 ${reduction} 点！`,
          className: 'event-text'
        });
        break;
      }
      case 'heal': {
        const heal = Math.min(skill.healAmount, player.maxHp - player.hp);
        this._state.set('player.hp', player.hp + heal);
        bus.emit('ui:message', {
          text: `${skill.name} 恢复 ${heal} 点HP！`,
          className: 'loot-text'
        });
        break;
      }
      case 'bypass': {
        if (roll(skill.bypassChance)) {
          bus.emit('ui:message', {
            text: `${skill.name} 成功！战斗跳过！`,
            className: 'loot-text'
          });
          this._combatVictory();
          return;
        } else {
          bus.emit('ui:message', {
            text: `${skill.name} 失败！敌人发现了你。`,
            className: 'combat-log'
          });
        }
        break;
      }
    }

    if (this._enemy.hp <= 0) {
      this._combatVictory();
    } else {
      this._enemyTurn();
    }
  }

  _enemyTurn() {
    const player = this._state.get('player');
    const isCrit = roll(0.1);
    const baseDmg = this._enemy.attack;
    const dmg = Math.max(1, baseDmg - (player.defense || 0));
    const finalDmg = isCrit ? Math.round(dmg * 1.5) : dmg;

    const newHp = Math.max(0, player.hp - finalDmg);
    this._state.set('player.hp', newHp);

    bus.emit('ui:message', {
      text: `${this._enemy.name} 造成 ${finalDmg} 点伤害${isCrit ? ' — 暴击！' : ''}`,
      className: 'combat-log'
    });

    if (newHp <= 0) {
      this._combatDefeat();
    } else {
      this._showCombatStatus();
      this._showCombatChoices();
    }
  }

  _combatVictory() {
    const enemy = this._enemy;
    const xp = enemy.xpReward;
    const currentXp = this._state.get('player.xp') || 0;
    this._state.set('player.xp', currentXp + xp);

    bus.emit('ui:message', {
      text: `✓ ${enemy.name} 被击败！+${xp} 经验值`,
      className: 'loot-text'
    });

    for (const loot of (enemy.lootTable || [])) {
      if (roll(loot.chance)) {
        const inventory = this._state.get('player.inventory') || [];
        this._state.set('player.inventory', [...inventory, loot.itemId]);
        bus.emit('ui:message', {
          text: `  💰 战利品：${loot.itemId}`,
          className: 'loot-text'
        });
      }
    }

    if (enemy.isBoss) {
      const layer = this._state.get('game.currentLayer');
      if (layer < 3) {
        bus.emit('ui:message', {
          text: `🔥 防火墙已突破！正在下降到第${layer + 1}层...`,
          className: 'neon-text-magenta'
        });
        setTimeout(() => {
          bus.emit('exploration:enterLayer', layer + 1);
        }, 1500);
      } else {
        bus.emit('ui:message', {
          text: '🏆 你已到达DEEPNET核心。胜利！',
          className: 'neon-text'
        });
        bus.emit('game:victory');
      }
    } else {
      this._showPostCombatChoices();
    }

    this._enemy = null;
  }

  _combatDefeat() {
    bus.emit('ui:message', {
      text: '💀 系统崩溃。你与DeepNet的连接已断开。',
      className: 'combat-log'
    });
    bus.emit('ui:message', {
      text: '游戏结束',
      className: 'neon-text-magenta'
    });
    bus.emit('game:over');
  }

  _showPostCombatChoices() {
    const choices = [
      {
        label: '→ 继续探索',
        action: () => {
          bus.emit('ui:clear');
          const node = this._state.get('game.currentNode');
          bus.emit('exploration:chooseNode', node);
        }
      },
      {
        label: '📦 查看背包',
        action: () => bus.emit('inventory:show')
      }
    ];
    bus.emit('ui:choices', choices);
  }

  _showItemChoices() {
    const inventory = this._state.get('player.inventory') || [];
    const choices = [];

    for (const itemId of inventory) {
      const item = getItem(itemId);
      if (item && item.type === 'consumable') {
        choices.push({
          label: `${item.name} — ${item.description}`,
          action: () => this._useConsumable(itemId)
        });
      }
    }

    choices.push({
      label: '← 返回战斗',
      action: () => this._showCombatChoices()
    });

    bus.emit('ui:choices', choices);
  }

  _useConsumable(itemId) {
    const item = getItem(itemId);
    if (!item || !item.effect) return;

    const player = this._state.get('player');
    const inventory = [...(player.inventory || [])];
    const idx = inventory.indexOf(itemId);
    if (idx === -1) return;

    inventory.splice(idx, 1);
    this._state.set('player.inventory', inventory);

    if (item.effect.hp) {
      const heal = Math.min(item.effect.hp, player.maxHp - player.hp);
      this._state.set('player.hp', player.hp + heal);
      bus.emit('ui:message', { text: `使用了 ${item.name}。+${heal} HP。`, className: 'loot-text' });
    }
    if (item.effect.ram) {
      const restore = Math.min(item.effect.ram, player.maxRam - player.ram);
      this._state.set('player.ram', player.ram + restore);
      bus.emit('ui:message', { text: `使用了 ${item.name}。+${restore} RAM。`, className: 'loot-text' });
    }

    this._showCombatStatus();
    this._showCombatChoices();
  }
}
