/**
 * Layer definitions - each layer is a graph of nodes
 */
export const LAYERS = {
  1: {
    id: 1,
    name: 'SECTOR-1: Outer Perimeter',
    description: 'The outer shell of DeepNet. Low-security nodes, basic ICE patrols.',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: 'Access Point Alpha',
        description: 'You jack into DeepNet. The virtual space materializes around you \u2014 a lattice of glowing data streams.',
        connections: ['data_1a', 'data_1b']
      },
      data_1a: {
        id: 'data_1a', type: 'data',
        name: 'Abandoned Data Cache',
        description: 'Flickering data fragments drift through a corrupted sector. Something moves in the static.',
        connections: ['repair_1', 'encrypted_1']
      },
      data_1b: {
        id: 'data_1b', type: 'data',
        name: 'Patrol Route',
        description: 'ICE sentries sweep this corridor in predictable patterns.',
        connections: ['shop_1', 'encrypted_1']
      },
      repair_1: {
        id: 'repair_1', type: 'repair',
        name: 'Repair Node',
        description: 'A stable data well. You can restore your systems here.',
        connections: ['core_1']
      },
      shop_1: {
        id: 'shop_1', type: 'shop',
        name: 'Black Market Terminal',
        description: 'A shady data dealer operates from this node. "Looking for upgrades, runner?"',
        connections: ['core_1']
      },
      encrypted_1: {
        id: 'encrypted_1', type: 'encrypted',
        name: 'Encrypted Sector',
        description: 'Heavy encryption. Breaking through will be dangerous but rewarding.',
        connections: ['core_1']
      },
      core_1: {
        id: 'core_1', type: 'core',
        name: 'Core Gateway',
        description: 'The firewall to the next layer pulses before you. A massive ICE program guards it.',
        connections: []
      }
    },
    startNode: 'entry'
  },
  2: {
    id: 2,
    name: 'SECTOR-2: Data Nexus',
    description: 'Mid-level security. More aggressive ICE, better loot.',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: 'Nexus Entry',
        description: 'Deeper into the network. The data streams are denser here.',
        connections: ['data_2a', 'data_2b']
      },
      data_2a: {
        id: 'data_2a', type: 'data',
        name: 'Corrupted Archive',
        description: 'Old data fragments swirl in a vortex of broken code.',
        connections: ['encrypted_2', 'fragment_2']
      },
      data_2b: {
        id: 'data_2b', type: 'data',
        name: 'ICE Nest',
        description: 'Multiple ICE signatures detected. Proceed with caution.',
        connections: ['repair_2', 'encrypted_2']
      },
      fragment_2: {
        id: 'fragment_2', type: 'fragment',
        name: 'Data Fragment Node',
        description: 'A rare data fragment pulses with ancient code. It might unlock something.',
        connections: ['shop_2']
      },
      repair_2: {
        id: 'repair_2', type: 'repair',
        name: 'Medical Bay',
        description: 'An old maintenance node. Systems can be patched here.',
        connections: ['core_2']
      },
      shop_2: {
        id: 'shop_2', type: 'shop',
        name: 'Shadow Market',
        description: '"Premium goods for premium runners." The dealer grins in binary.',
        connections: ['core_2']
      },
      encrypted_2: {
        id: 'encrypted_2', type: 'encrypted',
        name: 'Vault Sector',
        description: 'Military-grade encryption. The rewards must be worth it.',
        connections: ['core_2']
      },
      core_2: {
        id: 'core_2', type: 'core',
        name: 'Core Nexus',
        description: 'The second firewall looms. Its guardian is ancient and powerful.',
        connections: []
      }
    },
    startNode: 'entry'
  },
  3: {
    id: 3,
    name: 'SECTOR-3: The Deep',
    description: 'Maximum security. Only the best runners reach here.',
    nodes: {
      entry: {
        id: 'entry', type: 'entry',
        name: 'Deep Access',
        description: 'The deepest layer. Reality bends around corrupted data.',
        connections: ['data_3', 'encrypted_3a']
      },
      data_3: {
        id: 'data_3', type: 'data',
        name: 'Ghost Network',
        description: 'Phantom data echoes of past runners who didn\'t make it.',
        connections: ['repair_3', 'encrypted_3b']
      },
      encrypted_3a: {
        id: 'encrypted_3a', type: 'encrypted',
        name: 'Black ICE Zone',
        description: 'Black ICE. The most dangerous defense programs known.',
        connections: ['shop_3']
      },
      repair_3: {
        id: 'repair_3', type: 'repair',
        name: 'Emergency Cache',
        description: 'A hidden safe room. Last chance to recover.',
        connections: ['core_3']
      },
      shop_3: {
        id: 'shop_3', type: 'shop',
        name: 'Deep Web Exchange',
        description: '"You\'ve come far. My prices reflect the risk."',
        connections: ['encrypted_3b']
      },
      encrypted_3b: {
        id: 'encrypted_3b', type: 'encrypted',
        name: 'Core Antechamber',
        description: 'The final barrier before the core. Everything here wants you dead.',
        connections: ['core_3']
      },
      core_3: {
        id: 'core_3', type: 'core',
        name: 'THE CORE',
        description: 'The heart of DeepNet. The ultimate ICE program awaits. This is it, runner.',
        connections: []
      }
    },
    startNode: 'entry'
  }
};

export function getLayer(num) {
  return LAYERS[num] ? structuredClone(LAYERS[num]) : null;
}
