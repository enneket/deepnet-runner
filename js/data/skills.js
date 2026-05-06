import { i18n } from '../systems/i18n.js';

/**
 * Skill definitions
 */
export const SKILLS = {
  power_strike: {
    id: 'power_strike',
    nameKey: 'skill.power_strike',
    descKey: 'skill.desc.power_strike',
    branch: 'brute_force',
    ramCost: 15,
    damageMultiplier: 1.8,
    effect: 'damage',
    tier: 1
  },
  ddos: {
    id: 'ddos',
    nameKey: 'skill.ddos',
    descKey: 'skill.desc.ddos',
    branch: 'brute_force',
    ramCost: 30,
    damageMultiplier: 2.5,
    effect: 'damage',
    tier: 2,
    requires: 'power_strike'
  },
  scan: {
    id: 'scan',
    nameKey: 'skill.scan',
    descKey: 'skill.desc.scan',
    branch: 'stealth',
    ramCost: 10,
    defenseReduction: 0.4,
    effect: 'debuff',
    tier: 1
  },
  backdoor: {
    id: 'backdoor',
    nameKey: 'skill.backdoor',
    descKey: 'skill.desc.backdoor',
    branch: 'stealth',
    ramCost: 20,
    bypassChance: 0.3,
    effect: 'bypass',
    tier: 2,
    requires: 'scan'
  },
  repair: {
    id: 'repair',
    nameKey: 'skill.repair',
    descKey: 'skill.desc.repair',
    branch: 'system_control',
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
  const skill = SKILLS[id];
  if (!skill) return null;
  return {
    ...skill,
    name: i18n.t(skill.nameKey),
    description: i18n.t(skill.descKey)
  };
}
