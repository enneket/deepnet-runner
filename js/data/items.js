/**
 * Item definitions
 */
export const ITEMS = {
  brute_forcer: {
    id: 'brute_forcer',
    name: '暴力破解器',
    type: 'weapon',
    description: '基础攻击程序。可靠但噪音大。',
    stats: { attack: 5 },
    rarity: 'common'
  },
  virus_injector: {
    id: 'virus_injector',
    name: '病毒注入器',
    type: 'weapon',
    description: '注入恶意软件。20%几率造成额外伤害。',
    stats: { attack: 8, critChance: 0.2 },
    rarity: 'uncommon'
  },
  basic_firewall: {
    id: 'basic_firewall',
    name: '基础防火墙',
    type: 'armor',
    description: '入门级防御程序。',
    stats: { defense: 3, maxHp: 10 },
    rarity: 'common'
  },
  shield_chip: {
    id: 'shield_chip',
    name: '护盾芯片',
    type: 'armor',
    description: '高级加密护盾。',
    stats: { defense: 6, maxHp: 20 },
    rarity: 'uncommon'
  },
  overclock_chip: {
    id: 'overclock_chip',
    name: '超频芯片',
    type: 'accessory',
    description: '超频你的系统。+15%暴击率。',
    stats: { critChance: 0.15 },
    rarity: 'rare'
  },
  deep_dive_module: {
    id: 'deep_dive_module',
    name: '深潜模块',
    type: 'accessory',
    description: '扩展RAM容量。',
    stats: { maxRam: 30 },
    rarity: 'uncommon'
  },
  data_pack: {
    id: 'data_pack',
    name: '数据包',
    type: 'consumable',
    description: '恢复30点HP。',
    effect: { hp: 30 },
    rarity: 'common'
  },
  ram_cleanup: {
    id: 'ram_cleanup',
    name: 'RAM清理',
    type: 'consumable',
    description: '恢复25点RAM。',
    effect: { ram: 25 },
    rarity: 'common'
  },
  data_chip: {
    id: 'data_chip',
    name: '数据芯片',
    type: 'trade',
    description: '有价值的数据碎片。可在黑市出售。',
    value: 10,
    rarity: 'common'
  },
  scrap_code: {
    id: 'scrap_code',
    name: '废弃代码',
    type: 'trade',
    description: '损坏的代码碎片。值几个信用点。',
    value: 5,
    rarity: 'common'
  }
};

export function getItem(id) {
  const item = ITEMS[id];
  if (!item) return null;
  return { ...item };
}
