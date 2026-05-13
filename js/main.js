import { bus } from './core/event-bus.js';
import { StateManager } from './core/state.js';
import { Renderer } from './core/renderer.js';
import { ExplorationSystem } from './systems/exploration.js';
import { CombatSystem } from './systems/combat.js';
import { InventorySystem } from './systems/inventory.js';
import { SkillsSystem } from './systems/skills.js';
import { i18n } from './systems/i18n.js';

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

    // Re-render on language change
    i18n.onChange(() => {
      this._renderer.renderStats();
      this._updatePageTitle();
      bus.emit('ui:clear');
      const currentNode = this._state.get('game.currentNode');
      const currentLayer = this._state.get('game.currentLayer');
      if (currentNode && currentLayer) {
        bus.emit('exploration:chooseNode', currentNode);
      }
    });

    // Debug commands (dev only — exposed via console for testing)
    if (typeof location !== 'undefined' && /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(location.hostname)) {
      window.game = {
        state: this._state,
        bus,
        i18n,
        god: () => {
          this._state.update({
            player: { hp: 999, maxHp: 999, ram: 999, maxRam: 999, attack: 50, credits: 999 }
          });
          console.log('God mode activated');
        }
      };
    }
  }

  _updatePageTitle() {
    document.title = i18n.t('game.title');
    const h1 = document.querySelector('#game-header h1');
    if (h1) {
      h1.textContent = i18n.t('game.title');
    }
    document.documentElement.lang = i18n.lang === 'zh' ? 'zh-CN' : 'en';
  }

  start() {
    this._updatePageTitle();
    this._renderer.renderStats();

    bus.emit('ui:message', {
      text: '\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557',
      className: 'neon-text'
    });
    bus.emit('ui:message', {
      text: `\u2551       ${i18n.t('game.title')} v1.0             \u2551`,
      className: 'neon-text'
    });
    bus.emit('ui:message', {
      text: '\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D',
      className: 'neon-text'
    });
    bus.emit('ui:message', { text: '', className: '' });
    bus.emit('ui:message', {
      text: i18n.t('game.subtitle'),
      className: 'event-text'
    });
    bus.emit('ui:message', {
      text: i18n.t('game.description'),
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
        label: i18n.t('game.restart'),
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
