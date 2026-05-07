import { TRANSLATIONS } from '../data/i18n.js';
import { bus } from '../core/event-bus.js';

/**
 * I18nManager - Internationalization manager
 */
class I18nManager {
  constructor() {
    this._lang = 'zh';
    this._listeners = new Set();
    this._procTexts = {};
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
    let text = this._procTexts[key]?.[this._lang]
      || this._procTexts[key]?.['zh']
      || TRANSLATIONS[this._lang]?.[key]
      || TRANSLATIONS['zh']?.[key]
      || key;
    for (let i = 0; i < args.length; i++) {
      text = text.replace(`{${i}}`, args[i]);
    }
    return text;
  }

  /**
   * Register procedural text entries for generated layers
   * @param {Object} texts - Map of key -> { zh, en }
   */
  registerProc(texts) {
    Object.assign(this._procTexts, texts);
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
