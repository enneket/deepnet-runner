import { bus } from '../core/event-bus.js';
import { SKILLS, getSkill } from '../data/skills.js';
import { i18n } from './i18n.js';

/**
 * SkillsSystem - Manages skill tree and skill unlocking
 */
export class SkillsSystem {
  constructor(state) {
    this._state = state;

    bus.on('skills:show', () => this.showSkills());
    bus.on('skills:unlock', (skillId) => this.unlock(skillId));
    bus.on('skills:checkLevelUp', () => this.checkLevelUp());
  }

  checkLevelUp() {
    const player = this._state.get('player');
    const xp = player.xp || 0;
    const level = player.level || 1;
    const xpNeeded = level * 80;

    if (xp >= xpNeeded) {
      const newLevel = level + 1;
      const skillPoints = (player.skillPoints || 0) + 1;

      this._state.update({
        player: {
          level: newLevel,
          xp: xp - xpNeeded,
          skillPoints
        }
      });

      bus.emit('ui:message', {
        text: i18n.t('skills.levelUp', newLevel),
        className: 'neon-text'
      });

      this.checkLevelUp();
    }
  }

  showSkills() {
    const player = this._state.get('player');
    const unlocked = player.skills || [];
    const skillPoints = player.skillPoints || 0;

    bus.emit('ui:clear');
    bus.emit('ui:message', { text: i18n.t('skills.title'), className: 'room-title' });
    bus.emit('ui:message', { text: i18n.t('skills.points', skillPoints), className: 'event-text' });

    const branches = {
      brute_force: { nameKey: 'skills.branch.brute', skills: [] },
      stealth: { nameKey: 'skills.branch.stealth', skills: [] },
      system_control: { nameKey: 'skills.branch.control', skills: [] }
    };

    for (const [id, skill] of Object.entries(SKILLS)) {
      if (branches[skill.branch]) {
        branches[skill.branch].skills.push({ id, ...skill });
      }
    }

    const choices = [];

    for (const [branchId, branch] of Object.entries(branches)) {
      bus.emit('ui:message', { text: `\n--- ${i18n.t(branch.nameKey).toUpperCase()} ---`, className: 'event-text' });

      for (const skill of branch.skills) {
        const isUnlocked = unlocked.includes(skill.id);
        const canUnlock = !isUnlocked
          && skillPoints > 0
          && (!skill.requires || unlocked.includes(skill.requires));

        const status = isUnlocked ? '✓' : canUnlock ? '○' : '✗';
        bus.emit('ui:message', {
          text: `  ${status} ${i18n.t(skill.nameKey)} — ${i18n.t(skill.descKey)} [${skill.ramCost} RAM]`,
          className: isUnlocked ? 'loot-text' : 'event-text'
        });

        if (canUnlock) {
          choices.push({
            label: `${i18n.t('skills.unlock')}${i18n.t(skill.nameKey)}`,
            action: () => this.unlock(skill.id)
          });
        }
      }
    }

    choices.push({
      label: i18n.t('inventory.back'),
      action: () => bus.emit('exploration:chooseNode', this._state.get('game.currentNode'))
    });

    bus.emit('ui:choices', choices);
  }

  unlock(skillId) {
    const player = this._state.get('player');
    const skill = getSkill(skillId);

    if (!skill) {
      bus.emit('ui:message', { text: i18n.t('skills.notFound'), className: 'combat-log' });
      return;
    }

    if ((player.skillPoints || 0) <= 0) {
      bus.emit('ui:message', { text: i18n.t('skills.noPoints'), className: 'combat-log' });
      return;
    }

    if (skill.requires && !(player.skills || []).includes(skill.requires)) {
      bus.emit('ui:message', { text: i18n.t('skills.requires', skill.requires), className: 'combat-log' });
      return;
    }

    const skills = [...(player.skills || []), skillId];
    this._state.update({
      player: {
        skills,
        skillPoints: player.skillPoints - 1
      }
    });

    bus.emit('ui:message', {
      text: i18n.t('skills.unlocked', skill.name),
      className: 'neon-text'
    });

    this.showSkills();
  }
}
