/**
 * Random number utilities
 */

/**
 * Random integer in [min, max] inclusive
 */
export function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random element from an array
 */
export function pick(array) {
  return array[randInt(0, array.length - 1)];
}

/**
 * Roll a chance (0-1). Returns true if random < chance
 */
export function roll(chance) {
  return Math.random() < chance;
}

/**
 * Shuffle array (Fisher-Yates, returns new array)
 */
export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Weighted random pick
 * @param {Array<{weight: number}>} items - Items with weight property
 */
export function weightedPick(items) {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  let r = Math.random() * total;
  for (const item of items) {
    r -= item.weight;
    if (r <= 0) return item;
  }
  return items[items.length - 1];
}
