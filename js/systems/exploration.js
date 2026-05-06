import { bus } from '../core/event-bus.js';
import { getLayer } from '../data/layers.js';
import { ENEMIES } from '../data/enemies.js';
import { getItem } from '../data/items.js';
import { pick, roll, randInt } from '../utils/random.js';

/**
 * ExplorationSystem - Manages node graph navigation
 */
export class ExplorationSystem {
  constructor(state) {
    this._state = state;
    this._currentLayer = null;
    this._currentNode = null;
    this._inCombat = false;

    bus.on('exploration:enterLayer', (layerNum) => this.enterLayer(layerNum));
    bus.on('exploration:chooseNode', (nodeId) => this.chooseNode(nodeId));
    bus.on('combat:start', () => { this._inCombat = true; });
    bus.on('game:over', () => { this._inCombat = false; });
    bus.on('game:victory', () => { this._inCombat = false; });
  }

  enterLayer(layerNum) {
    this._currentLayer = getLayer(layerNum);
    if (!this._currentLayer) {
      bus.emit('ui:message', { text: 'ERROR: Layer not found.', className: 'combat-log' });
      return;
    }

    this._state.update({
      game: { currentLayer: layerNum, currentNode: this._currentLayer.startNode }
    });

    this._currentNode = this._currentLayer.nodes[this._currentLayer.startNode];
    this._showNode();
  }

  chooseNode(nodeId) {
    const node = this._currentLayer.nodes[nodeId];
    if (!node) {
      bus.emit('ui:message', { text: 'ERROR: Invalid node.', className: 'combat-log' });
      return;
    }

    this._currentNode = node;
    this._state.update({
      game: { currentNode: nodeId }
    });

    bus.emit('ui:clear');
    this._showNode();
  }

  _showNode() {
    const node = this._currentNode;

    bus.emit('ui:message', {
      text: `📍 ${node.name}`,
      className: 'room-title'
    });
    bus.emit('ui:message', {
      text: node.description,
      className: 'room-desc'
    });

    this._inCombat = false;
    this._handleNodeEvent(node);

    if (!this._inCombat) {
      this._showChoices(node);
    }
  }

  _handleNodeEvent(node) {
    switch (node.type) {
      case 'data':
        this._dataNodeEvent();
        break;
      case 'encrypted':
        this._encryptedNodeEvent();
        break;
      case 'repair':
        this._repairNodeEvent();
        break;
      case 'shop':
        this._shopNodeEvent();
        break;
      case 'fragment':
        this._fragmentNodeEvent();
        break;
      case 'core':
        this._coreNodeEvent();
        break;
      case 'entry':
        bus.emit('ui:message', {
          text: '系统上线。选择你的路径。',
          className: 'event-text'
        });
        break;
    }
  }

  _dataNodeEvent() {
    if (roll(0.6)) {
      const enemies = ['sentry', 'crawler'];
      const enemyId = pick(enemies);
      bus.emit('ui:message', {
        text: '⚠ 检测到敌对程序！',
        className: 'combat-log'
      });
      bus.emit('combat:start', { enemyId });
    } else {
      const credits = randInt(5, 15);
      const current = this._state.get('player.credits') || 0;
      this._state.set('player.credits', current + credits);
      bus.emit('ui:message', {
        text: `💰 在废弃数据中发现 ${credits} 信用点。`,
        className: 'loot-text'
      });
    }
  }

  _encryptedNodeEvent() {
    bus.emit('ui:message', {
      text: '🔒 检测到重度加密。突破将触发防御系统。',
      className: 'event-text'
    });
    const tier = this._state.get('game.currentLayer');
    const enemyId = tier >= 2 ? 'firewall' : 'sentry';
    bus.emit('combat:start', { enemyId });
  }

  _repairNodeEvent() {
    const player = this._state.get('player');
    const hpRestore = Math.min(30, player.maxHp - player.hp);
    const ramRestore = Math.min(20, player.maxRam - player.ram);

    this._state.update({
      player: {
        hp: player.hp + hpRestore,
        ram: player.ram + ramRestore
      }
    });

    bus.emit('ui:message', {
      text: `🔧 系统修复中。+${hpRestore} HP, +${ramRestore} RAM。`,
      className: 'loot-text'
    });
  }

  _shopNodeEvent() {
    bus.emit('ui:message', {
      text: '"欢迎，跑者。看到喜欢的了吗？"',
      className: 'event-text'
    });
  }

  _fragmentNodeEvent() {
    const xp = randInt(20, 40);
    const currentXp = this._state.get('player.xp') || 0;
    this._state.set('player.xp', currentXp + xp);

    bus.emit('ui:message', {
      text: `📡 数据碎片解码完成。+${xp} 经验值。`,
      className: 'loot-text'
    });
    bus.emit('ui:message', {
      text: '"第一批跑者称之为\'深层\'。他们说如果你倾听，数据会回响。"',
      className: 'event-text'
    });
  }

  _coreNodeEvent() {
    const layer = this._state.get('game.currentLayer');
    const bossIds = { 1: 'overseer', 2: 'overseer', 3: 'overseer' };
    const enemyId = bossIds[layer] || 'overseer';

    bus.emit('ui:message', {
      text: '💀 检测到核心防火墙。准备战斗。',
      className: 'combat-log'
    });
    bus.emit('combat:start', { enemyId, isBoss: true });
  }

  _showChoices(node) {
    const choices = [];
    const layer = this._currentLayer;

    for (const connId of node.connections) {
      const connNode = layer.nodes[connId];
      if (connNode) {
        const symbols = {
          data: '>', encrypted: '#', repair: '+',
          shop: '$', fragment: '?', core: '!', entry: '@'
        };
        const symbol = symbols[connNode.type] || '?';
        choices.push({
          label: `${symbol} ${connNode.name}`,
          action: () => bus.emit('exploration:chooseNode', connId)
        });
      }
    }

    if (node.type === 'shop') {
      choices.push({
        label: '🛒 浏览商店',
        action: () => bus.emit('shop:open')
      });
    }

    choices.push({
      label: '📦 查看背包',
      action: () => bus.emit('inventory:show')
    });

    bus.emit('ui:choices', choices);
  }
}
