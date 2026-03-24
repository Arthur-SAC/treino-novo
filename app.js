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

    // Header greeting
    const headerGreeting = document.getElementById('header-greeting');
    if (headerGreeting) {
      headerGreeting.innerHTML = '<h1 style="font-size:1.1rem; font-family: Playfair Display, serif;">' + Utils.getContextGreeting() + '</h1>';
    }

    // Header actions: settings gear
    const headerActions = document.getElementById('header-actions');
    if (headerActions) {
      headerActions.innerHTML = '<button class="btn-icon" id="settings-btn" style="font-size:1.3rem; background:none; border:none; cursor:pointer;" title="Configurações">&#9881;</button>';
    }

    // Initialize feature modules
    VideoModal.init();
    TimerEngine.init();
    BadgeManager.init();
    DayManager.init();
    WorkoutManager.init();
    NutritionManager.init();
    CareManager.init();         // Task 9
    ProgressManager.init();     // Task 10
    SettingsManager.init();     // Task 12/13

    // Start notification scheduler if already permitted
    if ('Notification' in window && Notification.permission === 'granted') {
      SettingsManager.scheduleNotifications();
    }

    var phase = StorageManager.getValue('currentPhase', 1);
    var welcomeMsgs = {
      1: 'Bora construir a fundação! \uD83D\uDCAA',
      2: 'Fase de construção — cada série conta! \uD83D\uDD25',
      3: 'Definição ativada — brilha, Arthur! \u2728',
      4: 'Amazona mode ON! Você é imparável! \uD83D\uDC51'
    };
    Toast.show(welcomeMsgs[phase] || 'Bem-vinda de volta!', 'success');
  },

  /**
   * Update the header to reflect auth state.
   * Shows avatar + sync indicator alongside settings gear when logged in.
   * Always keeps the settings gear visible.
   */
  updateAuthUI(user) {
    var headerActions = document.getElementById('header-actions');
    if (!headerActions) return;

    var html = '';

    if (user) {
      html +=
        '<div class="auth-status">' +
          '<img src="' + (user.photoURL || '') + '" alt="" class="auth-avatar" onerror="this.style.display=\'none\'">' +
          '<span class="sync-indicator" title="Sincronizado">&#9729;</span>' +
        '</div>';
    }

    // Always show settings gear
    html += '<button class="btn-icon" id="settings-btn" style="font-size:1.3rem; background:none; border:none; cursor:pointer;" title="Configurações">&#9881;</button>';

    headerActions.innerHTML = html;
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

    this.initSwipe();
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
   * Applies a subtle fade-in animation on page switch.
   */
  _navigating: false,

  showPage(page) {
    // Guard: skip if already on this page or mid-navigation
    if (page === App.currentPage && document.querySelector('#page-' + page + '.active')) return;
    if (Router._navigating) return;
    Router._navigating = true;

    // Determine direction based on page index difference
    var prevIdx = Router.pages.indexOf(App.currentPage);
    var nextIdx = Router.pages.indexOf(page);
    var animName = (nextIdx >= prevIdx) ? 'slideFromRight 0.3s ease' : 'slideFromLeft 0.3s ease';

    App.currentPage = page;

    // Hide all pages, show target with directional animation
    document.querySelectorAll('.page').forEach(function(p) {
      p.classList.remove('active');
      p.style.animation = '';
    });
    var target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active');
      target.style.animation = 'none';
      void target.offsetHeight;
      target.style.animation = animName;
    }

    // Update bottom nav active state
    document.querySelectorAll('.nav-item').forEach(function(item) {
      item.classList.toggle('active', item.dataset.page === page);
    });

    if (target) target.scrollTop = 0;
    document.dispatchEvent(new CustomEvent('pageChange', { detail: { page: page } }));

    // Release navigation lock after animation completes
    setTimeout(function() { Router._navigating = false; }, 350);
  },

  /**
   * Set up swipe gestures on the main content container
   * to navigate between tabs with horizontal swipes.
   */
  initSwipe() {
    var startX = 0;
    var startY = 0;
    var swipeValid = false;
    var container = document.getElementById('app-content');
    if (!container) return;

    container.addEventListener('touchstart', function(e) {
      // Ignore swipes that start on interactive elements
      var tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON' ||
          e.target.closest('button') || e.target.closest('a') || e.target.closest('label') ||
          e.target.closest('.sub-tabs') || e.target.closest('.phase-selector-card') ||
          e.target.closest('.day-selector')) {
        swipeValid = false;
        return;
      }
      swipeValid = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchend', function(e) {
      if (!swipeValid) return;
      var endX = e.changedTouches[0].clientX;
      var endY = e.changedTouches[0].clientY;
      var diffX = endX - startX;
      var diffY = endY - startY;

      // Only trigger if horizontal swipe > 70px and strongly horizontal
      if (Math.abs(diffX) > 70 && Math.abs(diffX) > Math.abs(diffY) * 2) {
        var currentIdx = Router.pages.indexOf(App.currentPage);
        if (diffX < 0 && currentIdx < Router.pages.length - 1) {
          Router.navigate(Router.pages[currentIdx + 1]);
        } else if (diffX > 0 && currentIdx > 0) {
          Router.navigate(Router.pages[currentIdx - 1]);
        }
      }
      swipeValid = false;
    }, { passive: true });
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
    // Migrate double-wrapped data from previous bug
    // Old setValue created: { value: { value: X, timestamp: T1 }, timestamp: T2 }
    // Correct format is: { value: X, timestamp: T }
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key && key.startsWith(this.prefix)) {
        try {
          var raw = JSON.parse(localStorage.getItem(key));
          if (raw && typeof raw.value === 'object' && raw.value !== null
              && raw.value.value !== undefined && raw.value.timestamp !== undefined
              && Object.keys(raw.value).length === 2) {
            raw.value = raw.value.value;
            localStorage.setItem(key, JSON.stringify(raw));
          }
        } catch(e) { /* skip unparseable entries */ }
      }
    }
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
   * Set just the value (wraps in {value, timestamp} automatically via set()).
   */
  setValue(key, value) {
    this.set(key, value);
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

  getContextGreeting() {
    var base = this.getGreeting();
    var streak = StorageManager.getValue('streak', 0);
    var phase = StorageManager.getValue('currentPhase', 1);

    var sched = (typeof WEEK_SCHEDULE !== 'undefined') ? WEEK_SCHEDULE[new Date().getDay()] : null;
    var workoutLabel = sched ? sched.label : null;
    var isRest = sched && sched.type === 'descanso';

    var parts = [base + ', Arthur!'];

    if (sched && !isRest && workoutLabel) {
      parts.push('Hoje: ' + workoutLabel + ' \uD83D\uDCAA');
    } else if (isRest) {
      parts.push('Dia de descanso \uD83D\uDE0C');
    }

    if (streak >= 7) {
      parts.push(streak + ' dias de streak \uD83D\uDD25');
    }

    if (phase >= 4) {
      parts.push('Modo Amazona \uD83D\uDC51');
    }

    return parts.join(' | ');
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
  },

  /**
   * Format a YYYY-MM-DD date string into Brazilian format DD/MM/YYYY.
   */
  formatDateBR(dateStr) {
    if (!dateStr) return '';
    var parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return parts[2] + '/' + parts[1] + '/' + parts[0];
  }
};

// =============================================
// BADGE MANAGER — Achievement / badge tracking
// =============================================
// Tracks unlocked badges and shows toast notifications on unlock.

const BadgeManager = {
  unlocked: [],

  init() {
    this.unlocked = StorageManager.getValue('unlockedBadges', []);
  },

  unlock(badgeId) {
    if (this.unlocked.includes(badgeId)) return;
    this.unlocked.push(badgeId);
    StorageManager.setValue('unlockedBadges', this.unlocked);

    const badge = BADGES.find(b => b.id === badgeId);
    if (badge) {
      Toast.show(`${badge.emoji} Conquista desbloqueada: ${badge.name}!`, 'success', 4000);
      var bid = badgeId;
      setTimeout(function() {
        var badgeEl = document.querySelector('.badge[data-badge-id="' + bid + '"]');
        if (badgeEl) {
          badgeEl.classList.add('just-unlocked');
          setTimeout(function() { badgeEl.classList.remove('just-unlocked'); }, 900);
        }
      }, 200);
    }
  },

  isUnlocked(badgeId) {
    return this.unlocked.includes(badgeId);
  },

  checkAll() {
    var streak = StorageManager.getValue('streak', 0);
    if (streak >= 7) this.unlock('streak-7');
    if (streak >= 30) this.unlock('streak-30');

    var phase = StorageManager.getValue('currentPhase', 1);
    if (phase >= 2) this.unlock('phase-2');
    if (phase >= 3) this.unlock('phase-3');
    if (phase >= 4) this.unlock('phase-4');

    var gluteDays = this.countDaysWithChecklist('treino', 365);
    if (gluteDays >= 14) this.unlock('glute-awakened');
    if (gluteDays >= 1) this.unlock('first-workout');

    var waterStreak = this.countConsecutiveDays('agua');
    if (waterStreak >= 7) this.unlock('hydrated-7');

    var skinStreak = this.countConsecutiveSkincareDays();
    if (skinStreak >= 30) this.unlock('skin-30');
  },

  countDaysWithChecklist(itemId, lookbackDays) {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < lookbackDays; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data[itemId]) count++;
    }
    return count;
  },

  countConsecutiveDays(itemId) {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data[itemId]) {
        count++;
      } else {
        break;
      }
    }
    return count;
  },

  countConsecutiveSkincareDays() {
    var count = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var d = new Date(today);
      d.setDate(d.getDate() - i);
      var dateStr = d.toISOString().slice(0, 10);
      var data = StorageManager.getForDate('checklist', dateStr);
      if (data && data['skincare-manha'] && data['skincare-noite']) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }
};

// =============================================
// VIDEO MODAL — YouTube video player overlay
// =============================================
// Reusable component that opens a YouTube video in a modal.
// Sources: exercise, recipe, skincare, hair, depilation.

const VideoModal = {
  modal: null,
  iframe: null,
  gifContainer: null,
  gifImage: null,
  gifLoading: null,
  videoContainer: null,
  youtubeLink: null,
  _currentVideo: null,

  init() {
    this.modal = document.getElementById('video-modal');
    this.iframe = document.getElementById('video-iframe');
    this.gifContainer = document.getElementById('gif-container');
    this.gifImage = document.getElementById('gif-image');
    this.gifLoading = document.getElementById('gif-loading');
    this.videoContainer = document.getElementById('video-container');
    this.youtubeLink = document.getElementById('video-youtube-link');

    var self = this;
    this.gifImage.addEventListener('load', function() {
      this.classList.add('loaded');
      document.getElementById('gif-loading').style.display = 'none';
    });
    this.gifImage.addEventListener('error', function() {
      document.getElementById('gif-container').classList.add('hidden');
      if (self._currentVideo && self._currentVideo.youtubeId
          && self._currentVideo.youtubeId !== 'PLACEHOLDER') {
        self.showYouTube(self._currentVideo);
      } else {
        Toast.show('V\u00eddeo indispon\u00edvel. Leia as instru\u00e7\u00f5es escritas.', 'info');
      }
    });

    // Close button
    document.getElementById('video-modal-close').addEventListener('click', () => this.close());

    // Close on overlay click (but not on modal content click)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) this.close();
    });
  },

  showYouTube(video) {
    if (!video || !video.youtubeId || video.youtubeId === 'PLACEHOLDER') return;
    if (!navigator.onLine) {
      Toast.show('Conecte a internet pra ver o video', 'info');
      return;
    }
    this.iframe.src = 'https://www.youtube-nocookie.com/embed/' + video.youtubeId + '?rel=0&autoplay=0';
    this.videoContainer.classList.remove('hidden');
  },

  /**
   * Open video by key and source map.
   * @param {string} videoKey - Key in the video map (e.g. 'agachamento-smith')
   * @param {string} source - 'exercise', 'recipe', 'skincare', 'hair', or 'depilation'
   */
  open(videoKey, source) {
    const maps = {
      exercise: EXERCISE_VIDEOS,
      recipe: RECIPE_VIDEOS,
      skincare: SKINCARE_VIDEOS,
      hair: HAIR_VIDEOS,
      depilation: DEPILATION_VIDEOS
    };

    const videoMap = maps[source] || EXERCISE_VIDEOS;
    const video = videoMap[videoKey];

    if (!video) { Toast.show('Vídeo não encontrado', 'error'); return; }

    this._currentVideo = video;

    // Reset both containers
    this.gifContainer.classList.add('hidden');
    this.videoContainer.classList.add('hidden');
    this.gifImage.src = '';
    this.gifImage.classList.remove('loaded');
    this.gifLoading.style.display = '';
    this.iframe.src = '';
    this.youtubeLink.classList.add('hidden');
    this.youtubeLink.href = '#';

    // GIF or YouTube
    if (video.gifUrl) {
      this.gifContainer.classList.remove('hidden');
      this.gifImage.src = video.gifUrl;
      this.gifImage.alt = video.title || '';
      // Show YouTube as secondary link
      if (video.youtubeId && video.youtubeId !== 'PLACEHOLDER') {
        this.youtubeLink.href = 'https://www.youtube.com/watch?v=' + video.youtubeId;
        this.youtubeLink.classList.remove('hidden');
      }
    } else {
      this.showYouTube(video);
    }

    document.getElementById('video-title').textContent = video.title || '';
    document.getElementById('video-tips').textContent = video.tips || '';

    var mistakesEl = document.getElementById('video-mistakes');
    if (mistakesEl) {
      if (video.commonMistakes) {
        mistakesEl.textContent = '\u26a0\ufe0f Erros comuns: ' + video.commonMistakes;
        mistakesEl.classList.add('visible');
      } else {
        mistakesEl.textContent = '';
        mistakesEl.classList.remove('visible');
      }
    }

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.modal.classList.add('hidden');
    this.iframe.src = '';
    this.gifImage.src = '';
    this.gifContainer.classList.add('hidden');
    this.videoContainer.classList.add('hidden');
    this.youtubeLink.classList.add('hidden');
    this._currentVideo = null;
    var mistakesEl = document.getElementById('video-mistakes');
    if (mistakesEl) { mistakesEl.textContent = ''; mistakesEl.classList.remove('visible'); }
    document.body.style.overflow = '';
  }
};

// =============================================
// TIMER ENGINE — Web Worker-based timer system
// =============================================
// Countdown and count-up timers with vibration, audio beep,
// and visual progress bar. Used for rest periods, vacuum holds,
// stretches with sides, and cardio count-up.

const TimerEngine = {
  worker: null,
  overlay: null,
  isRunning: false,
  currentSeconds: 0,
  totalSeconds: 0,
  timerType: 'rest', // 'rest', 'countdown', 'countup'
  onComplete: null,

  init() {
    this.overlay = document.getElementById('timer-overlay');
    this.createWorker();

    // Toggle collapse/expand
    document.getElementById('timer-toggle').addEventListener('click', () => this.toggleCollapse());
    document.getElementById('timer-header').addEventListener('click', () => this.toggleCollapse());

    // +15seg button
    document.getElementById('timer-add').addEventListener('click', () => {
      if (this.isRunning) {
        this.totalSeconds += 15;
        this.currentSeconds += 15;
        this.updateDisplay();
      }
    });

    // Skip button
    document.getElementById('timer-skip').addEventListener('click', () => this.stop());
  },

  createWorker() {
    // Create Web Worker from inline code (Blob URL)
    const workerCode = `
      let interval = null;
      let seconds = 0;

      self.onmessage = function(e) {
        if (e.data.command === 'start') {
          seconds = e.data.seconds;
          clearInterval(interval);
          interval = setInterval(() => {
            seconds--;
            self.postMessage({ type: 'tick', seconds: seconds });
            if (seconds <= 0) {
              clearInterval(interval);
              self.postMessage({ type: 'done' });
            }
          }, 1000);
        } else if (e.data.command === 'startUp') {
          // Count UP (for cardio)
          seconds = 0;
          clearInterval(interval);
          interval = setInterval(() => {
            seconds++;
            self.postMessage({ type: 'tick', seconds: seconds });
            if (e.data.target && seconds >= e.data.target) {
              clearInterval(interval);
              self.postMessage({ type: 'done' });
            }
          }, 1000);
        } else if (e.data.command === 'stop') {
          clearInterval(interval);
        } else if (e.data.command === 'addTime') {
          seconds += e.data.seconds;
        }
      };
    `;
    const blob = new Blob([workerCode], { type: 'application/javascript' });
    this.worker = new Worker(URL.createObjectURL(blob));

    this.worker.onmessage = (e) => {
      if (e.data.type === 'tick') {
        this.currentSeconds = e.data.seconds;
        this.updateDisplay();
      } else if (e.data.type === 'done') {
        this.onTimerComplete();
      }
    };
  },

  /**
   * Start a countdown timer (rest, vacuum, stretch, plank).
   * @param {number} seconds - Duration in seconds
   * @param {string} label - Label text (e.g. 'DESCANSO')
   * @param {string|null} nextExercise - Name of next exercise (shown below timer)
   * @param {Function|null} onComplete - Callback when timer finishes
   */
  startCountdown(seconds, label, nextExercise, onComplete) {
    this.totalSeconds = seconds;
    this.currentSeconds = seconds;
    this.timerType = 'countdown';
    this.isRunning = true;
    this.onComplete = onComplete || null;

    // Update UI
    document.getElementById('timer-label').textContent = label || 'DESCANSO';
    document.getElementById('timer-next').textContent = nextExercise ? `Proximo: ${nextExercise}` : '';

    this.overlay.classList.remove('hidden', 'collapsed');
    this.overlay.classList.add('active');
    this.updateDisplay();

    // Start worker
    this.worker.postMessage({ command: 'start', seconds: seconds });
  },

  /**
   * Convenience method: start rest timer for workout.
   */
  startRest(seconds, nextExercise, onComplete) {
    this.startCountdown(seconds, 'DESCANSO', nextExercise, onComplete);
  },

  /**
   * Start vacuum exercise series (hold + rest cycles).
   * @param {number} holdSeconds - Seconds to hold each rep
   * @param {number} restSeconds - Seconds to rest between reps
   * @param {number} totalSets - Total number of sets
   * @param {Function|null} onAllComplete - Callback when all sets are done
   */
  startVacuumSeries(holdSeconds, restSeconds, totalSets, onAllComplete) {
    let currentSet = 1;
    const doNextSet = () => {
      if (currentSet > totalSets) {
        if (onAllComplete) onAllComplete();
        this.hide();
        return;
      }
      this.startCountdown(holdSeconds, `VACUUM ${currentSet}/${totalSets} — SEGURE!`, null, () => {
        if (currentSet < totalSets) {
          currentSet++;
          this.startCountdown(restSeconds, `DESCANSO — Prox: Vacuum ${currentSet}/${totalSets}`, null, doNextSet);
        } else {
          currentSet++;
          doNextSet();
        }
      });
    };
    doNextSet();
  },

  /**
   * Start a count-up timer (for cardio).
   * @param {number} targetSeconds - Target duration (shown as goal)
   * @param {string} label - Label text
   */
  startCountUp(targetSeconds, label) {
    this.totalSeconds = targetSeconds;
    this.currentSeconds = 0;
    this.timerType = 'countup';
    this.isRunning = true;

    document.getElementById('timer-label').textContent = label || 'CARDIO';
    document.getElementById('timer-next').textContent = targetSeconds ? `Meta: ${Utils.formatTime(targetSeconds)}` : '';

    this.overlay.classList.remove('hidden', 'collapsed');
    this.overlay.classList.add('active');
    this.updateDisplay();

    this.worker.postMessage({ command: 'startUp', target: targetSeconds });
  },

  /**
   * Start a stretch timer that does left side then right side.
   * @param {number} secondsPerSide - Seconds for each side
   * @param {string} exerciseName - Name of the exercise
   * @param {Function|null} onComplete - Callback when both sides are done
   */
  startStretchWithSides(secondsPerSide, exerciseName, onComplete) {
    this.startCountdown(secondsPerSide, `${exerciseName} — LADO ESQUERDO`, null, () => {
      this.startCountdown(secondsPerSide, `${exerciseName} — LADO DIREITO`, null, onComplete);
    });
  },

  stop() {
    this.worker.postMessage({ command: 'stop' });
    this.isRunning = false;
    if (this.onComplete) {
      const cb = this.onComplete;
      this.onComplete = null;
      cb();
    } else {
      this.hide();
    }
  },

  hide() {
    this.isRunning = false;
    this.overlay.classList.add('hidden');
    this.overlay.classList.remove('active');
  },

  toggleCollapse() {
    if (this.overlay.classList.contains('active')) {
      this.overlay.classList.toggle('collapsed');
    }
  },

  updateDisplay() {
    const display = document.getElementById('timer-display');
    const bar = document.getElementById('timer-progress-bar');

    if (this.timerType === 'countup') {
      display.textContent = Utils.formatTime(this.currentSeconds);
      const pct = this.totalSeconds > 0 ? (this.currentSeconds / this.totalSeconds) * 100 : 0;
      bar.style.width = Math.min(pct, 100) + '%';
    } else {
      display.textContent = Utils.formatTime(Math.max(0, this.currentSeconds));
      const pct = this.totalSeconds > 0 ? ((this.totalSeconds - this.currentSeconds) / this.totalSeconds) * 100 : 0;
      bar.style.width = pct + '%';

      // Color transition: rosa(201,123,181) -> dourado(212,168,83) -> verde(110,203,139)
      var progress = this.totalSeconds > 0 ? 1 - (this.currentSeconds / this.totalSeconds) : 0;
      var r, g, b, t;
      if (progress < 0.5) {
        t = progress / 0.5;
        r = Math.round(201 + (212 - 201) * t);
        g = Math.round(123 + (168 - 123) * t);
        b = Math.round(181 + (83 - 181) * t);
      } else {
        t = (progress - 0.5) / 0.5;
        r = Math.round(212 + (110 - 212) * t);
        g = Math.round(168 + (203 - 168) * t);
        b = Math.round(83 + (139 - 83) * t);
      }
      bar.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Subtle pulse on seconds
    display.style.transform = 'scale(1.02)';
    setTimeout(function() { display.style.transform = 'scale(1)'; }, 150);
  },

  onTimerComplete() {
    this.isRunning = false;

    // Vibrate
    if (navigator.vibrate) {
      navigator.vibrate([200, 100, 200]);
    }

    // Beep using AudioContext
    this.playBeep();

    // Flash effect
    const display = document.getElementById('timer-display');
    display.style.color = '#d4a853'; // gold flash
    setTimeout(() => { display.style.color = ''; }, 500);

    // Call onComplete callback
    if (this.onComplete) {
      const cb = this.onComplete;
      this.onComplete = null;
      setTimeout(cb, 300);
    } else {
      // Auto-hide after 2 seconds if no callback
      setTimeout(() => this.hide(), 2000);
    }
  },

  playBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880; // A5 note
      gain.gain.value = 0.3;
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
      // Second beep
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.frequency.value = 1100;
        gain2.gain.value = 0.3;
        osc2.start();
        osc2.stop(ctx.currentTime + 0.3);
      }, 300);
    } catch (e) {
      // AudioContext not available, skip beep
    }
  }
};

// =============================================
// DAY MANAGER — Home page / narrative day cards
// =============================================
// Replaces the old Dashboard. Renders a mini-dashboard header
// (greeting, streak, power move, macros bar, water tracker)
// and collapsible narrative cards based on the day type.

