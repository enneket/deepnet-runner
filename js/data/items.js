/**
 * Item definitions
 */
export const ITEMS = {
  brute_forcer: {
    id: 'brute_forcer',
    name: 'Brute Forcer',
    type: 'weapon',
    description: 'Basic attack program. Reliable but loud.',
    stats: { attack: 5 },
    rarity: 'common'
  },
  virus_injector: {
    id: 'virus_injector',
    name: 'Virus Injector',
    type: 'weapon',
    description: 'Injects malware. Has 20% chance to deal bonus damage.',
    stats: { attack: 8, critChance: 0.2 },
    rarity: 'uncommon'
  },
  basic_firewall: {
    id: 'basic_firewall',
    name: 'Basic Firewall',
    type: 'armor',
    description: 'Entry-level defense program.',
    stats: { defense: 3, maxHp: 10 },
    rarity: 'common'
  },
  shield_chip: {
    id: 'shield_chip',
    name: 'Shield Chip',
    type: 'armor',
    description: 'Advanced encryption shield.',
    stats: { defense: 6, maxHp: 20 },
    rarity: 'uncommon'
  },
  overclock_chip: {
    id: 'overclock_chip',
    name: 'Overclock Chip',
    type: 'accessory',
    description: 'Overclocks your system. +15% crit chance.',
    stats: { critChance: 0.15 },
    rarity: 'rare'
  },
  deep_dive_module: {
    id: 'deep_dive_module',
    name: 'Deep Dive Module',
    type: 'accessory',
    description: 'Expands RAM capacity.',
    stats: { maxRam: 30 },
    rarity: 'uncommon'
  },
  data_pack: {
    id: 'data_pack',
    name: 'Data Pack',
    type: 'consumable',
    description: 'Restores 30 HP.',
    effect: { hp: 30 },
    rarity: 'common'
  },
  ram_cleanup: {
    id: 'ram_cleanup',
    name: 'RAM Cleanup',
    type: 'consumable',
    description: 'Restores 25 RAM.',
    effect: { ram: 25 },
    rarity: 'common'
  },
  data_chip: {
    id: 'data_chip',
    name: 'Data Chip',
    type: 'trade',
    description: 'Valuable data fragment. Can be sold at Black Market.',
    value: 10,
    rarity: 'common'
  },
  scrap_code: {
    id: 'scrap_code',
    name: 'Scrap Code',
    type: 'trade',
    description: 'Corrupted code fragments. Worth a few credits.',
    value: 5,
    rarity: 'common'
  }
};

export function getItem(id) {
  const item = ITEMS[id];
  if (!item) return null;
  return { ...item };
}
