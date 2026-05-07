import { pick, randInt } from '../utils/random.js';
import { PROC_NODES, LAYER_THEMES } from './i18n.js';

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
  },
  6: {
    id: 6,
    nameKey: 'layer.6.name',
    descKey: 'layer.6.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.neural_entry.name',
        descKey: 'node.neural_entry.desc',
        connections: ['data_6a', 'data_6b']
      },
      data_6a: {
        id: 'data_6a', type: 'data',
        nameKey: 'node.synapse_link.name',
        descKey: 'node.synapse_link.desc',
        connections: ['encrypted_6a', 'repair_6']
      },
      data_6b: {
        id: 'data_6b', type: 'data',
        nameKey: 'node.memory_fragments.name',
        descKey: 'node.memory_fragments.desc',
        connections: ['encrypted_6b', 'shop_6']
      },
      encrypted_6a: {
        id: 'encrypted_6a', type: 'encrypted',
        nameKey: 'node.neural_firewall.name',
        descKey: 'node.neural_firewall.desc',
        connections: ['core_6']
      },
      encrypted_6b: {
        id: 'encrypted_6b', type: 'encrypted',
        nameKey: 'node.cortex_gate.name',
        descKey: 'node.cortex_gate.desc',
        connections: ['core_6']
      },
      repair_6: {
        id: 'repair_6', type: 'repair',
        nameKey: 'node.neural_repair.name',
        descKey: 'node.neural_repair.desc',
        connections: ['core_6']
      },
      shop_6: {
        id: 'shop_6', type: 'shop',
        nameKey: 'node.neural_market.name',
        descKey: 'node.neural_market.desc',
        connections: ['core_6']
      },
      core_6: {
        id: 'core_6', type: 'core',
        nameKey: 'node.neural_core.name',
        descKey: 'node.neural_core.desc',
        connections: []
      }
    },
    startNode: 'entry'
  },
  7: {
    id: 7,
    nameKey: 'layer.7.name',
    descKey: 'layer.7.desc',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        nameKey: 'node.genesis_entry.name',
        descKey: 'node.genesis_entry.desc',
        connections: ['data_7a', 'data_7b']
      },
      data_7a: {
        id: 'data_7a', type: 'data',
        nameKey: 'node.origin_stream.name',
        descKey: 'node.origin_stream.desc',
        connections: ['encrypted_7a', 'fragment_7']
      },
      data_7b: {
        id: 'data_7b', type: 'data',
        nameKey: 'node.code_matrix.name',
        descKey: 'node.code_matrix.desc',
        connections: ['encrypted_7b', 'repair_7']
      },
      fragment_7: {
        id: 'fragment_7', type: 'fragment',
        nameKey: 'node.genesis_fragment.name',
        descKey: 'node.genesis_fragment.desc',
        connections: ['shop_7']
      },
      encrypted_7a: {
        id: 'encrypted_7a', type: 'encrypted',
        nameKey: 'node.prime_firewall.name',
        descKey: 'node.prime_firewall.desc',
        connections: ['core_7']
      },
      encrypted_7b: {
        id: 'encrypted_7b', type: 'encrypted',
        nameKey: 'node.origin_lock.name',
        descKey: 'node.origin_lock.desc',
        connections: ['core_7']
      },
      repair_7: {
        id: 'repair_7', type: 'repair',
        nameKey: 'node.genesis_repair.name',
        descKey: 'node.genesis_repair.desc',
        connections: ['core_7']
      },
      shop_7: {
        id: 'shop_7', type: 'shop',
        nameKey: 'node.genesis_market.name',
        descKey: 'node.genesis_market.desc',
        connections: ['core_7']
      },
      core_7: {
        id: 'core_7', type: 'core',
        nameKey: 'node.genesis_core.name',
        descKey: 'node.genesis_core.desc',
        connections: []
      }
    },
    startNode: 'entry'
  }
};

export function getLayer(num) {
  if (num < 1) return null;
  return generateLayer(num);
}

/**
 * Procedurally generate a layer for n > 7.
 * Cycles through 7 themes, scales node count.
 */
