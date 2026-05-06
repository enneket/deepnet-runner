import { bus } from './event-bus.js';

/**
 * StateManager - Immutable state with change notifications
 */
export class StateManager {
  constructor(initialState = {}) {
    this._state = structuredClone(initialState);
    this._listeners = new Set();
  }

  /**
   * Get current state (read-only snapshot)
   */
  get state() {
    return this._state;
  }

  /**
   * Get a nested value by dot path
   * @param {string} path - e.g., 'player.hp'
   */
  get(path) {
    const keys = path.split('.');
    let current = this._state;
    for (const key of keys) {
      if (current == null) return undefined;
      current = current[key];
    }
    return current;
  }

  /**
   * Set a nested value by dot path (immutable)
   */
  set(path, value) {
    const keys = path.split('.');
    this._state = this._setNested(this._state, keys, value);
    this._notify();
  }

  /**
   * Merge an object into state (shallow merge at top level)
   */
  update(partial) {
    this._state = this._deepMerge(this._state, partial);
    this._notify();
  }

  /**
   * Subscribe to state changes
   */
  onChange(listener) {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }

  /**
   * Reset to initial state
   */
  reset(initialState) {
    this._state = structuredClone(initialState);
    this._notify();
  }

  // --- Private ---

  _setNested(obj, keys, value) {
    const clone = { ...obj };
    if (keys.length === 1) {
      clone[keys[0]] = value;
    } else {
      clone[keys[0]] = this._setNested(
        obj[keys[0]] || {},
        keys.slice(1),
        value
      );
    }
    return clone;
  }

  _deepMerge(target, source) {
    const result = { ...target };
    for (const key of Object.keys(source)) {
      if (
        source[key] != null &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        target[key] != null &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        result[key] = this._deepMerge(target[key], source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }

  _notify() {
    for (const listener of this._listeners) {
      listener(this._state);
    }
    bus.emit('state:changed', this._state);
  }
}
