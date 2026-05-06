import { bus } from './event-bus.js';
import { formatStat } from '../utils/text.js';

/**
 * Renderer - DOM rendering engine, subscribes to state changes
 */
export class Renderer {
  constructor(state) {
    this._state = state;
    this._output = document.getElementById('game-output');
    this._choices = document.getElementById('choices');
    this._stats = document.getElementById('player-stats');

    // Auto-render on state change
    this._state.onChange(() => this.renderStats());

    // Listen for UI events
    bus.on('ui:message', (msg) => this.addMessage(msg));
    bus.on('ui:clear', () => this.clearOutput());
    bus.on('ui:choices', (choices) => this.renderChoices(choices));
  }

  /**
   * Render player stats bar
   */
  renderStats() {
    const player = this._state.get('player');
    if (!player) return;

    this._stats.innerHTML = [
      this._statBar('HP', player.hp, player.maxHp, 'hp'),
      this._statBar('RAM', player.ram, player.maxRam, 'ram'),
    ].join('');
  }

  _statBar(label, current, max, cls) {
    return `
      <div class="stat-bar">
        <span class="label">${label}</span>
        <div class="bar-track">
          <div class="bar-fill ${cls}" style="width: ${(current / max) * 100}%"></div>
        </div>
        <span class="stat-value">${current}/${max}</span>
      </div>
    `;
  }

  /**
   * Add a message to the output area
   * @param {Object} msg - { text, className }
   */
  addMessage({ text, className = '' }) {
    const el = document.createElement('div');
    el.className = className;
    el.textContent = text;
    this._output.appendChild(el);
    this._output.scrollTop = this._output.scrollHeight;
  }

  /**
   * Clear the output area
   */
  clearOutput() {
    this._output.innerHTML = '';
  }

  /**
   * Render choice buttons
   * @param {Array<{label: string, action: Function}>} choices
   */
  renderChoices(choices) {
    this._choices.innerHTML = '';
    choices.forEach((choice, index) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = `[${index + 1}] ${choice.label}`;
      btn.addEventListener('click', () => {
        bus.emit('ui:clear');
        choice.action();
      });
      this._choices.appendChild(btn);
    });
  }

  /**
   * Render a combat panel
   */
  renderCombat(player, enemy) {
    const panel = document.createElement('div');
    panel.className = 'combat-panel neon-border';
    panel.innerHTML = `
      <div class="combat-title">\u2694 COMBAT: ${enemy.name}</div>
      <div class="combatant">
        <div class="combatant-name player">[You]</div>
        <div>${formatStat('HP', player.hp, player.maxHp)}</div>
        <div>${formatStat('RAM', player.ram, player.maxRam)}</div>
      </div>
      <div class="combatant">
        <div class="combatant-name enemy">[Enemy]</div>
        <div>${formatStat('HP', enemy.hp, enemy.maxHp)}</div>
        <div class="stat-bar">
          <span class="label">Type</span>
          <span>${enemy.type}</span>
        </div>
      </div>
    `;
    this._output.appendChild(panel);
    this._output.scrollTop = this._output.scrollHeight;
  }
}
