/**
 * Enemy definitions
 * Each enemy has: nameKey, typeKey (i18n keys), hp, maxHp, attack, defense, xpReward, lootTable
 */
export const ENEMIES = {
  sentry: {
    id: 'sentry',
    nameKey: 'enemy.sentry',
    typeKey: 'enemy.type.sentry',
    hp: 40, maxHp: 40,
    attack: 8, defense: 2,
    xpReward: 15,
    lootTable: [{ itemId: 'data_chip', chance: 0.5 }]
  },
  crawler: {
    id: 'crawler',
    nameKey: 'enemy.crawler',
    typeKey: 'enemy.type.crawler',
    hp: 30, maxHp: 30,
    attack: 12, defense: 0,
    xpReward: 12,
    lootTable: [{ itemId: 'scrap_code', chance: 0.7 }]
  },
  firewall: {
    id: 'firewall',
    nameKey: 'enemy.firewall',
    typeKey: 'enemy.type.firewall',
    hp: 80, maxHp: 80,
    attack: 10, defense: 8,
    xpReward: 35,
    lootTable: [{ itemId: 'shield_chip', chance: 0.4 }, { itemId: 'data_chip', chance: 0.8 }]
  },
  overseer: {
    id: 'overseer',
    nameKey: 'enemy.overseer',
    typeKey: 'enemy.type.overseer',
    hp: 120, maxHp: 120,
    attack: 15, defense: 5,
    xpReward: 80,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  },
  quantum_guardian: {
    id: 'quantum_guardian',
    nameKey: 'enemy.quantum_guardian',
    typeKey: 'enemy.type.quantum_guardian',
    hp: 200, maxHp: 200,
    attack: 20, defense: 10,
    xpReward: 150,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  },
  abyss_lord: {
    id: 'abyss_lord',
    nameKey: 'enemy.abyss_lord',
    typeKey: 'enemy.type.abyss_lord',
    hp: 300, maxHp: 300,
    attack: 25, defense: 15,
    xpReward: 250,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  }
};

export function getEnemiesForTier(tier) {
  return Object.values(ENEMIES).filter(e => {
    if (tier === 1) return ['sentry', 'crawler'].includes(e.id);
    if (tier === 2) return ['sentry', 'crawler', 'firewall'].includes(e.id);
    if (tier === 3) return ['sentry', 'crawler', 'firewall'].includes(e.id);
    if (tier === 4) return ['firewall', 'quantum_guardian'].includes(e.id);
    if (tier === 5) return ['firewall', 'abyss_lord'].includes(e.id);
    return true;
  });
}
