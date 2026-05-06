import { bus } from './core/event-bus.js';
import { StateManager } from './core/state.js';
import { Renderer } from './core/renderer.js';
import { ExplorationSystem } from './systems/exploration.js';
import { CombatSystem } from './systems/combat.js';
import { InventorySystem } from './systems/inventory.js';
import { SkillsSystem } from './systems/skills.js';

/**
 * Initial player state
 */
const INITIAL_STATE = {
  player: {
    hp: 100,
    maxHp: 100,
    ram: 50,
    maxRam: 50,
    attack: 10,
    defense: 0,
    critChance: 0.15,
    credits: 20,
    xp: 0,
    level: 1,
    skillPoints: 0,
    skills: [],
    inventory: ['data_pack', 'data_pack'],
    equipped: {
      weapon: null,
      armor: null,
      accessory: null
    }
  },
  game: {
    currentLayer: 1,
    currentNode: 'entry',
    phase: 'exploration'
  }
};

/**
 * DeepNet Runner - Main bootstrap
 */
class Game {
  constructor() {
    this._state = new StateManager(INITIAL_STATE);
    this._renderer = new Renderer(this._state);
    this._exploration = new ExplorationSystem(this._state);
    this._combat = new CombatSystem(this._state, this._renderer);
    this._inventory = new InventorySystem(this._state);
    this._skills = new SkillsSystem(this._state);

    bus.on('game:over', () => this._handleGameOver());
    bus.on('game:victory', () => this._handleVictory());

    // Debug commands
    window.game = {
      state: this._state,
      bus,
      god: () => {
        this._state.update({
          player: { hp: 999, maxHp: 999, ram: 999, maxRam: 999, attack: 50, credits: 999 }
        });
        console.log('God mode activated');
      }
    };
  }

  start() {
    this._renderer.renderStats();

    bus.emit('ui:message', {
      text: '\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557',
      className: 'neon-text'
    });
    bus.emit('ui:message', {
      text: '\u2551       DEEPNET 跑者 v1.0             \u2551',
      className: 'neon-text'
    });
    bus.emit('ui:message', {
      text: '\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D',
      className: 'neon-text'
    });
    bus.emit('ui:message', { text: '', className: '' });
    bus.emit('ui:message', {
      text: '你是一名网络跑者。你接入DeepNet以突破其核心。',
      className: 'event-text'
    });
    bus.emit('ui:message', {
      text: '穿越节点网络。对抗ICE。收集装备。活下去。',
      className: 'event-text'
    });
    bus.emit('ui:message', { text: '', className: '' });

    this._state.onChange(() => {
      bus.emit('skills:checkLevelUp');
    });

    bus.emit('exploration:enterLayer', 1);
  }

  _handleGameOver() {
    const choices = [
      {
        label: '\uD83D\uDD04 重新开始',
        action: () => {
          this._state.reset(INITIAL_STATE);
          this._renderer.renderStats();
          bus.emit('ui:clear');
          bus.emit('exploration:enterLayer', 1);
        }
      }
    ];
    bus.emit('ui:choices', choices);
  }

  _handleVictory() {
    bus.emit('ui:message', {
      text: '你已征服DeepNet。网络属于你了。',
      className: 'event-text'
    });

    const choices = [
      {
        label: '\uD83D\uDD04 再来一次',
        action: () => {
          this._state.reset(INITIAL_STATE);
          this._renderer.renderStats();
          bus.emit('ui:clear');
          bus.emit('exploration:enterLayer', 1);
        }
      }
    ];
    bus.emit('ui:choices', choices);
  }
}

const game = new Game();
game.start();
