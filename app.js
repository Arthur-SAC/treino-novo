// =============================================
// APP.JS — Main Application
// =============================================
// Core infrastructure: App, Router, StorageManager, Toast, Utils.
// This file is loaded after data.js and firebase-config.js.
// Additional feature modules will be appended in later tasks.

// =============================================
// APP — Main Application Controller
// =============================================

const App = {
  currentPage: 'inicio',

  /**
   * Bootstrap the entire application.
   * Called once on DOMContentLoaded.
   */
  init() {
    Router.init();
    StorageManager.init();
    FirebaseManager.init();

    // Listen for Firebase auth state changes
    FirebaseManager.onAuthStateChanged((user) => {
      if (user) {
        FirebaseManager.user = user;
        FirebaseManager.syncEnabled = true;
        FirebaseManager.syncAll();
        App.updateAuthUI(user);
      } else {
        App.updateAuthUI(null);
      }
    });

    // Initialize other modules (will be added in later tasks)
    // Dashboard.init();
    // WorkoutManager.init();
    // NutritionManager.init();
    // CareManager.init();
    // ProgressManager.init();

    Toast.show('Bem-vinda de volta! \u2728', 'success');
  },

  /**
   * Update the header to reflect auth state.
   * Shows avatar + sync indicator when logged in,
   * or a login button when Firebase is configured but user is not logged in.
   */
  updateAuthUI(user) {
    var headerActions = document.getElementById('header-actions');
    if (!headerActions) return;

    if (user) {
      headerActions.innerHTML =
        '<div class="auth-status">' +
          '<img src="' + (user.photoURL || '') + '" alt="" class="auth-avatar" onerror="this.style.display=\'none\'">' +
          '<span class="sync-indicator" title="Sincronizado">\u2601\uFE0F</span>' +
        '</div>';
    } else if (FirebaseManager.isConfigured()) {
      headerActions.innerHTML =
        '<button class="btn btn-sm btn-outline" onclick="FirebaseManager.loginWithGoogle()">' +
          'Entrar' +
        '</button>';
    }
    // If Firebase is not configured, show nothing (offline mode)
  }
};

// =============================================
// ROUTER — Hash-based page navigation
// =============================================
// Maps URL hashes (#inicio, #treino, etc.) to page sections.
// Emits a 'pageChange' CustomEvent so feature modules can react.

const Router = {
  pages: ['inicio', 'treino', 'nutricao', 'cuidados', 'progresso'],

  /**
   * Set up navigation handlers and show initial page.
   */
  init() {
    // Attach click handlers to bottom nav buttons
    var navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var page = item.dataset.page;
        Router.navigate(page);
      });
    });

    // Support browser back/forward buttons
    window.addEventListener('hashchange', function() {
      var hash = location.hash.replace('#', '') || 'inicio';
      if (Router.pages.includes(hash)) {
        Router.showPage(hash);
      }
    });

    // Show initial page from current hash, or default to 'inicio'
    var initial = location.hash.replace('#', '') || 'inicio';
    Router.showPage(Router.pages.includes(initial) ? initial : 'inicio');
  },

  /**
   * Navigate to a page by updating the URL hash.
   * The hashchange event will trigger showPage.
   */
  navigate(page) {
    location.hash = page;
    // hashchange event will call showPage
  },

  /**
   * Show a specific page and update nav active state.
   */
  showPage(page) {
    App.currentPage = page;

    // Hide all pages, then show the target
    document.querySelectorAll('.page').forEach(function(p) {
      p.classList.remove('active');
    });
    var target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.classList.toggle('active', item.dataset.page === page);
    });

    // Scroll to top of the page content
    if (target) target.scrollTop = 0;

    // Emit pageChange event for feature modules to react
    document.dispatchEvent(new CustomEvent('pageChange', { detail: { page: page } }));
  }
};

// =============================================
// STORAGE MANAGER — localStorage + Firebase sync
// =============================================
// All keys are prefixed with 'arthur_' to avoid conflicts.
// Values are wrapped in {value, timestamp} for sync merge resolution.

