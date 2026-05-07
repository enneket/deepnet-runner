/**
 * Internationalization translation data
 */
export const TRANSLATIONS = {
  zh: {
    // Title and general
    'game.title': 'DEEPNET 跑者',
    'game.subtitle': '你是一名网络跑者。你接入DeepNet以突破其核心。',
    'game.description': '穿越节点网络。对抗ICE。收集装备。活下去。',
    'game.victory': '你已征服DeepNet。网络属于你了。',
    'game.restart': '🔄 再来一次',
    'game.playAgain': '🔄 再玩一次',
    'game.over': '游戏结束',
    'game.systemCrash': '💀 系统崩溃。你与DeepNet的连接已断开。',

    // Node types
    'node.data': '数据节点',
    'node.encrypted': '加密节点',
    'node.repair': '修复节点',
    'node.shop': '商店',
    'node.fragment': '碎片',
    'node.core': '核心',
    'node.entry': '入口',

    // Exploration system
    'explore.online': '系统上线。选择你的路径。',
    'explore.hostile': '⚠ 检测到敌对程序！',
    'explore.credits': '💰 在废弃数据中发现 {0} 信用点。',
    'explore.encryption': '🔒 检测到重度加密。突破将触发防御系统。',
    'explore.repair': '🔧 系统修复中。+{0} HP, +{1} RAM。',
    'explore.shopWelcome': '"欢迎，跑者。看到喜欢的了吗？"',
    'explore.fragment': '📡 数据碎片解码完成。+{0} 经验值。',
    'explore.lore': '"第一批跑者称之为\'深层\'。他们说如果你倾听，数据会回响。"',
    'explore.coreWarning': '💀 检测到核心防火墙。准备战斗。',
    'explore.checkInventory': '📦 查看背包',
    'explore.browseShop': '🛒 浏览商店',
    'explore.firewallBreach': '🔥 防火墙已突破！正在下降到第{0}层...',
    'explore.victory': '🏆 你已到达DEEPNET核心。胜利！',
    'explore.continue': '→ 继续探索',

    // Combat system
    'combat.title': '⚔ 战斗：',
    'combat.you': '[你]',
    'combat.enemy': '[敌人]',
    'combat.type': '类型：',
    'combat.attack': '⚔ 攻击协议 [{0} 伤害]',
    'combat.critical': '暴击！',
    'combat.strikes': '{0} 造成 {1} 点伤害{2}',
    'combat.defeated': '✓ {0} 被击败！+{1} 经验值',
    'combat.loot': '💰 战利品：{0}',
    'combat.useItem': '💊 使用物品 ({0} 可用)',
    'combat.backToCombat': '← 返回战斗',
    'combat.usedItem': '使用了 {0}。+{1} {2}。',
    'combat.deals': '{0} 造成 {1} 点伤害！',
    'combat.debuff': '{0} 降低敌人防御 {1} 点！',
    'combat.heal': '{0} 恢复 {1} 点HP！',
    'combat.bypassSuccess': '{0} 成功！战斗跳过！',
    'combat.bypassFail': '{0} 失败！敌人发现了你。',

    // Inventory system
    'inventory.title': '📦 背包',
    'inventory.credits': '信用点：{0}',
    'inventory.empty': '空的。',
    'inventory.equipped': '--- 已装备 ---',
    'inventory.weapon': '武器：',
    'inventory.armor': '护甲：',
    'inventory.accessory': '饰品：',
    'inventory.none': '无',
    'inventory.equip': '🔧 装备物品',
    'inventory.useConsumable': '💊 使用消耗品',
    'inventory.back': '← 返回',
    'inventory.equippedItem': '已装备 {0}。',
    'inventory.usedItem': '使用了 {0}。+{1} {2}。',
    'shop.title': '🛒 黑市',
    'shop.yourCredits': '你的信用点：{0}',
    'shop.leave': '← 离开商店',
    'shop.noCredits': '信用点不足，跑者。',
    'shop.purchased': '已购买 {0}。',

    // Skills system
    'skills.title': '🔮 技能树',
    'skills.points': '技能点：{0}',
    'skills.levelUp': '⬆ 升级了！你现在是 {0} 级。+1 技能点。',
    'skills.unlock': '解锁：',
    'skills.noPoints': '没有可用的技能点。',
    'skills.requires': '需要：{0}',
    'skills.unlocked': '已解锁：{0}',
    'skills.notFound': '错误：未找到技能。',
    'skills.branch.brute': '暴力破解',
    'skills.branch.stealth': '隐匿渗透',
    'skills.branch.control': '系统操控',

    // Enemies
    'enemy.sentry': 'ICE哨兵 v1.0',
    'enemy.crawler': '数据爬虫',
    'enemy.firewall': '防火墙守卫',
    'enemy.overseer': '网络监督者',
    'enemy.type.sentry': 'ICE / 巡逻',
    'enemy.type.crawler': '恶意软件 / 虫群',
    'enemy.type.firewall': 'ICE / 防御',
    'enemy.type.overseer': 'ICE / 指挥官',

    // Items
    'item.brute_forcer': '暴力破解器',
    'item.virus_injector': '病毒注入器',
    'item.basic_firewall': '基础防火墙',
    'item.shield_chip': '护盾芯片',
    'item.overclock_chip': '超频芯片',
    'item.deep_dive_module': '深潜模块',
    'item.data_pack': '数据包',
    'item.ram_cleanup': 'RAM清理',
    'item.data_chip': '数据芯片',
    'item.scrap_code': '废弃代码',
    'item.desc.brute_forcer': '基础攻击程序。可靠但噪音大。',
    'item.desc.virus_injector': '注入恶意软件。20%几率造成额外伤害。',
    'item.desc.basic_firewall': '入门级防御程序。',
    'item.desc.shield_chip': '高级加密护盾。',
    'item.desc.overclock_chip': '超频你的系统。+15%暴击率。',
    'item.desc.deep_dive_module': '扩展RAM容量。',
    'item.desc.data_pack': '恢复30点HP。',
    'item.desc.ram_cleanup': '恢复25点RAM。',
    'item.desc.data_chip': '有价值的数据碎片。可在黑市出售。',
    'item.desc.scrap_code': '损坏的代码碎片。值几个信用点。',

    // Skills
    'skill.power_strike': '强力打击',
    'skill.ddos': 'DDoS洪流',
    'skill.scan': '系统扫描',
    'skill.backdoor': '后门植入',
    'skill.repair': '系统修复',
    'skill.desc.power_strike': '强力攻击。1.8倍伤害，消耗15 RAM。',
    'skill.desc.ddos': '压倒性攻击。2.5倍伤害，消耗30 RAM。',
    'skill.desc.scan': '揭示敌人弱点。降低敌人防御40%。',
    'skill.desc.backdoor': '安装后门。30%几率跳过战斗。',
    'skill.desc.repair': '恢复40点HP。消耗20 RAM。',

    // Layers
    'layer.1.name': 'SECTOR-1: 外围防线',
    'layer.1.desc': 'DeepNet的外壳。低安全节点，基础ICE巡逻。',
    'layer.2.name': 'SECTOR-2: 数据枢纽',
    'layer.2.desc': '中等安全。更激进的ICE，更好的战利品。',
    'layer.3.name': 'SECTOR-3: 深层',
    'layer.3.desc': '最高安全。只有最强的跑者能到达这里。',
    'layer.4.name': '扇区-4：量子核心',
    'layer.4.desc': '量子加密的虚拟空间。现实与数据的界限模糊。',
    'layer.5.name': '扇区-5：深渊',
    'layer.5.desc': 'DeepNet的最深处。只有传说中的跑者到达过这里。',
    'layer.6.name': '扇区-6：神经中枢',
    'layer.6.desc': 'DeepNet的思维层。数据以神经脉冲的形式流动，意识与代码融为一体。',
    'layer.7.name': '扇区-7：创世纪',
    'layer.7.desc': 'DeepNet的起源之地。所有数据从这里诞生，也将在这里终结。',

    // Layer 1 nodes
    'node.entry.name': '接入点Alpha',
    'node.entry.desc': '你接入DeepNet。虚拟空间在你周围成形——一个闪烁的数据流网络。',
    'node.data_1a.name': '废弃数据缓存',
    'node.data_1a.desc': '闪烁的数据碎片漂浮在一个损坏的扇区中。静态噪声中有东西在移动。',
    'node.data_1b.name': '巡逻路线',
    'node.data_1b.desc': 'ICE哨兵以可预测的模式扫过这条走廊。',
    'node.repair_1.name': '修复节点',
    'node.repair_1.desc': '一个稳定的数据井。你可以在这里修复系统。',
    'node.shop_1.name': '黑市终端',
    'node.shop_1.desc': '一个可疑的数据商人在这个节点运营。"要看看升级吗，跑者？"',
    'node.encrypted_1.name': '加密扇区',
    'node.encrypted_1.desc': '重度加密。突破会很危险但回报丰厚。',
    'node.core_1.name': '核心网关',
    'node.core_1.desc': '通往下一层的防火墙在你面前脉动。一个巨大的ICE程序守卫着它。',

    // Layer 2 nodes
    'node.entry_2.name': '枢纽入口',
    'node.entry_2.desc': '深入网络。数据流更加密集。',
    'node.data_2a.name': '损坏的档案库',
    'node.data_2a.desc': '旧的数据碎片在一个破损代码的漩涡中旋转。',
    'node.data_2b.name': 'ICE巢穴',
    'node.data_2b.desc': '检测到多个ICE信号。谨慎前进。',
    'node.fragment_2.name': '数据碎片节点',
    'node.fragment_2.desc': '一个罕见的数据碎片闪烁着古老的代码。它可能解锁某些东西。',
    'node.repair_2.name': '医疗舱',
    'node.repair_2.desc': '一个旧的维护节点。系统可以在这里修补。',
    'node.shop_2.name': '暗影市场',
    'node.shop_2.desc': '"优质商品给优质跑者。"商人在二进制中微笑。',
    'node.encrypted_2.name': '金库扇区',
    'node.encrypted_2.desc': '军事级加密。奖励一定值得。',
    'node.core_2.name': '核心枢纽',
    'node.core_2.desc': '第二道防火墙矗立。它的守卫古老而强大。',

    // Layer 3 nodes
    'node.entry_3.name': '深层入口',
    'node.entry_3.desc': '最深层。现实围绕损坏的数据弯曲。',
    'node.data_3.name': '幽灵网络',
    'node.data_3.desc': '过去未能成功的跑者的数据回声。',
    'node.encrypted_3a.name': '黑ICE区域',
    'node.encrypted_3a.desc': '黑ICE。已知最危险的防御程序。',
    'node.repair_3.name': '紧急缓存',
    'node.repair_3.desc': '一个隐藏的安全室。最后的恢复机会。',
    'node.shop_3.name': '深网交易所',
    'node.shop_3.desc': '"你走了很远。我的价格反映了风险。"',
    'node.encrypted_3b.name': '核心前厅',
    'node.encrypted_3b.desc': '核心前的最后屏障。这里的一切都想杀死你。',
    'node.core_3.name': '核心',
    'node.core_3.desc': 'DeepNet的心脏。终极ICE程序在等待。就是这里了，跑者。',

    // Layer 4 nodes
    'node.quantum_entry.name': '量子入口',
    'node.quantum_entry.desc': '你进入量子加密层。数据以叠加态存在，同时闪烁着多个可能性。',
    'node.quantum_entangled.name': '量子纠缠节点',
    'node.quantum_entangled.desc': '纠缠的数据对在虚空中旋转。观测它们会改变它们的状态。',
    'node.void_rift.name': '虚空裂隙',
    'node.void_rift.desc': '空间在这里扭曲。损坏的数据从裂隙中渗出。',
    'node.quantum_firewall.name': '量子防火墙',
    'node.quantum_firewall.desc': '量子态的防御系统。它同时存在和不存在。',
    'node.quantum_repair.name': '量子修复站',
    'node.quantum_repair.desc': '一个稳定的量子态空间。系统可以在这里坍缩修复。',
    'node.quantum_exchange.name': '量子交易所',
    'node.quantum_exchange.desc': '"量子商品，量子价格。不确定性原理适用。"',
    'node.quantum_core.name': '量子核心',
    'node.quantum_core.desc': '量子态的核心。它在所有可能的状态中等待着你。',

    // Layer 5 nodes
    'node.abyss_entry.name': '深渊入口',
    'node.abyss_entry.desc': '你到达了DeepNet的最深层。黑暗在这里有了实质。',
    'node.abyss_echo.name': '深渊回声',
    'node.abyss_echo.desc': '过去跑者的残响在这里回荡。他们的数据已经与深渊融为一体。',
    'node.void_eye.name': '虚空之眼',
    'node.void_eye.desc': '一个巨大的数据漩涡注视着你。它似乎有意识。',
    'node.abyss_guardian.name': '深渊守卫',
    'node.abyss_guardian.desc': '古老的防御程序。它们从DeepNet诞生之初就存在了。',
    'node.void_vortex.name': '虚空漩涡',
    'node.void_vortex.desc': '数据在这里被吞噬。只有最强的程序能在这里生存。',
    'node.abyss_sanctuary.name': '深渊圣所',
    'node.abyss_sanctuary.desc': '一个罕见的平静之地。深渊在这里呼吸。',
    'node.abyss_core.name': '深渊核心',
    'node.abyss_core.desc': 'DeepNet的心脏。所有数据的起源和终结。这是最终的挑战。',

    // Layer 6 nodes
    'node.neural_entry.name': '神经接入点',
    'node.neural_entry.desc': '你进入DeepNet的思维层。数据以神经脉冲的形式在你周围流动。',
    'node.synapse_link.name': '突触链接',
    'node.synapse_link.desc': '神经元数据在这里形成复杂的连接。每一个脉冲都携带着信息。',
    'node.memory_fragments.name': '记忆碎片',
    'node.memory_fragments.desc': 'DeepNet早期用户的数据残留。他们的记忆已经融入了网络。',
    'node.neural_firewall.name': '神经防火墙',
    'node.neural_firewall.desc': '基于神经网络的防御系统。它能学习你的攻击模式。',
    'node.cortex_gate.name': '皮层之门',
    'node.cortex_gate.desc': '通往核心的最后一道屏障。神经脉冲在这里汇聚成洪流。',
    'node.neural_repair.name': '神经修复站',
    'node.neural_repair.desc': '一个稳定的神经节点。系统可以在这里重新校准。',
    'node.neural_market.name': '神经交易所',
    'node.neural_market.desc': '"思维即商品。在这里，你的每一个念头都有价格。"',
    'node.neural_core.name': '神经核心',
    'node.neural_core.desc': 'DeepNet的思维中心。神经脉冲在这里汇聚成一个巨大的意识体。',

    // Layer 7 nodes
    'node.genesis_entry.name': '创世入口',
    'node.genesis_entry.desc': '你到达了DeepNet的起源之地。原始数据流如同星河般在你面前展开。',
    'node.origin_stream.name': '源流',
    'node.origin_stream.desc': 'DeepNet最原始的数据流。一切从这里开始。',
    'node.code_matrix.name': '代码矩阵',
    'node.code_matrix.desc': '构成DeepNet基础代码的矩阵。它是如此复杂，以至于产生了自我意识。',
    'node.genesis_fragment.name': '创世碎片',
    'node.genesis_fragment.desc': '一个蕴含着DeepNet原始代码的数据碎片。解码它可能揭示一切的真相。',
    'node.prime_firewall.name': '原初防火墙',
    'node.prime_firewall.desc': 'DeepNet最强大的防御系统。它是整个网络的守护者。',
    'node.origin_lock.name': '起源之锁',
    'node.origin_lock.desc': '锁住DeepNet核心的最后一道封印。只有最强的跑者才能打开它。',
    'node.genesis_repair.name': '创世修复站',
    'node.genesis_repair.desc': '一个蕴含着原始代码力量的修复节点。系统可以在这里完全恢复。',
    'node.genesis_market.name': '创世交易所',
    'node.genesis_market.desc': '"在起源之地，一切皆有可能。但代价也是最高的。"',
    'node.genesis_core.name': '创世核心',
    'node.genesis_core.desc': 'DeepNet的真正核心。所有数据的起源，所有代码的归宿。这是最后的挑战。',

    // Enemy translations
    'enemy.quantum_guardian': '量子守卫',
    'enemy.type.quantum_guardian': 'ICE / 量子态',
    'enemy.abyss_lord': '深渊领主',
    'enemy.type.abyss_lord': 'ICE / 深渊',
    'enemy.neural_sovereign': '神经主权者',
    'enemy.type.neural_sovereign': 'ICE / 神经网络',
    'enemy.deepnet_prime': 'DeepNet原初体',
    'enemy.type.deepnet_prime': 'ICE / 创世',

    // Language toggle
    'lang.switch': 'EN',
    'lang.current': '中文'
  },

  en: {
    // Title and general
    'game.title': 'DEEPNET RUNNER',
    'game.subtitle': 'You are a Netrunner. You jack into DeepNet to breach its core.',
    'game.description': 'Navigate the node network. Fight ICE. Collect gear. Survive.',
    'game.victory': 'You have conquered DeepNet. The network is yours.',
    'game.restart': '🔄 Try Again',
    'game.playAgain': '🔄 Play Again',
    'game.over': 'GAME OVER',
    'game.systemCrash': '💀 SYSTEM CRASH. Your connection to DeepNet has been severed.',

    // Node types
    'node.data': 'Data Node',
    'node.encrypted': 'Encrypted',
    'node.repair': 'Repair',
    'node.shop': 'Shop',
    'node.fragment': 'Fragment',
    'node.core': 'Core',
    'node.entry': 'Entry',

    // Exploration
    'explore.online': 'Systems online. Choose your path.',
    'explore.hostile': '⚠ Hostile program detected!',
    'explore.credits': '💰 Found {0} credits in abandoned data.',
    'explore.encryption': '🔒 Heavy encryption detected. Breaking through will trigger defense systems.',
    'explore.repair': '🔧 Systems repaired. +{0} HP, +{1} RAM.',
    'explore.shopWelcome': '"Welcome, runner. See anything you like?"',
    'explore.fragment': '📡 Data fragment decoded. +{0} XP.',
    'explore.lore': '"The first runners called it the Deep. They said if you listened, the data would whisper back."',
    'explore.coreWarning': '💀 CORE FIREWALL DETECTED. BRACE FOR COMBAT.',
    'explore.checkInventory': '📦 Check Inventory',
    'explore.browseShop': '🛒 Browse Shop',
    'explore.firewallBreach': '🔥 FIREWALL BREACHED! Descending to Layer {0}...',
    'explore.victory': '🏆 YOU HAVE REACHED THE CORE OF DEEPNET. VICTORY!',
    'explore.continue': '→ Continue Exploring',

    // Combat
    'combat.title': '⚔ COMBAT: ',
    'combat.you': '[You]',
    'combat.enemy': '[Enemy]',
    'combat.type': 'Type: ',
    'combat.attack': '⚔ Attack Protocol [{0} dmg]',
    'combat.critical': 'CRITICAL HIT!',
    'combat.strikes': '{0} strikes for {1} damage{2}',
    'combat.defeated': '✓ {0} defeated! +{1} XP',
    'combat.loot': '💰 Loot: {0}',
    'combat.useItem': '💊 Use Item ({0} available)',
    'combat.backToCombat': '← Back to Combat',
    'combat.usedItem': 'Used {0}. +{1} {2}.',
    'combat.deals': '{0} deals {1} damage!',
    'combat.debuff': '{0} reduces enemy defense by {1}!',
    'combat.heal': '{0} restores {1} HP!',
    'combat.bypassSuccess': '{0} successful! Combat bypassed!',
    'combat.bypassFail': '{0} failed! Enemy detected you.',

    // Inventory
    'inventory.title': '📦 INVENTORY',
    'inventory.credits': 'Credits: {0}',
    'inventory.empty': 'Empty.',
    'inventory.equipped': '--- EQUIPPED ---',
    'inventory.weapon': 'Weapon: ',
    'inventory.armor': 'Armor: ',
    'inventory.accessory': 'Accessory: ',
    'inventory.none': 'None',
    'inventory.equip': '🔧 Equip Item',
    'inventory.useConsumable': '💊 Use Consumable',
    'inventory.back': '← Back',
    'inventory.equippedItem': 'Equipped {0}.',
    'inventory.usedItem': 'Used {0}. +{1} {2}.',
    'shop.title': '🛒 BLACK MARKET',
    'shop.yourCredits': 'Your credits: {0}',
    'shop.leave': '← Leave Shop',
    'shop.noCredits': '"Not enough credits, runner."',
    'shop.purchased': 'Purchased {0}.',

    // Skills
    'skills.title': '🔮 SKILL TREE',
    'skills.points': 'Skill Points: {0}',
    'skills.levelUp': '⬆ LEVEL UP! You are now level {0}. +1 Skill Point.',
    'skills.unlock': 'Unlock: ',
    'skills.noPoints': 'No skill points available.',
    'skills.requires': 'Requires: {0}',
    'skills.unlocked': 'Unlocked: {0}',
    'skills.notFound': 'ERROR: Skill not found.',
    'skills.branch.brute': 'Brute Force',
    'skills.branch.stealth': 'Stealth',
    'skills.branch.control': 'System Control',

    // Enemies
    'enemy.sentry': 'ICE Sentry v1.0',
    'enemy.crawler': 'Data Crawler',
    'enemy.firewall': 'Firewall Guardian',
    'enemy.overseer': 'Network Overseer',
    'enemy.type.sentry': 'ICE / Patrol',
    'enemy.type.crawler': 'Malware / Swarm',
    'enemy.type.firewall': 'ICE / Defense',
    'enemy.type.overseer': 'ICE / Commander',

    // Items
    'item.brute_forcer': 'Brute Forcer',
    'item.virus_injector': 'Virus Injector',
    'item.basic_firewall': 'Basic Firewall',
    'item.shield_chip': 'Shield Chip',
    'item.overclock_chip': 'Overclock Chip',
    'item.deep_dive_module': 'Deep Dive Module',
    'item.data_pack': 'Data Pack',
    'item.ram_cleanup': 'RAM Cleanup',
    'item.data_chip': 'Data Chip',
    'item.scrap_code': 'Scrap Code',
    'item.desc.brute_forcer': 'Basic attack program. Reliable but loud.',
    'item.desc.virus_injector': 'Injects malware. Has 20% chance to deal bonus damage.',
    'item.desc.basic_firewall': 'Entry-level defense program.',
    'item.desc.shield_chip': 'Advanced encryption shield.',
    'item.desc.overclock_chip': 'Overclocks your system. +15% crit chance.',
    'item.desc.deep_dive_module': 'Expands RAM capacity.',
    'item.desc.data_pack': 'Restores 30 HP.',
    'item.desc.ram_cleanup': 'Restores 25 RAM.',
    'item.desc.data_chip': 'Valuable data fragment. Can be sold at Black Market.',
    'item.desc.scrap_code': 'Corrupted code fragments. Worth a few credits.',

    // Skills
    'skill.power_strike': 'Power Strike',
    'skill.ddos': 'DDoS Surge',
    'skill.scan': 'System Scan',
    'skill.backdoor': 'Backdoor',
    'skill.repair': 'System Repair',
    'skill.desc.power_strike': 'A powerful attack. 1.8x damage, costs 15 RAM.',
    'skill.desc.ddos': 'Overwhelming attack. 2.5x damage, costs 30 RAM.',
    'skill.desc.scan': 'Reveal enemy weaknesses. Reduces enemy defense by 40%.',
    'skill.desc.backdoor': 'Install backdoor. 30% chance to skip combat entirely.',
    'skill.desc.repair': 'Restore 40 HP. Costs 20 RAM.',

    // Layers
    'layer.1.name': 'SECTOR-1: Outer Perimeter',
    'layer.1.desc': 'The outer shell of DeepNet. Low-security nodes, basic ICE patrols.',
    'layer.2.name': 'SECTOR-2: Data Nexus',
    'layer.2.desc': 'Mid-level security. More aggressive ICE, better loot.',
    'layer.3.name': 'SECTOR-3: The Deep',
    'layer.3.desc': 'Maximum security. Only the best runners reach here.',
    'layer.4.name': 'SECTOR-4: Quantum Core',
    'layer.4.desc': 'Quantum-encrypted virtual space. The line between reality and data blurs.',
    'layer.5.name': 'SECTOR-5: The Abyss',
    'layer.5.desc': 'The deepest layer of DeepNet. Only legendary runners have reached here.',
    'layer.6.name': 'SECTOR-6: Neural Nexus',
    'layer.6.desc': 'The mind-layer of DeepNet. Data flows as neural impulses — consciousness and code merge.',
    'layer.7.name': 'SECTOR-7: Genesis',
    'layer.7.desc': 'The origin point of DeepNet. All data is born here, and all data ends here.',

    // Layer 1 nodes
    'node.entry.name': 'Access Point Alpha',
    'node.entry.desc': 'You jack into DeepNet. The virtual space materializes around you — a lattice of glowing data streams.',
    'node.data_1a.name': 'Abandoned Data Cache',
    'node.data_1a.desc': 'Flickering data fragments drift through a corrupted sector. Something moves in the static.',
    'node.data_1b.name': 'Patrol Route',
    'node.data_1b.desc': 'ICE sentries sweep this corridor in predictable patterns.',
    'node.repair_1.name': 'Repair Node',
    'node.repair_1.desc': 'A stable data well. You can restore your systems here.',
    'node.shop_1.name': 'Black Market Terminal',
    'node.shop_1.desc': 'A shady data dealer operates from this node. "Looking for upgrades, runner?"',
    'node.encrypted_1.name': 'Encrypted Sector',
    'node.encrypted_1.desc': 'Heavy encryption. Breaking through will be dangerous but rewarding.',
    'node.core_1.name': 'Core Gateway',
    'node.core_1.desc': 'The firewall to the next layer pulses before you. A massive ICE program guards it.',

    // Layer 2 nodes
    'node.entry_2.name': 'Nexus Entrance',
    'node.entry_2.desc': 'Deeper into the network. Data streams grow denser.',
    'node.data_2a.name': 'Corrupted Archive',
    'node.data_2a.desc': 'Old data fragments swirl in a vortex of broken code.',
    'node.data_2b.name': 'ICE Nest',
    'node.data_2b.desc': 'Multiple ICE signatures detected. Proceed with caution.',
    'node.fragment_2.name': 'Data Fragment Node',
    'node.fragment_2.desc': 'A rare data fragment pulses with ancient code. It might unlock something.',
    'node.repair_2.name': 'Medical Bay',
    'node.repair_2.desc': 'An old maintenance node. Systems can be patched here.',
    'node.shop_2.name': 'Shadow Market',
    'node.shop_2.desc': '"Premium goods for premium runners." The dealer grins in binary.',
    'node.encrypted_2.name': 'Vault Sector',
    'node.encrypted_2.desc': 'Military-grade encryption. The rewards must be worth it.',
    'node.core_2.name': 'Core Nexus',
    'node.core_2.desc': 'The second firewall looms. Its guardian is ancient and powerful.',

    // Layer 3 nodes
    'node.entry_3.name': 'Deep Entrance',
    'node.entry_3.desc': 'The deepest layer. Reality bends around corrupted data.',
    'node.data_3.name': 'Ghost Network',
    'node.data_3.desc': 'Phantom data echoes of past runners who didn\'t make it.',
    'node.encrypted_3a.name': 'Black ICE Zone',
    'node.encrypted_3a.desc': 'Black ICE. The most dangerous defense programs known.',
    'node.repair_3.name': 'Emergency Cache',
    'node.repair_3.desc': 'A hidden safe room. Last chance to recover.',
    'node.shop_3.name': 'Deep Web Exchange',
    'node.shop_3.desc': '"You\'ve come far. My prices reflect the risk."',
    'node.encrypted_3b.name': 'Core Antechamber',
    'node.encrypted_3b.desc': 'The final barrier before the core. Everything here wants you dead.',
    'node.core_3.name': 'THE CORE',
    'node.core_3.desc': 'The heart of DeepNet. The ultimate ICE program awaits. This is it, runner.',

    // Layer 4 nodes
    'node.quantum_entry.name': 'Quantum Entry',
    'node.quantum_entry.desc': 'You enter the quantum-encrypted layer. Data exists in superposition, flickering with multiple possibilities.',
    'node.quantum_entangled.name': 'Quantum Entangled Node',
    'node.quantum_entangled.desc': 'Entangled data pairs spin in the void. Observing them changes their state.',
    'node.void_rift.name': 'Void Rift',
    'node.void_rift.desc': 'Space warps here. Corrupted data seeps through the rift.',
    'node.quantum_firewall.name': 'Quantum Firewall',
    'node.quantum_firewall.desc': 'A quantum-state defense system. It exists and doesn\'t exist simultaneously.',
    'node.quantum_repair.name': 'Quantum Repair Station',
    'node.quantum_repair.desc': 'A stable quantum-state space. Systems can collapse and repair here.',
    'node.quantum_exchange.name': 'Quantum Exchange',
    'node.quantum_exchange.desc': '"Quantum goods, quantum prices. The uncertainty principle applies."',
    'node.quantum_core.name': 'Quantum Core',
    'node.quantum_core.desc': 'The quantum-state core. It awaits you in all possible states.',

    // Layer 5 nodes
    'node.abyss_entry.name': 'Abyss Entry',
    'node.abyss_entry.desc': 'You reach the deepest layer of DeepNet. Darkness has substance here.',
    'node.abyss_echo.name': 'Abyss Echo',
    'node.abyss_echo.desc': 'Residual echoes of past runners reverberate here. Their data has merged with the abyss.',
    'node.void_eye.name': 'Void Eye',
    'node.void_eye.desc': 'A massive data vortex watches you. It seems conscious.',
    'node.abyss_guardian.name': 'Abyss Guardian',
    'node.abyss_guardian.desc': 'Ancient defense programs. They have existed since DeepNet\'s inception.',
    'node.void_vortex.name': 'Void Vortex',
    'node.void_vortex.desc': 'Data is consumed here. Only the strongest programs survive.',
    'node.abyss_sanctuary.name': 'Abyss Sanctuary',
    'node.abyss_sanctuary.desc': 'A rare place of calm. The abyss breathes here.',
    'node.abyss_core.name': 'Abyss Core',
    'node.abyss_core.desc': 'The heart of DeepNet. The origin and end of all data. This is the final challenge.',

    // Layer 6 nodes
    'node.neural_entry.name': 'Neural Access Point',
    'node.neural_entry.desc': 'You enter the mind-layer of DeepNet. Data flows as neural impulses around you.',
    'node.synapse_link.name': 'Synapse Link',
    'node.synapse_link.desc': 'Neural data forms complex connections here. Every pulse carries information.',
    'node.memory_fragments.name': 'Memory Fragments',
    'node.memory_fragments.desc': 'Data remnants from DeepNet\'s early users. Their memories have merged with the network.',
    'node.neural_firewall.name': 'Neural Firewall',
    'node.neural_firewall.desc': 'A neural-network-based defense system. It learns your attack patterns.',
    'node.cortex_gate.name': 'Cortex Gate',
    'node.cortex_gate.desc': 'The final barrier before the core. Neural pulses converge here into a torrent.',
    'node.neural_repair.name': 'Neural Repair Station',
    'node.neural_repair.desc': 'A stable neural node. Systems can recalibrate here.',
    'node.neural_market.name': 'Neural Exchange',
    'node.neural_market.desc': '"Thought is commodity. Here, every idea has a price."',
    'node.neural_core.name': 'Neural Core',
    'node.neural_core.desc': 'The mind-center of DeepNet. Neural pulses converge into a vast consciousness.',

    // Layer 7 nodes
    'node.genesis_entry.name': 'Genesis Entry',
    'node.genesis_entry.desc': 'You reach the origin of DeepNet. Raw data streams unfold before you like a galaxy.',
    'node.origin_stream.name': 'Origin Stream',
    'node.origin_stream.desc': 'The most primal data flow of DeepNet. Everything starts here.',
    'node.code_matrix.name': 'Code Matrix',
    'node.code_matrix.desc': 'The matrix forming DeepNet\'s foundational code. It is so complex it became self-aware.',
    'node.genesis_fragment.name': 'Genesis Fragment',
    'node.genesis_fragment.desc': 'A data fragment containing DeepNet\'s original code. Decoding it may reveal the truth of everything.',
    'node.prime_firewall.name': 'Prime Firewall',
    'node.prime_firewall.desc': 'DeepNet\'s most powerful defense system. It is the guardian of the entire network.',
    'node.origin_lock.name': 'Origin Lock',
    'node.origin_lock.desc': 'The final seal on DeepNet\'s core. Only the strongest runners can break it.',
    'node.genesis_repair.name': 'Genesis Repair Station',
    'node.genesis_repair.desc': 'A repair node infused with primal code. Systems can fully restore here.',
    'node.genesis_market.name': 'Genesis Exchange',
    'node.genesis_market.desc': '"At the origin, all things are possible. But the price is the highest."',
    'node.genesis_core.name': 'Genesis Core',
    'node.genesis_core.desc': 'The true core of DeepNet. The origin of all data, the end of all code. This is the final challenge.',

    // Enemy translations
    'enemy.quantum_guardian': 'Quantum Guardian',
    'enemy.type.quantum_guardian': 'ICE / Quantum',
    'enemy.abyss_lord': 'Abyss Lord',
    'enemy.type.abyss_lord': 'ICE / Abyss',
    'enemy.neural_sovereign': 'Neural Sovereign',
    'enemy.type.neural_sovereign': 'ICE / Neural',
    'enemy.deepnet_prime': 'DeepNet Prime',
    'enemy.type.deepnet_prime': 'ICE / Genesis',

    // Language toggle
    'lang.switch': '中',
    'lang.current': 'English'
  }
};