const DayManager = {
  init() {
    var self = this;

    var container = document.getElementById('dashboard-content');
    if (container) {
      container.addEventListener('click', function(e) {
        // Card header collapse/expand
        var header = e.target.closest('.day-card-header');
        if (header) {
          var card = header.closest('.day-card');
          if (card) {
            self.toggleCard(card.dataset.cardId);
          }
          return;
        }

        // Water bottle click
        var bottle = e.target.closest('.timeline-bottle');
        if (bottle) {
          var bottleNum = parseInt(bottle.dataset.bottle);
          var currentWater = StorageManager.getForDate('water') || 0;
          if (bottleNum === currentWater) {
            StorageManager.setForDate('water', bottleNum - 1);
          } else {
            StorageManager.setForDate('water', bottleNum);
          }
          self.render();
          return;
        }

        // Meal option click in day cards
        var mealOpt = e.target.closest('.day-card-meal-opt');
        if (mealOpt) {
          e.stopPropagation();
          var mealId = mealOpt.dataset.mealId;
          var optIdx = parseInt(mealOpt.dataset.optIdx);
          StorageManager.setValue('mealChoice_' + mealId, optIdx);
          self.render();
          return;
        }

        // Workout card tap -> navigate to treino
        var workoutLink = e.target.closest('.day-card-workout-link');
        if (workoutLink) {
          Router.navigate('treino');
          return;
        }
      });
    }

    this.render();

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'inicio') self.render();
    });
  },

  getDayType() {
    var dayOfWeek = new Date().getDay();
    var schedule = WEEK_SCHEDULE[dayOfWeek];
    return schedule ? schedule.type : 'descanso-total';
  },

  getTodaySchedule() {
    var dayOfWeek = new Date().getDay();
    return WEEK_SCHEDULE[dayOfWeek] || { type: 'descanso-total', label: '😴 Descanso total', workout: null };
  },

  getCardsForToday() {
    var dayType = this.getDayType();
    var layout = DAY_CARD_LAYOUTS[dayType] || DAY_CARD_LAYOUTS['descanso-total'];
    return layout;
  },

  getCollapsedState() {
    return StorageManager.getForDate('dayCardsCollapsed') || {};
  },

  toggleCard(cardId) {
    var collapsed = this.getCollapsedState();
    collapsed[cardId] = !collapsed[cardId];
    StorageManager.setForDate('dayCardsCollapsed', collapsed);
    // Animate without full re-render
    var cardEl = document.querySelector('.day-card[data-card-id="' + cardId + '"]');
    if (cardEl) {
      cardEl.classList.toggle('collapsed', !!collapsed[cardId]);
    }
  },

  getMealChoice(mealId) {
    return StorageManager.getValue('mealChoice_' + mealId, 0);
  },

  calculateDayMacros() {
    var totals = { kcal: 0, prot: 0, carb: 0, fat: 0 };
    var cardIds = this.getCardsForToday();
    for (var i = 0; i < cardIds.length; i++) {
      var card = DAILY_CARDS[cardIds[i]];
      if (card && card.mealId && MEAL_OPTIONS[card.mealId]) {
        var mealData = MEAL_OPTIONS[card.mealId];
        var choiceIdx = this.getMealChoice(card.mealId);
        if (mealData.options && mealData.options[choiceIdx]) {
          var opt = mealData.options[choiceIdx];
          totals.kcal += opt.kcal || 0;
          totals.prot += opt.prot || 0;
          totals.carb += opt.carb || 0;
          totals.fat += opt.fat || 0;
        }
      }
    }
    return totals;
  },

  calculateStreak() {
    var streak = 0;
    var today = new Date();
    for (var i = 0; i < 365; i++) {
      var date = new Date(today);
      date.setDate(date.getDate() - i);
      var dateStr = date.toISOString().split('T')[0];
      var data = StorageManager.getForDate('timeline', dateStr);
      if (!data) {
        data = StorageManager.getForDate('checklist', dateStr);
      }
      if (!data) {
        if (i === 0) continue;
        break;
      }
      var total = Object.keys(data).length;
      var checked = Object.values(data).filter(function(v) { return v; }).length;
      if (total > 0 && (checked / total) >= 0.5) {
        streak++;
      } else {
        if (i === 0) continue;
        break;
      }
    }
    return streak;
  },

  updateStreak() {
    var streak = this.calculateStreak();
    StorageManager.setValue('streak', streak);
    BadgeManager.checkAll();
  },

  render() {
    var container = document.getElementById('dashboard-content');
    if (!container) return;

    var schedule = this.getTodaySchedule();
    var dayType = schedule.type;
    var cardIds = this.getCardsForToday();
    var collapsed = this.getCollapsedState();
    var streak = this.calculateStreak();
    var waterCount = StorageManager.getForDate('water') || 0;
    var macros = this.calculateDayMacros();

    var html = '';

    // Mini Dashboard
    html += this.renderMiniDashboard(schedule, streak, waterCount, macros, dayType);

    // Cards
    for (var i = 0; i < cardIds.length; i++) {
      var cardId = cardIds[i];
      var cardData = DAILY_CARDS[cardId];
      if (!cardData) continue;
      var isCollapsed = !!collapsed[cardId];
      html += this.renderCard(cardId, cardData, isCollapsed);
    }

    container.innerHTML = html;
  },

  renderMiniDashboard(schedule, streak, waterCount, macros, dayType) {
    var html = '';

    // Greeting + workout label
    html += '<div class="card glass day-mini-dashboard">';
    html += '<h2>' + Utils.getContextGreeting() + '</h2>';
    html += '<div class="day-workout-label">' + schedule.label + '</div>';

    if (streak > 0) {
      html += '<div class="day-streak">';
      html += '<span>🔥</span>';
      html += '<span style="font-weight:700;">' + streak + '</span>';
      html += '<span style="color:var(--text-muted);">dias seguidos</span>';
      html += '</div>';
    }
    html += '</div>';

    // Power Move
    if (typeof POWER_MOVES !== 'undefined') {
      var cats = Object.keys(POWER_MOVES);
      var cat = POWER_MOVES[cats[Math.floor(Math.random() * cats.length)]];
      var move = cat.moves[Math.floor(Math.random() * cat.moves.length)];
      html += '<div class="card glass" style="border-left:3px solid var(--accent);margin-bottom:10px;padding:12px 14px;">';
      html += '<div style="font-size:0.7rem;color:var(--accent);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">' + cat.icon + ' Power Move · ' + cat.label + '</div>';
      html += '<div style="font-weight:600;font-size:0.88rem;margin-bottom:4px;">' + move.name + '</div>';
      html += '<div style="color:var(--text-muted);font-size:0.8rem;line-height:1.5;">' + move.how + '</div>';
      if (move.result) {
        html += '<div style="color:var(--success);font-size:0.75rem;margin-top:4px;">' + move.result + '</div>';
      }
      html += '</div>';
    }

    // Macros bar
    var nutPhase = 'deficit';
    var targets = { kcal: 2300, prot: 150, carb: 230, fat: 65 };
    if (typeof NUTRITION_PHASES !== 'undefined') {
      var currentPhaseNum = StorageManager.getValue('currentPhase', 1);
      nutPhase = (currentPhaseNum <= 2) ? 'deficit' : 'construcao';
      var timelineType = (dayType === 'treino') ? 'treino' : 'descanso';
      targets = NUTRITION_PHASES[nutPhase][timelineType] || NUTRITION_PHASES[nutPhase].treino;
    }
    var nutPhaseLabel = (nutPhase === 'deficit') ? 'Déficit' : 'Construção';
    html += '<div class="timeline-macros">';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">~' + macros.kcal + ' / ' + targets.kcal + '</span><span class="timeline-macro-label">kcal · ' + nutPhaseLabel + '</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.prot + ' / ' + targets.prot + 'g</span><span class="timeline-macro-label">proteína</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.carb + ' / ' + targets.carb + 'g</span><span class="timeline-macro-label">carb</span></div>';
    html += '<div class="timeline-macro-item"><span class="timeline-macro-value">' + macros.fat + ' / ' + targets.fat + 'g</span><span class="timeline-macro-label">gordura</span></div>';
    html += '</div>';

    // Water tracker
    var waterGoal = 5;
    var waterMl = waterCount * 700;
    html += '<div class="timeline-water">';
    for (var w = 1; w <= waterGoal; w++) {
      html += '<div class="timeline-bottle' + (w <= waterCount ? ' filled' : '') + '" data-bottle="' + w + '"></div>';
    }
    html += '<span class="timeline-water-label">' + (waterMl / 1000).toFixed(1) + 'L / 3.5L</span>';
    html += '</div>';

    return html;
  },

  renderCard(cardId, cardData, isCollapsed) {
    var html = '';
    html += '<div class="day-card' + (isCollapsed ? ' collapsed' : '') + '" data-card-id="' + cardId + '">';

    // Header
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">' + cardData.icon + '</span>';
    html += '<span class="day-card-time">' + cardData.time + '</span>';
    html += '<span class="day-card-title">' + cardData.title + '</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';

    // Body
    html += '<div class="day-card-body">';

    // Intro
    if (cardData.content && cardData.content.intro) {
      var intro = cardData.content.intro;
      if (intro === 'dynamic:workout_intro') {
        intro = this.getWorkoutIntro();
      }
      if (intro === 'dynamic:sensual_intro') {
        var phase = StorageManager.getValue('currentPhase', 1);
        var sensual = (typeof SENSUAL_BONUS !== 'undefined') ? SENSUAL_BONUS[phase] : null;
        intro = sensual ? sensual.intro : 'Coloque uma música e mova o corpo!';
      }
      html += '<p class="day-card-intro">' + intro + '</p>';
    }

    // Meal card
    if (cardData.mealId) {
      html += this.renderMealContent(cardData.mealId);
    }

    // Supplements
    if (cardData.content && cardData.content.supplements) {
      html += '<div class="day-card-supplements">' + cardData.content.supplements.replace(/\n/g, '<br>') + '</div>';
    }

    // Steps
    if (cardData.content && cardData.content.steps) {
      if (cardData.content.steps === 'dynamic:skincare_morning') {
        html += this.renderSkincareSteps(SKINCARE_ROUTINE.morning.steps);
      } else if (cardData.content.steps === 'dynamic:workout') {
        html += this.renderWorkoutSteps();
      } else if (cardData.content.steps === 'dynamic:sensual_steps') {
        var phase = StorageManager.getValue('currentPhase', 1);
        var sensual = (typeof SENSUAL_BONUS !== 'undefined') ? SENSUAL_BONUS[phase] : null;
        if (sensual && sensual.steps) {
          html += this.renderSteps(sensual.steps);
        }
      } else if (Array.isArray(cardData.content.steps)) {
        html += this.renderSteps(cardData.content.steps);
      }
    }

    html += '</div>'; // end body
    html += '</div>'; // end card
    return html;
  },

  renderSteps(steps) {
    var html = '';
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name">' + step.name + '</span>';
      if (step.duration) {
        html += '<span class="day-card-step-duration">' + step.duration + '</span>';
      }
      html += '</div>';

      var desc = step.description;
      // Handle dynamic descriptions
      if (desc === 'dynamic:skincare_night') {
        html += this.renderSkincareSteps(SKINCARE_ROUTINE.night.steps);
      } else if (desc === 'dynamic:cooldown') {
        html += this.renderCooldownSteps();
      } else {
        html += '<div class="day-card-step-desc">' + desc + '</div>';
      }

      if (step.why) {
        html += '<div class="day-card-why">' + step.why + '</div>';
      }
      html += '</div>';
    }
    return html;
  },

  renderMealContent(mealId) {
    var mealData = MEAL_OPTIONS[mealId];
    if (!mealData) return '';

    var choiceIdx = this.getMealChoice(mealId);
    var html = '';

    // Option buttons
    html += '<div class="day-card-meal-options">';
    for (var i = 0; i < mealData.options.length; i++) {
      html += '<button class="day-card-meal-opt' + (i === choiceIdx ? ' active' : '') + '" ';
      html += 'data-meal-id="' + mealId + '" data-opt-idx="' + i + '">';
      html += 'Opção ' + (i + 1);
      html += '</button>';
    }
    html += '</div>';

    // Selected option details
    var opt = mealData.options[choiceIdx];
    if (opt) {
      html += '<div class="day-card-meal-info">';
      html += '<strong>' + opt.name + '</strong>';
      if (opt.fem) html += ' <span class="fem-tag">fem</span>';
      html += '</div>';
      html += '<div class="day-card-meal-macros">';
      html += opt.kcal + ' kcal · ' + opt.prot + 'g prot · ' + opt.carb + 'g carb · ' + opt.fat + 'g fat';
      html += '</div>';

      // Ingredients
      if (opt.ingredients && opt.ingredients.length > 0) {
        html += '<div style="margin-top:8px;font-size:0.8rem;color:var(--text);line-height:1.6;">';
        for (var j = 0; j < opt.ingredients.length; j++) {
          var ing = opt.ingredients[j];
          html += '• ' + ing[0] + ' — ' + ing[1] + '<br>';
        }
        html += '</div>';
      }
    }

    return html;
  },

  renderSkincareSteps(steps) {
    var html = '';
    var dayOfWeek = new Date().getDay();
    for (var i = 0; i < steps.length; i++) {
      var step = steps[i];
      // Skip retinol if not the right day
      if (step.days && step.days.indexOf(dayOfWeek) === -1) {
        continue;
      }
      html += '<div class="day-card-skincare-step">';
      html += '<div class="day-card-skincare-product">' + step.emoji + ' ' + step.product + '</div>';
      html += '<div class="day-card-skincare-howto">' + step.howTo + '</div>';
      html += '<div class="day-card-skincare-why">' + step.why + '</div>';
      html += '</div>';
    }
    return html;
  },

  getWorkoutIntro() {
    var schedule = this.getTodaySchedule();
    var phase = StorageManager.getValue('currentPhase', 1);
    if (!schedule.workout) return 'Hoje não tem treino de musculação.';
    return 'Hoje: ' + schedule.label + ' (Fase ' + phase + '). Toque abaixo pra abrir o treino completo com séries, reps e timer.';
  },

  renderWorkoutSteps() {
    var schedule = this.getTodaySchedule();
    var phase = StorageManager.getValue('currentPhase', 1);
    var html = '';

    if (!schedule.workout) return '<p style="color:var(--text-muted);">Sem treino hoje.</p>';

    // Link to full workout
    html += '<div class="day-card-workout-link" style="padding:14px;text-align:center;border-radius:var(--radius-sm);background:rgba(194,58,58,0.1);cursor:pointer;margin-bottom:12px;">';
    html += '<div style="font-size:1.2rem;margin-bottom:4px;">💪</div>';
    html += '<div style="font-weight:600;color:var(--primary-light);">Abrir Treino Completo</div>';
    html += '<div style="font-size:0.75rem;color:var(--text-muted);margin-top:2px;">' + schedule.label + ' — Fase ' + phase + '</div>';
    html += '</div>';

    // Quick summary of exercises if available
    var phaseKey = 'fase' + phase;
    if (WORKOUTS[phaseKey]) {
      var workoutKey = null;
      var workouts = WORKOUTS[phaseKey];
      // Find the workout matching today
      for (var key in workouts) {
        if (key === 'name' || key === 'objective' || key === 'frequency' || key === 'duration') continue;
        if (workouts[key] && workouts[key].name && workouts[key].name.indexOf(schedule.workout) !== -1) {
          workoutKey = key;
          break;
        }
      }
      // Fallback: try matching by workout key patterns
      if (!workoutKey) {
        var workoutMap = {
          'Lower A': 'lowerA',
          'Upper': 'upper',
          'Lower B': 'lowerB',
          'Gluteo Isolado': 'gluteoIsolado'
        };
        workoutKey = workoutMap[schedule.workout];
      }

      if (workoutKey && workouts[workoutKey] && workouts[workoutKey].exercises) {
        var exercises = workouts[workoutKey].exercises;
        html += '<div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px;">Exercícios de hoje:</div>';
        html += '<div style="font-size:0.82rem;line-height:1.7;">';
        for (var i = 0; i < exercises.length; i++) {
          var ex = exercises[i];
          html += (i + 1) + '. ' + ex.name;
          if (ex.sets && ex.reps) {
            html += ' <span style="color:var(--text-muted);">— ' + ex.sets + 'x' + ex.reps + '</span>';
          }
          html += '<br>';
        }
        html += '</div>';
      }
    }

    return html;
  },

  renderCooldownSteps() {
    var schedule = this.getTodaySchedule();
    var html = '<div style="font-size:0.83rem;line-height:1.65;">';

    if (schedule.cooldown === 'lower') {
      html += '<strong>Alongamento Lower Body:</strong><br>';
      html += '1. Flexor do quadril (30s cada lado) — ajoelhe, empurre quadril pra frente<br>';
      html += '2. Posterior de coxa (30s cada lado) — perna esticada, incline o tronco<br>';
      html += '3. Glúteo (Pombo) (30s cada lado) — perna cruzada na frente, desça o tronco<br>';
      html += '4. Quadríceps (30s cada lado) — puxe o pé atrás até o glúteo<br>';
      html += '5. Adutores (30s) — pernas abertas, incline pro lado<br>';
    } else if (schedule.cooldown === 'upper') {
      html += '<strong>Alongamento Upper Body:</strong><br>';
      html += '1. Peito (30s cada lado) — braço na parede, gire o corpo pro lado oposto<br>';
      html += '2. Costas (30s) — abrace os joelhos, arredonde as costas<br>';
      html += '3. Ombros (30s cada lado) — braço cruzado na frente, puxe com o outro<br>';
      html += '4. Tríceps (30s cada lado) — braço atrás da cabeça, puxe o cotovelo<br>';
      html += '5. Pescoço (20s cada lado) — incline a cabeça pro ombro suavemente<br>';
    } else {
      html += 'Alongamento leve geral: 5 minutos de movimentos suaves.<br>';
    }

    html += '</div>';
    return html;
  }
};

// =============================================
// WORKOUT MANAGER — Training tab (Treino)
// =============================================
// Renders phase selector, day selector, warmup, exercises with
// series checkboxes, weight tracking, auto-rest timers,
// special exercise types (vacuum, cardio, plank), and cooldown.

