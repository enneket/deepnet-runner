import { PROC_BOSSES } from './i18n.js';
import { randInt } from '../utils/random.js';

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
  },
  neural_sovereign: {
    id: 'neural_sovereign',
    nameKey: 'enemy.neural_sovereign',
    typeKey: 'enemy.type.neural_sovereign',
    hp: 400, maxHp: 400,
    attack: 30, defense: 20,
    xpReward: 350,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  },
  deepnet_prime: {
    id: 'deepnet_prime',
    nameKey: 'enemy.deepnet_prime',
    typeKey: 'enemy.type.deepnet_prime',
    hp: 500, maxHp: 500,
    attack: 35, defense: 25,
    xpReward: 500,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }]
  }
};

export function getEnemiesForTier(tier) {
  // Always return firewall + generated boss for any tier
  const boss = generateBoss(tier);
  return [
    ENEMIES.firewall,
    { ...boss, id: `_gen_boss_${tier}` }
  ];
}

/**
 * Generate a boss for layers > 7. Stats scale with layer number.
 */
export function generateBoss(layerNum) {
  const themeIdx = (layerNum - 1) % 10;
  const nameKey = `_proc.boss.name.${layerNum}`;
  const typeKey = `_proc.boss.type.${layerNum}`;

  return {
    id: `_gen_boss_${layerNum}`,
    nameKey,
    typeKey,
    hp: 120 + (layerNum - 1) * 80,
    maxHp: 120 + (layerNum - 1) * 80,
    attack: 15 + (layerNum - 1) * 5,
    defense: 5 + (layerNum - 1) * 4,
    xpReward: 80 + (layerNum - 1) * 50,
    lootTable: [{ itemId: 'overclock_chip', chance: 1.0 }],
    _procTexts: {
      [nameKey]: {
        zh: PROC_BOSSES.names.zh[themeIdx] || `第${layerNum}层守护者`,
        en: PROC_BOSSES.names.en[themeIdx] || `Layer ${layerNum} Guardian`
      },
      [typeKey]: {
        zh: PROC_BOSSES.types.zh[themeIdx] || 'ICE / 未知',
        en: PROC_BOSSES.types.en[themeIdx] || 'ICE / Unknown'
      }
    }
  };
}
