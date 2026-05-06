/**
 * Enemy definitions
 * Each enemy has: name, type, hp, maxHp, attack, defense, xpReward, lootTable
 */
export const ENEMIES = {
  sentry: {
    id: 'sentry',
    name: 'ICE哨兵 v1.0',
    type: 'ICE / 巡逻',
    hp: 40, maxHp: 40,
    attack: 8, defense: 2,
    xpReward: 15,
    lootTable: [{ itemId: 'data_chip', chance: 0.5 }]
  },
  crawler: {
    id: 'crawler',
    name: '数据爬虫',
    type: '恶意软件 / 虫群',
    hp: 30, maxHp: 30,
    attack: 12, defense: 0,
    xpReward: 12,
    lootTable: [{ itemId: 'scrap_code', chance: 0.7 }]
  },
  firewall: {
    id: 'firewall',
    name: '防火墙守卫',
    type: 'ICE / 防御',
    hp: 80, maxHp: 80,
    attack: 10, defense: 8,
    xpReward: 35,
    lootTable: [{ itemId: 'shield_chip', chance: 0.4 }, { itemId: 'data_chip', chance: 0.8 }]
  },
  overseer: {
    id: 'overseer',
    name: '网络监督者',
    type: 'ICE / 指挥官',
    hp: 120, maxHp: 120,
    attack: 15, defense: 5,
    xpReward: 80,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  }
};

export function getEnemiesForTier(tier) {
  return Object.values(ENEMIES).filter(e => {
    if (tier === 1) return ['sentry', 'crawler'].includes(e.id);
    if (tier === 2) return ['sentry', 'crawler', 'firewall'].includes(e.id);
    return true;
  });
}