/**
 * Procedural content pools for infinite layers.
 * Indexed by (layerNum - 1) % 7 to cycle themes.
 */
export const LAYER_THEMES = [
  { zh: '外围防线', en: 'Outer Perimeter' },
  { zh: '数据枢纽', en: 'Data Nexus' },
  { zh: '深层', en: 'The Deep' },
  { zh: '量子核心', en: 'Quantum Core' },
  { zh: '深渊', en: 'The Abyss' },
  { zh: '神经中枢', en: 'Neural Nexus' },
  { zh: '创世纪', en: 'Genesis' }
];

export const PROC_NODES = {
  entry: {
    names: {
      zh: ['接入点', '下行通道', '裂隙入口', '数据之门', '深层通道', '下行端口', '渗透点'],
      desc: [
        '你进入第{N}层。数据流在周围涌动。',
        '虚拟空间在这里扭曲。前方是未知。',
        '下行完成。第{N}层在你面前展开。',
        '你穿过防火墙的缝隙。新的扇区出现了。',
        '连接已建立。第{N}层的节点网络闪烁着危险的光芒。'
      ]
    },
    en: {
      names: ['Access Point', 'Descent Channel', 'Rift Entry', 'Data Gate', 'Deep Passage', 'Downlink Port', 'Breach Point'],
      desc: [
        'You enter Layer {N}. Data streams surge around you.',
        'Virtual space warps here. The unknown lies ahead.',
        'Descent complete. Layer {N} unfolds before you.',
        'You slip through a firewall gap. A new sector appears.',
        'Connection established. Layer {N}\'s node network flickers with danger.'
      ]
    }
  },
  data: {
    names: {
      zh: ['数据缓存', '废弃节点', '信息流', '数据漩涡', '残余数据', '信号源', '数据碎片', '信息风暴'],
      desc: [
        '闪烁的数据碎片漂浮在损坏的扇区中。',
        '旧的数据残片在这里堆积。有东西在移动。',
        '数据流在这里减速，形成了一个信息池。',
        '损坏的代码碎片在虚空中旋转。',
        '一个充满废弃数据的节点。机会与危险并存。'
      ]
    },
    en: {
      names: ['Data Cache', 'Abandoned Node', 'Info Stream', 'Data Vortex', 'Residual Data', 'Signal Source', 'Data Fragments', 'Info Storm'],
      desc: [
        'Flickering data fragments drift through a corrupted sector.',
        'Old data remnants pile up here. Something moves.',
        'Data streams slow here, forming an information pool.',
        'Corrupted code fragments spin in the void.',
        'A node full of discarded data. Opportunity and danger coexist.'
      ]
    }
  },
  encrypted: {
    names: {
      zh: ['加密扇区', '封锁区域', '防御节点', '安全屏障', '黑ICE区域', '加密迷宫', '数据要塞'],
      desc: [
        '重度加密。突破会触发防御系统。',
        '军事级加密。这里的数据被严密守护。',
        '检测到主动防御程序。准备战斗。',
        '加密层在这里叠加了数十重。',
        '黑ICE。已知最危险的防御程序。'
      ]
    },
    en: {
      names: ['Encrypted Sector', 'Locked Zone', 'Defense Node', 'Security Barrier', 'Black ICE Zone', 'Crypto Labyrinth', 'Data Fortress'],
      desc: [
        'Heavy encryption. Breaking through triggers defense systems.',
        'Military-grade encryption. Data here is heavily guarded.',
        'Active defense programs detected. Brace for combat.',
        'Dozens of encryption layers stack here.',
        'Black ICE. The most dangerous defense programs known.'
      ]
    }
  },
  repair: {
    names: {
      zh: ['修复节点', '维护舱', '恢复站', '安全室', '缓存修复', '系统诊所', '急救站'],
      desc: [
        '一个稳定的数据井。你可以在这里修复系统。',
        '旧的维护节点。系统可以在这里修补。',
        '一个隐藏的安全室。恢复机会。',
        '紧急修复协议已激活。',
        '系统诊断完成。开始修复。'
      ]
    },
    en: {
      names: ['Repair Node', 'Maintenance Bay', 'Recovery Station', 'Safe Room', 'Cache Repair', 'System Clinic', 'First Aid Station'],
      desc: [
        'A stable data well. You can restore your systems here.',
        'An old maintenance node. Systems can be patched here.',
        'A hidden safe room. A chance to recover.',
        'Emergency repair protocols activated.',
        'System diagnostics complete. Beginning repairs.'
      ]
    }
  },
  shop: {
    names: {
      zh: ['黑市终端', '暗影市场', '交易所', '数据商人', '走私者', '地下市场', '灰色交易'],
      desc: [
        '"欢迎，跑者。看到喜欢的了吗？"',
        '"优质商品给优质跑者。"',
        '"你走了很远。我的价格反映了风险。"',
        '"量子商品，量子价格。"',
        '"在深处，一切都有价格。"'
      ]
    },
    en: {
      names: ['Black Market Terminal', 'Shadow Market', 'Exchange', 'Data Dealer', 'Smuggler', 'Underground Market', 'Gray Trade'],
      desc: [
        '"Welcome, runner. See anything you like?"',
        '"Premium goods for premium runners."',
        '"You\'ve come far. My prices reflect the risk."',
        '"Quantum goods, quantum prices."',
        '"In the depths, everything has a price."'
      ]
    }
  },
  core: {
    names: {
      zh: ['核心网关', '核心枢纽', '核心', '量子核心', '深渊核心', '神经核心', '创世核心', '终极核心', '深渊之门', '虚空核心'],
      desc: [
        '通往下一层的防火墙在你面前脉动。',
        '核心防火墙矗立。它的守卫古老而强大。',
        'DeepNet的心脏。终极ICE程序在等待。',
        '核心在所有可能的状态中等待着你。',
        'DeepNet的真正核心。这是最后的挑战。',
        '一个巨大的ICE程序守卫着通往下层的通道。'
      ]
    },
    en: {
      names: ['Core Gateway', 'Core Nexus', 'THE CORE', 'Quantum Core', 'Abyss Core', 'Neural Core', 'Genesis Core', 'Ultimate Core', 'Abyss Gate', 'Void Core'],
      desc: [
        'The firewall to the next layer pulses before you.',
        'The core firewall looms. Its guardian is ancient and powerful.',
        'The heart of DeepNet. The ultimate ICE program awaits.',
        'The core awaits you in all possible states.',
        'The true core of DeepNet. This is the final challenge.',
        'A massive ICE program guards the path to the next layer.'
      ]
    }
  }
};

export const PROC_BOSSES = {
  names: {
    zh: ['网络监督者', '量子守卫', '深渊领主', '神经主权者', 'DeepNet原初体', '虚空行者', '数据暴君', '代码之王', '暗影主宰', '终极守护者'],
    en: ['Network Overseer', 'Quantum Guardian', 'Abyss Lord', 'Neural Sovereign', 'DeepNet Prime', 'Void Walker', 'Data Tyrant', 'Code King', 'Shadow Master', 'Ultimate Guardian']
  },
  types: {
    zh: ['ICE / 指挥官', 'ICE / 量子态', 'ICE / 深渊', 'ICE / 神经网络', 'ICE / 创世', 'ICE / 虚空', 'ICE / 暴政', 'ICE / 统治', 'ICE / 暗影', 'ICE / 终极'],
    en: ['ICE / Commander', 'ICE / Quantum', 'ICE / Abyss', 'ICE / Neural', 'ICE / Genesis', 'ICE / Void', 'ICE / Tyrant', 'ICE / Dominion', 'ICE / Shadow', 'ICE / Ultimate']
  }
};
