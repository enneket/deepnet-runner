import { bus } from '../core/event-bus.js';
import { getItem } from '../data/items.js';

/**
 * InventorySystem - Manages player inventory and equipment
 */
export class InventorySystem {
  constructor(state) {
    this._state = state;

    bus.on('inventory:show', () => this.showInventory());
    bus.on('inventory:equip', (itemId) => this.equip(itemId));
    bus.on('inventory:use', (itemId) => this.use(itemId));
    bus.on('shop:open', () => this.openShop());
  }

  showInventory() {
    const player = this._state.get('player');
    const inventory = player.inventory || [];

    bus.emit('ui:clear');
    bus.emit('ui:message', { text: '📦 INVENTORY', className: 'room-title' });
    bus.emit('ui:message', { text: `Credits: ${player.credits || 0}`, className: 'event-text' });

    if (inventory.length === 0) {
      bus.emit('ui:message', { text: 'Empty.', className: 'event-text' });
    } else {
      const grouped = {};
      for (const itemId of inventory) {
        const item = getItem(itemId);
        if (item) {
          if (!grouped[item.type]) grouped[item.type] = [];
          grouped[item.type].push(item);
        }
      }

      for (const [type, items] of Object.entries(grouped)) {
        bus.emit('ui:message', { text: `\n--- ${type.toUpperCase()} ---`, className: 'event-text' });
        for (const item of items) {
          const statsObj = item.stats || item.effect;
          const statsStr = statsObj
            ? Object.entries(statsObj).map(([k, v]) => '+' + v + ' ' + k).join(', ')
            : '';
          bus.emit('ui:message', {
            text: `  ${item.name} ${statsStr ? `[${statsStr}]` : ''}`,
            className: 'loot-text'
          });
        }
      }
    }

    bus.emit('ui:message', { text: '\n--- EQUIPPED ---', className: 'event-text' });
    const equipped = player.equipped || {};
    bus.emit('ui:message', {
      text: `  Weapon: ${equipped.weapon ? getItem(equipped.weapon)?.name : 'None'}`,
      className: 'event-text'
    });
    bus.emit('ui:message', {
      text: `  Armor: ${equipped.armor ? getItem(equipped.armor)?.name : 'None'}`,
      className: 'event-text'
    });
    bus.emit('ui:message', {
      text: `  Accessory: ${equipped.accessory ? getItem(equipped.accessory)?.name : 'None'}`,
      className: 'event-text'
    });

    const choices = [];

    const equippable = inventory.filter(id => {
      const item = getItem(id);
      return item && ['weapon', 'armor', 'accessory'].includes(item.type);
    });
    if (equippable.length > 0) {
      choices.push({
        label: '🔧 Equip item',
        action: () => this._showEquipChoices()
      });
    }

    const consumables = inventory.filter(id => {
      const item = getItem(id);
      return item && item.type === 'consumable';
    });
    if (consumables.length > 0) {
      choices.push({
        label: '💊 Use consumable',
        action: () => this._showUseChoices()
      });
    }

    choices.push({
      label: '← Back',
      action: () => bus.emit('exploration:chooseNode', this._state.get('game.currentNode'))
    });

    bus.emit('ui:choices', choices);
  }

  equip(itemId) {
    const item = getItem(itemId);
    if (!item) return;

    const player = this._state.get('player');
    const inventory = [...(player.inventory || [])];
    const equipped = { ...(player.equipped || {}) };

    const slot = item.type;
    if (equipped[slot]) {
      inventory.push(equipped[slot]);
    }

    const idx = inventory.indexOf(itemId);
    if (idx !== -1) {
      inventory.splice(idx, 1);
    }
    equipped[slot] = itemId;

    const stats = this._calculateEquipmentStats(equipped);

    this._state.update({
      player: {
        inventory,
        equipped,
        attack: 10 + (stats.attack || 0),
        defense: 0 + (stats.defense || 0),
        maxHp: 100 + (stats.maxHp || 0),
        maxRam: 50 + (stats.maxRam || 0),
        critChance: 0.15 + (stats.critChance || 0)
      }
    });

    bus.emit('ui:message', { text: `Equipped ${item.name}.`, className: 'loot-text' });
    this.showInventory();
  }