const WorkoutManager = {
  currentPhase: 1,
  selectedDay: null,

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    this.currentPhase = StorageManager.getValue('currentPhase', 1);
    if (!this.currentPhase || this.currentPhase < 1 || this.currentPhase > 4) {
      this.currentPhase = 1;
    }
    this.selectedDay = Utils.getDayOfWeek();

    var self = this;
    var container = document.getElementById('treino-content');
    if (container) {
      // ── Click delegation ──
      container.addEventListener('click', function(e) {
        // Day-card header collapse/expand
        var header = e.target.closest('.day-card-header');
        if (header) {
          var card = header.closest('.day-card');
          if (card) {
            card.classList.toggle('collapsed');
          }
          return;
        }
        // Phase tabs
        var phaseTab = e.target.closest('.phase-tab');
        if (phaseTab) {
          var phase = parseInt(phaseTab.dataset.phase);
          self.currentPhase = phase;
          StorageManager.setValue('currentPhase', phase);
          if (typeof BadgeManager !== 'undefined') BadgeManager.checkAll();
          self.render();
          return;
        }
        // Day tabs
        var dayTab = e.target.closest('.day-tab');
        if (dayTab) {
          self.selectedDay = parseInt(dayTab.dataset.day);
          self.render();
          return;
        }
        // GIF / video buttons
        var gifBtn = e.target.closest('.exercise-card-gif-btn');
        if (gifBtn) {
          e.stopPropagation();
          var videoKey = gifBtn.dataset.videoKey;
          if (typeof VideoModal !== 'undefined') VideoModal.open(videoKey, 'exercise');
          return;
        }
        // Vacuum start buttons
        var vacuumBtn = e.target.closest('.vacuum-start-btn');
        if (vacuumBtn) {
          var holdSec = parseInt(vacuumBtn.dataset.hold);
          var restSec = parseInt(vacuumBtn.dataset.rest);
          var sets = parseInt(vacuumBtn.dataset.sets);
          var exId = vacuumBtn.dataset.exercise;
          if (typeof TimerEngine !== 'undefined') {
            TimerEngine.startVacuumSeries(holdSec, restSec, sets, function() {
              var wData = self.getWorkoutData();
              if (!wData.series[exId]) wData.series[exId] = {};
              for (var s = 1; s <= sets; s++) {
                wData.series[exId][s] = true;
              }
              self.saveWorkoutData(wData);
              Toast.show('Vacuum concluído!', 'success');
              self.render();
            });
          }
          return;
        }
        // Cardio start buttons
        var cardioBtn = e.target.closest('.cardio-start-btn');
        if (cardioBtn) {
          var seconds = parseInt(cardioBtn.dataset.seconds);
          var label = cardioBtn.dataset.label || 'CARDIO';
          if (typeof TimerEngine !== 'undefined') TimerEngine.startCountUp(seconds, label);
          return;
        }
        // Plank timer buttons
        var plankBtn = e.target.closest('.plank-timer-btn');
        if (plankBtn) {
          e.stopPropagation();
          var plankSec = parseInt(plankBtn.dataset.seconds);
          var plankName = plankBtn.dataset.exerciseName || 'Prancha';
          if (typeof TimerEngine !== 'undefined') TimerEngine.startCountdown(plankSec, plankName.toUpperCase(), null, null);
          return;
        }
        // Stretch timer buttons (no sides)
        var stretchBtn = e.target.closest('.stretch-timer-btn');
        if (stretchBtn) {
          var stretchSec = parseInt(stretchBtn.dataset.seconds);
          var stretchName = stretchBtn.dataset.name || 'Alongamento';
          if (typeof TimerEngine !== 'undefined') TimerEngine.startCountdown(stretchSec, stretchName.toUpperCase(), null, null);
          return;
        }
        // Stretch with sides buttons
        var sidesBtn = e.target.closest('.stretch-sides-btn');
        if (sidesBtn) {
          var sidesSec = parseInt(sidesBtn.dataset.seconds);
          var sidesName = sidesBtn.dataset.name || 'Alongamento';
          if (typeof TimerEngine !== 'undefined') TimerEngine.startStretchWithSides(sidesSec, sidesName, null);
          return;
        }
        // Rest time selector buttons
        var restBtn = e.target.closest('.rest-btn');
        if (restBtn) {
          var rExId = restBtn.dataset.exercise;
          var rSec = parseInt(restBtn.dataset.restSeconds);
          self.setRestOverride(rExId, rSec);
          var selector = restBtn.parentElement;
          selector.querySelectorAll('.rest-btn').forEach(function(b) { b.classList.remove('active'); });
          restBtn.classList.add('active');
          return;
        }
        // Rest timer inline button
        var restTimerBtn = e.target.closest('.exercise-card-timer-btn');
        if (restTimerBtn) {
          var rtSec = parseInt(restTimerBtn.dataset.seconds);
          var rtLabel = restTimerBtn.dataset.label || 'Descanso';
          if (typeof TimerEngine !== 'undefined') TimerEngine.startCountdown(rtSec, rtLabel.toUpperCase(), null, null);
          return;
        }
        // Yoga timer buttons
        var yogaTimerBtn = e.target.closest('.yoga-timer-btn');
        if (yogaTimerBtn) {
          var ytSec = parseInt(yogaTimerBtn.dataset.seconds);
          var ytName = yogaTimerBtn.dataset.name || 'Yoga';
          if (typeof TimerEngine !== 'undefined') {
            if (yogaTimerBtn.dataset.sides === 'true') {
              TimerEngine.startStretchWithSides(ytSec, ytName, null);
            } else {
              TimerEngine.startCountdown(ytSec, ytName.toUpperCase(), null, null);
            }
          }
          return;
        }
        // Monthly glute check buttons
        var gluteCheckBtn = e.target.closest('.glute-check-btn');
        if (gluteCheckBtn) {
          var response = gluteCheckBtn.dataset.response;
          self.saveGluteCheck(response);
          self.render();
          return;
        }
      });
      // ── Change delegation (checkboxes) ──
      container.addEventListener('change', function(e) {
        // Series checkboxes
        var seriesCb = e.target.closest('.series-checkbox');
        if (seriesCb) {
          if (seriesCb.checked && navigator.vibrate) navigator.vibrate(10);
          var exId = seriesCb.dataset.exercise;
          var setNum = seriesCb.dataset.set;
          var exIndex = parseInt(seriesCb.dataset.exerciseIndex);
          self.onSeriesChecked(exId, setNum, seriesCb.checked, exIndex);
          // Auto-expand next card when all series checked
          if (seriesCb.checked) {
            self.autoExpandNextCard(exId);
          }
          return;
        }
        // Glute activation checkboxes
        var gluteActCb = e.target.closest('.glute-act-checkbox');
        if (gluteActCb) {
          var gIdx = gluteActCb.dataset.index;
          var wData = self.getWorkoutData();
          if (!wData.gluteAct) wData.gluteAct = {};
          wData.gluteAct[gIdx] = gluteActCb.checked;
          self.saveWorkoutData(wData);
          return;
        }
        // Cardio done checkbox
        var cardioCb = e.target.closest('.cardio-done-checkbox');
        if (cardioCb) {
          var cardioExId = cardioCb.dataset.exercise;
          var cwData = self.getWorkoutData();
          if (!cwData.series[cardioExId]) cwData.series[cardioExId] = {};
          cwData.series[cardioExId]['done'] = cardioCb.checked;
          self.saveWorkoutData(cwData);
          self.updateProgressDisplay();
          return;
        }
      });
      // ── Input delegation (weight with debounce) ──
      container.addEventListener('input', function(e) {
        var weightInput = e.target.closest('.exercise-card-weight');
        if (weightInput) {
          if (weightInput._debounceTimer) clearTimeout(weightInput._debounceTimer);
          weightInput._debounceTimer = setTimeout(function() {
            var exId = weightInput.dataset.exercise;
            var setNum = weightInput.dataset.set;
            self.onWeightChanged(exId, setNum, weightInput.value);
          }, 500);
        }
      });
    }

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'treino') self.render();
    });
  },

  // ── Helpers ────────────────────────────────────────────────

  getPhaseKey() {
    return 'fase' + this.currentPhase;
  },

  getPhaseData() {
    return WORKOUTS[this.getPhaseKey()] || WORKOUTS.fase1;
  },

  getScheduleForDay(dayNum) {
    var d = (dayNum !== null && dayNum !== undefined) ? dayNum : this.selectedDay;
    return WEEK_SCHEDULE[d] || null;
  },

  getDayData() {
    var sched = this.getScheduleForDay(this.selectedDay);
    if (!sched || !sched.workout) return null;
    var phase = this.getPhaseData();
    // Fase 1 special: only has "Lower A", use it for ALL training days
    if (this.currentPhase === 1) {
      return (phase.days && phase.days['Lower A']) || null;
    }
    return (phase.days && phase.days[sched.workout]) || null;
  },

  getWorkoutData() {
    var data = StorageManager.getForDate('workout') || {};
    if (!data.series) data.series = {};
    if (!data.weights) data.weights = {};
    return data;
  },

  saveWorkoutData(data) {
    StorageManager.setForDate('workout', data);
  },

  getRestOverride(exerciseId) {
    var wData = this.getWorkoutData();
    return (wData.restOverrides && wData.restOverrides[exerciseId]) || null;
  },

  setRestOverride(exerciseId, seconds) {
    var wData = this.getWorkoutData();
    if (!wData.restOverrides) wData.restOverrides = {};
    wData.restOverrides[exerciseId] = seconds;
    this.saveWorkoutData(wData);
  },

  getRestForExercise(exercise) {
    return this.getRestOverride(exercise.id) || Utils.parseRest(exercise.rest);
  },

  getNextExerciseName(exercises, currentIndex) {
    if (currentIndex + 1 < exercises.length) {
      return exercises[currentIndex + 1].name;
    }
    return 'Cooldown';
  },

  getProgressionSuggestion(exerciseId, totalSets) {
    try {
      var today = new Date();
      var lastWeek = new Date(today);
      lastWeek.setDate(today.getDate() - 7);
      var lastWeekStr = lastWeek.toISOString().split('T')[0];

      var prevData = StorageManager.getForDate('workout', lastWeekStr);
      if (!prevData || !prevData.series || !prevData.weights) return null;

      var prevSeries = prevData.series[exerciseId];
      if (!prevSeries) return null;

      for (var s = 1; s <= totalSets; s++) {
        if (!prevSeries[s]) return null;
      }

      var maxWeight = 0;
      var foundWeight = false;
      for (var s = 1; s <= totalSets; s++) {
        var wKey = exerciseId + '_' + s;
        var w = prevData.weights[wKey];
        if (w !== undefined && w !== null && w !== '') {
          var parsed = parseFloat(w);
          if (!isNaN(parsed) && parsed > 0) {
            foundWeight = true;
            if (parsed > maxWeight) maxWeight = parsed;
          }
        }
      }

      if (!foundWeight || maxWeight <= 0) return null;

      var suggested = maxWeight + 2;
      return 'Semana passada completou tudo com ' + maxWeight + 'kg — tenta ' + suggested + 'kg!';
    } catch (e) {
      return null;
    }
  },

  getExerciseType(exercise) {
    if (exercise.type === 'vacuum') return 'vacuum';
    if (exercise.type === 'plank') return 'plank';
    if (exercise.type === 'cardio') return 'cardio';
    var name = exercise.name.toLowerCase();
    if (name.indexOf('vacuum') !== -1) return 'vacuum';
    if (name.indexOf('cardio') !== -1 || (exercise.sets === 1 && typeof exercise.reps === 'string' && exercise.reps.indexOf('min') !== -1)) return 'cardio';
    if (name.indexOf('prancha') !== -1 && typeof exercise.reps === 'string' && exercise.reps.indexOf('seg') !== -1) return 'plank';
    return 'normal';
  },

  parseHoldSeconds(repsStr) {
    if (!repsStr) return 20;
    var rangeMatch = repsStr.match(/(\d+)-(\d+)/);
    if (rangeMatch) return Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2);
    var singleMatch = repsStr.match(/(\d+)/);
    if (singleMatch) return parseInt(singleMatch[1]);
    return 20;
  },

  parseCardioSeconds(repsStr) {
    if (!repsStr) return 1200;
    var rangeMatch = repsStr.match(/(\d+)-(\d+)\s*min/);
    if (rangeMatch) return Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2) * 60;
    var singleMatch = repsStr.match(/(\d+)\s*min/);
    if (singleMatch) return parseInt(singleMatch[1]) * 60;
    return 1200;
  },

  parseYogaSeconds(timeStr) {
    if (!timeStr) return 60;
    var minMatch = timeStr.match(/(\d+)\s*min/);
    if (minMatch) return parseInt(minMatch[1]) * 60;
    var secMatch = timeStr.match(/(\d+)/);
    if (secMatch) return parseInt(secMatch[1]);
    return 60;
  },

  // ── Glute Check helpers ────────────────────────────────────

  getGluteCheckHistory() {
    return StorageManager.getValue('gluteCheckHistory', []);
  },

  saveGluteCheck(response) {
    var history = this.getGluteCheckHistory();
    history.push({ date: new Date().toISOString().split('T')[0], response: response });
    StorageManager.setValue('gluteCheckHistory', history);
  },

  shouldShowGluteCheck() {
    var history = this.getGluteCheckHistory();
    if (history.length === 0) return true;
    var lastCheck = history[history.length - 1];
    var lastDate = new Date(lastCheck.date);
    var now = new Date();
    var diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));
    return diffDays >= 30;
  },

  // ── Auto-expand next card ──────────────────────────────────

  autoExpandNextCard(exerciseId) {
    var card = document.querySelector('.day-card[data-card-id="exercise-' + exerciseId + '"]');
    if (!card) return;
    // Check if all series in this card are done
    var checkboxes = card.querySelectorAll('.series-checkbox');
    var allDone = true;
    checkboxes.forEach(function(cb) { if (!cb.checked) allDone = false; });
    if (!allDone) return;
    // Find next collapsed card
    var allCards = document.querySelectorAll('#treino-content .day-card');
    var foundCurrent = false;
    for (var i = 0; i < allCards.length; i++) {
      if (allCards[i] === card) { foundCurrent = true; continue; }
      if (foundCurrent && allCards[i].classList.contains('collapsed')) {
        allCards[i].classList.remove('collapsed');
        allCards[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
  },

  // ══════════════════════════════════════════════════════════
  // RENDER — Main entry point
  // ══════════════════════════════════════════════════════════

  render() {
    var container = document.getElementById('treino-content');
    if (!container) return;

    var html = '';
    var sched = this.getScheduleForDay(this.selectedDay);
    var dayType = sched ? sched.type : 'descanso-total';

    if (dayType === 'descanso-total') {
      html += this.renderPhaseSelector();
      html += this.renderDaySelector();
      html += this.renderRestDayMessage();
    } else if (dayType === 'treino') {
      html += this.renderNarrativeWorkout(sched);
    } else if (dayType === 'descanso-ativo') {
      html += this.renderTuesdayWorkout();
    } else if (dayType === 'ativacao-leve') {
      html += this.renderThursdayWorkout();
    } else {
      html += this.renderPhaseSelector();
      html += this.renderDaySelector();
      html += this.renderRestDayMessage();
    }

    container.innerHTML = html;
  },

  // ══════════════════════════════════════════════════════════
  // RENDER: Narrative Workout (treino days — Mon/Wed/Fri/Sat)
  // ══════════════════════════════════════════════════════════

  renderNarrativeWorkout(sched) {
    var html = '';
    html += this.renderPhaseSelector();
    html += this.renderDaySelector();

    var dayData = this.getDayData();
    if (!dayData) {
      html += this.renderRestDayMessage();
      return html;
    }

    var exercises = dayData.exercises || [];
    html += this.renderWorkoutProgress(dayData);
    html += this.renderGluteoActivationCard();
    if (this.shouldShowGluteCheck()) {
      html += this.renderMonthlyGluteCheck();
    }
    html += this.renderWarmupCards(sched.warmup);
    html += this.renderExerciseCards(exercises);
    html += this.renderCooldownCards(sched.cooldown);

    return html;
  },

  // ══════════════════════════════════════════════════════════
  // RENDER: Tuesday (descanso-ativo — yoga + rebolar)
  // ══════════════════════════════════════════════════════════

  renderTuesdayWorkout() {
    var html = '';
    html += this.renderPhaseSelector();
    html += this.renderDaySelector();
    html += this.renderGluteoActivationCard();
    html += this.renderYogaCards();
    html += this.renderRebolarCards();
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // RENDER: Thursday (ativacao-leve)
  // ══════════════════════════════════════════════════════════

  renderThursdayWorkout() {
    var html = '';
    html += this.renderPhaseIndicator();
    html += this.renderDaySelector();
    html += this.renderGluteoActivationCard();
    html += this.renderLightActivityOptions();
    return html;
  },

  // ── Phase Selector (interactive) ───────────────────────────

  renderPhaseSelector() {
    var html = '<div class="card glass phase-selector-card">';
    html += '<div class="phase-tabs">';

    for (var i = 1; i <= 4; i++) {
      var activeClass = (i === this.currentPhase) ? ' active' : '';
      html += '<button class="phase-tab' + activeClass + '" data-phase="' + i + '">';
      html += '<span class="phase-num">Fase ' + i + '</span>';
      html += '</button>';
    }

    html += '</div>';

    var phase = this.getPhaseData();
    html += '<div class="phase-description">';
    html += '<strong>' + this.escapeHtml(phase.name) + '</strong>';
    html += '<p style="opacity:0.7; font-size:0.85rem; margin:0.3rem 0 0;">' + this.escapeHtml(phase.period) + ' — ' + this.escapeHtml(phase.objective) + '</p>';
    if (phase.note) {
      html += '<p style="opacity:0.6; font-size:0.8rem; margin:0.25rem 0 0;">' + this.escapeHtml(phase.note) + '</p>';
    }
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Phase Indicator (read-only, no buttons) ────────────────

  renderPhaseIndicator() {
    var phase = this.getPhaseData();
    var html = '<div class="card glass phase-selector-card">';
    html += '<div class="phase-description" style="text-align:center;">';
    html += '<strong>' + this.escapeHtml(phase.name) + '</strong>';
    html += '<p style="opacity:0.7; font-size:0.85rem; margin:0.3rem 0 0;">' + this.escapeHtml(phase.period) + '</p>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Day Selector ───────────────────────────────────────────

  renderDaySelector() {
    var dayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    var today = Utils.getDayOfWeek();
    var html = '<div class="day-selector">';

    for (var i = 0; i < 7; i++) {
      var activeClass = (i === this.selectedDay) ? ' active' : '';
      var todayClass = (i === today) ? ' today' : '';
      html += '<button class="day-tab' + activeClass + todayClass + '" data-day="' + i + '">' + dayLabels[i] + '</button>';
    }

    html += '</div>';

    var sched = this.getScheduleForDay(this.selectedDay);
    if (sched) {
      html += '<div style="text-align:center; padding: 0.5rem 0;">';
      html += '<strong style="color: var(--primary);">' + this.escapeHtml(sched.label) + '</strong>';
      html += '</div>';
    }

    return html;
  },

  // ── Workout Progress Bar ───────────────────────────────────

  renderWorkoutProgress(dayData) {
    var exercises = dayData.exercises || [];
    if (exercises.length === 0) return '';

    var wData = this.getWorkoutData();
    var totalSeries = 0;
    var completedSeries = 0;

    var self = this;
    exercises.forEach(function(ex) {
      var type = self.getExerciseType(ex);
      if (type === 'cardio') {
        totalSeries += 1;
        if (wData.series[ex.id] && wData.series[ex.id]['done']) completedSeries++;
      } else {
        totalSeries += (ex.sets || 1);
        for (var s = 1; s <= (ex.sets || 1); s++) {
          if (wData.series[ex.id] && wData.series[ex.id][s]) completedSeries++;
        }
      }
    });

    var pct = totalSeries > 0 ? Math.round((completedSeries / totalSeries) * 100) : 0;

    var html = '<div class="card glass workout-overall-progress">';
    html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">';
    html += '<strong>Progresso do Treino</strong>';
    html += '<span>' + completedSeries + '/' + totalSeries + ' séries (' + pct + '%)</span>';
    html += '</div>';
    html += '<div class="progress-bar-container">';
    html += '<div class="progress-bar" style="width:' + pct + '%"></div>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Rest Day Message (descanso-total) ──────────────────────

  renderRestDayMessage() {
    var html = '<div class="day-card" data-card-id="rest-day">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">😴</span>';
    html += '<span class="day-card-title">Dia de Descanso Total</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';
    html += '<p class="day-card-intro">Hoje é dia de descanso. Seu corpo está recuperando e crescendo. Músculo cresce no descanso, não no treino.</p>';
    html += '<div class="day-card-why">O descanso total permite a reparação das microfibras musculares rompidas durante o treino, a reposição de glicogênio e a adaptação do sistema nervoso — sem ele, o corpo entra em overtraining e para de evoluir.</div>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // GLUTE ACTIVATION CARD
  // ══════════════════════════════════════════════════════════

  renderGluteoActivationCard() {
    var wData = this.getWorkoutData();
    var gluteAct = wData.gluteAct || {};

    var html = '<div class="day-card" data-card-id="glute-activation">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">🍑</span>';
    html += '<span class="day-card-time">ANTES</span>';
    html += '<span class="day-card-title">Ativação Glúteo Esquerdo</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    html += '<p class="day-card-intro">' + this.escapeHtml(GLUTE_FIX_PROTOCOL.explanation) + '</p>';

    for (var i = 0; i < GLUTE_FIX_PROTOCOL.daily_exercises.length; i++) {
      var ex = GLUTE_FIX_PROTOCOL.daily_exercises[i];
      var checked = gluteAct[i] ? 'checked' : '';
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<label style="display:flex; align-items:center; gap:8px; cursor:pointer;">';
      html += '<input type="checkbox" class="glute-act-checkbox" data-index="' + i + '" ' + checked + ' style="width:18px; height:18px; accent-color:var(--success);">';
      html += '<span class="day-card-step-name">' + this.escapeHtml(ex.name) + '</span>';
      html += '</label>';
      html += '<span class="day-card-step-duration">' + this.escapeHtml(ex.sets) + '</span>';
      html += '</div>';
      html += '<p class="day-card-step-desc">' + this.escapeHtml(ex.desc) + '</p>';
      html += '</div>';
    }

    // Rules
    html += '<div style="margin-top:12px; padding-top:10px; border-top:1px solid var(--border-light);">';
    html += '<strong style="font-size:0.82rem; color:var(--accent);">Regras de Ouro</strong>';
    for (var r = 0; r < GLUTE_FIX_PROTOCOL.rules.length; r++) {
      var rule = GLUTE_FIX_PROTOCOL.rules[r];
      html += '<div style="padding:4px 0; font-size:0.78rem;">';
      html += '<strong>' + this.escapeHtml(rule.name) + '</strong>';
      html += ' <span style="color:var(--accent);">[' + this.escapeHtml(rule.rule) + ']</span>';
      html += ' — <span style="opacity:0.7;">' + this.escapeHtml(rule.desc) + '</span>';
      html += '</div>';
    }
    html += '</div>';

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Monthly Glute Check ────────────────────────────────────

  renderMonthlyGluteCheck() {
    var html = '<div class="day-card" data-card-id="monthly-glute-check">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">📋</span>';
    html += '<span class="day-card-title">Checagem Mensal — Glúteo</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';
    html += '<div class="exercise-card-monthly-check">';
    html += '<p>Aperte o glúteo esquerdo e o direito separadamente. Ainda sente diferença?</p>';
    html += '<div>';
    html += '<button class="glute-check-btn" data-response="muita">Muita diferença</button>';
    html += '<button class="glute-check-btn" data-response="pouca">Um pouco</button>';
    html += '<button class="glute-check-btn" data-response="quase-igual">Quase igual</button>';
    html += '<button class="glute-check-btn" data-response="igual">Igual!</button>';
    html += '</div>';

    // Show history
    var history = this.getGluteCheckHistory();
    if (history.length > 0) {
      html += '<div style="margin-top:12px; text-align:left; font-size:0.75rem; opacity:0.7;">';
      html += '<strong>Histórico:</strong>';
      var start = Math.max(0, history.length - 4);
      for (var h = start; h < history.length; h++) {
        html += '<div>' + history[h].date + ' — ' + this.escapeHtml(history[h].response) + '</div>';
      }
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // WARMUP CARDS
  // ══════════════════════════════════════════════════════════

  renderWarmupCards(warmupType) {
    if (!warmupType) return '';
    var warmupList = warmupType === 'lower' ? WARMUP_LOWER : WARMUP_UPPER;
    var title = warmupType === 'lower' ? 'Aquecimento Lower Body' : 'Aquecimento Upper Body';
    var html = '';

    html += '<div class="day-card collapsed" data-card-id="warmup-section">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">🔥</span>';
    html += '<span class="day-card-time">' + warmupList.length + ' exercícios</span>';
    html += '<span class="day-card-title">' + this.escapeHtml(title) + ' — OBRIGATÓRIO</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    for (var i = 0; i < warmupList.length; i++) {
      var ex = warmupList[i];
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name">' + this.escapeHtml(ex.name) + '</span>';
      html += '<span class="day-card-step-duration">' + this.escapeHtml(ex.time) + '</span>';
      html += '</div>';
      if (ex.narrative) {
        html += '<p class="day-card-step-desc">' + this.escapeHtml(ex.narrative) + '</p>';
      } else {
        html += '<p class="day-card-step-desc">' + this.escapeHtml(ex.desc) + '</p>';
      }
      if (ex.why) {
        html += '<div class="day-card-why">' + this.escapeHtml(ex.why) + '</div>';
      }
      // Timer button
      var secMatch = ex.time.match(/(\d+)/);
      var sec = secMatch ? parseInt(secMatch[1]) : 30;
      if (ex.time.indexOf('cada') !== -1 || ex.time.indexOf('lado') !== -1) {
        html += '<button class="exercise-card-timer-btn stretch-sides-btn" data-seconds="' + sec + '" data-name="' + this.escapeAttr(ex.name) + '" style="margin-top:6px;">⏱ ' + sec + 's cada lado</button>';
      } else if (ex.time.indexOf('seg') !== -1 || ex.time.indexOf('min') !== -1) {
        html += '<button class="exercise-card-timer-btn stretch-timer-btn" data-seconds="' + sec + '" data-name="' + this.escapeAttr(ex.name) + '" style="margin-top:6px;">⏱ ' + sec + 's</button>';
      }
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // EXERCISE CARDS (main workout exercises)
  // ══════════════════════════════════════════════════════════

  renderExerciseCards(exercises) {
    if (!exercises || exercises.length === 0) return '';
    var html = '';
    for (var i = 0; i < exercises.length; i++) {
      html += this.renderExerciseCard(exercises[i], i, exercises);
    }
    return html;
  },

  renderExerciseCard(exercise, index, allExercises) {
    var type = this.getExerciseType(exercise);
    var wData = this.getWorkoutData();
    var exData = wData.series[exercise.id] || {};
    var exWeights = wData.weights || {};

    // First exercise expanded, rest collapsed
    var isCollapsed = (index > 0) ? ' collapsed' : '';
    var setsReps = '';
    if (type === 'cardio') {
      setsReps = this.escapeHtml(exercise.reps);
    } else if (type === 'vacuum') {
      setsReps = exercise.sets + 'x ' + this.escapeHtml(exercise.reps);
    } else {
      setsReps = exercise.sets + 'x' + this.escapeHtml(String(exercise.reps));
    }

    var iconMap = { normal: '💪', vacuum: '💨', plank: '🧘', cardio: '🏃' };
    var icon = iconMap[type] || '💪';

    var html = '<div class="day-card' + isCollapsed + '" data-card-id="exercise-' + exercise.id + '">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">' + icon + '</span>';
    html += '<span class="day-card-time">' + setsReps + '</span>';
    html += '<span class="day-card-title">' + this.escapeHtml(exercise.name) + '</span>';
    if (exercise.startLeft) {
      html += '<span style="font-size:0.65rem; background:var(--accent); color:var(--bg-dark); padding:2px 6px; border-radius:8px; font-weight:700;">ESQ</span>';
    }
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';

    html += '<div class="day-card-body">';

    // Narrative
    if (exercise.narrative) {
      html += '<p class="day-card-intro">' + this.escapeHtml(exercise.narrative) + '</p>';
    }

    // Why
    if (exercise.why) {
      html += '<div class="day-card-why">' + this.escapeHtml(exercise.why) + '</div>';
    }

    // Common mistakes from EXERCISE_VIDEOS
    if (exercise.videoKey && EXERCISE_VIDEOS[exercise.videoKey] && EXERCISE_VIDEOS[exercise.videoKey].commonMistakes) {
      html += '<div class="exercise-card-mistakes">' + this.escapeHtml(EXERCISE_VIDEOS[exercise.videoKey].commonMistakes) + '</div>';
    }

    // GIF button
    if (exercise.videoKey) {
      html += '<button class="exercise-card-gif-btn" data-video-key="' + this.escapeAttr(exercise.videoKey) + '" style="margin-top:8px;">▶ Ver GIF</button>';
    }

    // Type-specific controls
    if (type === 'vacuum') {
      html += this.renderVacuumBody(exercise, exData);
    } else if (type === 'cardio') {
      html += this.renderCardioBody(exercise, exData);
    } else if (type === 'plank') {
      html += this.renderPlankBody(exercise, index, exData);
    } else {
      html += this.renderNormalBody(exercise, index, exData, exWeights);
    }

    html += '</div>'; // .day-card-body
    html += '</div>'; // .day-card
    return html;
  },

  // ── Normal exercise body (series checkboxes + weight) ──────

  renderNormalBody(exercise, index, exData, exWeights) {
    var html = '';
    var totalSets = exercise.sets || 1;

    // Weight badge
    if (exercise.weight) {
      html += '<div class="exercise-card-sets-reps" style="margin-top:8px;">Peso sugerido: ' + this.escapeHtml(exercise.weight) + '</div>';
    }

    // Progressive overload suggestion
    var suggestion = this.getProgressionSuggestion(exercise.id, totalSets);
    if (suggestion) {
      html += '<div style="font-size:0.78rem; color:var(--success); margin-top:6px; padding:4px 8px; background:rgba(76,175,80,0.08); border-radius:var(--radius-sm);">✅ ' + suggestion + '</div>';
    }

    // Series checkboxes
    html += '<div class="exercise-card-series">';
    for (var s = 1; s <= totalSets; s++) {
      var checked = exData[s] ? ' checked' : '';
      html += '<label' + (exData[s] ? ' class="checked"' : '') + '>';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s + '" data-exercise-index="' + index + '"' + (exData[s] ? ' checked' : '') + '>';
      html += 'Série ' + s;
      html += '</label>';
    }
    html += '</div>';

    // Weight input + rest timer row
    html += '<div class="exercise-card-weight-row">';
    for (var s2 = 1; s2 <= totalSets; s2++) {
      var weightKey = exercise.id + '_' + s2;
      var savedWeight = (exWeights[weightKey] !== undefined && exWeights[weightKey] !== null) ? exWeights[weightKey] : '';
      html += '<input type="number" class="exercise-card-weight" placeholder="S' + s2 + ' kg" data-exercise="' + exercise.id + '" data-set="' + s2 + '" value="' + savedWeight + '" inputmode="decimal" step="0.5">';
    }
    // Rest timer button
    var restSec = this.getRestForExercise(exercise);
    if (restSec > 0) {
      html += '<button class="exercise-card-timer-btn" data-seconds="' + restSec + '" data-label="Descanso — ' + this.escapeAttr(exercise.name) + '">⏱ ' + restSec + 's</button>';
    }
    html += '</div>';

    // Rest time selector
    var defaultRest = Utils.parseRest(exercise.rest);
    var currentRest = this.getRestOverride(exercise.id) || defaultRest;
    var restOptions = [30, 45, 60, 90, 120];
    html += '<div style="display:flex; gap:4px; align-items:center; margin-top:6px; flex-wrap:wrap;">';
    html += '<span style="font-size:0.72rem; opacity:0.6;">⏱ Descanso:</span>';
    for (var ro = 0; ro < restOptions.length; ro++) {
      var activeClass = (restOptions[ro] === currentRest) ? ' active' : '';
      html += '<button class="rest-btn' + activeClass + '" data-exercise="' + exercise.id + '" data-rest-seconds="' + restOptions[ro] + '" style="font-size:0.7rem; padding:3px 8px; border-radius:12px; border:1px solid var(--border-light); background:' + (restOptions[ro] === currentRest ? 'var(--primary)' : 'transparent') + '; color:' + (restOptions[ro] === currentRest ? '#fff' : 'var(--text-muted)') + '; cursor:pointer;">' + restOptions[ro] + 's</button>';
    }
    html += '</div>';

    return html;
  },

  // ── Plank exercise body ────────────────────────────────────

  renderPlankBody(exercise, index, exData) {
    var html = '';
    var holdSec = this.parseHoldSeconds(exercise.reps);
    var totalSets = exercise.sets || 1;

    html += '<div class="exercise-card-series">';
    for (var s = 1; s <= totalSets; s++) {
      html += '<label' + (exData[s] ? ' class="checked"' : '') + '>';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s + '" data-exercise-index="' + index + '"' + (exData[s] ? ' checked' : '') + '>';
      html += 'Série ' + s;
      html += '</label>';
    }
    html += '</div>';

    html += '<div class="exercise-card-weight-row">';
    html += '<button class="exercise-card-timer-btn plank-timer-btn" data-seconds="' + holdSec + '" data-exercise-name="' + this.escapeAttr(exercise.name) + '">⏱ Iniciar ' + holdSec + 's</button>';
    html += '</div>';

    return html;
  },

  // ── Vacuum exercise body ───────────────────────────────────

  renderVacuumBody(exercise, exData) {
    var holdSec = this.parseHoldSeconds(exercise.reps);
    var restSec = Utils.parseRest(exercise.rest) || 30;
    var totalSets = exercise.sets || 5;

    var completedSets = 0;
    for (var s = 1; s <= totalSets; s++) {
      if (exData[s]) completedSets++;
    }

    var html = '';
    html += '<div style="text-align:center; margin:12px 0;">';
    html += '<button class="exercise-card-timer-btn vacuum-start-btn" data-hold="' + holdSec + '" data-rest="' + restSec + '" data-sets="' + totalSets + '" data-exercise="' + exercise.id + '" style="padding:10px 20px; font-size:0.85rem;">💨 Iniciar Vacuum (' + totalSets + 'x ' + holdSec + 's)</button>';
    html += '<p style="font-size:0.75rem; opacity:0.6; margin-top:6px;">' + completedSets + '/' + totalSets + ' séries feitas hoje</p>';
    html += '</div>';

    html += '<div class="exercise-card-series">';
    for (var s2 = 1; s2 <= totalSets; s2++) {
      html += '<label' + (exData[s2] ? ' class="checked"' : '') + '>';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s2 + '" data-exercise-index="-1"' + (exData[s2] ? ' checked' : '') + '>';
      html += 'Série ' + s2;
      html += '</label>';
    }
    html += '</div>';

    return html;
  },

  // ── Cardio exercise body ───────────────────────────────────

  renderCardioBody(exercise, exData) {
    var durationSec = this.parseCardioSeconds(exercise.reps);
    var done = exData['done'] ? true : false;

    var html = '';
    html += '<div style="text-align:center; margin:12px 0;">';
    html += '<button class="exercise-card-timer-btn cardio-start-btn" data-seconds="' + durationSec + '" data-label="' + this.escapeAttr(exercise.name) + '" style="padding:10px 20px; font-size:0.85rem;">🏃 Iniciar Cardio (' + this.escapeHtml(exercise.reps) + ')</button>';
    html += '</div>';

    html += '<div class="exercise-card-series">';
    html += '<label' + (done ? ' class="checked"' : '') + '>';
    html += '<input type="checkbox" class="cardio-done-checkbox" data-exercise="' + exercise.id + '"' + (done ? ' checked' : '') + '>';
    html += 'Concluído';
    html += '</label>';
    html += '</div>';

    return html;
  },

  // ══════════════════════════════════════════════════════════
  // COOLDOWN CARDS
  // ══════════════════════════════════════════════════════════

  renderCooldownCards(cooldownType) {
    var cdType = cooldownType || 'lower';
    var cooldownList = cdType === 'lower' ? COOLDOWN_LOWER : COOLDOWN_UPPER;
    var title = cdType === 'lower' ? 'Alongamento Lower Body' : 'Alongamento Upper Body';
    var html = '';

    html += '<div class="day-card collapsed" data-card-id="cooldown-section">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">🧘</span>';
    html += '<span class="day-card-time">' + cooldownList.length + ' exercícios</span>';
    html += '<span class="day-card-title">' + this.escapeHtml(title) + ' — OBRIGATÓRIO</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    for (var i = 0; i < cooldownList.length; i++) {
      var ex = cooldownList[i];
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name">' + this.escapeHtml(ex.name) + '</span>';
      html += '<span class="day-card-step-duration">' + this.escapeHtml(ex.time) + '</span>';
      html += '</div>';
      if (ex.narrative) {
        html += '<p class="day-card-step-desc">' + this.escapeHtml(ex.narrative) + '</p>';
      } else {
        html += '<p class="day-card-step-desc">' + this.escapeHtml(ex.desc) + '</p>';
      }
      if (ex.why) {
        html += '<div class="day-card-why">' + this.escapeHtml(ex.why) + '</div>';
      }
      // Timer button
      var secMatch = ex.time.match(/(\d+)/);
      var sec = secMatch ? parseInt(secMatch[1]) : 30;
      if (ex.time.indexOf('cada') !== -1 || ex.time.indexOf('lado') !== -1) {
        html += '<button class="exercise-card-timer-btn stretch-sides-btn" data-seconds="' + sec + '" data-name="' + this.escapeAttr(ex.name) + '" style="margin-top:6px;">⏱ ' + sec + 's cada lado</button>';
      } else if (sec > 0) {
        html += '<button class="exercise-card-timer-btn stretch-timer-btn" data-seconds="' + sec + '" data-name="' + this.escapeAttr(ex.name) + '" style="margin-top:6px;">⏱ ' + sec + 's</button>';
      }
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // YOGA CARDS (for Tuesday)
  // ══════════════════════════════════════════════════════════

  renderYogaCards() {
    var yogaLevel = YOGA_PHASE_MAP[this.currentPhase] || 'iniciante';
    var poses = YOGA_LEVELS[yogaLevel] || [];
    if (poses.length === 0) return '';

    var html = '<div class="day-card" data-card-id="yoga-section">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">🧘</span>';
    html += '<span class="day-card-time">' + poses.length + ' poses</span>';
    html += '<span class="day-card-title">Yoga — ' + this.escapeHtml(yogaLevel.charAt(0).toUpperCase() + yogaLevel.slice(1)) + '</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    html += '<p class="day-card-intro">Mobilidade e flexibilidade — o corpo precisa se abrir para crescer. Respire fundo em cada posição e não force além do confortável.</p>';

    for (var i = 0; i < poses.length; i++) {
      var pose = poses[i];
      var poseName = pose[0];
      var poseTime = pose[1];
      var poseSec = this.parseYogaSeconds(poseTime);
      var hasSides = (poseTime.indexOf('cada') !== -1 || poseTime.indexOf('lado') !== -1);

      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name">' + this.escapeHtml(poseName) + '</span>';
      html += '<span class="day-card-step-duration">' + this.escapeHtml(poseTime) + '</span>';
      html += '</div>';
      html += '<button class="exercise-card-timer-btn yoga-timer-btn" data-seconds="' + poseSec + '" data-name="' + this.escapeAttr(poseName) + '" data-sides="' + hasSides + '" style="margin-top:4px;">⏱ ' + this.escapeHtml(poseTime) + '</button>';
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // REBOLAR CARDS (for Tuesday)
  // ══════════════════════════════════════════════════════════

  renderRebolarCards() {
    var rebolarIndex = REBOLAR_PHASE_MAP[this.currentPhase];
    if (rebolarIndex === undefined || rebolarIndex === null) rebolarIndex = 0;
    var phase = REBOLAR_STEPS[rebolarIndex];
    if (!phase) return '';

    var html = '<div class="day-card" data-card-id="rebolar-section">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">💃</span>';
    html += '<span class="day-card-title">Movimento — ' + this.escapeHtml(phase.fase) + '</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    html += '<p class="day-card-intro">Controle de quadril e expressão corporal. Coloque uma música que te faça sentir poderosa e pratique cada movimento devagar.</p>';

    for (var i = 0; i < phase.steps.length; i++) {
      html += '<div class="day-card-step">';
      html += '<div class="day-card-step-header">';
      html += '<span class="day-card-step-number">' + (i + 1) + '</span>';
      html += '<span class="day-card-step-name" style="font-size:0.83rem;">' + this.escapeHtml(phase.steps[i]) + '</span>';
      html += '</div>';
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // LIGHT ACTIVITY OPTIONS (for Thursday)
  // ══════════════════════════════════════════════════════════

  renderLightActivityOptions() {
    var html = '<div class="day-card" data-card-id="light-activity">';
    html += '<div class="day-card-header">';
    html += '<span class="day-card-icon">🟡</span>';
    html += '<span class="day-card-title">Atividade Leve — Escolha Uma</span>';
    html += '<span class="day-card-arrow">▼</span>';
    html += '</div>';
    html += '<div class="day-card-body">';

    html += '<p class="day-card-intro">Dia de ativação leve — o objetivo é mover o corpo sem gerar fadiga. Escolha uma das opções abaixo e faça no seu ritmo.</p>';

    // Option 1: Caminhada
    html += '<div class="day-card-step">';
    html += '<div class="day-card-step-header">';
    html += '<span class="day-card-step-number">1</span>';
    html += '<span class="day-card-step-name">Caminhada ao ar livre</span>';
    html += '<span class="day-card-step-duration">20-30 min</span>';
    html += '</div>';
    html += '<p class="day-card-step-desc">Caminhe em ritmo confortável, sem pressa. Aproveite para tomar sol (vitamina D) e relaxar a mente. Se tiver escada no trajeto, suba usando mais o calcanhar — ativa o glúteo.</p>';
    html += '<div class="day-card-why">Caminhada aumenta o fluxo sanguíneo para os músculos em recuperação, acelera a remoção de metabólitos e melhora o humor — tudo sem gerar estresse adicional para o sistema nervoso.</div>';
    html += '<button class="exercise-card-timer-btn cardio-start-btn" data-seconds="1500" data-label="Caminhada" style="margin-top:6px;">⏱ 25 min</button>';
    html += '</div>';

    // Option 2: Yoga leve
    html += '<div class="day-card-step">';
    html += '<div class="day-card-step-header">';
    html += '<span class="day-card-step-number">2</span>';
    html += '<span class="day-card-step-name">Yoga leve / mobilidade</span>';
    html += '<span class="day-card-step-duration">15-20 min</span>';
    html += '</div>';
    html += '<p class="day-card-step-desc">Faça as poses do nível iniciante com calma: Pigeon Pose, Happy Baby, Borboleta, Cat-Cow. Foque na respiração e em soltar a tensão muscular do treino anterior.</p>';
    html += '<div class="day-card-why">Yoga leve no dia de descanso ativo melhora a flexibilidade sem interferir na recuperação muscular — o corpo se abre e se prepara para treinar com mais amplitude no dia seguinte.</div>';
    html += '</div>';

    // Option 3: Subir escada
    html += '<div class="day-card-step">';
    html += '<div class="day-card-step-header">';
    html += '<span class="day-card-step-number">3</span>';
    html += '<span class="day-card-step-name">Subir escada</span>';
    html += '<span class="day-card-step-duration">10-15 min</span>';
    html += '</div>';
    html += '<p class="day-card-step-desc">Suba e desça as escadas do prédio em ritmo leve. Empurre pelos calcanhares a cada degrau pra ativar o glúteo. Pode fazer 4-6 subidas com descanso entre elas.</p>';
    html += '<div class="day-card-why">Cada degrau é uma mini-extensão de quadril com carga corporal — ativa o glúteo de forma funcional e eleva a frequência cardíaca só o suficiente para acelerar a recuperação.</div>';
    html += '</div>';

    html += '</div>';
    html += '</div>';
    return html;
  },

  // ══════════════════════════════════════════════════════════
  // EVENT HANDLERS
  // ══════════════════════════════════════════════════════════

  onSeriesChecked(exerciseId, setNum, checked, exerciseIndex) {
    var wData = this.getWorkoutData();
    if (!wData.series[exerciseId]) wData.series[exerciseId] = {};
    wData.series[exerciseId][setNum] = checked;
    this.saveWorkoutData(wData);

    // Update label style inline
    var card = document.querySelector('.day-card[data-card-id="exercise-' + exerciseId + '"]');
    if (card) {
      var labels = card.querySelectorAll('.exercise-card-series label');
      labels.forEach(function(label) {
        var cb = label.querySelector('.series-checkbox');
        if (cb) {
          if (cb.checked) {
            label.classList.add('checked');
          } else {
            label.classList.remove('checked');
          }
        }
      });
    }

    this.updateProgressDisplay();

    // Auto-start rest timer when a series is checked
    if (checked) {
      var dayData = this.getDayData();
      if (dayData && dayData.exercises) {
        var exercises = dayData.exercises;
        var exercise = null;
        var exIdx = -1;

        for (var i = 0; i < exercises.length; i++) {
          if (exercises[i].id === exerciseId) {
            exercise = exercises[i];
            exIdx = i;
            break;
          }
        }

        if (exercise) {
          var restSeconds = this.getRestForExercise(exercise);
          if (restSeconds > 0 && typeof TimerEngine !== 'undefined') {
            var nextName = this.getNextExerciseName(exercises, exIdx);
            TimerEngine.startRest(restSeconds, nextName, null);
          }
        }
      }
    }
  },

  onWeightChanged(exerciseId, setNum, weight) {
    var wData = this.getWorkoutData();
    if (!wData.weights) wData.weights = {};
    var key = exerciseId + '_' + setNum;
    wData.weights[key] = weight;
    this.saveWorkoutData(wData);
  },

  // ── Update: Overall Workout Progress (inline) ──────────────

  updateProgressDisplay() {
    var overallEl = document.querySelector('.workout-overall-progress');
    if (!overallEl) return;

    var dayData = this.getDayData();
    if (!dayData || !dayData.exercises) return;

    var exercises = dayData.exercises;
    var wData = this.getWorkoutData();
    var totalSeries = 0;
    var completedSeries = 0;

    var self = this;
    exercises.forEach(function(ex) {
      var type = self.getExerciseType(ex);
      if (type === 'cardio') {
        totalSeries += 1;
        if (wData.series[ex.id] && wData.series[ex.id]['done']) completedSeries++;
      } else {
        totalSeries += (ex.sets || 1);
        for (var s = 1; s <= (ex.sets || 1); s++) {
          if (wData.series[ex.id] && wData.series[ex.id][s]) completedSeries++;
        }
      }
    });

    var pct = totalSeries > 0 ? Math.round((completedSeries / totalSeries) * 100) : 0;
    var span = overallEl.querySelector('span');
    var bar = overallEl.querySelector('.progress-bar');
    if (span) span.textContent = completedSeries + '/' + totalSeries + ' séries (' + pct + '%)';
    if (bar) bar.style.width = pct + '%';

    if (pct >= 100) {
      Toast.show('Treino concluído! Arrasou!', 'success');
    }
  },

  // ── Utility: Escape HTML ───────────────────────────────────

  escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  escapeAttr(str) {
    return this.escapeHtml(str);
  }
};

// =============================================
// NUTRITION MANAGER — Nutrição Tab (Task 8)
// =============================================
// Manages the Nutrition page with 4 sub-tabs:
//   1. Plano do Dia (meal plan with 3 options per meal, from MEAL_OPTIONS)
//   2. Suplementos (supplement cards from SUPPLEMENTS)
//   3. Receitas (recipe browser)
//   4. Lista de Compras (shopping list from SHOPPING_LIST with copy & reset)

const NutritionManager = {
  currentSubTab: 'plano',
  currentRecipe: null,

  // ── Meal IDs in display order ──
  mealIds: ['cafe', 'lanche1', 'almoco', 'pretreino', 'jantar', 'noturno'],

  // ── Emoji map for meal periods ──
  mealEmojis: {
    cafe: '\u2615',
    lanche1: '\uD83C\uDF4E',
    almoco: '\uD83C\uDF5B',
    pretreino: '\u26A1',
    jantar: '\uD83C\uDF19',
    noturno: '\uD83C\uDF1F'
  },

  init() {
    var self = this;

    // Event delegation — set up ONCE on the container
    var container = document.getElementById('nutricao-content');
    if (container) {
      container.addEventListener('click', function(e) {
        // Sub-tab clicks
        var subTab = e.target.closest('#nutricao-content .sub-tab');
        if (subTab) {
          var tab = subTab.getAttribute('data-subtab');
          if (tab !== self.currentSubTab) {
            self.currentSubTab = tab;
            self.currentRecipe = null;
            self.render();
          }
          return;
        }
        // Meal log buttons
        var mealLogBtn = e.target.closest('.meal-log-btn');
        if (mealLogBtn) {
          var mealKey = mealLogBtn.getAttribute('data-meal');
          self.toggleMeal(mealKey);
          return;
        }
        // Meal option select buttons (3 options)
        var mealOptBtn = e.target.closest('.meal-opt-btn');
        if (mealOptBtn) {
          var mealId = mealOptBtn.dataset.mealId;
          var optIdx = parseInt(mealOptBtn.dataset.optIndex, 10);
          self.setMealChoice(mealId, optIdx);
          self.render();
          return;
        }
        // Recipe card clicks
        var recipeCard = e.target.closest('.recipe-card[data-recipe]');
        if (recipeCard) {
          var recipeId = recipeCard.getAttribute('data-recipe');
          self.showRecipe(recipeId);
          return;
        }
        // Recipe back button
        var backBtn = e.target.closest('.recipe-back-btn');
        if (backBtn) {
          self.hideRecipe();
          return;
        }
        // Recipe video button
        var recipeVideo = e.target.closest('.recipe-video-btn');
        if (recipeVideo) {
          var videoKey = recipeVideo.getAttribute('data-video');
          VideoModal.open(videoKey, 'recipe');
          return;
        }
        // Shopping copy button
        var copyBtn = e.target.closest('.copy-shopping-btn');
        if (copyBtn) {
          var type = copyBtn.dataset.type || 'semanal';
          if (typeof SHOPPING_SYSTEM !== 'undefined' && SHOPPING_SYSTEM[type]) {
            var data = SHOPPING_SYSTEM[type];
            var text = '\uD83D\uDED2 ' + data.label + '\n\n';
            for (var i = 0; i < data.items.length; i++) {
              text += '\u25a1 ' + data.items[i].item + ' \u2014 ' + data.items[i].qty + '\n';
            }
            navigator.clipboard.writeText(text).then(function() {
              Toast.show('Lista copiada! Cola no WhatsApp \uD83D\uDCCB', 'success');
            });
          }
          return;
        }
      });
      container.addEventListener('change', function(e) {
        // Shopping checkboxes
        var shoppingCb = e.target.closest('.shopping-checkbox');
        if (shoppingCb) {
          var itemKey = shoppingCb.getAttribute('data-item');
          var data = self.getShoppingData();
          if (shoppingCb.checked) {
            data[itemKey] = true;
          } else {
            delete data[itemKey];
          }
          self.saveShoppingData(data);
        }
      });
    }

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'nutricao') self.render();
    });
  },

  render() {
    var container = document.getElementById('nutricao-content');
    if (!container) return;

    var html = this.renderSubTabs();

    switch (this.currentSubTab) {
      case 'plano':
        html += this.renderMealPlan();
        break;
      case 'suplementos':
        html += this.renderSupplements();
        break;
      case 'receitas':
        html += this.currentRecipe ? this.renderRecipeDetail() : this.renderRecipeGrid();
        break;
      case 'compras':
        html += this.renderShoppingList();
        break;
    }

    container.innerHTML = html;
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'plano', label: 'Plano' },
      { id: 'suplementos', label: 'Suplem.' },
      { id: 'receitas', label: 'Receitas' },
      { id: 'compras', label: 'Compras' }
    ];
    var self = this;
    var html = '<div class="sub-tabs">';
    tabs.forEach(function(tab) {
      var activeClass = tab.id === self.currentSubTab ? ' active' : '';
      html += '<button class="sub-tab' + activeClass + '" data-subtab="' + tab.id + '">' + tab.label + '</button>';
    });
    html += '</div>';
    return html;
  },

  // ── Sub-tab 1: Plano do Dia (MEAL_OPTIONS) ─────────────────

  getMealChoice(mealId) {
    return StorageManager.getValue('mealChoice_' + mealId, 0);
  },

  setMealChoice(mealId, index) {
    StorageManager.setValue('mealChoice_' + mealId, index);
  },

  getMealLogData() {
    return StorageManager.getForDate('nutrition') || { meals: {} };
  },

  saveMealLogData(data) {
    StorageManager.setForDate('nutrition', data);
  },

  calculateDailyTotals() {
    var totals = { kcal: 0, prot: 0, carb: 0, fat: 0 };
    var self = this;
    this.mealIds.forEach(function(mealId) {
      var meal = MEAL_OPTIONS[mealId];
      if (!meal) return;
      var choiceIdx = self.getMealChoice(mealId);
      var opt = meal.options[choiceIdx] || meal.options[0];
      totals.kcal += opt.kcal;
      totals.prot += opt.prot;
      totals.carb += opt.carb;
      totals.fat += opt.fat;
    });
    return totals;
  },

  calculateProtein(loggedMeals) {
    var self = this;
    var total = 0;
    this.mealIds.forEach(function(mealId) {
      if (loggedMeals[mealId]) {
        var meal = MEAL_OPTIONS[mealId];
        if (!meal) return;
        var choiceIdx = self.getMealChoice(mealId);
        var opt = meal.options[choiceIdx] || meal.options[0];
        total += opt.prot;
      }
    });
    return total;
  },

  renderMealPlan() {
    var logData = this.getMealLogData();
    var loggedMeals = logData.meals || {};
    var proteinConsumed = this.calculateProtein(loggedMeals);
    var proteinTarget = 170;
    var proteinPct = Math.min(100, Math.round((proteinConsumed / proteinTarget) * 100));
    var totals = this.calculateDailyTotals();

    var html = '';

    // Day type note
    var day = new Date().getDay();
    if (day === 6) {
      html += '<div class="card glass" style="text-align:center; margin-bottom: 12px;">';
      html += '<span style="font-size:1.1rem;">\uD83C\uDF89 Dia livre! Escolha 1 refei\u00E7\u00E3o livre com modera\u00E7\u00E3o</span>';
      html += '</div>';
    } else if (day === 0) {
      html += '<div class="card glass" style="text-align:center; margin-bottom: 12px;">';
      html += '<span style="font-size:1.1rem;">\uD83D\uDE34 Dia de descanso \u2014 calorias um pouco menores</span>';
      html += '</div>';
    }

    // Daily totals card (sum of selected options)
    html += '<div class="card glass" style="text-align:center; padding:12px; margin-bottom:8px;">';
    html += '<h3 style="margin:0 0 8px;">\uD83D\uDCCA Totais do Dia (op\u00E7\u00F5es selecionadas)</h3>';
    html += '<div class="nutrition-macros">';
    html += '<div class="macro-item"><span class="macro-value">' + totals.kcal + '</span><span class="macro-label">kcal</span></div>';
    html += '<div class="macro-item"><span class="macro-value">' + totals.prot + 'g</span><span class="macro-label">prot</span></div>';
    html += '<div class="macro-item"><span class="macro-value">' + totals.carb + 'g</span><span class="macro-label">carb</span></div>';
    html += '<div class="macro-item"><span class="macro-value">' + totals.fat + 'g</span><span class="macro-label">gord</span></div>';
    html += '</div>';
    html += '</div>';

    // Protein counter
    html += '<div class="card glass protein-counter">';
    html += '  <div class="progress-label" style="margin-bottom:6px;">';
    html += '    <span>\uD83D\uDCAA Prote\u00EDna consumida: ' + proteinConsumed + 'g / ' + proteinTarget + 'g</span>';
    html += '    <span>' + proteinPct + '%</span>';
    html += '  </div>';
    html += '  <div class="progress-bar-wrapper progress-bar-lg">';
    html += '    <div class="progress-bar-fill" style="width:' + proteinPct + '%"></div>';
    html += '  </div>';
    html += '</div>';

    // Meal cards from MEAL_OPTIONS
    var self = this;
    this.mealIds.forEach(function(mealId) {
      var meal = MEAL_OPTIONS[mealId];
      if (!meal) return;
      var choiceIdx = self.getMealChoice(mealId);
      var opt = meal.options[choiceIdx] || meal.options[0];
      var isLogged = !!loggedMeals[mealId];
      var emoji = self.mealEmojis[mealId] || '\uD83C\uDF7D';

      html += '<div class="card glass meal-card">';

      // Header
      html += '<div class="meal-header">';
      html += '  <span class="meal-emoji">' + emoji + '</span>';
      html += '  <div class="meal-header-info">';
      html += '    <strong>' + meal.label + '</strong>';
      html += '    <span class="meal-time">' + meal.time + '</span>';
      html += '  </div>';
      html += '  <button class="btn btn-sm ' + (isLogged ? 'btn-primary' : 'btn-outline') + ' meal-log-btn" data-meal="' + mealId + '">';
      html += isLogged ? '\u2705 Comi' : 'Comi \u2713';
      html += '  </button>';
      html += '</div>';

      // 3 option buttons
      html += '<div style="display:flex; gap:6px; margin:8px 0;">';
      for (var oi = 0; oi < meal.options.length; oi++) {
        var o = meal.options[oi];
        var isActive = oi === choiceIdx;
        var femPrefix = o.fem ? '\uD83C\uDF3F ' : '';
        html += '<button class="btn btn-sm ' + (isActive ? 'btn-primary' : 'btn-outline') + ' meal-opt-btn" ';
        html += 'data-meal-id="' + mealId + '" data-opt-index="' + oi + '" style="flex:1; font-size:0.75rem; padding:6px 4px;">';
        html += femPrefix + 'Op\u00E7\u00E3o ' + (oi + 1);
        html += '</button>';
      }
      html += '</div>';

      // Selected option details
      html += '<div class="meal-option">';
      var femTag = opt.fem ? ' <span style="background:rgba(76,175,80,0.2); color:#81C784; padding:2px 6px; border-radius:8px; font-size:0.7rem;">\uD83C\uDF3F fem</span>' : '';
      html += '<strong>' + opt.name + femTag + '</strong>';
      html += '<div class="meal-macros" style="margin:4px 0; font-size:0.8rem; opacity:0.85;">';
      html += opt.kcal + ' kcal \u00B7 ' + opt.prot + 'g prot \u00B7 ' + opt.carb + 'g carb \u00B7 ' + opt.fat + 'g gord';
      html += '</div>';

      // Ingredients
      html += '<div style="margin-top:8px; font-size:0.8rem;">';
      html += '<strong>Ingredientes:</strong><ul style="margin:4px 0 0 16px; padding:0;">';
      for (var ii = 0; ii < opt.ingredients.length; ii++) {
        var ing = opt.ingredients[ii];
        html += '<li>' + ing[0] + ' \u2014 ' + ing[1] + '</li>';
      }
      html += '</ul></div>';

      // Prep steps
      if (opt.prep && opt.prep.length > 0) {
        html += '<div style="margin-top:8px; font-size:0.8rem;">';
        html += '<strong>Preparo:</strong><ol style="margin:4px 0 0 16px; padding:0;">';
        for (var pi = 0; pi < opt.prep.length; pi++) {
          html += '<li style="margin-bottom:4px;">' + opt.prep[pi] + '</li>';
        }
        html += '</ol></div>';
      }

      html += '</div>'; // .meal-option

      // Feminizacao note
      if (meal.feminizacao) {
        html += '<div style="margin-top:8px; padding:8px; background:rgba(76,175,80,0.1); border-radius:8px; font-size:0.78rem;">';
        html += '\uD83C\uDF3F ' + meal.feminizacao;
        html += '</div>';
      }

      html += '</div>'; // .meal-card
    });

    return html;
  },

  // ── Sub-tab 2: Suplementos ─────────────────────────────────

  renderSupplements() {
    var html = '';

    // Header disclaimer
    html += '<div class="card glass" style="padding:12px; margin-bottom:12px; font-size:0.82rem; border-left:3px solid #FFA726;">';
    html += '<strong>\u26A0\uFE0F Aviso:</strong> Qualquer coisa hormonal real (progesterona, estradiol) precisa de m\u00E9dico. ';
    html += 'O que est\u00E1 abaixo \u00E9 seguro, sem receita e sem impacto no desempenho \u00EDntimo.';
    html += '</div>';

    // Supplement cards
    for (var i = 0; i < SUPPLEMENTS.length; i++) {
      var s = SUPPLEMENTS[i];
      html += '<div class="card glass" style="padding:14px; margin-bottom:10px;">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">';
      html += '<strong style="font-size:1rem;">\uD83D\uDC8A ' + s.name + '</strong>';
      // Evidence badge
      var evColor = s.evidence === 'Alta' ? '#4CAF50' : '#FFA726';
      html += '<span style="background:' + evColor + '22; color:' + evColor + '; padding:2px 8px; border-radius:10px; font-size:0.7rem;">' + s.evidence + '</span>';
      html += '</div>';

      html += '<div style="font-size:0.85rem; margin-bottom:4px;"><strong>Dose:</strong> ' + s.dose + '</div>';
      html += '<div style="font-size:0.85rem; margin-bottom:4px;"><strong>Quando:</strong> ' + s.when + '</div>';
      html += '<div style="font-size:0.85rem; margin-bottom:4px; opacity:0.85;">' + s.note + '</div>';
      html += '<div style="font-size:0.78rem; opacity:0.7;">\uD83D\uDD12 \u00CDntimo: ' + s.intimate + '</div>';

      html += '</div>';
    }

    return html;
  },

  // ── Sub-tab 3: Receitas ────────────────────────────────────

  renderRecipeGrid() {
    var html = '<div class="recipe-grid">';
    RECIPES.forEach(function(recipe) {
      html += '<div class="recipe-card glass" data-recipe="' + recipe.id + '">';
      html += '  <div class="recipe-emoji">' + recipe.emoji + '</div>';
      html += '  <div class="recipe-name">' + recipe.name + '</div>';
      html += '  <div class="recipe-meta">' + recipe.calories + ' kcal | ' + recipe.protein + 'g prot</div>';
      html += '</div>';
    });
    html += '</div>';
    return html;
  },

  renderRecipeDetail() {
    var recipe = null;
    for (var i = 0; i < RECIPES.length; i++) {
      if (RECIPES[i].id === this.currentRecipe) {
        recipe = RECIPES[i];
        break;
      }
    }
    if (!recipe) return '<p>Receita n\u00E3o encontrada.</p>';

    var html = '<div class="recipe-detail">';

    // Back button
    html += '<button class="btn btn-ghost recipe-back-btn">\u2190 Voltar</button>';

    // Title
    html += '<h2 style="margin:12px 0 8px;">' + recipe.emoji + ' ' + recipe.name + '</h2>';

    // Stats
    html += '<div class="recipe-stats">';
    html += '  <span>\uD83D\uDCCA ' + recipe.calories + ' kcal</span>';
    html += '  <span>\uD83D\uDCAA ' + recipe.protein + 'g prot</span>';
    html += '  <span>\uD83C\uDF5E ' + recipe.carbs + 'g carb</span>';
    html += '  <span>\uD83E\uDDC8 ' + recipe.fat + 'g gord</span>';
    html += '</div>';

    // Servings
    html += '<p style="opacity:0.7; font-size:0.85rem; margin:8px 0;">Rendimento: ' + recipe.servings + (recipe.servings === 1 ? ' por\u00E7\u00E3o' : ' por\u00E7\u00F5es') + '</p>';

    // Video button
    if (recipe.videoKey) {
      html += '<button class="btn btn-sm btn-outline recipe-video-btn" data-video="' + recipe.videoKey + '">';
      html += '\uD83C\uDFAC Ver receita em v\u00EDdeo';
      html += '</button>';
    }

    // Ingredients
    html += '<h3 style="margin-top:20px;">Ingredientes</h3>';
    html += '<ul class="recipe-ingredients">';
    recipe.ingredients.forEach(function(ing) {
      html += '<li>' + ing + '</li>';
    });
    html += '</ul>';

    // Steps
    html += '<h3>Modo de Preparo</h3>';
    html += '<ol class="recipe-steps">';
    recipe.steps.forEach(function(step) {
      html += '<li>' + step + '</li>';
    });
    html += '</ol>';

    // Variations
    if (recipe.variations && recipe.variations.length > 0) {
      html += '<h3>Varia\u00E7\u00F5es</h3>';
      recipe.variations.forEach(function(v) {
        html += '<div class="card glass" style="padding:12px; margin-bottom:8px;">';
        html += '  <strong>' + v.name + ':</strong> ' + v.description;
        html += '</div>';
      });
    }

    // Tips
    if (recipe.tips && recipe.tips.length > 0) {
      html += '<h3>Dicas</h3>';
      html += '<ul class="recipe-tips">';
      recipe.tips.forEach(function(tip) {
        html += '<li>' + tip + '</li>';
      });
      html += '</ul>';
    }

    html += '</div>';
    return html;
  },

  showRecipe(recipeId) {
    this.currentRecipe = recipeId;
    this.render();
  },

  hideRecipe() {
    this.currentRecipe = null;
    this.render();
  },

  // ── Sub-tab 4: Lista de Compras (SHOPPING_LIST) ────────

  getShoppingData() {
    return StorageManager.getValue('shoppingList', {});
  },

  saveShoppingData(data) {
    StorageManager.setValue('shoppingList', data);
  },

  renderShoppingList() {
    if (typeof SHOPPING_SYSTEM === 'undefined') return '<div class="card glass"><p>Dados de compras n\u00e3o encontrados.</p></div>';
    var html = '';
    var types = ['mensal', 'semanal'];
    for (var t = 0; t < types.length; t++) {
      var key = types[t];
      var data = SHOPPING_SYSTEM[key];
      html += '<div class="card glass" style="margin-bottom:12px;">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">';
      html += '<h3 style="margin:0;font-family:var(--font-title);font-size:1rem;">' + data.label + '</h3>';
      html += '<button class="copy-shopping-btn" data-type="' + key + '" style="background:var(--primary);border:none;color:white;padding:6px 12px;border-radius:12px;font-size:0.75rem;cursor:pointer;font-family:inherit;">Copiar</button>';
      html += '</div>';
      var categories = {};
      for (var i = 0; i < data.items.length; i++) {
        var item = data.items[i];
        if (!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
      }
      var catKeys = Object.keys(categories);
      for (var c = 0; c < catKeys.length; c++) {
        var catName = catKeys[c];
        html += '<div style="font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px;margin:8px 0 4px;">' + catName + '</div>';
        var items = categories[catName];
        for (var j = 0; j < items.length; j++) {
          html += '<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,0.05);font-size:0.84rem;">';
          html += '<span style="color:var(--text);">' + items[j].item + '</span>';
          html += '<span style="color:var(--gold);font-weight:600;font-size:0.8rem;white-space:nowrap;">' + items[j].qty + '</span>';
          html += '</div>';
        }
      }
      html += '</div>';
    }
    return html;
  },

  copyShoppingList() {
    var text = '\uD83D\uDED2 Lista de Compras Semanal\n\n';
    var categories = Object.keys(SHOPPING_LIST);
    for (var c = 0; c < categories.length; c++) {
      var cat = categories[c];
      text += cat.replace(/_/g, ' ').toUpperCase() + ':\n';
      var items = SHOPPING_LIST[cat];
      for (var i = 0; i < items.length; i++) {
        text += '  \u25A1 ' + items[i].item + ' \u2014 ' + items[i].qty + '\n';
      }
      text += '\n';
    }
    navigator.clipboard.writeText(text).then(function() {
      Toast.show('Lista copiada! Cola no WhatsApp \uD83D\uDCCB', 'success');
    });
  },

  resetShoppingList() {
    StorageManager.setValue('shoppingList', {});
    Toast.show('Lista de compras limpa!', 'success');
    this.render();
  },

  // ── Meal toggling ──────────────────────────────────────────

  toggleMeal(mealKey) {
    var logData = this.getMealLogData();
    if (!logData.meals) logData.meals = {};
    logData.meals[mealKey] = !logData.meals[mealKey];
    this.saveMealLogData(logData);
    this.render();
  },

  // Event listeners are now handled via delegation in init()
};

// =============================================
// CARE MANAGER — Cuidados tab (Skincare, Hair, Depilation, Kegel)
// =============================================
// Renders 4 sub-tabs: Skincare, Cabelo, Depilação, Kegel.
// Each sub-tab has its own render method with cards, steps, timers, etc.

const CareManager = {
  currentSubTab: 'skincare',
  currentColorCat: 'cima',
  kegelTimerActive: false,

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    var self = this;

    // Event delegation — set up ONCE on the container
    var container = document.getElementById('cuidados-content');
    if (container) {
      container.addEventListener('click', function(e) {
        // Sub-tab navigation
        var subTab = e.target.closest('#cuidados-content .sub-tab');
        if (subTab) {
          var targetTab = subTab.dataset.subtab;
          if (targetTab && targetTab !== self.currentSubTab) {
            self.currentSubTab = targetTab;
            self.render();
          }
          return;
        }
        // Kegel start button
        if (e.target.closest('#kegel-start-btn')) {
          self.startKegelTimer();
          return;
        }
        // Color category buttons
        var colorCatBtn = e.target.closest('.color-cat-btn');
        if (colorCatBtn) {
          var cat = colorCatBtn.dataset.cat;
          if (cat && cat !== self.currentColorCat) {
            self.currentColorCat = cat;
            self.render();
          }
          return;
        }
      });
      container.addEventListener('change', function(e) {
        // Hair length input
        if (e.target.id === 'hair-length') {
          var val = parseFloat(e.target.value);
          if (!isNaN(val) && val >= 0 && val <= 50) {
            StorageManager.setValue('hairLength', val);
            self.render();
          }
        }
      });
    }

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'cuidados') self.render();
    });
  },

  render() {
    var container = document.getElementById('cuidados-content');
    if (!container) return;

    var html = this.renderSubTabs();

    switch (this.currentSubTab) {
      case 'skincare':
        html += this.renderSkincare();
        break;
      case 'cabelo':
        html += this.renderHair();
        break;
      case 'depilacao':
        html += this.renderDepilation();
        break;
      case 'kegel':
        html += this.renderKegel();
        break;
      case 'intimidade':
        html += this.renderIntimidade();
        break;
      case 'cores':
        html += this.renderCores();
        break;
    }

    container.innerHTML = html;
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'skincare', label: 'Skincare' },
      { id: 'cabelo', label: 'Cabelo' },
      { id: 'depilacao', label: 'Depila\u00E7\u00E3o' },
      { id: 'kegel', label: 'Kegel' },
      { id: 'intimidade', label: 'Intimidade' },
      { id: 'cores', label: 'Cores' }
    ];
    var self = this;
    var html = '<div class="sub-tabs">';
    tabs.forEach(function(tab) {
      var activeClass = tab.id === self.currentSubTab ? ' active' : '';
      html += '<button class="sub-tab' + activeClass + '" data-subtab="' + tab.id + '">' + tab.label + '</button>';
    });
    html += '</div>';
    return html;
  },

  // ── Sub-tab 1: Skincare ────────────────────────────────────

  renderSkincare() {
    var html = '';

    // Pele parda note
    html += '<div class="card glass">';
    html += '<p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">';
    html += '\u26A0\uFE0F <strong>Pele parda em Aracaju:</strong> hiperpigmenta\u00E7\u00E3o escurece f\u00E1cil. FPS todos os dias \u00E9 o passo mais importante.';
    html += '</p>';
    html += '</div>';

    // Morning routine
    html += this.renderSkincareRoutine(SKINCARE_ROUTINE.morning, false);

    // Product recommendations for morning
    html += this.renderSkincareProducts('Rosto Manh\u00E3', SKINCARE_PRODUCTS.rostoManha, '\uD83C\uDF24\uFE0F');

    // Night routine
    html += this.renderSkincareRoutine(SKINCARE_ROUTINE.night, true);

    // Product recommendations for night
    html += this.renderSkincareProducts('Rosto Noite', SKINCARE_PRODUCTS.rostoNoite, '\uD83C\uDF19');

    // Body care
    html += this.renderBodyCare();

    // Product recommendations for body
    html += this.renderSkincareProducts('Corpo', SKINCARE_PRODUCTS.corpo, '\uD83D\uDCAA');

    // Alerts
    html += this.renderSkincareAlerts();

    return html;
  },

  renderSkincareProducts(title, products, emoji) {
    var html = '<div class="card glass">';
    html += '<h3>' + emoji + ' Produtos \u2014 ' + title + '</h3>';
    html += '<div style="display:flex; flex-direction:column; gap:0.5rem;">';
    products.forEach(function(p) {
      html += '<div style="padding:0.5rem 0.6rem; background:rgba(255,255,255,0.04); border-radius:8px; border-left:3px solid var(--primary);">';
      html += '<div style="font-size:0.88rem; font-weight:500; color:var(--text);">' + p.name + '</div>';
      if (p.brand) {
        html += '<div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">' + p.brand + '</div>';
      }
      if (p.price) {
        html += '<div style="font-size:0.78rem; color:var(--primary-light); margin-top:2px; font-weight:500;">' + p.price + '</div>';
      }
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  },

  renderSkincareRoutine(routine, isNight) {
    var html = '<div class="card glass">';
    html += '<h3>' + routine.emoji + ' ' + routine.label + '</h3>';

    if (isNight && routine.note) {
      html += '<div class="care-alert" style="margin-bottom: 1rem;">';
      html += '<span>\u26A0\uFE0F ' + routine.note + '</span>';
      html += '</div>';
    }

    html += '<div class="skincare-steps">';

    var today = new Date().getDay(); // 0=Sun, 1=Mon ... 6=Sat
    routine.steps.forEach(function(step) {
      // Check if this step has day restrictions (retinol)
      var isRetinol = step.days && step.days.length > 0;
      var isRetinolDay = isRetinol && step.days.indexOf(today) !== -1;
      var dayNames = {1: 'Seg', 3: 'Qua', 5: 'Sex'};

      html += '<div class="care-step">';
      html += '<div class="step-number">' + step.order + '</div>';
      html += '<div class="step-content">';
      html += '<strong>' + step.emoji + ' ' + step.product + '</strong>';
      html += '<p class="step-how">' + step.howTo + '</p>';
      html += '<p class="step-why" style="opacity:0.7; font-size:0.85rem;">' + step.why + '</p>';

      if (isRetinol) {
        var dayLabels = step.days.map(function(d) { return dayNames[d] || d; }).join('/');
        html += '<p class="care-alert-inline">\u26A0\uFE0F S\u00F3 ' + dayLabels;
        if (isRetinolDay) {
          html += ' \u2014 <strong style="color: var(--success);">Hoje \u00E9 dia!</strong>';
        } else {
          html += ' \u2014 <span style="opacity:0.7;">Hoje n\u00E3o</span>';
        }
        html += '</p>';
      }

      if (step.videoKey) {
        html += '<button class="btn btn-sm btn-ghost" onclick="VideoModal.open(\'' + step.videoKey + '\', \'skincare\')">\uD83C\uDFAC Ver como fazer</button>';
      }

      html += '</div>'; // .step-content
      html += '</div>'; // .care-step
    });

    html += '</div>'; // .skincare-steps
    html += '</div>'; // .card
    return html;
  },

  renderBodyCare() {
    var body = SKINCARE_ROUTINE.body;
    var html = '<div class="card glass">';
    html += '<h3>' + body.emoji + ' ' + body.label + '</h3>';
    html += '<div class="skincare-steps">';

    body.steps.forEach(function(step) {
      html += '<div class="care-step">';
      html += '<div class="step-number">' + step.order + '</div>';
      html += '<div class="step-content">';
      html += '<strong>' + step.emoji + ' ' + step.product + '</strong>';
      html += '<p class="step-how">' + step.howTo + '</p>';
      html += '<p class="step-why" style="opacity:0.7; font-size:0.85rem;">' + step.why + '</p>';
      if (step.frequency) {
        html += '<p style="font-size:0.8rem; opacity:0.6;">\u23F0 ' + step.frequency + '</p>';
      }
      if (step.videoKey) {
        html += '<button class="btn btn-sm btn-ghost" onclick="VideoModal.open(\'' + step.videoKey + '\', \'skincare\')">\uD83C\uDFAC Ver como fazer</button>';
      }
      html += '</div>'; // .step-content
      html += '</div>'; // .care-step
    });

    html += '</div>'; // .skincare-steps
    html += '</div>'; // .card
    return html;
  },

  renderSkincareAlerts() {
    var alerts = SKINCARE_ROUTINE.alerts;
    var html = '<div class="card glass">';
    html += '<h3>\u26A0\uFE0F Alertas Importantes</h3>';
    html += '<div class="care-alerts-list">';

    alerts.forEach(function(alert) {
      html += '<div class="care-alert">';
      html += '<span>\u26A0\uFE0F ' + alert + '</span>';
      html += '</div>';
    });

    html += '</div>'; // .care-alerts-list
    html += '</div>'; // .card
    return html;
  },

  // ── Sub-tab 2: Cabelo (Hair) ───────────────────────────────

  renderHair() {
    var html = '';

    // 7-step wash routine
    html += this.renderHairWashRoutine();

    // Product recommendations
    html += this.renderHairProducts();

    // Hair care routine (existing detailed routine)
    html += this.renderHairRoutine();

    // Hair growth timeline
    html += this.renderHairTimeline();

    // Supplement card
    html += this.renderHairSupplement();

    return html;
  },

  renderHairWashRoutine() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDEBF Rotina de Lavagem (7 Passos)</h3>';
    html += '<div class="skincare-steps">';
    HAIR_WASH_ROUTINE.forEach(function(step, index) {
      html += '<div class="care-step">';
      html += '<div class="step-number">' + (index + 1) + '</div>';
      html += '<div class="step-content">';
      html += '<p style="margin:0; font-size:0.9rem;">' + step + '</p>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '<div class="care-alert" style="margin-top:0.75rem;">';
    html += '<span>\uD83C\uDF19 Dormir com bonnet ou fronha de cetim protege os cachos e evita quebra.</span>';
    html += '</div>';
    html += '<div class="care-alert" style="margin-top:0.5rem;">';
    html += '<span>\u2600\uFE0F Prote\u00E7\u00E3o solar capilar: use leave-in com filtro UV ou boné em dias de sol forte.</span>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  renderHairProducts() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDECD\uFE0F Produtos Capilares</h3>';
    html += '<div style="display:flex; flex-direction:column; gap:0.5rem;">';
    HAIR_PRODUCTS.forEach(function(p, i) {
      html += '<div style="padding:0.5rem 0.6rem; background:rgba(255,255,255,0.04); border-radius:8px; border-left:3px solid var(--primary); display:flex; align-items:center; gap:0.5rem;">';
      html += '<div style="min-width:20px; font-size:0.8rem; color:var(--primary-light); font-weight:700;">' + (i + 1) + '</div>';
      html += '<div style="flex:1;">';
      html += '<div style="font-size:0.88rem; font-weight:500; color:var(--text);">' + p.name + '</div>';
      html += '<div style="font-size:0.78rem; color:var(--text-muted); margin-top:2px;">' + p.brand + '</div>';
      html += '<div style="font-size:0.78rem; color:var(--primary-light); margin-top:2px; font-weight:500;">' + p.price + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  },

  renderHairRoutine() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDC87 Rotina Capilar (' + HAIR_CARE.type + ')</h3>';

    HAIR_CARE.routine.forEach(function(item) {
      html += '<div class="care-item">';
      html += '<div class="care-item-header">';
      html += '<strong>' + item.care + '</strong>';
      html += '<span class="care-frequency">' + item.frequency + '</span>';
      html += '</div>';
      html += '<p>' + item.details + '</p>';
      if (item.videoKey) {
        html += '<button class="btn btn-sm btn-ghost" onclick="VideoModal.open(\'' + item.videoKey + '\', \'hair\')">\uD83C\uDFAC Ver tutorial</button>';
      }
      html += '</div>'; // .care-item
    });

    html += '</div>'; // .card
    return html;
  },

  renderHairTimeline() {
    var currentLength = StorageManager.getValue('hairLength', 6);
    var goalLength = 30;
    var progressPct = Math.min(100, Math.round((currentLength / goalLength) * 100));

    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCCF Timeline de Crescimento</h3>';

    // Current length input
    html += '<div style="margin-bottom:1rem;">';
    html += '<label style="font-size:0.9rem; margin-right:0.5rem;">Comprimento atual (cm):</label>';
    html += '<input type="number" id="hair-length" class="hair-length-input" value="' + currentLength + '" min="0" max="50" step="0.5">';
    html += '</div>';

    // Visual timeline bar
    html += '<div class="hair-timeline">';
    html += '<div class="timeline-bar">';
    html += '<div class="timeline-progress" style="width: ' + progressPct + '%"></div>';
    html += '</div>';

    // Milestones
    html += '<div class="timeline-milestones">';
    HAIR_CARE.timeline.forEach(function(m, i) {
      var positions = [0, 43, 67, 100];
      var pos = positions[i] || 0;
      var isCurrent = (i === 0);
      var isPast = (currentLength >= parseInt(m.length));
      html += '<div class="milestone' + (isPast ? ' reached' : '') + '" style="left:' + pos + '%">';
      html += '<span class="milestone-length">' + m.length + '</span>';
      html += '<span class="milestone-label">' + m.milestone + '</span>';
      html += '</div>';
    });
    html += '</div>'; // .timeline-milestones
    html += '</div>'; // .hair-timeline

    // Current progress text
    html += '<p style="text-align:center; margin-top:1.5rem; font-size:0.9rem; opacity:0.8;">';
    html += '\uD83D\uDCCA Progresso: <strong>' + currentLength + 'cm</strong> de ' + goalLength + 'cm (' + progressPct + '%)';
    html += '</p>';

    html += '</div>'; // .card
    return html;
  },

  renderHairSupplement() {
    var sup = HAIR_CARE.supplements;
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDC8A Suplemento</h3>';
    html += '<div class="care-item">';
    html += '<div class="care-item-header">';
    html += '<strong>' + sup.name + '</strong>';
    html += '<span class="care-frequency">' + sup.dose + '</span>';
    html += '</div>';
    html += '<p>' + sup.notes + '</p>';
    html += '</div>';
    html += '</div>'; // .card
    return html;
  },

  // ── Sub-tab 3: Depilação ───────────────────────────────────

  renderDepilation() {
    var html = '';

    // Device info
    html += this.renderDepilationDevice();

    // Schedule reminder
    html += this.renderDepilationSchedule();

    // Areas
    html += this.renderDepilationAreas();

    // Step by step
    html += this.renderDepilationSteps();

    // First time guide
    html += this.renderDepilationFirstTimeGuide();

    // Alerts
    html += this.renderDepilationAlerts();

    return html;
  },

  renderDepilationDevice() {
    var device = DEPILATION.device;
    if (!device) return '';

    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDD0C Seu Equipamento</h3>';
    html += '<div style="text-align:center; margin-bottom:0.75rem;">';
    html += '<strong style="font-size:1.1rem; color:var(--primary-light);">' + device.name + '</strong>';
    html += '<p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.25rem;">' + device.howItWorks + '</p>';
    html += '</div>';

    html += '<div style="display:flex; flex-direction:column; gap:0.4rem;">';
    device.features.forEach(function(feature) {
      html += '<div style="font-size:0.85rem; padding:0.35rem 0.5rem; background:rgba(255,255,255,0.04); border-radius:8px;">';
      html += '\u2705 ' + feature;
      html += '</div>';
    });
    html += '</div>';

    html += '</div>'; // .card
    return html;
  },

  renderDepilationSchedule() {
    var today = new Date().getDay(); // 0=Sun, 1=Mon ... 6=Sat
    var isDepilationDay = DEPILATION.days.indexOf(today) !== -1;
    var dayNames = DEPILATION.dayNames;

    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCC5 Agenda de Depila\u00E7\u00E3o</h3>';
    html += '<p style="font-size:1rem; margin-bottom:0.75rem;">Dias de depila\u00E7\u00E3o: <strong>' + dayNames.join(' e ') + '</strong></p>';

    if (isDepilationDay) {
      html += '<div class="care-alert" style="background: rgba(110,203,139,0.15); border-color: rgba(110,203,139,0.3);">';
      html += '<span>\u2705 Hoje \u00E9 dia de depila\u00E7\u00E3o!</span>';
      html += '</div>';
    } else {
      // Find next depilation day
      var nextDay = this.getNextDepilationDay(today);
      html += '<div class="care-alert">';
      html += '<span>\uD83D\uDCC6 Pr\u00F3xima depila\u00E7\u00E3o: <strong>' + nextDay + '</strong></span>';
      html += '</div>';
    }

    html += '</div>'; // .card
    return html;
  },

  getNextDepilationDay(today) {
    var dayDisplayNames = ['Domingo', 'Segunda', 'Ter\u00E7a', 'Quarta', 'Quinta', 'Sexta', 'S\u00E1bado'];
    var days = DEPILATION.days; // [2, 6] = Tuesday, Saturday
    for (var i = 1; i <= 7; i++) {
      var checkDay = (today + i) % 7;
      if (days.indexOf(checkDay) !== -1) {
        var daysUntil = i;
        return dayDisplayNames[checkDay] + ' (' + (daysUntil === 1 ? 'amanh\u00E3' : 'em ' + daysUntil + ' dias') + ')';
      }
    }
    return dayDisplayNames[days[0]];
  },

  renderDepilationAreas() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83E\uDE92 \u00C1reas \u2014 Como usar em cada regi\u00E3o</h3>';

    DEPILATION.areas.forEach(function(area) {
      html += '<div class="care-item" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding:0.75rem 0;">';
      html += '<strong>' + area.area + '</strong>';
      html += '<p>\uD83D\uDCCB M\u00E9todo: ' + area.method + '</p>';
      html += '<p>\u27A1\uFE0F Dire\u00E7\u00E3o: ' + area.direction + '</p>';
      html += '<p>\u26A0\uFE0F ' + area.specialCare + '</p>';
      if (area.videoKey) {
        html += '<button class="btn btn-sm btn-ghost" onclick="VideoModal.open(\'' + area.videoKey + '\', \'depilation\')">\uD83C\uDFAC Ver tutorial</button>';
      }
      html += '</div>'; // .care-item
    });

    html += '</div>'; // .card
    return html;
  },

  renderDepilationSteps() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCDD Passo a Passo</h3>';
    html += '<div class="depilation-steps">';

    DEPILATION.steps.forEach(function(step, index) {
      html += '<div class="care-step">';
      html += '<div class="step-number">' + (index + 1) + '</div>';
      html += '<div class="step-content">';
      html += '<p style="margin:0;">' + step + '</p>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>'; // .depilation-steps
    html += '</div>'; // .card
    return html;
  },

  renderDepilationFirstTimeGuide() {
    var guide = DEPILATION.firstTimeGuide;
    if (!guide) return '';

    var html = '<div class="card glass">';
    html += '<h3>\uD83C\uDD95 Primeira Vez? Guia de Adapta\u00E7\u00E3o</h3>';
    html += '<p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.75rem;">V\u00E1 aos poucos \u2014 seu corpo acostuma e a dor diminui muito!</p>';

    guide.forEach(function(step, index) {
      var emoji = index < 4 ? '\uD83D\uDCC5' : '\u2728';
      html += '<div class="care-step">';
      html += '<div class="step-number">' + (index + 1) + '</div>';
      html += '<div class="step-content">';
      html += '<p style="margin:0;">' + step + '</p>';
      html += '</div>';
      html += '</div>';
    });

    html += '</div>'; // .card
    return html;
  },

  renderDepilationAlerts() {
    var html = '<div class="card glass">';
    html += '<h3>\u26A0\uFE0F Alertas \u2014 Pele Parda</h3>';
    html += '<div class="care-alerts-list">';

    DEPILATION.alerts.forEach(function(alert) {
      html += '<div class="care-alert">';
      html += '<span>\u26A0\uFE0F ' + alert + '</span>';
      html += '</div>';
    });

    html += '</div>'; // .care-alerts-list
    html += '</div>'; // .card
    return html;
  },

  // ── Sub-tab 4: Kegel ───────────────────────────────────────

  renderKegel() {
    var html = '';

    // Protocol types
    html += this.renderKegelProtocolTypes();

    // Standard Kegel exercise
    html += this.renderKegelStandard();

    // Reverse Kegel
    html += this.renderKegelReverse();

    // Tips
    html += this.renderKegelTips();

    return html;
  },

  renderKegelProtocolTypes() {
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCAA 3 Tipos de Kegel</h3>';
    html += '<p style="font-size:0.8rem; color:var(--primary-light); margin-bottom:0.75rem;">\u23F1\uFE0F Resultado em 4\u20138 semanas consistentes: melhora de ere\u00E7\u00E3o, controle e intensidade.</p>';
    html += '<div style="display:flex; flex-direction:column; gap:0.6rem;">';
    KEGEL_PROTOCOL_TYPES.forEach(function(p) {
      html += '<div style="padding:0.65rem 0.8rem; background:rgba(255,255,255,0.05); border-radius:10px; border-left:3px solid var(--primary);">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">';
      html += '<strong style="font-size:0.95rem; color:var(--text);">' + p.tipo + '</strong>';
      html += '<span style="font-size:0.75rem; color:var(--primary-light); background:rgba(var(--primary-rgb,110,203,139),0.15); padding:2px 8px; border-radius:10px;">' + p.quando + '</span>';
      html += '</div>';
      html += '<p style="margin:0; font-size:0.85rem; color:var(--text-muted);">' + p.desc + '</p>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  },

  renderKegelStandard() {
    var std = KEGEL_ROUTINE.standard;
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCAA ' + std.name + ' (Di\u00E1rio)</h3>';
    html += '<p style="margin-bottom:1rem;">' + std.reps + ' repeti\u00E7\u00F5es \u2014 ' + std.tip + '</p>';

    html += '<div class="kegel-instructions">';
    html += '<p>1. Identifique o m\u00FAsculo: \u00E9 o mesmo que voc\u00EA usa pra parar o xixi no meio</p>';
    html += '<p>2. Contraia e segure <strong>' + std.holdSeconds + ' segundos</strong></p>';
    html += '<p>3. Relaxe <strong>' + std.relaxSeconds + ' segundos</strong></p>';
    html += '<p>4. Repita <strong>' + std.reps + ' vezes</strong></p>';
    html += '<p>5. Fa\u00E7a <strong>TODOS os dias</strong></p>';
    html += '</div>';

    // Kegel timer display area
    html += '<div id="kegel-timer-display" class="kegel-timer-display" style="display:none;">';
    html += '<div class="kegel-timer-phase" id="kegel-phase">Pronto?</div>';
    html += '<div class="kegel-timer-count" id="kegel-count"></div>';
    html += '<div class="kegel-timer-rep" id="kegel-rep"></div>';
    html += '</div>';

    // Timer button
    html += '<button class="btn btn-primary btn-block" id="kegel-start-btn" style="margin-top:1rem;">';
    html += '\u25B6\uFE0F Iniciar Kegel Guiado (' + std.reps + ' reps)';
    html += '</button>';

    html += '</div>'; // .card
    return html;
  },

  renderKegelReverse() {
    var rev = KEGEL_ROUTINE.reverse;
    var html = '<div class="card glass">';
    html += '<h3>\uD83C\uDFAF ' + rev.name + '</h3>';
    html += '<p style="margin-bottom:0.75rem;">' + rev.description + '</p>';

    html += '<div class="kegel-instructions">';
    html += '<p>\uD83D\uDD01 Repeti\u00E7\u00F5es: <strong>' + rev.reps + '</strong></p>';
    html += '<p>\u23F1\uFE0F Segurar: <strong>' + rev.holdSeconds + ' segundos</strong></p>';
    html += '<p>\uD83D\uDE0C Relaxar: <strong>' + rev.relaxSeconds + ' segundos</strong></p>';
    html += '<p>\uD83D\uDCC5 Frequ\u00EAncia: <strong>' + rev.frequency + '</strong></p>';
    html += '</div>';

    html += '</div>'; // .card
    return html;
  },

  renderKegelTips() {
    var tips = KEGEL_ROUTINE.tips;
    var html = '<div class="card glass">';
    html += '<h3>\uD83D\uDCA1 Dicas</h3>';
    html += '<div class="kegel-tips-list">';

    tips.forEach(function(tip) {
      html += '<div class="care-tip-item">';
      html += '<span>\uD83D\uDCA1 ' + tip + '</span>';
      html += '</div>';
    });

    html += '</div>'; // .kegel-tips-list
    html += '</div>'; // .card
    return html;
  },

  // ── Sub-tab 5: Intimidade ──────────────────────────────────

  renderIntimidade: function() {
    if (typeof INTIMACY_GUIDE === 'undefined') return '';
    var html = '';
    var sections = ['feminina', 'confianca', 'evolucao'];
    for (var s = 0; s < sections.length; s++) {
      var section = INTIMACY_GUIDE[sections[s]];
      html += '<div class="card glass" style="margin-bottom:12px;">';
      html += '<h3 style="font-family:var(--font-title);margin:0 0 10px;">' + section.title + '</h3>';
      for (var i = 0; i < section.items.length; i++) {
        var item = section.items[i];
        html += '<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05);">';
        html += '<div style="color:var(--primary);font-weight:600;font-size:0.86rem;margin-bottom:3px;">' + item.topic + '</div>';
        html += '<div style="color:var(--text-muted);font-size:0.82rem;line-height:1.55;">' + item.desc + '</div>';
        if (item.how) {
          html += '<div style="color:var(--gold);font-size:0.78rem;margin-top:4px;">Como: ' + item.how + '</div>';
        }
        html += '</div>';
      }
      html += '</div>';
    }
    return html;
  },

  // ── Sub-tab 6: Cores ───────────────────────────────────────

  renderCores() {
    var self = this;
    var cats = [
      { id: 'cima', label: '\uD83D\uDC5A Parte de cima' },
      { id: 'baixo', label: '\uD83D\uDC56 Parte de baixo' },
      { id: 'intima', label: '\uD83D\uDEB1 \u00CDntima & Lingerie' }
    ];

    var html = '<div class="card glass">';

    // Category buttons
    html += '<div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:14px;">';
    cats.forEach(function(cat) {
      var activeClass = cat.id === self.currentColorCat ? ' active' : '';
      html += '<button class="color-cat-btn' + activeClass + '" data-cat="' + cat.id + '">' + cat.label + '</button>';
    });
    html += '</div>';

    var guide = COLOR_GUIDE[this.currentColorCat];
    if (!guide) {
      html += '</div>';
      return html;
    }

    // Subtitle and tip
    html += '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.4rem;">' + guide.subtitle + '</p>';
    html += '<div class="care-alert" style="margin-bottom:1rem;">';
    html += '<span>\uD83D\uDCA1 ' + guide.tip + '</span>';
    html += '</div>';

    // Best colors
    html += '<h4 style="margin:0 0 0.5rem; font-size:0.9rem; color:var(--success);">\u2705 Melhores cores</h4>';
    html += '<div class="color-grid">';
    guide.best.forEach(function(c) {
      html += '<div class="color-card">';
      html += '<div class="color-swatch" style="background:' + c.hex + ';"></div>';
      html += '<div class="color-card-info">';
      html += '<div class="color-card-name">' + c.name + '</div>';
      html += '<div class="color-card-why">' + c.why + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Combos
    html += '<h4 style="margin:0 0 0.5rem; font-size:0.9rem; color:var(--primary-light);">\uD83C\uDFB6 Combina\u00E7\u00F5es prontas</h4>';
    html += '<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">';
    guide.combos.forEach(function(combo) {
      html += '<div class="color-card">';
      html += '<div class="color-combo">';
      combo.swatches.forEach(function(hex) {
        html += '<div style="background:' + hex + ';"></div>';
      });
      html += '</div>';
      html += '<div class="color-card-info">';
      html += '<div class="color-card-name">' + combo.name + '</div>';
      html += '<div class="color-card-why">' + combo.desc + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Avoid colors
    html += '<h4 style="margin:0 0 0.5rem; font-size:0.9rem; color:var(--danger, #ff6b6b);">\u26A0\uFE0F Usar com cuidado</h4>';
    html += '<div class="color-grid color-avoid">';
    guide.avoid.forEach(function(c) {
      html += '<div class="color-card">';
      html += '<div class="color-swatch" style="background:' + c.hex + ';"></div>';
      html += '<div class="color-card-info">';
      html += '<div class="color-card-name">' + c.name + '</div>';
      html += '<div class="color-card-why">' + c.why + '</div>';
      html += '</div>';
      html += '</div>';
    });
    html += '</div>';

    // Special note for lingerie
    if (this.currentColorCat === 'intima') {
      html += '<div class="care-alert" style="margin-top:0.5rem;">';
      html += '<span>\uD83D\uDCA1 Nude caramelo \u00E9 o nude certo pra pele parda, n\u00E3o o rosado europeu.</span>';
      html += '</div>';
    }

    html += '</div>'; // .card
    return html;
  },

  // ── Kegel Timer Logic ──────────────────────────────────────

  startKegelTimer() {
    if (this.kegelTimerActive) return;
    this.kegelTimerActive = true;

    var display = document.getElementById('kegel-timer-display');
    var startBtn = document.getElementById('kegel-start-btn');
    if (display) display.style.display = 'block';
    if (startBtn) startBtn.disabled = true;

    var rep = 1;
    var totalReps = KEGEL_ROUTINE.standard.reps;
    var holdTime = KEGEL_ROUTINE.standard.holdSeconds;
    var relaxTime = KEGEL_ROUTINE.standard.relaxSeconds;
    var self = this;

    var doRep = function() {
      if (rep > totalReps) {
        // Completed all reps
        self.kegelTimerActive = false;
        if (startBtn) {
          startBtn.disabled = false;
          startBtn.textContent = '\u2705 Completo! Fazer de novo?';
        }
        self.updateKegelDisplay('Completo! \uD83D\uDCAA', '', '');
        Toast.show('Kegel completo! \uD83D\uDCAA', 'success');

        // Vibrate celebration
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200, 100, 200]);
        }

        // Reset button text after 3 seconds
        setTimeout(function() {
          if (startBtn) {
            startBtn.textContent = '\u25B6\uFE0F Iniciar Kegel Guiado (' + totalReps + ' reps)';
          }
        }, 3000);
        return;
      }

      // HOLD phase
      self.updateKegelDisplay('CONTRAIA!', holdTime + 's', 'Repeti\u00E7\u00E3o ' + rep + '/' + totalReps);
      if (navigator.vibrate) navigator.vibrate(100);

      TimerEngine.startCountdown(holdTime, 'CONTRAIA! (Rep ' + rep + '/' + totalReps + ')', null, function() {
        // RELAX phase
        self.updateKegelDisplay('Relaxe...', relaxTime + 's', 'Repeti\u00E7\u00E3o ' + rep + '/' + totalReps);
        if (navigator.vibrate) navigator.vibrate([50, 50]);

        TimerEngine.startCountdown(relaxTime, 'Relaxe... (Rep ' + rep + '/' + totalReps + ')', null, function() {
          rep++;
          doRep();
        });
      });
    };

    doRep();
  },

  updateKegelDisplay(phase, count, repText) {
    var phaseEl = document.getElementById('kegel-phase');
    var countEl = document.getElementById('kegel-count');
    var repEl = document.getElementById('kegel-rep');
    if (phaseEl) phaseEl.textContent = phase;
    if (countEl) countEl.textContent = count;
    if (repEl) repEl.textContent = repText;
  },

  // Event listeners are now handled via delegation in init()
};

// =============================================
// PROGRESS MANAGER — Progresso Tab (Task 10)
// =============================================
// Manages the Progress page with 4 sub-tabs:
//   1. Fotos (progress photos with upload & comparison)
//   2. Medidas (body measurements)
//   3. Graficos (Chart.js charts for weight, measurements, ratio)
//   4. Conquistas (badge grid from BADGES array)

const ProgressManager = {
  currentSubTab: 'fotos',
  charts: {},
  startingWeight: 96,
  goalWeight: 74,
  compareMode: false,
  projectionData: null,

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    var self = this;

    // Event delegation — set up ONCE on the container
    var container = document.getElementById('progresso-content');
    if (container) {
      container.addEventListener('click', function(e) {
        // Sub-tab clicks
        var subTab = e.target.closest('#progresso-content .sub-tab');
        if (subTab) {
          var tab = subTab.getAttribute('data-subtab');
          if (tab !== self.currentSubTab) {
            self.currentSubTab = tab;
            self.render();
          }
          return;
        }
        // Compare button
        if (e.target.closest('#compare-photos-btn')) {
          self.showComparison();
          return;
        }
        // Save measurements
        if (e.target.closest('#save-measurements')) {
          self.saveMeasurements();
          return;
        }
        // Delete photos by date
        var deleteDate = e.target.closest('.progress-delete-date');
        if (deleteDate) {
          var date = deleteDate.getAttribute('data-date');
          if (confirm('Apagar todas as fotos de ' + Utils.formatDateBR(date) + '?')) {
            self.deletePhotosForDate(date);
          }
          return;
        }
        // Projection button
        if (e.target.closest('.proj-btn')) {
          self.handleProjection();
          return;
        }
        // Delete measurement
        var deleteMeas = e.target.closest('.measurement-delete');
        if (deleteMeas) {
          var mdate = deleteMeas.getAttribute('data-date');
          if (confirm('Apagar medi\u00e7\u00e3o de ' + Utils.formatDateBR(mdate) + '?')) {
            self.deleteMeasurement(mdate);
          }
          return;
        }
      });
      container.addEventListener('change', function(e) {
        // Photo upload inputs
        if (e.target.matches('input[type="file"]')) {
          var file = e.target.files[0];
          if (!file) return;
          var angle = e.target.getAttribute('data-angle');
          self.handlePhotoUpload(file, angle);
        }
      });
      container.addEventListener('input', function(e) {
        // Live ratio calculation
        if (e.target.id === 'measure-cintura' || e.target.id === 'measure-quadril') {
          self.updateRatioDisplay();
        }
      });
    }

    document.addEventListener('pageChange', function(e) {
      if (e.detail.page === 'progresso') self.render();
    });
  },

  render() {
    // Destroy existing charts before re-rendering
    var self = this;
    Object.keys(this.charts).forEach(function(k) {
      try { self.charts[k].destroy(); } catch(e) {}
    });
    this.charts = {};

    var container = document.getElementById('progresso-content');
    if (!container) return;

    var html = this.renderSubTabs();

    switch (this.currentSubTab) {
      case 'fotos':
        html += this.renderPhotos();
        break;
      case 'medidas':
        html += this.renderMeasurements();
        break;
      case 'graficos':
        html += this.renderCharts();
        break;
      case 'conquistas':
        html += this.renderBadges();
        break;
      case 'projecao':
        html += this.renderProjection();
        break;
    }

    container.innerHTML = html;

    // Init charts after DOM is painted
    if (this.currentSubTab === 'graficos') {
      requestAnimationFrame(function() {
        requestAnimationFrame(function() { self.initCharts(); });
      });
    }
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'fotos', label: 'Fotos' },
      { id: 'medidas', label: 'Medidas' },
      { id: 'graficos', label: 'Gr\u00e1ficos' },
      { id: 'conquistas', label: 'Conquistas' },
      { id: 'projecao', label: 'Proje\u00e7\u00e3o' }
    ];
    var self = this;
    var html = '<div class="sub-tabs">';
    tabs.forEach(function(tab) {
      var activeClass = tab.id === self.currentSubTab ? ' active' : '';
      html += '<button class="sub-tab' + activeClass + '" data-subtab="' + tab.id + '">' + tab.label + '</button>';
    });
    html += '</div>';
    return html;
  },

  // ── Sub-tab 1: Fotos de Progresso ──────────────────────────

  renderPhotos() {
    var photos = StorageManager.getValue('photos', []);
    var html = '';

    // Upload card
    html += '<div class="card glass">';
    html += '<h3>\uD83D\uDCF8 Registrar Progresso</h3>';
    html += '<p style="opacity:0.7;">Tire fotos de frente, lateral e costas a cada 15 dias</p>';
    html += '<div style="display:flex; gap:0.5rem; flex-wrap:wrap;">';
    html += '<label class="btn btn-primary" style="cursor:pointer;">';
    html += '\uD83D\uDCF7 Frente';
    html += '<input type="file" accept="image/*" capture="user" data-angle="frente" style="display:none;">';
    html += '</label>';
    html += '<label class="btn btn-primary" style="cursor:pointer;">';
    html += '\uD83D\uDCF7 Lateral';
    html += '<input type="file" accept="image/*" capture="user" data-angle="lateral" style="display:none;">';
    html += '</label>';
    html += '<label class="btn btn-primary" style="cursor:pointer;">';
    html += '\uD83D\uDCF7 Costas';
    html += '<input type="file" accept="image/*" capture="user" data-angle="costas" style="display:none;">';
    html += '</label>';
    html += '</div>';
    html += '</div>';

    // Comparison mode
    if (photos.length > 0) {
      var dateSet = {};
      photos.forEach(function(p) { dateSet[p.date] = true; });
      var dates = Object.keys(dateSet).sort().reverse();

      html += '<div class="card glass">';
      html += '<h3>\uD83D\uDD0D Comparar Fotos</h3>';
      if (dates.length >= 2) {
        html += '<div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">';
        html += '<select id="compare-date-1" class="form-input" style="flex:1; min-width:120px;">';
        dates.forEach(function(d, i) {
          html += '<option value="' + d + '"' + (i === 1 ? ' selected' : '') + '>' + Utils.formatDateBR(d) + '</option>';
        });
        html += '</select>';
        html += '<span style="font-weight:600;">vs</span>';
        html += '<select id="compare-date-2" class="form-input" style="flex:1; min-width:120px;">';
        dates.forEach(function(d, i) {
          html += '<option value="' + d + '"' + (i === 0 ? ' selected' : '') + '>' + Utils.formatDateBR(d) + '</option>';
        });
        html += '</select>';
        html += '<button class="btn btn-primary" id="compare-photos-btn">\uD83D\uDD0D Comparar</button>';
        html += '</div>';
        html += '<div id="comparison-result"></div>';
      } else {
        html += '<p style="opacity:0.7;">Tire fotos em pelo menos 2 datas diferentes para comparar.</p>';
      }
      html += '</div>';
    }

    // Photo grid by date
    if (photos.length > 0) {
      var grouped = {};
      photos.forEach(function(p) {
        if (!grouped[p.date]) grouped[p.date] = [];
        grouped[p.date].push(p);
      });
      var sortedDates = Object.keys(grouped).sort().reverse();

      sortedDates.forEach(function(date) {
        html += '<div class="card glass">';
        html += '<h4>' + Utils.formatDateBR(date) + '</h4>';
        html += '<div class="photo-grid">';
        grouped[date].forEach(function(photo, idx) {
          html += '<div class="photo-item">';
          html += '<img src="' + photo.data + '" alt="' + photo.angle + '" loading="lazy">';
          html += '</div>';
        });
        html += '</div>';
        html += '<div style="display:flex; gap:4px; margin-top:6px;">';
        grouped[date].forEach(function(photo) {
          html += '<span class="photo-date" style="flex:1;">' + photo.angle + '</span>';
        });
        html += '</div>';
        html += '<button class="btn btn-sm btn-outline progress-delete-date" data-date="' + date + '" style="margin-top:8px;">\uD83D\uDDD1\uFE0F Apagar fotos deste dia</button>';
        html += '</div>';
      });
    } else {
      html += '<div class="card glass" style="text-align:center; padding:2rem;">';
      html += '<p style="font-size:2rem;">\uD83D\uDCF8</p>';
      html += '<p style="opacity:0.7;">Nenhuma foto registrada ainda.<br>Tire suas primeiras fotos de progresso!</p>';
      html += '</div>';
    }

    return html;
  },

  // ── Sub-tab 2: Medidas Corporais ───────────────────────────

  renderMeasurements() {
    var measurements = StorageManager.getValue('measurements', []);
    var html = '';

    // Input form
    html += '<div class="card glass">';
    html += '<h3>\uD83D\uDCCF Registrar Medidas</h3>';
    html += '<p style="opacity:0.7;">Me\u00e7a a cada 15 dias, mesmo dia e hor\u00e1rio</p>';
    html += '<div class="measurements-form">';

    var fields = [
      { id: 'peso', label: '\u2696\uFE0F Peso (kg)', placeholder: 'Ex: 96.0' },
      { id: 'cintura', label: '\uD83D\uDCD0 Cintura (cm) \u2014 no ponto mais fino', placeholder: 'Ex: 85.0' },
      { id: 'quadril', label: '\uD83C\uDF51 Quadril (cm) \u2014 no ponto mais largo', placeholder: 'Ex: 105.0' },
      { id: 'coxa', label: '\uD83E\uDDB5 Coxa (cm) \u2014 no meio da coxa', placeholder: 'Ex: 60.0' },
      { id: 'braco', label: '\uD83D\uDCAA Bra\u00e7o (cm)', placeholder: 'Ex: 30.0' },
      { id: 'peito', label: '\uD83D\uDC55 Peito (cm) \u2014 na linha do mamilo', placeholder: 'Ex: 100.0' }
    ];

    fields.forEach(function(f) {
      html += '<div class="form-group">';
      html += '<label class="form-label">' + f.label + '</label>';
      html += '<input type="number" step="0.1" id="measure-' + f.id + '" class="form-input" placeholder="' + f.placeholder + '">';
      html += '</div>';
    });

    html += '</div>';
    html += '<div id="ratio-display" style="margin-bottom:12px;"></div>';
    html += '<button class="btn btn-primary btn-block" id="save-measurements">\uD83D\uDCBE Salvar Medidas</button>';
    html += '</div>';

    // History
    if (measurements.length > 0) {
      html += '<div class="card glass">';
      html += '<h3>\uD83D\uDCCB Hist\u00f3rico de Medidas</h3>';

      var sorted = measurements.slice().sort(function(a, b) {
        return b.date.localeCompare(a.date);
      });

      sorted.forEach(function(m) {
        var ratio = (m.cintura && m.quadril) ? (m.cintura / m.quadril).toFixed(2) : null;
        html += '<div class="measurement-entry">';
        html += '<div class="measurement-date">' + Utils.formatDateBR(m.date) + '</div>';
        html += '<div class="measurement-values">';
        if (m.peso) html += '<span>\u2696\uFE0F ' + m.peso + 'kg</span>';
        if (m.cintura) html += '<span>\uD83D\uDCD0 Cintura: ' + m.cintura + 'cm</span>';
        if (m.quadril) html += '<span>\uD83C\uDF51 Quadril: ' + m.quadril + 'cm</span>';
        if (m.coxa) html += '<span>\uD83E\uDDB5 Coxa: ' + m.coxa + 'cm</span>';
        if (m.braco) html += '<span>\uD83D\uDCAA Bra\u00e7o: ' + m.braco + 'cm</span>';
        if (m.peito) html += '<span>\uD83D\uDC55 Peito: ' + m.peito + 'cm</span>';
        if (ratio) {
          var ratioClass = parseFloat(ratio) <= 0.75 ? 'ratio-good' : 'ratio-warn';
          html += '<span class="' + ratioClass + '">Cintura/Quadril: ' + ratio + '</span>';
        }
        html += '</div>';
        html += '<button class="btn btn-sm btn-outline measurement-delete" data-date="' + m.date + '" style="margin-top:4px;">\uD83D\uDDD1\uFE0F</button>';
        html += '</div>';
      });

      html += '</div>';
    }

    return html;
  },

  // ── Sub-tab 3: Graficos ────────────────────────────────────

  renderCharts() {
    var measurements = StorageManager.getValue('measurements', []);
    var html = '';

    if (measurements.length < 2) {
      html += '<div class="card glass" style="text-align:center; padding:2rem;">';
      html += '<p style="font-size:2rem;">\uD83D\uDCC8</p>';
      html += '<p style="opacity:0.7;">Registre suas medidas para ver os gr\u00e1ficos! \uD83D\uDCCA</p>';
      html += '<p style="opacity:0.5; font-size:0.85rem;">S\u00e3o necess\u00e1rias pelo menos 2 medi\u00e7\u00f5es.</p>';
      html += '</div>';
      return html;
    }

    // Weight chart
    html += '<div class="card glass">';
    html += '<h3>\u2696\uFE0F Evolu\u00e7\u00e3o do Peso</h3>';
    html += '<div class="chart-container"><canvas id="chart-weight"></canvas></div>';
    html += '</div>';

    // Measurements chart
    html += '<div class="card glass">';
    html += '<h3>\uD83D\uDCCF Medidas Corporais</h3>';
    html += '<div class="chart-container"><canvas id="chart-measurements"></canvas></div>';
    html += '</div>';

    // Waist-hip ratio chart
    html += '<div class="card glass">';
    html += '<h3>\uD83D\uDCCA Raz\u00e3o Cintura/Quadril</h3>';
    html += '<div class="chart-container"><canvas id="chart-ratio"></canvas></div>';
    html += '</div>';

    // Goal prediction
    html += '<div id="goal-prediction"></div>';

    return html;
  },

  initCharts() {
    var measurements = StorageManager.getValue('measurements', []);
    if (measurements.length < 2) return;

    var sorted = measurements.slice().sort(function(a, b) {
      return a.date.localeCompare(b.date);
    });

    var dates = sorted.map(function(m) { return Utils.formatDateBR(m.date); });
    var self = this;

    // ── Weight chart ──
    var weights = sorted.map(function(m) { return m.peso || null; });
    var weightCtx = document.getElementById('chart-weight');
    if (weightCtx && weights.some(function(w) { return w !== null; })) {
      this.charts.weight = new Chart(weightCtx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Peso (kg)',
            data: weights,
            borderColor: '#c97bb5',
            backgroundColor: 'rgba(201, 123, 181, 0.1)',
            tension: 0.3,
            fill: true,
            spanGaps: true
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { labels: { color: '#f0e6ef' } } },
          scales: {
            x: { ticks: { color: '#f0e6ef' } },
            y: { ticks: { color: '#f0e6ef' }, grid: { color: 'rgba(255,255,255,0.1)' } }
          }
        }
      });
    }

    // ── Measurements chart ──
    var measureCtx = document.getElementById('chart-measurements');
    if (measureCtx) {
      var bodyParts = [
        { key: 'cintura', label: 'Cintura', color: '#c97bb5' },
        { key: 'quadril', label: 'Quadril', color: '#d4a853' },
        { key: 'coxa', label: 'Coxa', color: '#7bc9a7' },
        { key: 'braco', label: 'Bra\u00e7o', color: '#7ba3c9' },
        { key: 'peito', label: 'Peito', color: '#c9917b' }
      ];
      var datasets = [];
      bodyParts.forEach(function(part) {
        var data = sorted.map(function(m) { return m[part.key] || null; });
        if (data.some(function(d) { return d !== null; })) {
          datasets.push({
            label: part.label + ' (cm)',
            data: data,
            borderColor: part.color,
            backgroundColor: 'transparent',
            tension: 0.3,
            spanGaps: true
          });
        }
      });

      if (datasets.length > 0) {
        this.charts.measurements = new Chart(measureCtx, {
          type: 'line',
          data: { labels: dates, datasets: datasets },
          options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#f0e6ef' } } },
            scales: {
              x: { ticks: { color: '#f0e6ef' } },
              y: { ticks: { color: '#f0e6ef' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
          }
        });
      }
    }

    // ── Waist-hip ratio chart ──
    var ratioCtx = document.getElementById('chart-ratio');
    if (ratioCtx) {
      var ratios = sorted.map(function(m) {
        return (m.cintura && m.quadril) ? parseFloat((m.cintura / m.quadril).toFixed(3)) : null;
      });

      if (ratios.some(function(r) { return r !== null; })) {
        this.charts.ratio = new Chart(ratioCtx, {
          type: 'line',
          data: {
            labels: dates,
            datasets: [
              {
                label: 'Raz\u00e3o C/Q',
                data: ratios,
                borderColor: '#d4a853',
                backgroundColor: 'rgba(212, 168, 83, 0.1)',
                tension: 0.3,
                fill: true,
                spanGaps: true
              },
              {
                label: 'Meta (0.75)',
                data: dates.map(function() { return 0.75; }),
                borderColor: 'rgba(123, 201, 167, 0.6)',
                borderDash: [5, 5],
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#f0e6ef' } } },
            scales: {
              x: { ticks: { color: '#f0e6ef' } },
              y: { ticks: { color: '#f0e6ef' }, grid: { color: 'rgba(255,255,255,0.1)' } }
            }
          }
        });
      }
    }

    // ── Goal prediction ──
    this.renderGoalPrediction(sorted);
  },

  renderGoalPrediction: function(sorted) {
    var predictionDiv = document.getElementById('goal-prediction');
    if (!predictionDiv) return;

    var weightData = [];
    sorted.forEach(function(m, i) {
      if (m.peso) weightData.push({ index: i, weight: m.peso, date: m.date });
    });

    if (weightData.length < 2) {
      predictionDiv.innerHTML = '';
      return;
    }

    // Simple linear regression on weight data
    var n = weightData.length;
    var sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
    weightData.forEach(function(d) {
      sumX += d.index;
      sumY += d.weight;
      sumXY += d.index * d.weight;
      sumX2 += d.index * d.index;
    });
    var slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    var intercept = (sumY - slope * sumX) / n;

    var html = '<div class="card glass">';
    html += '<h3>\uD83C\uDFAF Predi\u00e7\u00e3o de Meta</h3>';

    if (slope >= 0) {
      html += '<p style="opacity:0.7;">O peso est\u00e1 se mantendo ou subindo. Continue firme nos treinos e alimenta\u00e7\u00e3o! \uD83D\uDCAA</p>';
    } else {
      // Estimate how many data points to reach goal
      var lastIdx = weightData[weightData.length - 1].index;
      var goalIdx = (this.goalWeight - intercept) / slope;
      var remainingPoints = goalIdx - lastIdx;

      // Estimate average days between measurements
      var firstDate = new Date(weightData[0].date);
      var lastDate = new Date(weightData[weightData.length - 1].date);
      var daysBetween = (lastDate - firstDate) / (1000 * 60 * 60 * 24);
      var avgDaysPerPoint = weightData.length > 1 ? daysBetween / (weightData.length - 1) : 15;
      if (avgDaysPerPoint < 1) avgDaysPerPoint = 15;

      var estimatedDays = Math.round(remainingPoints * avgDaysPerPoint);
      var estimatedWeeks = Math.round(estimatedDays / 7);

      if (estimatedWeeks > 0 && estimatedWeeks < 200) {
        html += '<p style="font-size:1.1rem;">Se continuar nesse ritmo, alcan\u00e7ar\u00e1 <strong>' + this.goalWeight + 'kg</strong> em ~<strong>' + estimatedWeeks + ' semanas</strong> \uD83C\uDF1F</p>';
        html += '<p style="opacity:0.6; font-size:0.8rem;">Baseado na tend\u00eancia atual de perda de peso.</p>';
      } else {
        html += '<p style="opacity:0.7;">Continue registrando para uma predi\u00e7\u00e3o mais precisa.</p>';
      }
    }

    var currentWeight = weightData[weightData.length - 1].weight;
    var lost = this.startingWeight - currentWeight;
    var remaining = currentWeight - this.goalWeight;
    html += '<div style="display:flex; gap:1rem; margin-top:12px; flex-wrap:wrap;">';
    html += '<div class="stat-mini"><span style="font-size:1.2rem; font-weight:700; color:var(--primary);">' + lost.toFixed(1) + 'kg</span><br><span style="opacity:0.7; font-size:0.75rem;">perdidos</span></div>';
    html += '<div class="stat-mini"><span style="font-size:1.2rem; font-weight:700; color:var(--accent);">' + remaining.toFixed(1) + 'kg</span><br><span style="opacity:0.7; font-size:0.75rem;">restantes</span></div>';
    html += '</div>';
    html += '</div>';

    predictionDiv.innerHTML = html;
  },

  // ── Sub-tab 4: Conquistas (Badges) ─────────────────────────

  renderBadges() {
    var unlockedCount = BadgeManager.unlocked.length;
    var total = BADGES.length;
    var html = '';

    html += '<div class="card glass" style="text-align:center;">';
    html += '<h3>\uD83C\uDFC6 Conquistas</h3>';
    html += '<p style="font-size:1.3rem; font-weight:700; color:var(--accent);">' + unlockedCount + '/' + total + '</p>';
    html += '<p style="opacity:0.7; font-size:0.85rem;">conquistas desbloqueadas</p>';
    html += '</div>';

    html += '<div class="badges-grid">';
    BADGES.forEach(function(badge) {
      var isUnlocked = BadgeManager.isUnlocked(badge.id);
      var cls = isUnlocked ? 'unlocked' : 'locked';
      html += '<div class="badge ' + cls + '" data-badge-id="' + badge.id + '">';
      html += '<span class="badge-icon">' + badge.emoji + '</span>';
      html += '<span class="badge-name">' + badge.name + '</span>';
      html += '<span class="badge-desc">' + badge.description + '</span>';
      html += '</div>';
    });
    html += '</div>';

    return html;
  },

  // ── Photo handling ─────────────────────────────────────────

  handlePhotoUpload: function(file, angle) {
    var self = this;
    this.compressImage(file, 800, function(base64) {
      var photos = StorageManager.getValue('photos', []);
      var today = new Date().toISOString().split('T')[0];
      photos.push({ date: today, angle: angle, data: base64 });
      try {
        StorageManager.setValue('photos', photos);
        StorageManager.setValue('lastPhotoDate', new Date().toISOString().slice(0, 10));
      } catch(err) {
        photos.pop();
        Toast.show('Sem espa\u00e7o! Apague fotos antigas primeiro.', 'error');
        return;
      }

      // Check badge for photo sets
      var dateSet = {};
      photos.forEach(function(p) { dateSet[p.date] = true; });
      var uniqueDates = Object.keys(dateSet).length;
      if (uniqueDates >= 2) BadgeManager.unlock('first-comparison');

      Toast.show('\uD83D\uDCF8 Foto de ' + angle + ' salva!', 'success');
      self.render();
    });
  },

  compressImage: function(file, maxWidth, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var img = new Image();
      img.onload = function() {
        var canvas = document.createElement('canvas');
        var w = img.width;
        var h = img.height;
        if (w > maxWidth) {
          h = (maxWidth / w) * h;
          w = maxWidth;
        }
        canvas.width = w;
        canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        callback(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  },

  // ── Measurement handling ───────────────────────────────────

  saveMeasurements: function() {
    var peso = parseFloat(document.getElementById('measure-peso').value) || null;
    var cintura = parseFloat(document.getElementById('measure-cintura').value) || null;
    var quadril = parseFloat(document.getElementById('measure-quadril').value) || null;
    var coxa = parseFloat(document.getElementById('measure-coxa').value) || null;
    var braco = parseFloat(document.getElementById('measure-braco').value) || null;
    var peito = parseFloat(document.getElementById('measure-peito').value) || null;

    if (!peso && !cintura && !quadril && !coxa && !braco && !peito) {
      Toast.show('Preencha pelo menos uma medida!', 'warning');
      return;
    }

    var today = new Date().toISOString().split('T')[0];
    var measurements = StorageManager.getValue('measurements', []);

    // Remove any existing entry for today (overwrite)
    measurements = measurements.filter(function(m) { return m.date !== today; });

    measurements.push({
      date: today,
      peso: peso,
      cintura: cintura,
      quadril: quadril,
      coxa: coxa,
      braco: braco,
      peito: peito
    });

    StorageManager.setValue('measurements', measurements);

    // Check weight badges
    if (peso) {
      var startW = this.startingWeight;
      if (peso <= startW - 5) BadgeManager.unlock('minus-5kg');
      if (peso <= startW - 10) BadgeManager.unlock('minus-10kg');
      if (peso <= startW - 20) BadgeManager.unlock('minus-20kg');
    }

    Toast.show('\uD83D\uDCBE Medidas salvas!', 'success');
    this.render();
  },

  deleteMeasurement: function(date) {
    var measurements = StorageManager.getValue('measurements', []);
    measurements = measurements.filter(function(m) { return m.date !== date; });
    StorageManager.setValue('measurements', measurements);
    Toast.show('Medi\u00e7\u00e3o removida.', 'info');
    this.render();
  },

  deletePhotosForDate: function(date) {
    var photos = StorageManager.getValue('photos', []);
    photos = photos.filter(function(p) { return p.date !== date; });
    StorageManager.setValue('photos', photos);
    Toast.show('Fotos removidas.', 'info');
    this.render();
  },

  showComparison: function() {
    var date1 = document.getElementById('compare-date-1').value;
    var date2 = document.getElementById('compare-date-2').value;
    var photos = StorageManager.getValue('photos', []);
    var resultDiv = document.getElementById('comparison-result');
    if (!resultDiv) return;

    if (date1 === date2) {
      resultDiv.innerHTML = '<p style="color:var(--danger); margin-top:8px;">Selecione duas datas diferentes!</p>';
      return;
    }

    var photos1 = photos.filter(function(p) { return p.date === date1; });
    var photos2 = photos.filter(function(p) { return p.date === date2; });

    var html = '<div class="comparison-grid" style="margin-top:12px;">';
    html += '<div class="comparison-col">';
    html += '<h4 style="text-align:center; margin-bottom:8px;">' + Utils.formatDateBR(date1) + '</h4>';
    html += '<div class="photo-grid">';
    photos1.forEach(function(p) {
      html += '<div class="photo-item"><img src="' + p.data + '" alt="' + p.angle + '"></div>';
    });
    if (photos1.length === 0) html += '<p style="opacity:0.5; text-align:center;">Sem fotos</p>';
    html += '</div>';
    html += '</div>';

    html += '<div class="comparison-col">';
    html += '<h4 style="text-align:center; margin-bottom:8px;">' + Utils.formatDateBR(date2) + '</h4>';
    html += '<div class="photo-grid">';
    photos2.forEach(function(p) {
      html += '<div class="photo-item"><img src="' + p.data + '" alt="' + p.angle + '"></div>';
    });
    if (photos2.length === 0) html += '<p style="opacity:0.5; text-align:center;">Sem fotos</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    resultDiv.innerHTML = html;
  },

  updateRatioDisplay: function() {
    var cintura = parseFloat(document.getElementById('measure-cintura').value);
    var quadril = parseFloat(document.getElementById('measure-quadril').value);
    var ratioDiv = document.getElementById('ratio-display');
    if (!ratioDiv) return;

    if (cintura && quadril && quadril > 0) {
      var ratio = (cintura / quadril).toFixed(2);
      var color = parseFloat(ratio) <= 0.75 ? 'var(--success)' : 'var(--warning)';
      var icon = parseFloat(ratio) <= 0.75 ? '\u2705' : '\u26A0\uFE0F';
      ratioDiv.innerHTML = '<p style="color:' + color + '; font-weight:600;">' + icon + ' Raz\u00e3o cintura/quadril: ' + ratio + ' (meta: \u2264 0.75)</p>';
    } else {
      ratioDiv.innerHTML = '';
    }
  },

  // ── Sub-tab 5: Proje\u00e7\u00e3o Corporal ─────────────────────────

  renderProjection: function() {
    var html = '';

    html += '<div class="card glass">';
    html += '<h3>\u2728 Proje\u00e7\u00e3o Corporal</h3>';
    html += '<p style="opacity:0.7;">Insira suas medidas atuais para projetar sua transforma\u00e7\u00e3o</p>';

    var fields = [
      { id: 'proj-peso', label: 'Peso', unit: 'kg', hint: 'Na balan\u00e7a, de manh\u00e3, em jejum', def: 96 },
      { id: 'proj-altura', label: 'Altura', unit: 'cm', hint: 'Descal\u00e7a, encostada na parede', def: 173 },
      { id: 'proj-cintura', label: 'Cintura', unit: 'cm', hint: 'No ponto mais fino do tronco', def: 90 },
      { id: 'proj-quadril', label: 'Quadril', unit: 'cm', hint: 'No ponto mais largo dos gl\u00fateos', def: 105 },
      { id: 'proj-coxa', label: 'Coxa', unit: 'cm', hint: 'No meio da coxa, perna relaxada', def: 62 },
      { id: 'proj-busto', label: 'Busto', unit: 'cm', hint: 'Na linha do mamilo, sem apertar', def: 100 }
    ];

    html += '<div class="proj-form">';
    fields.forEach(function(f) {
      var val = f.def;
      html += '<div class="proj-field">';
      html += '<div class="proj-field-label">' + f.label + ' (' + f.unit + ')</div>';
      html += '<div class="proj-field-hint">' + f.hint + '</div>';
      html += '<input type="number" step="0.1" id="' + f.id + '" value="' + val + '">';
      html += '</div>';
    });
    html += '</div>';

    html += '<div style="text-align:center; margin-top:10px;">';
    html += '<button class="proj-btn">Projetar resultado</button>';
    html += '</div>';
    html += '</div>';

    // Results area
    html += '<div id="proj-results">';
    if (this.projectionData) {
      html += this.renderProjectionResults(this.projectionData);
    }
    html += '</div>';

    return html;
  },

  handleProjection: function() {
    var peso = parseFloat(document.getElementById('proj-peso').value) || 96;
    var altura = parseFloat(document.getElementById('proj-altura').value) || 173;
    var cintura = parseFloat(document.getElementById('proj-cintura').value) || 90;
    var quadril = parseFloat(document.getElementById('proj-quadril').value) || 105;
    var coxa = parseFloat(document.getElementById('proj-coxa').value) || 62;
    var busto = parseFloat(document.getElementById('proj-busto').value) || 100;

    var baseline = { peso: peso, altura: altura, cintura: cintura, quadril: quadril, coxa: coxa, busto: busto };
    this.projectionData = baseline;

    var resultsDiv = document.getElementById('proj-results');
    if (resultsDiv) {
      resultsDiv.innerHTML = this.renderProjectionResults(baseline);
    }
  },

  projectMeasurements: function(baseline, months) {
    return {
      peso: Math.round((baseline.peso + PROJECTION_RATES.peso * months) * 10) / 10,
      cintura: Math.round((baseline.cintura + PROJECTION_RATES.cintura * months) * 10) / 10,
      quadril: Math.round((baseline.quadril + PROJECTION_RATES.quadril * months) * 10) / 10,
      coxa: Math.round((baseline.coxa + PROJECTION_RATES.coxa * months) * 10) / 10,
      busto: Math.round((baseline.busto + PROJECTION_RATES.busto * months) * 10) / 10,
    };
  },

  calculateGoalMonths: function(baseline) {
    var targetWHR = 0.75;
    var curWHR = baseline.cintura / baseline.quadril;
    var moWHR = curWHR <= targetWHR ? 0 : Math.ceil((baseline.cintura - targetWHR * baseline.quadril) / (Math.abs(PROJECTION_RATES.cintura) + targetWHR * PROJECTION_RATES.quadril));
    var moHip = baseline.quadril >= 105 ? 0 : Math.ceil((105 - baseline.quadril) / PROJECTION_RATES.quadril);
    return Math.max(moWHR, moHip, 6);
  },

  generateSilhouettePath: function(measurements, cx) {
    var s = 0.62;
    var hw = (measurements.quadril / 2) * s;
    var ww = (measurements.cintura / 2) * s * 0.98;
    var sw = hw * 0.84;
    var tw = (measurements.coxa / 2) * s * 0.88;
    var bw = (measurements.busto / 2) * s * 0.87;
    var y0=22,y1=58,y2=98,y3=132,y4=172,y5=212,y6=278;
    return 'M' + cx + ' ' + y0 +
      'C' + (cx+sw*0.5) + ' ' + y0 + ' ' + (cx+sw) + ' ' + (y0+14) + ' ' + (cx+sw) + ' ' + (y0+20) +
      'C' + (cx+sw+2) + ' ' + (y0+30) + ' ' + (cx+bw) + ' ' + (y1-4) + ' ' + (cx+bw) + ' ' + (y1+5) +
      'C' + (cx+bw) + ' ' + (y1+22) + ' ' + (cx+ww+4) + ' ' + (y2-14) + ' ' + (cx+ww) + ' ' + y2 +
      'C' + (cx+ww-2) + ' ' + (y2+22) + ' ' + (cx+hw) + ' ' + (y3-18) + ' ' + (cx+hw) + ' ' + y3 +
      'C' + (cx+hw) + ' ' + (y3+26) + ' ' + (cx+tw+4) + ' ' + (y4-14) + ' ' + (cx+tw) + ' ' + y4 +
      'C' + (cx+tw) + ' ' + (y4+20) + ' ' + (cx+tw*0.72) + ' ' + (y5-10) + ' ' + (cx+tw*0.68) + ' ' + y5 +
      'C' + (cx+tw*0.62) + ' ' + (y5+22) + ' ' + (cx+tw*0.4) + ' ' + (y6-22) + ' ' + (cx+tw*0.38) + ' ' + y6 +
      'L' + (cx-tw*0.38) + ' ' + y6 +
      'C' + (cx-tw*0.4) + ' ' + (y6-22) + ' ' + (cx-tw*0.62) + ' ' + (y5+22) + ' ' + (cx-tw*0.68) + ' ' + y5 +
      'C' + (cx-tw*0.72) + ' ' + (y5-10) + ' ' + (cx-tw) + ' ' + (y4+20) + ' ' + (cx-tw) + ' ' + y4 +
      'C' + (cx-tw-4) + ' ' + (y4-14) + ' ' + (cx-hw) + ' ' + (y3+26) + ' ' + (cx-hw) + ' ' + y3 +
      'C' + (cx-hw) + ' ' + (y3-18) + ' ' + (cx-ww+2) + ' ' + (y2+22) + ' ' + (cx-ww) + ' ' + y2 +
      'C' + (cx-ww-4) + ' ' + (y2-14) + ' ' + (cx-bw) + ' ' + (y1+22) + ' ' + (cx-bw) + ' ' + (y1+5) +
      'C' + (cx-bw) + ' ' + (y1-4) + ' ' + (cx-sw-2) + ' ' + (y0+30) + ' ' + (cx-sw) + ' ' + (y0+20) +
      'C' + (cx-sw) + ' ' + (y0+14) + ' ' + (cx-sw*0.5) + ' ' + y0 + ' ' + cx + ' ' + y0 + 'Z';
  },

  renderProjectionResults: function(baseline) {
    var self = this;
    var projected12 = this.projectMeasurements(baseline, 12);
    var goalMonths = this.calculateGoalMonths(baseline);
    var curWHR = (baseline.cintura / baseline.quadril).toFixed(2);
    var futWHR = (projected12.cintura / projected12.quadril).toFixed(2);

    var html = '';

    // ── Comparison grid ──
    html += '<div class="card glass">';
    html += '<h3>Hoje vs 12 meses</h3>';
    html += '<div class="proj-comparison">';

    var comparisons = [
      { label: 'Peso', unit: 'kg', cur: baseline.peso, fut: projected12.peso },
      { label: 'Cintura', unit: 'cm', cur: baseline.cintura, fut: projected12.cintura },
      { label: 'Quadril', unit: 'cm', cur: baseline.quadril, fut: projected12.quadril },
      { label: 'Coxa', unit: 'cm', cur: baseline.coxa, fut: projected12.coxa },
      { label: 'Busto', unit: 'cm', cur: baseline.busto, fut: projected12.busto },
      { label: 'C/Q Ratio', unit: '', cur: parseFloat(curWHR), fut: parseFloat(futWHR) }
    ];

    comparisons.forEach(function(c) {
      var delta = c.fut - c.cur;
      var deltaStr = (delta >= 0 ? '+' : '') + delta.toFixed(1);
      var deltaColor;
      // For waist/weight, decrease is good; for hip/thigh/bust, increase is good
      if (c.label === 'Cintura' || c.label === 'Peso') {
        deltaColor = delta < 0 ? 'var(--success)' : 'var(--danger)';
      } else if (c.label === 'Quadril' || c.label === 'Coxa' || c.label === 'Busto') {
        deltaColor = delta > 0 ? 'var(--success)' : 'var(--danger)';
      } else if (c.label === 'C/Q Ratio') {
        deltaColor = delta < 0 ? 'var(--success)' : 'var(--danger)';
      } else {
        deltaColor = 'var(--text-muted)';
      }

      html += '<div class="proj-comp-card">';
      html += '<div class="proj-comp-label">' + c.label + '</div>';
      html += '<div style="display:flex; justify-content:space-between; align-items:baseline;">';
      html += '<span style="color:var(--accent); font-weight:600;">' + c.cur.toFixed(1) + (c.unit ? c.unit : '') + '</span>';
      html += '<span style="opacity:0.5;">\u2192</span>';
      html += '<span style="color:var(--primary); font-weight:600;">' + c.fut.toFixed(1) + (c.unit ? c.unit : '') + '</span>';
      html += '</div>';
      html += '<div style="text-align:right; font-size:0.78rem; color:' + deltaColor + '; font-weight:600;">' + deltaStr + (c.unit ? c.unit : '') + '</div>';
      html += '</div>';
    });

    html += '</div>';
    html += '</div>';

    // ── SVG Silhouettes ──
    html += '<div class="card glass" style="text-align:center;">';
    html += '<h3>Silhueta Projetada</h3>';
    html += '<svg viewBox="0 0 280 310" style="max-width:100%; height:auto;">';

    // Left silhouette — HOJE (gold)
    var pathNow = this.generateSilhouettePath(baseline, 80);
    html += '<path d="' + pathNow + '" fill="rgba(212,168,83,0.25)" stroke="var(--accent)" stroke-width="1.5"/>';
    html += '<text x="80" y="14" text-anchor="middle" fill="var(--accent)" font-size="11" font-weight="600">HOJE</text>';
    html += '<text x="80" y="296" text-anchor="middle" fill="var(--accent)" font-size="9">C/Q ' + curWHR + '</text>';

    // Right silhouette — 12 MESES (rose)
    var pathFut = this.generateSilhouettePath(projected12, 200);
    html += '<path d="' + pathFut + '" fill="rgba(201,123,181,0.25)" stroke="var(--primary)" stroke-width="1.5"/>';
    html += '<text x="200" y="14" text-anchor="middle" fill="var(--primary)" font-size="11" font-weight="600">12 MESES</text>';
    html += '<text x="200" y="296" text-anchor="middle" fill="var(--primary)" font-size="9">C/Q ' + futWHR + '</text>';

    html += '</svg>';
    html += '</div>';

    // ── Timeline milestones ──
    html += '<div class="card glass">';
    html += '<h3>Timeline de Transforma\u00e7\u00e3o</h3>';

    var milestones = [3, 6, 12, 18];
    var descriptions = {
      3: 'Primeiros resultados vis\u00edveis. Postura melhorada, gl\u00fateo come\u00e7ando a ativar.',
      6: 'Cintura mais definida, quadril ganhando volume. Roupas come\u00e7am a cair diferente.',
      12: 'Transforma\u00e7\u00e3o completa de silhueta. Curvas marcadas, confian\u00e7a no auge.',
      18: 'Corpo consolidado. Manuten\u00e7\u00e3o e refinamento. Amazona mode ativado.'
    };

    milestones.forEach(function(m) {
      var proj = self.projectMeasurements(baseline, m);
      var whr = (proj.cintura / proj.quadril).toFixed(2);
      html += '<div class="proj-milestone">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">';
      html += '<span style="color:var(--primary); font-weight:700; font-size:1.1rem;">' + m + ' meses</span>';
      html += '<span style="color:var(--text-muted); font-size:0.78rem;">C/Q ' + whr + '</span>';
      html += '</div>';
      html += '<div style="display:flex; gap:10px; flex-wrap:wrap; font-size:0.82rem; margin-bottom:6px;">';
      html += '<span style="color:var(--accent);">' + proj.peso + 'kg</span>';
      html += '<span>Cintura ' + proj.cintura + '</span>';
      html += '<span>Quadril ' + proj.quadril + '</span>';
      html += '<span>Coxa ' + proj.coxa + '</span>';
      html += '</div>';
      html += '<p style="opacity:0.7; font-size:0.8rem; margin:0;">' + descriptions[m] + '</p>';
      html += '</div>';
    });

    html += '</div>';

    // ── "Quando chego na amazona?" ──
    html += '<div class="card glass" style="text-align:center;">';
    html += '<h3>Quando chego na Amazona?</h3>';
    html += '<div class="proj-goal-number">' + goalMonths + '</div>';
    html += '<p style="color:var(--primary); font-weight:600; margin-top:0;">meses</p>';
    html += '<div style="text-align:left; font-size:0.8rem; opacity:0.75; margin-top:10px;">';
    html += '<p><strong>Crit\u00e9rios:</strong></p>';
    html += '<p>\u2022 Raz\u00e3o cintura/quadril \u2264 0.75</p>';
    html += '<p>\u2022 Quadril \u2265 105 cm</p>';
    html += '<p>\u2022 M\u00ednimo 6 meses de consist\u00eancia</p>';
    html += '</div>';
    html += '</div>';

    // ── Como acelerar ──
    html += '<div class="card glass">';
    html += '<h3>Como Acelerar</h3>';
    var tips = [
      'Treinar gl\u00fateos 3\u20134x/semana com sobrecarga progressiva',
      'Priorizar prote\u00edna (1.6\u20132g/kg) em todas as refei\u00e7\u00f5es',
      'Vacuum abdominal di\u00e1rio (3\u00d730s) para afinar cintura',
      'Dormir 7\u20138h \u2014 m\u00fasculo cresce no descanso',
      'Manter d\u00e9ficit cal\u00f3rico leve (\u2013300 a \u2013500 kcal) para perder gordura sem perder m\u00fasculo',
      'Registrar medidas a cada 15 dias para ajustar o plano'
    ];
    html += '<ul style="margin:0; padding-left:18px;">';
    tips.forEach(function(t) {
      html += '<li style="margin-bottom:6px; font-size:0.84rem; line-height:1.5;">' + t + '</li>';
    });
    html += '</ul>';
    html += '</div>';

    return html;
  },

  // Event listeners are now handled via delegation in init()
};

// =============================================
// SETTINGS MANAGER — Settings overlay / config panel
// =============================================
// Provides settings gear icon, Firebase login/logout,
// backup export/import, phase selection, notifications,
// and app info.

const SettingsManager = {
  init() {
    document.addEventListener('click', function(e) {
      if (e.target.id === 'settings-btn' || e.target.closest('#settings-btn')) {
        SettingsManager.open();
      }
    });
  },

  open() {
    // Remove existing overlay if present
    this.close();

    var overlay = document.createElement('div');
    overlay.id = 'settings-overlay';

    // Build Firebase status section
    var firebaseHTML = '';
    if (FirebaseManager.isConfigured()) {
      if (FirebaseManager.user) {
        var displayName = FirebaseManager.user.displayName || FirebaseManager.user.email || 'Usuario';
        firebaseHTML =
          '<p style="color: var(--success);">Conectado como ' + displayName + '</p>' +
          '<button class="btn btn-sm btn-outline" id="settings-logout">Sair</button>';
      } else {
        firebaseHTML =
          '<p style="opacity:0.8;">Não conectado</p>' +
          '<button class="btn btn-sm btn-primary" id="settings-login">Entrar com Google</button>';
      }
    } else {
      firebaseHTML =
        '<p style="opacity:0.7;">Firebase não configurado. O app funciona offline.</p>' +
        '<p style="font-size:0.8rem; opacity:0.5;">Para ativar sync, configure o Firebase em firebase-config.js</p>';
    }

    // Build phase selector options
    var currentPhase = StorageManager.getValue('currentPhase', 1);
    var phaseOptions = '';
    var phases = [
      { value: 1, label: 'Fase 1 -- Fundação' },
      { value: 2, label: 'Fase 2 -- Construção' },
      { value: 3, label: 'Fase 3 -- Definição' },
      { value: 4, label: 'Fase 4 -- Avançado' }
    ];
    phases.forEach(function(p) {
      phaseOptions += '<option value="' + p.value + '"' + (currentPhase == p.value ? ' selected' : '') + '>' + p.label + '</option>';
    });

    // Build notification button text
    var notifText = 'Ativar notificações';
    if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
      notifText = 'Ativadas';
    }

    overlay.innerHTML =
      '<div class="settings-panel glass">' +
        '<button class="modal-close" id="settings-close">&times;</button>' +
        '<h2>Configurações</h2>' +

        // Firebase Status
        '<div class="card">' +
          '<h3>Sincronização</h3>' +
          firebaseHTML +
        '</div>' +

        // Backup
        '<div class="card">' +
          '<h3>Backup</h3>' +
          '<div style="display:flex; gap:0.5rem; flex-wrap:wrap;">' +
            '<button class="btn btn-sm btn-primary" id="settings-export">Exportar</button>' +
            '<label class="btn btn-sm btn-outline" style="cursor:pointer;">' +
              'Importar' +
              '<input type="file" accept=".json" style="display:none;" id="settings-import-input">' +
            '</label>' +
          '</div>' +
        '</div>' +

        // Phase Selection
        '<div class="card">' +
          '<h3>Fase do Treino</h3>' +
          '<select id="settings-phase">' +
            phaseOptions +
          '</select>' +
        '</div>' +

        // Notifications
        '<div class="card">' +
          '<h3>Notificações</h3>' +
          '<button class="btn btn-sm btn-outline" id="settings-notifications">' +
            notifText +
          '</button>' +
        '</div>' +

        // App Info
        '<div style="text-align:center; opacity:0.5; font-size:0.8rem; margin-top:1rem;">' +
          '<p>Forja da Amazona v1.0</p>' +
          '<p>Feito com Claude Code</p>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);

    // Close on overlay background click
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) SettingsManager.close();
    });

    // Close button
    document.getElementById('settings-close').addEventListener('click', function() {
      SettingsManager.close();
    });

    // Close on Escape key
    var escHandler = function(e) {
      if (e.key === 'Escape') {
        SettingsManager.close();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);

    // Export button
    document.getElementById('settings-export').addEventListener('click', function() {
      StorageManager.exportData();
    });

    // Import file input
    var importInput = document.getElementById('settings-import-input');
    if (importInput) {
      importInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
          StorageManager.importData(this.files[0]);
        }
      });
    }

    // Phase change handler
    document.getElementById('settings-phase').addEventListener('change', function() {
      var newPhase = parseInt(this.value);
      StorageManager.setValue('currentPhase', newPhase);
      BadgeManager.checkAll();
      // Also update WorkoutManager if it exists
      if (typeof WorkoutManager !== 'undefined') {
        WorkoutManager.currentPhase = newPhase;
      }
      Toast.show('Fase atualizada!', 'success');
    });

    // Firebase login/logout buttons
    var loginBtn = document.getElementById('settings-login');
    if (loginBtn) {
      loginBtn.addEventListener('click', function() {
        FirebaseManager.loginWithGoogle().then(function() {
          SettingsManager.open(); // Refresh panel
        }).catch(function() {
          Toast.show('Erro ao conectar', 'error');
        });
      });
    }

    var logoutBtn = document.getElementById('settings-logout');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        FirebaseManager.logout().then(function() {
          SettingsManager.open(); // Refresh panel
        }).catch(function() {
          Toast.show('Erro ao desconectar', 'error');
        });
      });
    }

    // Notification handler
    var notifBtn = document.getElementById('settings-notifications');
    if (notifBtn) {
      notifBtn.addEventListener('click', function() {
        if ('Notification' in window) {
          Notification.requestPermission().then(function(perm) {
            if (perm === 'granted') {
              Toast.show('Notificações ativadas!', 'success');
              SettingsManager.scheduleNotifications();
              SettingsManager.open(); // Refresh panel
            } else {
              Toast.show('Permissao negada pelo navegador', 'info');
            }
          });
        } else {
          Toast.show('Notificações não suportadas neste navegador', 'info');
        }
      });
    }
  },

  close() {
    var overlay = document.getElementById('settings-overlay');
    if (overlay) overlay.remove();
  },

  scheduleNotifications() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;

    // Avoid setting multiple intervals
    if (this._notifInterval) return;

    this._notifInterval = setInterval(function() {
      var now = new Date();
      var h = now.getHours();
      var m = now.getMinutes();
      var key = 'notif_' + h + '_' + m;

      // Only show once per time slot per day
      var shown = StorageManager.getForDate('notifications') || {};
      if (shown[key]) return;

      var phase = StorageManager.getValue('currentPhase', 1);
      var message = null;
      if (h === 6 && m === 15) {
        message = {
          1: 'Bom dia, Arthur! Skincare + protetor solar \u2600\uFE0F Fundação começa cedo!',
          2: 'Bom dia! Skincare + protetor — construção exige cuidado por dentro e por fora \uD83D\uDD25',
          3: 'Bom dia, Arthur! Skincare + protetor — pele definida brilha mais \u2728',
          4: 'Bom dia, Amazona! Skincare + protetor — sua pele merece esse cuidado \uD83D\uDC51'
        }[phase] || 'Bom dia, Arthur! Skincare + protetor solar';
      } else if (h === 17 && m === 30) {
        message = {
          1: 'Bora treinar? Fundação se constrói um treino por vez \uD83D\uDCAA',
          2: 'Bora treinar? Cada série conta na construção \uD83D\uDD25',
          3: 'Bora treinar? Definição pede consistência \u2728',
          4: 'Amazona, bora treinar? Você é imparável \uD83D\uDC51'
        }[phase] || 'Bora treinar? Não esquece a garrafinha de água';
      } else if (h === 19 && m === 30) {
        message = {
          1: 'Skincare da noite + Kegel! Cuidado é parte da fundação \uD83D\uDCAA',
          2: 'Skincare da noite + Kegel! Construção também é recuperação \uD83D\uDD25',
          3: 'Skincare da noite + Kegel! Definição vem com disciplina \u2728',
          4: 'Amazona, skincare da noite + Kegel! Ritual completo \uD83D\uDC51'
        }[phase] || 'Skincare da noite + Kegel!';
      } else if (h === 22 && m === 15) {
        message = {
          1: 'Hora de descansar. Sono = fundação forte \uD83D\uDCAA',
          2: 'Hora de descansar. Sono = músculos em construção \uD83D\uDD25',
          3: 'Hora de descansar. Sono = definição real \u2728',
          4: 'Amazona descansa também. Sono = recuperação da guerreira \uD83D\uDC51'
        }[phase] || 'Hora de descansar. Sono = recuperação muscular';
      }

      if (message) {
        try {
          new Notification('Arthur', { body: message });
        } catch (e) {
          // Notification constructor may fail in some contexts
        }
        shown[key] = true;
        StorageManager.setForDate('notifications', shown);
      }
    }, 60000); // Check every minute
  }
};

// =============================================
// INITIALIZE APP
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
