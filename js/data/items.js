import { i18n } from '../systems/i18n.js';

/**
 * Item definitions
 */
export const ITEMS = {
  brute_forcer: {
    id: 'brute_forcer',
    nameKey: 'item.brute_forcer',
    descKey: 'item.desc.brute_forcer',
    type: 'weapon',
    stats: { attack: 5 },
    rarity: 'common'
  },
  virus_injector: {
    id: 'virus_injector',
    nameKey: 'item.virus_injector',
    descKey: 'item.desc.virus_injector',
    type: 'weapon',
    stats: { attack: 8, critChance: 0.2 },
    rarity: 'uncommon'
  },
  basic_firewall: {
    id: 'basic_firewall',
    nameKey: 'item.basic_firewall',
    descKey: 'item.desc.basic_firewall',
    type: 'armor',
    stats: { defense: 3, maxHp: 10 },
    rarity: 'common'
  },
  shield_chip: {
    id: 'shield_chip',
    nameKey: 'item.shield_chip',
    descKey: 'item.desc.shield_chip',
    type: 'armor',
    stats: { defense: 6, maxHp: 20 },
    rarity: 'uncommon'
  },
  overclock_chip: {
    id: 'overclock_chip',
    nameKey: 'item.overclock_chip',
    descKey: 'item.desc.overclock_chip',
    type: 'accessory',
    stats: { critChance: 0.15 },
    rarity: 'rare'
  },
  deep_dive_module: {
    id: 'deep_dive_module',
    nameKey: 'item.deep_dive_module',
    descKey: 'item.desc.deep_dive_module',
    type: 'accessory',
    stats: { maxRam: 30 },
    rarity: 'uncommon'
  },
  data_pack: {
    id: 'data_pack',
    nameKey: 'item.data_pack',
    descKey: 'item.desc.data_pack',
    type: 'consumable',
    effect: { hp: 30 },
    rarity: 'common'
  },
  ram_cleanup: {
    id: 'ram_cleanup',
    nameKey: 'item.ram_cleanup',
    descKey: 'item.desc.ram_cleanup',
    type: 'consumable',
    effect: { ram: 25 },
    rarity: 'common'
  },
  data_chip: {
    id: 'data_chip',
    nameKey: 'item.data_chip',
    descKey: 'item.desc.data_chip',
    type: 'trade',
    value: 10,
    rarity: 'common'
  },
  scrap_code: {
    id: 'scrap_code',
    nameKey: 'item.scrap_code',
    descKey: 'item.desc.scrap_code',
    type: 'trade',
    value: 5,
    rarity: 'common'
  }
};

export function getItem(id) {
  const item = ITEMS[id];
  if (!item) return null;
  return {
    ...item,
    name: i18n.t(item.nameKey),
    description: i18n.t(item.descKey)
  };
}