  use(itemId) {
    const item = getItem(itemId);
    if (!item || !item.effect) return;

    const player = this._state.get('player');
    const inventory = [...(player.inventory || [])];
    const idx = inventory.indexOf(itemId);
    if (idx === -1) return;

    inventory.splice(idx, 1);

    const updates = { player: { inventory } };
    if (item.effect.hp) {
      const heal = Math.min(item.effect.hp, player.maxHp - player.hp);
      updates.player.hp = player.hp + heal;
      bus.emit('ui:message', { text: `Used ${item.name}. +${heal} HP.`, className: 'loot-text' });
    }
    if (item.effect.ram) {
      const restore = Math.min(item.effect.ram, player.maxRam - player.ram);
      updates.player.ram = player.ram + restore;
      bus.emit('ui:message', { text: `Used ${item.name}. +${restore} RAM.`, className: 'loot-text' });
    }

    this._state.update(updates);
    this.showInventory();
  }

  openShop() {
    const credits = this._state.get('player.credits') || 0;

    bus.emit('ui:clear');
    bus.emit('ui:message', { text: '🛒 BLACK MARKET', className: 'room-title' });
    bus.emit('ui:message', { text: `Your credits: ${credits}`, className: 'event-text' });

    const shopItems = [
      { itemId: 'data_pack', price: 15 },
      { itemId: 'ram_cleanup', price: 15 },
      { itemId: 'brute_forcer', price: 30 },
      { itemId: 'basic_firewall', price: 25 },
      { itemId: 'deep_dive_module', price: 50 }
    ];

    const choices = [];
    for (const { itemId, price } of shopItems) {
      const item = getItem(itemId);
      if (item) {
        choices.push({
          label: `${item.name} — ${price} credits`,
          action: () => this._buyItem(itemId, price)
        });
      }
    }

    choices.push({
      label: '← Leave shop',
      action: () => bus.emit('exploration:chooseNode', this._state.get('game.currentNode'))
    });

    bus.emit('ui:choices', choices);
  }

  _buyItem(itemId, price) {
    const credits = this._state.get('player.credits') || 0;
    if (credits < price) {
      bus.emit('ui:message', { text: '"Not enough credits, runner."', className: 'combat-log' });
      this.openShop();
      return;
    }

    const inventory = [...(this._state.get('player.inventory') || [])];
    inventory.push(itemId);
    this._state.update({
      player: {
        credits: credits - price,
        inventory
      }
    });

    const item = getItem(itemId);
    bus.emit('ui:message', { text: `Purchased ${item.name}.`, className: 'loot-text' });
    this.openShop();
  }

  _calculateEquipmentStats(equipped) {
    const stats = { attack: 0, defense: 0, maxHp: 0, maxRam: 0, critChance: 0 };
    for (const itemId of Object.values(equipped)) {
      const item = getItem(itemId);
      if (item && item.stats) {
        for (const [key, value] of Object.entries(item.stats)) {
          if (key in stats) stats[key] += value;
        }
      }
    }
    return stats;
  }

  _showEquipChoices() {
    const inventory = this._state.get('player.inventory') || [];
    const choices = [];

    for (const itemId of inventory) {
      const item = getItem(itemId);
      if (item && ['weapon', 'armor', 'accessory'].includes(item.type)) {
        const statsStr = item.stats
          ? Object.entries(item.stats).map(([k, v]) => '+' + v + ' ' + k).join(', ')
          : '';
        choices.push({
          label: `${item.name} [${statsStr}]`,
          action: () => this.equip(itemId)
        });
      }
    }

    choices.push({ label: '← Back', action: () => this.showInventory() });
    bus.emit('ui:choices', choices);
  }

  _showUseChoices() {
    const inventory = this._state.get('player.inventory') || [];
    const choices = [];

    for (const itemId of inventory) {
      const item = getItem(itemId);
      if (item && item.type === 'consumable') {
        choices.push({
          label: `${item.name} — ${item.description}`,
          action: () => this.use(itemId)
        });
      }
    }

    choices.push({ label: '← Back', action: () => this.showInventory() });
    bus.emit('ui:choices', choices);
  }
}