function generateLayer(n) {
  const themeIdx = (n - 1) % 7;
  const theme = LAYER_THEMES[themeIdx];
  const pool = PROC_NODES;

  // Pick themed names/descs for this layer
  const pickFrom = (arr) => arr[randInt(0, arr.length - 1)];
  const fillDesc = (txt) => txt.replace('{N}', n);

  // Node count: 6-8, slightly increasing with layer
  const extraDataNodes = Math.min(n > 14 ? 2 : n > 7 ? 1 : 0, 2);

  // Build node IDs
  const dataIds = ['data_a', 'data_b'];
  for (let i = 0; i < extraDataNodes; i++) {
    dataIds.push('data_' + String.fromCharCode(99 + i)); // c, d, ...
  }

  const encryptedIds = ['encrypted_a'];
  if (n > 10) encryptedIds.push('encrypted_b');

  const nodes = {};

  // Entry node
  nodes.entry = {
    id: 'entry',
    type: 'entry',
    nameKey: `_proc.entry.name.${n}`,
    descKey: `_proc.entry.desc.${n}`,
    connections: dataIds.slice(0, 2)
  };

  // Store proc text on the layer object (consumed by i18n at runtime)
  const procTexts = {};
  procTexts[`_proc.entry.name.${n}`] = { zh: pickFrom(pool.entry.names.zh), en: pickFrom(pool.entry.en.names) };
  procTexts[`_proc.entry.desc.${n}`] = { zh: fillDesc(pickFrom(pool.entry.names.desc)), en: fillDesc(pickFrom(pool.entry.en.desc)) };

  // Data nodes
  const midNodes = [...encryptedIds, 'repair', 'shop'];
  for (let i = 0; i < dataIds.length; i++) {
    const id = dataIds[i];
    const connections = [];
    // Connect to a random subset of mid nodes
    if (i === 0) {
      connections.push(encryptedIds[0], 'repair');
    } else if (i === 1) {
      connections.push(encryptedIds[encryptedIds.length - 1], 'shop');
    } else {
      connections.push(midNodes[randInt(0, midNodes.length - 1)]);
    }
    nodes[id] = {
      id,
      type: 'data',
      nameKey: `_proc.data.name.${n}_${id}`,
      descKey: `_proc.data.desc.${n}_${id}`,
      connections
    };
    procTexts[`_proc.data.name.${n}_${id}`] = { zh: pickFrom(pool.data.names.zh), en: pickFrom(pool.data.en.names) };
    procTexts[`_proc.data.desc.${n}_${id}`] = { zh: pickFrom(pool.data.names.desc), en: pickFrom(pool.data.en.desc) };
  }

  // Encrypted nodes
  for (const id of encryptedIds) {
    nodes[id] = {
      id,
      type: 'encrypted',
      nameKey: `_proc.encrypted.name.${n}_${id}`,
      descKey: `_proc.encrypted.desc.${n}_${id}`,
      connections: ['core']
    };
    procTexts[`_proc.encrypted.name.${n}_${id}`] = { zh: pickFrom(pool.encrypted.names.zh), en: pickFrom(pool.encrypted.en.names) };
    procTexts[`_proc.encrypted.desc.${n}_${id}`] = { zh: pickFrom(pool.encrypted.names.desc), en: pickFrom(pool.encrypted.en.desc) };
  }

  // Repair node
  nodes.repair = {
    id: 'repair',
    type: 'repair',
    nameKey: `_proc.repair.name.${n}`,
    descKey: `_proc.repair.desc.${n}`,
    connections: ['core']
  };
  procTexts[`_proc.repair.name.${n}`] = { zh: pickFrom(pool.repair.names.zh), en: pickFrom(pool.repair.en.names) };
  procTexts[`_proc.repair.desc.${n}`] = { zh: pickFrom(pool.repair.names.desc), en: pickFrom(pool.repair.en.desc) };

  // Shop node
  nodes.shop = {
    id: 'shop',
    type: 'shop',
    nameKey: `_proc.shop.name.${n}`,
    descKey: `_proc.shop.desc.${n}`,
    connections: ['core']
  };
  procTexts[`_proc.shop.name.${n}`] = { zh: pickFrom(pool.shop.names.zh), en: pickFrom(pool.shop.en.names) };
  procTexts[`_proc.shop.desc.${n}`] = { zh: pickFrom(pool.shop.names.desc), en: pickFrom(pool.shop.en.desc) };

  // Core node
  const coreName = pickFrom(pool.core.names.zh);
  const coreNameEn = pickFrom(pool.core.en.names);
  nodes.core = {
    id: 'core',
    type: 'core',
    nameKey: `_proc.core.name.${n}`,
    descKey: `_proc.core.desc.${n}`,
    connections: []
  };
  procTexts[`_proc.core.name.${n}`] = { zh: coreName, en: coreNameEn };
  procTexts[`_proc.core.desc.${n}`] = { zh: pickFrom(pool.core.names.desc), en: pickFrom(pool.core.en.desc) };

  return {
    id: n,
    nameKey: `_proc.layer.name.${n}`,
    descKey: `_proc.layer.desc.${n}`,
    nodes,
    startNode: 'entry',
    _procTexts: {
      ...procTexts,
      [`_proc.layer.name.${n}`]: { zh: `SECTOR-${n}: ${theme.zh}`, en: `SECTOR-${n}: ${theme.en}` },
      [`_proc.layer.desc.${n}`]: { zh: `第${n}层。${theme.zh}。危险等级持续上升。`, en: `Layer ${n}. ${theme.en}. Threat level continues to rise.` }
    }
  };
}
