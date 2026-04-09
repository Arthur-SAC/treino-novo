/* =============================================
   STORAGE.JS — StorageManager
   Handles all localStorage persistence.
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var StorageManager = {

  /* ---- Internal State ---- */
  _todayKey: '',

  /* ---- Bootstrap ---- */

  /**
   * Set the internal today-key so callers can omit the date argument
   * and always get today's bucket.
   */
  init: function() {
    this._todayKey = this.getDateKey(new Date());
  },

  /* ---- Date Helpers ---- */

  /**
   * Returns a YYYY-MM-DD string for the given Date (defaults to today).
   * @param {Date} [date]
   * @returns {string}
   */
  getDateKey: function(date) {
    var d = date || new Date();
    var year  = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day   = String(d.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  },

  /* ---- Generic Key/Value ---- */

  /**
   * Read a value from localStorage, returning defaultVal on missing or parse error.
   * @param {string} key
   * @param {*} defaultVal
   * @returns {*}
   */
  getValue: function(key, defaultVal) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return defaultVal;
      return JSON.parse(raw);
    } catch (e) {
      return defaultVal;
    }
  },

  /**
   * Write a value to localStorage (JSON-serialised).
   * Silently swallows QuotaExceededError.
   * @param {string} key
   * @param {*} val
   */
  setValue: function(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      // Storage quota exceeded or private browsing — degrade gracefully
    }
  },

  /* ---- Date-prefixed Buckets ---- */

  /**
   * Read a value scoped to a specific date bucket.
   * @param {string} key     — logical key (no date prefix)
   * @param {Date}   [date]  — defaults to today
   * @returns {*}
   */
  getForDate: function(key, date) {
    var prefix = this.getDateKey(date);
    return this.getValue(prefix + ':' + key, null);
  },

  /**
   * Write a value into a specific date bucket.
   * @param {string} key
   * @param {*}      val
   * @param {Date}   [date]  — defaults to today
   */
  setForDate: function(key, val, date) {
    var prefix = this.getDateKey(date);
    this.setValue(prefix + ':' + key, val);
  },

  /* ---- Checklist ---- */

  /**
   * Return the daily checklist state object for the given date.
   * Shape: { itemId: boolean, ... }
   * @param {Date} [date]
   * @returns {Object}
   */
  getChecklist: function(date) {
    return this.getForDate('checklist', date) || {};
  },

  /**
   * Persist the daily checklist state for the given date.
   * @param {Object} data
   * @param {Date}   [date]
   */
  setChecklist: function(data, date) {
    this.setForDate('checklist', data, date);
  },

  /* ---- Workout Data ---- */

  /**
   * Return workout data (series / weights logged) for the given date.
   * Shape: { exerciseId: { sets: [{reps, weight}, ...] }, ... }
   * @param {Date} [date]
   * @returns {Object}
   */
  getWorkoutData: function(date) {
    return this.getForDate('workout', date) || {};
  },

  /**
   * Persist workout data for the given date.
   * @param {Object} data
   * @param {Date}   [date]
   */
  setWorkoutData: function(data, date) {
    this.setForDate('workout', data, date);
  },

  /* ---- Weight History per Exercise ---- */

  /**
   * Return weight history array for an exercise.
   * Each entry: { date: 'YYYY-MM-DD', weight: number }
   * At most 52 entries (1 year of weekly data) are kept.
   * @param {string} exerciseId
   * @returns {Array}
   */
  getWeightHistory: function(exerciseId) {
    return this.getValue('wh:' + exerciseId, []);
  },

  /**
   * Append a new weight entry for an exercise.
   * Trims to the last 52 entries before saving.
   * @param {string} exerciseId
   * @param {number} weight
   * @param {Date}   [date]  — defaults to today
   */
  addWeightHistory: function(exerciseId, weight, date) {
    var history = this.getWeightHistory(exerciseId);
    history.push({
      date:   this.getDateKey(date),
      weight: weight
    });
    // Keep only the last 52 entries
    if (history.length > 52) {
      history = history.slice(history.length - 52);
    }
    this.setValue('wh:' + exerciseId, history);
  },

  /* ---- Body Measurements ---- */

  /**
   * Return all measurement entries.
   * Each entry: { date, peso, quadril, cintura, busto, ... }
   * @returns {Array}
   */
  getMeasurements: function() {
    return this.getValue('measurements', []);
  },

  /**
   * Persist the full measurements array.
   * @param {Array} data
   */
  setMeasurements: function(data) {
    this.setValue('measurements', data);
  },

  /* ---- Training Phase ---- */

  /**
   * Return the current training phase (1-4). Defaults to 1.
   * @returns {number}
   */
  getPhase: function() {
    return this.getValue('currentPhase', 1);
  },

  /**
   * Set the current training phase.
   * @param {number} phase
   */
  setPhase: function(phase) {
    this.setValue('currentPhase', phase);
  }

};
