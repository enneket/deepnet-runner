/**
 * Skill definitions
 */
export const SKILLS = {
  power_strike: {
    id: 'power_strike',
    name: '强力打击',
    branch: 'brute_force',
    description: '强力攻击。1.8倍伤害，消耗15 RAM。',
    ramCost: 15,
    damageMultiplier: 1.8,
    effect: 'damage',
    tier: 1
  },
  ddos: {
    id: 'ddos',
    name: 'DDoS洪流',
    branch: 'brute_force',
    description: '压倒性攻击。2.5倍伤害，消耗30 RAM。',
    ramCost: 30,
    damageMultiplier: 2.5,
    effect: 'damage',
    tier: 2,
    requires: 'power_strike'
  },
  scan: {
    id: 'scan',
    name: '系统扫描',
    branch: 'stealth',
    description: '揭示敌人弱点。降低敌人防御40%。',
    ramCost: 10,
    defenseReduction: 0.4,
    effect: 'debuff',
    tier: 1
  },
  backdoor: {
    id: 'backdoor',
    name: '后门植入',
    branch: 'stealth',
    description: '安装后门。30%几率跳过战斗。',
    ramCost: 20,
    bypassChance: 0.3,
    effect: 'bypass',
    tier: 2,
    requires: 'scan'
  },
  repair: {
    id: 'repair',
    name: '系统修复',
    branch: 'system_control',
    description: '恢复40点HP。消耗20 RAM。',
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
