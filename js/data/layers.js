/**
 * Layer definitions - each layer is a graph of nodes
 */
export const LAYERS = {
  1: {
    id: 1,
    name: 'SECTOR-1: 外围防线',
    description: 'DeepNet的外壳。低安全节点，基础ICE巡逻。',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: '接入点Alpha',
        description: '你接入DeepNet。虚拟空间在你周围成形——一个闪烁的数据流网络。',
        connections: ['data_1a', 'data_1b']
      },
      data_1a: {
        id: 'data_1a', type: 'data',
        name: '废弃数据缓存',
        description: '闪烁的数据碎片漂浮在一个损坏的扇区中。静态噪声中有东西在移动。',
        connections: ['repair_1', 'encrypted_1']
      },
      data_1b: {
        id: 'data_1b', type: 'data',
        name: '巡逻路线',
        description: 'ICE哨兵以可预测的模式扫过这条走廊。',
        connections: ['shop_1', 'encrypted_1']
      },
      repair_1: {
        id: 'repair_1', type: 'repair',
        name: '修复节点',
        description: '一个稳定的数据井。你可以在这里修复系统。',
        connections: ['core_1']
      },
      shop_1: {
        id: 'shop_1', type: 'shop',
        name: '黑市终端',
        description: '一个可疑的数据商人在这个节点运营。"要看看升级吗，跑者？"',
        connections: ['core_1']
      },
      encrypted_1: {
        id: 'encrypted_1', type: 'encrypted',
        name: '加密扇区',
        description: '重度加密。突破会很危险但回报丰厚。',
        connections: ['core_1']
      },
      core_1: {
        id: 'core_1', type: 'core',
        name: '核心网关',
        description: '通往下一层的防火墙在你面前脉动。一个巨大的ICE程序守卫着它。',
        connections: []
      }
    },
    startNode: 'entry'
  },
  2: {
    id: 2,
    name: 'SECTOR-2: 数据枢纽',
    description: '中等安全级别。更激进的ICE，更好的战利品。',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: '枢纽入口',
        description: '深入网络。数据流更加密集。',
        connections: ['data_2a', 'data_2b']
      },
      data_2a: {
        id: 'data_2a', type: 'data',
        name: '损坏的档案库',
        description: '旧的数据碎片在一个破损代码的漩涡中旋转。',
        connections: ['encrypted_2', 'fragment_2']
      },
      data_2b: {
        id: 'data_2b', type: 'data',
        name: 'ICE巢穴',
        description: '检测到多个ICE信号。谨慎前进。',
        connections: ['repair_2', 'encrypted_2']
      },
      fragment_2: {
        id: 'fragment_2', type: 'fragment',
        name: '数据碎片节点',
        description: '一个罕见的数据碎片闪烁着古老的代码。它可能解锁某些东西。',
        connections: ['shop_2']
      },
      repair_2: {
        id: 'repair_2', type: 'repair',
        name: '医疗舱',
        description: '一个旧的维护节点。系统可以在这里修补。',
        connections: ['core_2']
      },
      shop_2: {
        id: 'shop_2', type: 'shop',
        name: '暗影市场',
        description: '"优质商品给优质跑者。"商人在二进制中微笑。',
        connections: ['core_2']
      },
      encrypted_2: {
        id: 'encrypted_2', type: 'encrypted',
        name: '金库扇区',
        description: '军事级加密。奖励一定值得。',
        connections: ['core_2']
      },
      core_2: {
        id: 'core_2', type: 'core',
        name: '核心枢纽',
        description: '第二道防火墙矗立。它的守卫古老而强大。',
        connections: []
      }
    },
    startNode: 'entry'
  },
  3: {
    id: 3,
    name: 'SECTOR-3: 深层',
    description: '最高安全级别。只有最强的跑者才能到达这里。',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: '深层入口',
        description: '最深层。现实围绕损坏的数据弯曲。',
        connections: ['data_3', 'encrypted_3a']
      },
      data_3: {
        id: 'data_3', type: 'data',
        name: '幽灵网络',
        description: '过去未能成功的跑者的数据回声。',
        connections: ['repair_3', 'encrypted_3b']
      },
      encrypted_3a: {
        id: 'encrypted_3a', type: 'encrypted',
        name: '黑ICE区域',
        description: '黑ICE。已知最危险的防御程序。',
        connections: ['shop_3']
      },
      repair_3: {
        id: 'repair_3', type: 'repair',
        name: '紧急缓存',
        description: '一个隐藏的安全室。最后的恢复机会。',
        connections: ['core_3']
      },
      shop_3: {
        id: 'shop_3', type: 'shop',
        name: '深网交易所',
        description: '"你走了很远。我的价格反映了风险。"',
        connections: ['encrypted_3b']
      },
      encrypted_3b: {
        id: 'encrypted_3b', type: 'encrypted',
        name: '核心前厅',
        description: '核心前的最后屏障。这里的一切都想杀死你。',
        connections: ['core_3']
      },
      core_3: {
        id: 'core_3', type: 'core',
        name: '核心',
        description: 'DeepNet的心脏。终极ICE程序在等待。就是这里了，跑者。',
        connections: []
      }
    },
    startNode: 'entry'
  }
};

export function getLayer(num) {
  return LAYERS[num] ? structuredClone(LAYERS[num]) : null;
}
