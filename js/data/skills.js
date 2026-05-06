/**
 * Skill definitions
 */
export const SKILLS = {
  power_strike: {
    id: 'power_strike',
    name: 'Power Strike',
    branch: 'brute_force',
    description: 'A powerful attack. 1.8x damage, costs 15 RAM.',
    ramCost: 15,
    damageMultiplier: 1.8,
    effect: 'damage',
    tier: 1
  },
  ddos: {
    id: 'ddos',
    name: 'DDoS Surge',
    branch: 'brute_force',
    description: 'Overwhelming attack. 2.5x damage, costs 30 RAM.',
    ramCost: 30,
    damageMultiplier: 2.5,
    effect: 'damage',
    tier: 2,
    requires: 'power_strike'
  },
  scan: {
    id: 'scan',
    name: 'System Scan',
    branch: 'stealth',
    description: 'Reveal enemy weaknesses. Reduces enemy defense by 40%.',
    ramCost: 10,
    defenseReduction: 0.4,
    effect: 'debuff',
    tier: 1
  },
  backdoor: {
    id: 'backdoor',
    name: 'Backdoor\u690D\u5165',
    branch: 'stealth',
    description: 'Install backdoor. 30% chance to skip combat entirely.',
    ramCost: 20,
    bypassChance: 0.3,
    effect: 'bypass',
    tier: 2,
    requires: 'scan'
  },
  repair: {
    id: 'repair',
    name: 'System Repair',
    branch: 'system_control',
    description: 'Restore 40 HP. Costs 20 RAM.',
    ramCost: 20,
    healAmount: 40,
    effect: 'heal',
    tier: 1
  }
};

export function getSkillsForTier(tier) {
  return Object.values(SKILLS).filter(s => s.tier === tier);
}

export function getSkill(id) {
  return SKILLS[id] ? { ...SKILLS[id] } : null;
}
