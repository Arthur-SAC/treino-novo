/* =============================================
   UTILS.JS — Utility Functions
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var Utils = {

  /* ---- Date & Time ---- */

  /**
   * Return the current day of the week as 0 (Sunday) – 6 (Saturday).
   * @returns {number}
   */
  getDayOfWeek: function() {
    return new Date().getDay();
  },

  /**
   * Return the current hour of the day as 0 – 23.
   * @returns {number}
   */
  getHour: function() {
    return new Date().getHours();
  },

  /* ---- Formatting ---- */

  /**
   * Format a duration in seconds as "M:SS" (e.g. 90 → "1:30").
   * @param {number} seconds
   * @returns {string}
   */
  formatTime: function(seconds) {
    var s = Math.max(0, Math.floor(seconds));
    var mins = Math.floor(s / 60);
    var secs = s % 60;
    return mins + ':' + (secs < 10 ? '0' : '') + secs;
  },

  /* ---- Greetings ---- */

  /**
   * Return a Portuguese time-of-day greeting based on the current hour.
   * @returns {string}
   */
  getGreeting: function() {
    var hour = this.getHour();
    if (hour >= 5 && hour < 12) return 'Bom dia';
    if (hour >= 12 && hour < 18) return 'Boa tarde';
    return 'Boa noite';
  },

  /* ---- Day Names ---- */

  /**
   * Return the Portuguese day name for a given day index (0–6).
   * @param {number} day  — 0 = Sunday … 6 = Saturday
   * @returns {string}
   */
  getDayName: function(day) {
    var names = [
      'Domingo',
      'Segunda-feira',
      'Terca-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sabado'
    ];
    return names[day] || '';
  },

  /* ---- Weight Progression ---- */

  /**
   * Suggest the next training weight based on recent history.
   * Rule: if the last 3 entries all have the same weight, suggest +2 kg.
   * Otherwise keep the most recent weight.
   *
   * @param {Array<{date: string, weight: number}>} history
   * @returns {number|null}  — null when history is empty
   */
  suggestNextWeight: function(history) {
    if (!history || history.length === 0) return null;

    var last = history[history.length - 1].weight;
    if (history.length < 3) return last;

    var recent = history.slice(-3);
    var allSame = recent.every(function(entry) {
      return entry.weight === recent[0].weight;
    });

    return allSame ? last + 2 : last;
  }

};
