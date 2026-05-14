const SAVE_KEY = 'deepnet-runner-save';

export class SaveManager {
  save(state) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
      // Storage full or unavailable — silently fail
    }
  }

  load() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  hasSave() {
    return localStorage.getItem(SAVE_KEY) !== null;
  }

  clear() {
    localStorage.removeItem(SAVE_KEY);
  }
}
