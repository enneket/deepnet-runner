/**
 * Layer definitions - each layer is a graph of nodes
 * Node names and descriptions use i18n translation keys
 */
export const LAYERS = {
  1: {
    id: 1,
    nameKey: 'layer.1.name',
    descKey: 'layer.1.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.entry.name',
        descKey: 'node.entry.desc',
        connections: ['data_1a', 'data_1b']
      },
      data_1a: {
        id: 'data_1a', type: 'data',
        nameKey: 'node.data_1a.name',
        descKey: 'node.data_1a.desc',
        connections: ['repair_1', 'encrypted_1']
      },
      data_1b: {
        id: 'data_1b', type: 'data',
        nameKey: 'node.data_1b.name',
        descKey: 'node.data_1b.desc',
        connections: ['shop_1', 'encrypted_1']
      },
      repair_1: {
        id: 'repair_1', type: 'repair',
        nameKey: 'node.repair_1.name',
        descKey: 'node.repair_1.desc',
        connections: ['core_1']
      },
      shop_1: {
        id: 'shop_1', type: 'shop',
        nameKey: 'node.shop_1.name',
        descKey: 'node.shop_1.desc',
        connections: ['core_1']
      },
      encrypted_1: {
        id: 'encrypted_1', type: 'encrypted',
        nameKey: 'node.encrypted_1.name',
        descKey: 'node.encrypted_1.desc',
        connections: ['core_1']
      },
      core_1: {
        id: 'core_1', type: 'core',
        nameKey: 'node.core_1.name',
        descKey: 'node.core_1.desc',
        connections: []
      }
    },
    startNode: 'entry'
  },
  2: {
    id: 2,
    nameKey: 'layer.2.name',
    descKey: 'layer.2.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.entry_2.name',
        descKey: 'node.entry_2.desc',
        connections: ['data_2a', 'data_2b']
      },
      data_2a: {
        id: 'data_2a', type: 'data',
        nameKey: 'node.data_2a.name',
        descKey: 'node.data_2a.desc',
        connections: ['encrypted_2', 'fragment_2']
      },
      data_2b: {
        id: 'data_2b', type: 'data',
        nameKey: 'node.data_2b.name',
        descKey: 'node.data_2b.desc',
        connections: ['repair_2', 'encrypted_2']
      },
      fragment_2: {
        id: 'fragment_2', type: 'fragment',
        nameKey: 'node.fragment_2.name',
        descKey: 'node.fragment_2.desc',
        connections: ['shop_2']
      },
      repair_2: {
        id: 'repair_2', type: 'repair',
        nameKey: 'node.repair_2.name',
        descKey: 'node.repair_2.desc',
        connections: ['core_2']
      },
      shop_2: {
        id: 'shop_2', type: 'shop',
        nameKey: 'node.shop_2.name',
        descKey: 'node.shop_2.desc',
        connections: ['core_2']
      },
      encrypted_2: {
        id: 'encrypted_2', type: 'encrypted',
        nameKey: 'node.encrypted_2.name',
        descKey: 'node.encrypted_2.desc',
        connections: ['core_2']
      },
      core_2: {
        id: 'core_2', type: 'core',
        nameKey: 'node.core_2.name',
        descKey: 'node.core_2.desc',
        connections: []
      }
    },
    startNode: 'entry'
  },
  3: {
    id: 3,
    nameKey: 'layer.3.name',
    descKey: 'layer.3.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.entry_3.name',
        descKey: 'node.entry_3.desc',
        connections: ['data_3', 'encrypted_3a']
      },
      data_3: {
        id: 'data_3', type: 'data',
        nameKey: 'node.data_3.name',
        descKey: 'node.data_3.desc',
        connections: ['repair_3', 'encrypted_3b']
      },
      encrypted_3a: {
        id: 'encrypted_3a', type: 'encrypted',
        nameKey: 'node.encrypted_3a.name',
        descKey: 'node.encrypted_3a.desc',
        connections: ['shop_3']
      },
      repair_3: {
        id: 'repair_3', type: 'repair',
        nameKey: 'node.repair_3.name',
        descKey: 'node.repair_3.desc',
        connections: ['core_3']
      },
      shop_3: {
        id: 'shop_3', type: 'shop',
        nameKey: 'node.shop_3.name',
        descKey: 'node.shop_3.desc',
        connections: ['encrypted_3b']
      },
      encrypted_3b: {
        id: 'encrypted_3b', type: 'encrypted',
        nameKey: 'node.encrypted_3b.name',
        descKey: 'node.encrypted_3b.desc',
        connections: ['core_3']
      },
      core_3: {
        id: 'core_3', type: 'core',
        nameKey: 'node.core_3.name',
        descKey: 'node.core_3.desc',
        connections: []
      }
    },
    startNode: 'entry'
  },
  4: {
    id: 4,
    nameKey: 'layer.4.name',
    descKey: 'layer.4.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.quantum_entry.name',
        descKey: 'node.quantum_entry.desc',
        connections: ['data_4a', 'data_4b']
      },
      data_4a: {
        id: 'data_4a', type: 'data',
        nameKey: 'node.quantum_entangled.name',
        descKey: 'node.quantum_entangled.desc',
        connections: ['encrypted_4a', 'repair_4']
      },
      data_4b: {
        id: 'data_4b', type: 'data',
        nameKey: 'node.void_rift.name',
        descKey: 'node.void_rift.desc',
        connections: ['encrypted_4a', 'shop_4']
      },
      encrypted_4a: {
        id: 'encrypted_4a', type: 'encrypted',
        nameKey: 'node.quantum_firewall.name',
        descKey: 'node.quantum_firewall.desc',
        connections: ['core_4']
      },
      repair_4: {
        id: 'repair_4', type: 'repair',
        nameKey: 'node.quantum_repair.name',
        descKey: 'node.quantum_repair.desc',
        connections: ['core_4']
      },
      shop_4: {
        id: 'shop_4', type: 'shop',
        nameKey: 'node.quantum_exchange.name',
        descKey: 'node.quantum_exchange.desc',
        connections: ['core_4']
      },
      core_4: {
        id: 'core_4', type: 'core',
        nameKey: 'node.quantum_core.name',
        descKey: 'node.quantum_core.desc',
        connections: []
      }
    },
    startNode: 'entry'
  },
  5: {
    id: 5,
    nameKey: 'layer.5.name',
    descKey: 'layer.5.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.abyss_entry.name',
        descKey: 'node.abyss_entry.desc',
        connections: ['data_5a', 'data_5b']
      },
      data_5a: {
        id: 'data_5a', type: 'data',
        nameKey: 'node.abyss_echo.name',
        descKey: 'node.abyss_echo.desc',
        connections: ['encrypted_5a', 'repair_5']
      },
      data_5b: {
        id: 'data_5b', type: 'data',
        nameKey: 'node.void_eye.name',
        descKey: 'node.void_eye.desc',
        connections: ['encrypted_5b']
      },
      encrypted_5a: {
        id: 'encrypted_5a', type: 'encrypted',
        nameKey: 'node.abyss_guardian.name',
        descKey: 'node.abyss_guardian.desc',
        connections: ['core_5']
      },
      encrypted_5b: {
        id: 'encrypted_5b', type: 'encrypted',
        nameKey: 'node.void_vortex.name',
        descKey: 'node.void_vortex.desc',
        connections: ['core_5']
      },
      repair_5: {
        id: 'repair_5', type: 'repair',
        nameKey: 'node.abyss_sanctuary.name',
        descKey: 'node.abyss_sanctuary.desc',
        connections: ['core_5']
      },
      core_5: {
        id: 'core_5', type: 'core',
        nameKey: 'node.abyss_core.name',
        descKey: 'node.abyss_core.desc',
        connections: []
      }
    },
    startNode: 'entry'
  }
};

export function getLayer(num) {
  return LAYERS[num] ? structuredClone(LAYERS[num]) : null;
}
