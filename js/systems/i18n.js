import { TRANSLATIONS } from '../data/i18n.js';
import { bus } from '../core/event-bus.js';

/**
 * I18nManager - Internationalization manager
 */
class I18nManager {
  constructor() {
    this._lang = 'zh';
    this._listeners = new Set();
  }

  get lang() {
    return this._lang;
  }

  /**
   * Set language
   * @param {string} lang - Language code ('zh' or 'en')
   */
  setLang(lang) {
    if (TRANSLATIONS[lang]) {
      this._lang = lang;
      for (const listener of this._listeners) {
        listener(lang);
      }
      bus.emit('i18n:changed', lang);
    }
  }

  /**
   * Toggle between zh and en
   */
  toggle() {
    this.setLang(this._lang === 'zh' ? 'en' : 'zh');
  }

  /**
   * Translate a key
   * @param {string} key - Translation key
   * @param {...string} args - Replacement arguments for {0}, {1}, etc.
   * @returns {string}
   */
  t(key, ...args) {
    let text = TRANSLATIONS[this._lang]?.[key] || TRANSLATIONS['zh']?.[key] || key;
    for (let i = 0; i < args.length; i++) {
      text = text.replace(`{${i}}`, args[i]);
    }
    return text;
  }

  /**
   * Listen for language changes
   * @param {Function} listener
   * @returns {Function} Unsubscribe function
   */
  onChange(listener) {
    this._listeners.add(listener);
    return () => this._listeners.delete(listener);
  }
}

export const i18n = new I18nManager();
