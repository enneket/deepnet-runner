/**
 * Text formatting utilities
 */

/**
 * Render a progress bar
 * @param {number} current
 * @param {number} max
 * @param {number} width - Character width (default 10)
 * @returns {string} e.g., "████░░░░░░"
 */
export function progressBar(current, max, width = 10) {
  const ratio = Math.max(0, Math.min(1, current / max));
  const filled = Math.round(ratio * width);
  return '\u2588'.repeat(filled) + '\u2591'.repeat(width - filled);
}

/**
 * Format stat display: "HP: ██████░░░░ 60/100"
 */
export function formatStat(label, current, max, width = 10) {
  const bar = progressBar(current, max, width);
  return `${label}: ${bar} ${current}/${max}`;
}

/**
 * Typewriter effect text (returns array of frames)
 */
export function typewriterFrames(text, charsPerFrame = 2) {
  const frames = [];
  for (let i = 0; i <= text.length; i += charsPerFrame) {
    frames.push(text.slice(0, i));
  }
  return frames;
}

/**
 * Format damage number with color class
 */
export function formatDamage(amount, isCrit = false) {
  return {
    text: `${amount} dmg${isCrit ? ' CRIT!' : ''}`,
    className: isCrit ? 'crit' : 'damage'
  };
}

/**
 * Format heal number
 */
export function formatHeal(amount) {
  return {
    text: `+${amount}`,
    className: 'heal'
  };
}