const StorageManager = {
  prefix: 'arthur_',

  /**
   * Initialize storage (nothing special needed currently).
   */
  init() {
    // Reserved for future initialization logic
  },

  /**
   * Get raw data for a key (includes timestamp wrapper).
   * Returns defaultValue if key doesn't exist or parsing fails.
   */
  get(key, defaultValue) {
    if (defaultValue === undefined) defaultValue = null;
    try {
      var raw = localStorage.getItem(this.prefix + key);
      if (raw === null) return defaultValue;
      return JSON.parse(raw);
    } catch (e) {
      return defaultValue;
    }
  },

  /**
   * Set raw data for a key with a timestamp for sync.
   * Automatically triggers async Firebase sync if enabled.
   */
  set(key, value) {
    try {
      var data = {
        value: value,
        timestamp: Date.now()
      };
      localStorage.setItem(this.prefix + key, JSON.stringify(data));

      // Async sync to Firebase (fire and forget)
      if (FirebaseManager.syncEnabled) {
        FirebaseManager.saveToCloud(key, data).catch(function() {});
      }
    } catch (e) {
      console.warn('Storage save failed:', e);
    }
  },

  /**
   * Get just the value (unwrapped from {value, timestamp}).
   * Handles legacy data that wasn't wrapped.
   */
  getValue(key, defaultValue) {
    if (defaultValue === undefined) defaultValue = null;
    var data = this.get(key);
    if (data && data.value !== undefined) return data.value;
    if (data !== null) return data; // Legacy format (not wrapped)
    return defaultValue;
  },

  /**
   * Set just the value (wraps in {value, timestamp} automatically).
   */
  setValue(key, value) {
    this.set(key, { value: value, timestamp: Date.now() });
  },

  /**
   * Remove a key from storage.
   */
  remove(key) {
    localStorage.removeItem(this.prefix + key);
  },

  /**
   * Get today's date as a YYYY-MM-DD string.
   */
  today() {
    return new Date().toISOString().split('T')[0];
  },

  /**
   * Get data for a specific date (defaults to today).
   * Useful for daily-resetting data like checklists and water tracker.
   */
  getForDate(key, date) {
    var d = date || this.today();
    return this.getValue(key + '_' + d, null);
  },

  /**
   * Set data for a specific date (defaults to today).
   */
  setForDate(key, value, date) {
    var d = date || this.today();
    this.setValue(key + '_' + d, value);
  },

  /**
   * Export all app data as a JSON file download.
   */
  exportData() {
    var data = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key.startsWith(this.prefix)) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          data[key] = localStorage.getItem(key);
        }
      }
    }

    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'arthur-backup-' + this.today() + '.json';
    a.click();
    URL.revokeObjectURL(url);
    Toast.show('Backup exportado com sucesso! \uD83D\uDCE6', 'success');
  },

  /**
   * Import data from a JSON backup file.
   * Reloads the page after successful import.
   */
  importData(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var data = JSON.parse(e.target.result);
        Object.keys(data).forEach(function(key) {
          localStorage.setItem(
            key,
            typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key])
          );
        });
        Toast.show('Backup restaurado! Recarregando... \uD83D\uDD04', 'success');
        setTimeout(function() { location.reload(); }, 1500);
      } catch (err) {
        Toast.show('Erro ao importar backup \uD83D\uDE1E', 'error');
      }
    };
    reader.readAsText(file);
  }
};

// =============================================
// TOAST — Simple notification system
// =============================================
// Uses the #toast element in index.html.
// CSS class 'show' slides the toast into view.

const Toast = {
  timeout: null,

  /**
   * Show a toast notification.
   * @param {string} message - Text to display
   * @param {string} type - 'info', 'success', or 'error'
   * @param {number} duration - Time in ms before auto-dismiss (default 3000)
   */
  show(message, type, duration) {
    if (type === undefined) type = 'info';
    if (duration === undefined) duration = 3000;

    var toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = 'toast toast-' + type + ' show';

    clearTimeout(this.timeout);
    this.timeout = setTimeout(function() {
      toast.classList.remove('show');
    }, duration);
  }
};

// =============================================
// UTILS — Helper functions
// =============================================
// Commonly needed utilities used across feature modules.

const Utils = {
  /**
   * Get day of week as number (0=domingo, 1=segunda ... 6=sabado).
   */
  getDayOfWeek() {
    return new Date().getDay();
  },

  /**
   * Get lowercase day name in Portuguese (no accents, for data key lookups).
   */
  getDayName(dayNum) {
    var days = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
    return days[dayNum !== null && dayNum !== undefined ? dayNum : this.getDayOfWeek()];
  },

  /**
   * Get display-friendly day name in Portuguese (with accents and capitalization).
   */
  getDayDisplayName(dayNum) {
    var days = ['Domingo', 'Segunda', 'Ter\u00E7a', 'Quarta', 'Quinta', 'Sexta', 'S\u00E1bado'];
    return days[dayNum !== null && dayNum !== undefined ? dayNum : this.getDayOfWeek()];
  },

  /**
   * Get a random item from an array.
   */
  randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },

  /**
   * Format seconds into M:SS display string.
   * Example: 95 -> "1:35"
   */
  formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + ':' + s.toString().padStart(2, '0');
  },

  /**
   * Parse a reps string like "3x15" into {sets, reps}.
   * Example: "3x15" -> {sets: 3, reps: "15"}
   * Example: "20"   -> {sets: 1, reps: "20"}
   */
  parseReps(str) {
    if (!str) return { sets: 1, reps: str };
    var match = str.match(/(\d+)x(.+)/);
    if (match) return { sets: parseInt(match[1]), reps: match[2] };
    return { sets: 1, reps: str };
  },

  /**
   * Parse a rest time string like "45seg" or "60seg" into seconds.
   * Returns 0 for empty/dash values.
   */
  parseRest(str) {
    if (!str || str === '-') return 0;
    var match = str.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  },

  /**
   * Get a greeting based on the current time of day.
   */
  getGreeting() {
    var hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  },

  /**
   * Create a debounced version of a function.
   * @param {Function} fn - Function to debounce
   * @param {number} ms - Debounce delay in milliseconds (default 300)
   * @returns {Function} Debounced function
   */
  debounce(fn, ms) {
    if (ms === undefined) ms = 300;
    var timer;
    return function() {
      var args = arguments;
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, ms);
    };
  }
};

// =============================================
// INITIALIZE APP
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
