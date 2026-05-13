import { bus } from './event-bus.js';
import { formatStat } from '../utils/text.js';
import { i18n } from '../systems/i18n.js';

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

    this._stats.textContent = '';
    this._stats.appendChild(this._statBar('HP', player.hp, player.maxHp, 'hp'));
    this._stats.appendChild(this._statBar('RAM', player.ram, player.maxRam, 'ram'));

    const langBtn = document.createElement('button');
    langBtn.className = 'lang-toggle';
    langBtn.id = 'lang-toggle';
    langBtn.textContent = i18n.t('lang.switch');
    langBtn.addEventListener('click', () => i18n.toggle());
    this._stats.appendChild(langBtn);
  }

  _statBar(label, current, max, cls) {
    const pct = max > 0 ? Math.min(100, Math.max(0, (current / max) * 100)) : 0;

    const wrapper = document.createElement('div');
    wrapper.className = 'stat-bar';

    const labelEl = document.createElement('span');
    labelEl.className = 'label';
    labelEl.textContent = label;

    const track = document.createElement('div');
    track.className = 'bar-track';

    const fill = document.createElement('div');
    fill.className = `bar-fill ${cls}`;
    fill.style.width = `${pct}%`;
    track.appendChild(fill);

    const value = document.createElement('span');
    value.className = 'stat-value';
    value.textContent = `${current}/${max}`;

    wrapper.append(labelEl, track, value);
    return wrapper;
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
   * Add message with typewriter effect
   */
  addMessageAnimated({ text, className = '' }, delay = 30) {
    const el = document.createElement('div');
    el.className = className;
    this._output.appendChild(el);

    let i = 0;
    const interval = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      this._output.scrollTop = this._output.scrollHeight;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, delay);
  }

  /**
   * Clear the output area
   */
  clearOutput() {
    this._output.replaceChildren();
  }

  /**
   * Render choice buttons
   * @param {Array<{label: string, action: Function}>} choices
   */
  renderChoices(choices) {
    this._choices.replaceChildren();
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

    const title = document.createElement('div');
    title.className = 'combat-title';
    title.textContent = i18n.t('combat.title') + enemy.name;

    const playerDiv = document.createElement('div');
    playerDiv.className = 'combatant';
    const playerName = document.createElement('div');
    playerName.className = 'combatant-name player';
    playerName.textContent = i18n.t('combat.you');
    const playerHp = document.createElement('div');
    playerHp.textContent = formatStat('HP', player.hp, player.maxHp);
    const playerRam = document.createElement('div');
    playerRam.textContent = formatStat('RAM', player.ram, player.maxRam);
    playerDiv.append(playerName, playerHp, playerRam);

    const enemyDiv = document.createElement('div');
    enemyDiv.className = 'combatant';
    const enemyName = document.createElement('div');
    enemyName.className = 'combatant-name enemy';
    enemyName.textContent = i18n.t('combat.enemy');
    const enemyHp = document.createElement('div');
    enemyHp.textContent = formatStat('HP', enemy.hp, enemy.maxHp);
    const typeRow = document.createElement('div');
    typeRow.className = 'stat-bar';
    const typeLabel = document.createElement('span');
    typeLabel.className = 'label';
    typeLabel.textContent = i18n.t('combat.type');
    const typeValue = document.createElement('span');
    typeValue.textContent = enemy.type;
    typeRow.append(typeLabel, typeValue);
    enemyDiv.append(enemyName, enemyHp, typeRow);

    panel.append(title, playerDiv, enemyDiv);
    this._output.appendChild(panel);
    this._output.scrollTop = this._output.scrollHeight;
  }
}
