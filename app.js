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
      headerGreeting.innerHTML = '<h1 style="font-size:1.1rem; font-family: Playfair Display, serif;">' + Utils.getGreeting() + ', Arthur!</h1>';
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
    Dashboard.init();
    WorkoutManager.init();
    NutritionManager.init();
    CareManager.init();         // Task 9
    ProgressManager.init();     // Task 10
    SettingsManager.init();     // Task 12/13

    // Start notification scheduler if already permitted
    if ('Notification' in window && Notification.permission === 'granted') {
      SettingsManager.scheduleNotifications();
    }

    Toast.show('Bem-vinda de volta!', 'success');
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
  showPage(page) {
    App.currentPage = page;

    // Hide all pages, then show the target with fade animation
    document.querySelectorAll('.page').forEach(function(p) {
      p.classList.remove('active');
      p.style.animation = '';
    });
    var target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('active');
      target.style.animation = 'none';
      // Force reflow to restart animation
      void target.offsetHeight;
      target.style.animation = 'fadeIn 0.3s ease';
    }

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
    }
  },

  isUnlocked(badgeId) {
    return this.unlocked.includes(badgeId);
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

  init() {
    this.modal = document.getElementById('video-modal');
    this.iframe = document.getElementById('video-iframe');

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

    // Check if online
    if (!navigator.onLine && video.youtubeId === 'PLACEHOLDER') {
      Toast.show('Conecte a internet pra ver o video', 'info');
      return;
    }

    // Set iframe src (youtube-nocookie for privacy)
    if (video.youtubeId && video.youtubeId !== 'PLACEHOLDER') {
      this.iframe.src = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&autoplay=0`;
    } else {
      // Placeholder: show message
      this.iframe.src = '';
    }

    document.getElementById('video-title').textContent = video.title || '';
    document.getElementById('video-tips').textContent = video.tips || '';

    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  },

  close() {
    this.modal.classList.add('hidden');
    this.iframe.src = ''; // Stop video
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
    }
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
// DASHBOARD — Home page / daily overview
// =============================================
// Renders the dashboard with greeting, streak, daily checklist,
// water tracker, today's workout preview, meals preview, and daily tip.

const Dashboard = {
  init() {
    this.render();

    // Re-render when navigating to dashboard
    document.addEventListener('pageChange', (e) => {
      if (e.detail.page === 'inicio') this.render();
    });
  },

  render() {
    const container = document.getElementById('dashboard-content');
    if (!container) return;

    const dayOfWeek = Utils.getDayOfWeek();
    const dayName = Utils.getDayName();
    const dayDisplay = Utils.getDayDisplayName();
    const today = StorageManager.today();

    // Get stored data for today
    const checklistData = StorageManager.getForDate('checklist') || {};
    const waterCount = StorageManager.getForDate('water') || 0;
    const streak = this.calculateStreak();

    // Get today's workout
    const currentPhase = StorageManager.getValue('currentPhase', 1);
    const phaseKey = 'fase' + currentPhase;
    const todayWorkout = WORKOUTS[phaseKey] ? WORKOUTS[phaseKey].days[dayName] : null;

    // Get today's meals
    const mealType = (dayOfWeek >= 1 && dayOfWeek <= 5) ? 'treino' : 'descanso';
    const todayMeals = MEALS[mealType];

    // Build HTML
    let html = '';

    // Greeting + motivational quote
    html += `
      <div class="card glass" style="text-align:center; padding: 1.5rem;">
        <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 0.5rem;">
          ${Utils.getGreeting()}, Arthur!
        </h2>
        <p style="opacity: 0.8; font-style: italic;">
          "${Utils.randomFrom(MOTIVATIONAL_QUOTES)}"
        </p>
      </div>`;

    // Streak
    if (streak > 0) {
      html += `
        <div class="streak">
          <span class="streak-fire">&#128293;</span>
          <span class="streak-count">${streak}</span>
          <span class="streak-label">dias seguidos</span>
        </div>`;
    }

    // Daily checklist
    html += `<div class="card glass">
      <h3>Checklist do Dia — ${dayDisplay}</h3>
      <div class="checklist-items">`;

    const todayItems = CHECKLIST_ITEMS.filter(item => {
      if (!item.days) return true; // Every day
      return item.days.includes(dayOfWeek);
    });

    todayItems.forEach(item => {
      // Special handling for water (separate tracker)
      if (item.id === 'agua') return;

      const checked = checklistData[item.id] || false;
      html += `
        <label class="checkbox-wrapper">
          <input type="checkbox" class="checklist-checkbox" data-id="${item.id}"
            ${checked ? 'checked' : ''}>
          <span class="checkbox-custom"></span>
          <span class="checkbox-label">
            ${item.emoji} ${item.label}
            ${item.time ? '<small style="opacity:0.6"> — ' + item.time + '</small>' : ''}
          </span>
        </label>`;
    });

    html += `</div></div>`;

    // Water tracker
    const waterGoal = 10; // 10 copos de 250ml = 2.5L
    html += `
      <div class="card glass">
        <h3>Agua — ${waterCount}/${waterGoal} copos (${(waterCount * 250 / 1000).toFixed(1)}L / 2.5L)</h3>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${Math.min(100, (waterCount / waterGoal) * 100)}%"></div>
        </div>
        <div class="water-tracker" style="margin-top: 0.75rem;">`;

    for (let i = 1; i <= waterGoal; i++) {
      html += `<button class="water-cup ${i <= waterCount ? 'filled' : ''}" data-cup="${i}">&#128167;</button>`;
    }

    html += `
        </div>
        <div style="display:flex; gap:0.5rem; margin-top:0.75rem;">
          <button class="btn btn-sm btn-primary" id="water-add">+ Copo</button>
          <button class="btn btn-sm btn-outline" id="water-remove">- Copo</button>
        </div>
      </div>`;

    // Today's workout card
    if (todayWorkout && todayWorkout.name !== 'Descanso total') {
      html += `
        <div class="card glass" onclick="Router.navigate('treino')" style="cursor:pointer;">
          <h3>Treino de Hoje</h3>
          <p style="font-weight:600; color: var(--primary);">${todayWorkout.name}</p>
          <p style="opacity:0.7; font-size:0.9rem;">
            ${todayWorkout.exercises ? todayWorkout.exercises.length + ' exercícios' : 'Dia de descanso ativo'}
          </p>
          <span class="btn btn-sm btn-outline" style="margin-top:0.5rem;">Ver treino &#8594;</span>
        </div>`;
    } else {
      html += `
        <div class="card glass">
          <h3>Dia de Descanso</h3>
          <p style="opacity:0.7;">Apenas alongamento leve, skincare, hidratação e autocuidado!</p>
        </div>`;
    }

    // Today's meals card
    if (todayMeals) {
      html += `
        <div class="card glass" onclick="Router.navigate('nutricao')" style="cursor:pointer;">
          <h3>Refeições de Hoje</h3>
          <div style="display:flex; flex-direction:column; gap:0.3rem;">`;

      todayMeals.meals.forEach(meal => {
        html += `<span style="font-size:0.9rem;">${meal.emoji} <strong>${meal.name}</strong> — ${meal.time}</span>`;
      });

      html += `
          </div>
          <p style="opacity:0.6; font-size:0.85rem; margin-top:0.5rem;">Meta: ~2.400 kcal | 170g proteína</p>
          <span class="btn btn-sm btn-outline" style="margin-top:0.5rem;">Ver nutrição &#8594;</span>
        </div>`;
    }

    // Daily tip
    html += `
      <div class="card glass">
        <h3>Dica do Dia</h3>
        <p style="opacity:0.9;">${Utils.randomFrom(DAILY_TIPS)}</p>
      </div>`;

    // Set innerHTML
    container.innerHTML = html;

    // Attach event listeners
    this.attachChecklistListeners();
    this.attachWaterListeners();
  },

  attachChecklistListeners() {
    document.querySelectorAll('.checklist-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const id = e.target.dataset.id;
        const checklistData = StorageManager.getForDate('checklist') || {};
        checklistData[id] = e.target.checked;
        StorageManager.setForDate('checklist', checklistData);

        // Update streak
        this.updateStreak();
      });
    });
  },

  attachWaterListeners() {
    // Cup buttons
    document.querySelectorAll('.water-cup').forEach(cup => {
      cup.addEventListener('click', (e) => {
        const cupNum = parseInt(e.target.dataset.cup);
        StorageManager.setForDate('water', cupNum);
        this.render(); // Re-render to update display
      });
    });

    // Add/Remove buttons
    const addBtn = document.getElementById('water-add');
    const removeBtn = document.getElementById('water-remove');

    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const current = StorageManager.getForDate('water') || 0;
        if (current < 15) { // Max 15 cups
          StorageManager.setForDate('water', current + 1);
          this.render();
        }
      });
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', () => {
        const current = StorageManager.getForDate('water') || 0;
        if (current > 0) {
          StorageManager.setForDate('water', current - 1);
          this.render();
        }
      });
    }
  },

  calculateStreak() {
    let streak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];

      const checklist = StorageManager.getForDate('checklist', dateStr);
      if (!checklist) {
        if (i === 0) continue; // Today might not have data yet
        break;
      }

      // Count checked items
      const total = Object.keys(checklist).length;
      const checked = Object.values(checklist).filter(v => v).length;

      if (total > 0 && (checked / total) >= 0.8) {
        streak++;
      } else {
        if (i === 0) continue; // Today in progress
        break;
      }
    }

    return streak;
  },

  updateStreak() {
    const streak = this.calculateStreak();
    StorageManager.setValue('streak', streak);

    // Check for streak badges
    if (streak >= 7) BadgeManager.unlock('streak-7');
    if (streak >= 30) BadgeManager.unlock('streak-30');
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
  workoutData: null,

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    this.currentPhase = StorageManager.getValue('currentPhase', 1);
    if (!this.currentPhase || this.currentPhase < 1 || this.currentPhase > 4) {
      this.currentPhase = 1;
    }
    this.selectedDay = Utils.getDayOfWeek();

    document.addEventListener('pageChange', (e) => {
      if (e.detail.page === 'treino') this.render();
    });
  },

  // ── Helpers ────────────────────────────────────────────────

  getPhaseKey() {
    return 'fase' + this.currentPhase;
  },

  getPhaseData() {
    return WORKOUTS[this.getPhaseKey()] || WORKOUTS.fase1;
  },

  getDayData() {
    const phase = this.getPhaseData();
    const dayName = Utils.getDayName(this.selectedDay);
    return phase.days[dayName] || null;
  },

  getWorkoutData() {
    return StorageManager.getForDate('workout') || { series: {}, weights: {} };
  },

  saveWorkoutData(data) {
    StorageManager.setForDate('workout', data);
  },

  getNextExerciseName(exercises, currentIndex) {
    if (currentIndex + 1 < exercises.length) {
      return exercises[currentIndex + 1].name;
    }
    return 'Cooldown';
  },

  /**
   * Detect special exercise types by name/properties.
   * Returns 'vacuum', 'cardio', 'plank', or 'normal'.
   */
  getExerciseType(exercise) {
    var name = exercise.name.toLowerCase();
    if (name.indexOf('vacuum') !== -1) return 'vacuum';
    if (name.indexOf('cardio') !== -1 || (exercise.sets === 1 && typeof exercise.reps === 'string' && exercise.reps.indexOf('min') !== -1)) return 'cardio';
    if (name.indexOf('prancha') !== -1 && typeof exercise.reps === 'string' && exercise.reps.indexOf('seg') !== -1) return 'plank';
    return 'normal';
  },

  /**
   * Parse reps string for vacuum/plank to get seconds.
   * E.g. "20-30seg" -> 25 (midpoint), "30seg" -> 30
   */
  parseHoldSeconds(repsStr) {
    if (!repsStr) return 20;
    var rangeMatch = repsStr.match(/(\d+)-(\d+)/);
    if (rangeMatch) return Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2);
    var singleMatch = repsStr.match(/(\d+)/);
    if (singleMatch) return parseInt(singleMatch[1]);
    return 20;
  },

  /**
   * Parse cardio duration string to seconds.
   * E.g. "20min" -> 1200, "30-40min" -> 2100 (midpoint)
   */
  parseCardioSeconds(repsStr) {
    if (!repsStr) return 1200;
    var rangeMatch = repsStr.match(/(\d+)-(\d+)\s*min/);
    if (rangeMatch) return Math.round((parseInt(rangeMatch[1]) + parseInt(rangeMatch[2])) / 2) * 60;
    var singleMatch = repsStr.match(/(\d+)\s*min/);
    if (singleMatch) return parseInt(singleMatch[1]) * 60;
    return 1200;
  },

  // ── Render: Main ───────────────────────────────────────────

  render() {
    var container = document.getElementById('treino-content');
    if (!container) return;

    var html = '';
    html += this.renderPhaseSelector();
    html += this.renderDaySelector();

    var dayData = this.getDayData();

    if (!dayData || dayData.restDay) {
      html += this.renderRestDay(dayData);
    } else {
      html += this.renderWorkoutProgress(dayData);
      html += this.renderWarmup();
      html += this.renderExercises(dayData.exercises || []);
      html += this.renderCooldown();
    }

    container.innerHTML = html;
    this.attachListeners();
  },

  // ── Render: Phase Selector ─────────────────────────────────

  renderPhaseSelector() {
    var html = '<div class="card glass phase-selector-card">';
    html += '<div class="phase-tabs">';

    for (var i = 1; i <= 4; i++) {
      var faseKey = 'fase' + i;
      var fase = WORKOUTS[faseKey];
      var activeClass = (i === this.currentPhase) ? ' active' : '';
      html += '<button class="phase-tab' + activeClass + '" data-phase="' + i + '">';
      html += '<span class="phase-num">Fase ' + i + '</span>';
      html += '</button>';
    }

    html += '</div>';

    // Phase description
    var phase = this.getPhaseData();
    html += '<div class="phase-description">';
    html += '<strong>' + this.escapeHtml(phase.name) + '</strong>';
    html += '<p style="opacity:0.7; font-size:0.85rem; margin:0.3rem 0 0;">' + this.escapeHtml(phase.weeks) + ' — ' + this.escapeHtml(phase.objective) + '</p>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Render: Day Selector ───────────────────────────────────

  renderDaySelector() {
    var dayLabels = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
    var today = Utils.getDayOfWeek();
    var html = '<div class="day-selector">';

    for (var i = 0; i < 7; i++) {
      var activeClass = (i === this.selectedDay) ? ' active' : '';
      var todayClass = (i === today) ? ' today' : '';
      html += '<button class="day-tab' + activeClass + todayClass + '" data-day="' + i + '">' + dayLabels[i] + '</button>';
    }

    html += '</div>';

    // Day title
    var dayData = this.getDayData();
    if (dayData && !dayData.restDay) {
      html += '<div style="text-align:center; padding: 0.5rem 0;">';
      html += '<strong style="color: var(--primary);">' + this.escapeHtml(dayData.name) + '</strong>';
      html += '</div>';
    }

    return html;
  },

  // ── Render: Workout Progress ───────────────────────────────

  renderWorkoutProgress(dayData) {
    var exercises = dayData.exercises || [];
    if (exercises.length === 0) return '';

    var wData = this.getWorkoutData();
    var totalSeries = 0;
    var completedSeries = 0;

    exercises.forEach(function(ex) {
      var type = WorkoutManager.getExerciseType(ex);
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

  // ── Render: Rest Day ───────────────────────────────────────

  renderRestDay(dayData) {
    var msg = (dayData && dayData.restMessage) ? dayData.restMessage : 'Dia de descanso. Foque em skincare, hidratação e autocuidado!';
    var html = '<div class="card glass" style="text-align:center; padding:2rem 1.5rem;">';
    html += '<div style="font-size:3rem; margin-bottom:1rem;">&#128524;</div>';
    html += '<h3>Dia de Descanso</h3>';
    html += '<p style="opacity:0.8; margin-top:0.5rem;">' + this.escapeHtml(msg) + '</p>';
    html += '</div>';

    // Still show cooldown/stretching on rest days
    html += this.renderCooldown();
    return html;
  },

  // ── Render: Warmup ─────────────────────────────────────────

  renderWarmup() {
    var html = '<div class="card glass warmup-card">';
    html += '<div class="collapsible-header" data-target="warmup-content">';
    html += '<h3 style="margin:0;">' + this.escapeHtml(WARMUP.name) + ' (' + WARMUP.duration + ') — OBRIGATORIO</h3>';
    html += '<span class="expand-icon">&#9660;</span>';
    html += '</div>';
    html += '<div id="warmup-content" class="collapsible-body hidden">';

    WARMUP.sections.forEach(function(section) {
      html += '<div class="warmup-section">';
      html += '<h4 style="color: var(--primary); margin:0.75rem 0 0.5rem;">';
      html += WorkoutManager.escapeHtml(section.name);
      if (section.duration) html += ' <small style="opacity:0.6;">(' + section.duration + ')</small>';
      if (section.required) html += ' <span style="color: var(--accent);">*</span>';
      html += '</h4>';

      section.exercises.forEach(function(ex) {
        html += '<div class="warmup-exercise">';
        html += '<span class="warmup-name">' + WorkoutManager.escapeHtml(ex.name) + '</span>';
        if (ex.reps) html += '<span class="warmup-meta"> — ' + WorkoutManager.escapeHtml(ex.reps) + '</span>';
        if (ex.duration) html += '<span class="warmup-meta"> — ' + WorkoutManager.escapeHtml(ex.duration) + '</span>';
        if (ex.tip) html += '<div class="warmup-tip" style="font-size:0.8rem; opacity:0.7; margin-left:0.5rem;">&#128161; ' + WorkoutManager.escapeHtml(ex.tip) + '</div>';
        if (ex.videoKey) {
          html += ' <button class="btn-icon video-btn" data-video-key="' + ex.videoKey + '" data-video-source="exercise">&#127916;</button>';
        }
        html += '</div>';
      });

      html += '</div>';
    });

    html += '</div></div>';
    return html;
  },

  // ── Render: Exercise List ──────────────────────────────────

  renderExercises(exercises) {
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
    var restSeconds = Utils.parseRest(exercise.rest);

    var cardClass = 'exercise-card card glass';
    if (type === 'vacuum') cardClass += ' exercise-vacuum';

    var html = '<div class="' + cardClass + '" data-exercise-id="' + exercise.id + '">';

    // Header
    html += '<div class="exercise-header" data-toggle="details-' + exercise.id + '">';
    html += '<span class="exercise-num">#' + (index + 1) + '</span>';
    html += '<div class="exercise-info">';
    html += '<strong>' + this.escapeHtml(exercise.name) + '</strong>';

    // Meta line
    if (type === 'cardio') {
      html += '<span class="exercise-meta">' + this.escapeHtml(exercise.reps) + ' | Sem descanso</span>';
    } else if (type === 'vacuum') {
      html += '<span class="exercise-meta">' + exercise.sets + 'x ' + this.escapeHtml(exercise.reps) + ' | Descanso: ' + this.escapeHtml(exercise.rest) + '</span>';
    } else {
      html += '<span class="exercise-meta">' + exercise.sets + 'x' + this.escapeHtml(exercise.reps) + ' | Descanso: ' + this.escapeHtml(exercise.rest) + '</span>';
    }

    if (exercise.tip) {
      html += '<span class="exercise-tip">&#128161; ' + this.escapeHtml(exercise.tip) + '</span>';
    }
    html += '</div>'; // .exercise-info

    // Video button
    if (exercise.videoKey) {
      html += '<button class="btn-icon video-btn" data-video-key="' + exercise.videoKey + '" data-video-source="exercise" title="Ver video">&#127916;</button>';
    }

    html += '<span class="expand-icon">&#9660;</span>';
    html += '</div>'; // .exercise-header

    // Details (hidden by default)
    html += '<div class="exercise-details hidden" id="details-' + exercise.id + '">';
    if (exercise.details) {
      html += '<p style="font-size:0.85rem; opacity:0.85; line-height:1.5;">' + this.escapeHtml(exercise.details) + '</p>';
    }
    html += '</div>';

    // Start left warning
    if (exercise.startLeft) {
      html += '<div class="start-left-warning">&#9888;&#65039; Comece pelo lado ESQUERDO!</div>';
    }

    // Type-specific content
    if (type === 'vacuum') {
      html += this.renderVacuumControls(exercise, exData);
    } else if (type === 'cardio') {
      html += this.renderCardioControls(exercise, exData);
    } else if (type === 'plank') {
      html += this.renderPlankControls(exercise, index, allExercises, exData, exWeights);
    } else {
      html += this.renderNormalSeries(exercise, index, allExercises, exData, exWeights);
    }

    // Progress indicator (for non-cardio)
    if (type !== 'cardio') {
      var completedSets = 0;
      var totalSets = exercise.sets || 1;
      for (var s = 1; s <= totalSets; s++) {
        if (exData[s]) completedSets++;
      }
      var pct = totalSets > 0 ? Math.round((completedSets / totalSets) * 100) : 0;

      html += '<div class="exercise-progress">';
      html += '<span>' + completedSets + '/' + totalSets + ' séries</span>';
      html += '<div class="progress-bar-container" style="height:4px;">';
      html += '<div class="progress-bar" style="width:' + pct + '%"></div>';
      html += '</div>';
      html += '</div>';
    }

    html += '</div>'; // .exercise-card
    return html;
  },

  // ── Render: Normal Series (checkboxes + weight input) ──────

  renderNormalSeries(exercise, index, allExercises, exData, exWeights) {
    var html = '<div class="exercise-series">';
    var totalSets = exercise.sets || 1;

    for (var s = 1; s <= totalSets; s++) {
      var checked = exData[s] ? 'checked' : '';
      var weightKey = exercise.id + '_' + s;
      var savedWeight = (exWeights[weightKey] !== undefined && exWeights[weightKey] !== null) ? exWeights[weightKey] : '';

      html += '<div class="series-row">';
      html += '<label class="checkbox-wrapper">';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s + '" data-exercise-index="' + index + '" ' + checked + '>';
      html += '<span class="checkbox-custom"></span>';
      html += '<span>Serie ' + s + '/' + totalSets + '</span>';
      html += '</label>';
      html += '<input type="number" class="weight-input" placeholder="Peso (kg)" data-exercise="' + exercise.id + '" data-set="' + s + '" value="' + savedWeight + '" inputmode="decimal" step="0.5">';
      html += '</div>';
    }

    html += '</div>';
    return html;
  },

  // ── Render: Plank Controls ─────────────────────────────────

  renderPlankControls(exercise, index, allExercises, exData, exWeights) {
    var holdSec = this.parseHoldSeconds(exercise.reps);
    var html = '<div class="exercise-series">';
    var totalSets = exercise.sets || 1;

    for (var s = 1; s <= totalSets; s++) {
      var checked = exData[s] ? 'checked' : '';

      html += '<div class="series-row">';
      html += '<label class="checkbox-wrapper">';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s + '" data-exercise-index="' + index + '" ' + checked + '>';
      html += '<span class="checkbox-custom"></span>';
      html += '<span>Serie ' + s + '/' + totalSets + '</span>';
      html += '</label>';
      html += '<button class="btn btn-sm btn-outline plank-timer-btn" data-seconds="' + holdSec + '" data-exercise-name="' + this.escapeAttr(exercise.name) + '">&#9201; ' + holdSec + 'seg</button>';
      html += '</div>';
    }

    html += '</div>';
    return html;
  },

  // ── Render: Vacuum Controls ────────────────────────────────

  renderVacuumControls(exercise, exData) {
    var holdSec = this.parseHoldSeconds(exercise.reps);
    var restSec = Utils.parseRest(exercise.rest) || 30;
    var totalSets = exercise.sets || 5;

    var completedSets = 0;
    for (var s = 1; s <= totalSets; s++) {
      if (exData[s]) completedSets++;
    }

    var html = '<div class="vacuum-controls" style="text-align:center; padding:1rem 0;">';
    html += '<button class="btn btn-primary vacuum-start-btn" data-hold="' + holdSec + '" data-rest="' + restSec + '" data-sets="' + totalSets + '" data-exercise="' + exercise.id + '">';
    html += '&#128168; Iniciar Vacuum (' + totalSets + 'x ' + holdSec + 'seg)';
    html += '</button>';
    html += '<p style="font-size:0.8rem; opacity:0.6; margin-top:0.5rem;">' + completedSets + '/' + totalSets + ' séries feitas hoje</p>';
    html += '</div>';

    // Also show individual checkboxes for manual tracking
    html += '<div class="exercise-series">';
    for (var s2 = 1; s2 <= totalSets; s2++) {
      var checked = exData[s2] ? 'checked' : '';
      html += '<div class="series-row">';
      html += '<label class="checkbox-wrapper">';
      html += '<input type="checkbox" class="series-checkbox" data-exercise="' + exercise.id + '" data-set="' + s2 + '" data-exercise-index="-1" ' + checked + '>';
      html += '<span class="checkbox-custom"></span>';
      html += '<span>Serie ' + s2 + '/' + totalSets + '</span>';
      html += '</label>';
      html += '</div>';
    }
    html += '</div>';

    return html;
  },

  // ── Render: Cardio Controls ────────────────────────────────

  renderCardioControls(exercise, exData) {
    var durationSec = this.parseCardioSeconds(exercise.reps);
    var done = exData['done'] ? true : false;

    var html = '<div class="cardio-controls" style="text-align:center; padding:1rem 0;">';
    html += '<button class="btn btn-primary cardio-start-btn" data-seconds="' + durationSec + '" data-label="' + this.escapeAttr(exercise.name) + '">';
    html += '&#127939; Iniciar Cardio (' + exercise.reps + ')';
    html += '</button>';
    html += '<div style="margin-top:0.75rem;">';
    html += '<label class="checkbox-wrapper" style="justify-content:center;">';
    html += '<input type="checkbox" class="cardio-done-checkbox" data-exercise="' + exercise.id + '" ' + (done ? 'checked' : '') + '>';
    html += '<span class="checkbox-custom"></span>';
    html += '<span>Concluído</span>';
    html += '</label>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Render: Cooldown ───────────────────────────────────────

  renderCooldown() {
    var html = '<div class="card glass cooldown-card">';
    html += '<div class="collapsible-header" data-target="cooldown-content">';
    html += '<h3 style="margin:0;">' + this.escapeHtml(COOLDOWN.name) + ' (' + COOLDOWN.duration + ') — OBRIGATORIO</h3>';
    html += '<span class="expand-icon">&#9660;</span>';
    html += '</div>';
    html += '<div id="cooldown-content" class="collapsible-body hidden">';

    COOLDOWN.exercises.forEach(function(ex) {
      html += '<div class="cooldown-exercise" style="padding:0.5rem 0; border-bottom:1px solid rgba(255,255,255,0.05);">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center;">';
      html += '<div>';
      html += '<strong>' + WorkoutManager.escapeHtml(ex.name) + '</strong>';
      html += '<span style="opacity:0.6; font-size:0.85rem;"> — ' + WorkoutManager.escapeHtml(ex.duration) + '</span>';
      if (ex.required) html += ' <span style="color: var(--accent); font-size:0.8rem;">obrigatorio</span>';
      html += '</div>';
      html += '<div style="display:flex; gap:0.3rem; align-items:center;">';

      // Timer button
      if (ex.sides) {
        var secMatch = ex.duration.match(/(\d+)/);
        var secPerSide = secMatch ? parseInt(secMatch[1]) : 30;
        html += '<button class="btn btn-sm btn-outline stretch-sides-btn" data-seconds="' + secPerSide + '" data-name="' + WorkoutManager.escapeAttr(ex.name) + '">&#9201; E/D</button>';
      } else {
        var secMatch2 = ex.duration.match(/(\d+)/);
        var sec = secMatch2 ? parseInt(secMatch2[1]) : 30;
        html += '<button class="btn btn-sm btn-outline stretch-timer-btn" data-seconds="' + sec + '" data-name="' + WorkoutManager.escapeAttr(ex.name) + '">&#9201; ' + sec + 'seg</button>';
      }

      if (ex.videoKey) {
        html += '<button class="btn-icon video-btn" data-video-key="' + ex.videoKey + '" data-video-source="exercise">&#127916;</button>';
      }
      html += '</div>';
      html += '</div>';
      if (ex.tip) {
        html += '<div style="font-size:0.8rem; opacity:0.65; margin-top:0.25rem;">&#128161; ' + WorkoutManager.escapeHtml(ex.tip) + '</div>';
      }
      html += '</div>';
    });

    html += '</div></div>';
    return html;
  },

  // ── Event Listeners ────────────────────────────────────────

  attachListeners() {
    var self = this;

    // Phase tabs
    document.querySelectorAll('.phase-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var phase = parseInt(btn.dataset.phase);
        self.currentPhase = phase;
        StorageManager.setValue('currentPhase', phase);
        self.render();
      });
    });

    // Day tabs
    document.querySelectorAll('.day-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        self.selectedDay = parseInt(btn.dataset.day);
        self.render();
      });
    });

    // Collapsible headers (warmup / cooldown)
    document.querySelectorAll('.collapsible-header').forEach(function(header) {
      header.addEventListener('click', function() {
        var targetId = header.dataset.target;
        var body = document.getElementById(targetId);
        if (body) {
          body.classList.toggle('hidden');
          var icon = header.querySelector('.expand-icon');
          if (icon) icon.textContent = body.classList.contains('hidden') ? '\u25BC' : '\u25B2';
        }
      });
    });

    // Exercise header expand/collapse (details)
    document.querySelectorAll('.exercise-header').forEach(function(header) {
      header.addEventListener('click', function(e) {
        // Don't toggle if clicking video button
        if (e.target.closest('.btn-icon') || e.target.closest('.video-btn')) return;
        var targetId = header.dataset.toggle;
        var details = document.getElementById(targetId);
        if (details) {
          details.classList.toggle('hidden');
          var icon = header.querySelector('.expand-icon');
          if (icon) icon.textContent = details.classList.contains('hidden') ? '\u25BC' : '\u25B2';
        }
      });
    });

    // Series checkboxes (auto-timer on check)
    document.querySelectorAll('.series-checkbox').forEach(function(cb) {
      cb.addEventListener('change', function() {
        var exId = cb.dataset.exercise;
        var setNum = cb.dataset.set;
        var exIndex = parseInt(cb.dataset.exerciseIndex);
        self.onSeriesChecked(exId, setNum, cb.checked, exIndex);
      });
    });

    // Weight inputs (save on change, debounced)
    document.querySelectorAll('.weight-input').forEach(function(input) {
      input.addEventListener('input', Utils.debounce(function() {
        var exId = input.dataset.exercise;
        var setNum = input.dataset.set;
        self.onWeightChanged(exId, setNum, input.value);
      }, 500));
    });

    // Video buttons
    document.querySelectorAll('.video-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var videoKey = btn.dataset.videoKey;
        var source = btn.dataset.videoSource || 'exercise';
        VideoModal.open(videoKey, source);
      });
    });

    // Vacuum start buttons
    document.querySelectorAll('.vacuum-start-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var holdSec = parseInt(btn.dataset.hold);
        var restSec = parseInt(btn.dataset.rest);
        var sets = parseInt(btn.dataset.sets);
        var exId = btn.dataset.exercise;

        TimerEngine.startVacuumSeries(holdSec, restSec, sets, function() {
          // Mark all vacuum sets as complete
          var wData = self.getWorkoutData();
          if (!wData.series[exId]) wData.series[exId] = {};
          for (var s = 1; s <= sets; s++) {
            wData.series[exId][s] = true;
          }
          self.saveWorkoutData(wData);
          Toast.show('Vacuum concluído! \uD83D\uDCA8', 'success');
          self.render();
        });
      });
    });

    // Cardio start buttons
    document.querySelectorAll('.cardio-start-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var seconds = parseInt(btn.dataset.seconds);
        var label = btn.dataset.label || 'CARDIO';
        TimerEngine.startCountUp(seconds, label);
      });
    });

    // Cardio done checkbox
    document.querySelectorAll('.cardio-done-checkbox').forEach(function(cb) {
      cb.addEventListener('change', function() {
        var exId = cb.dataset.exercise;
        var wData = self.getWorkoutData();
        if (!wData.series[exId]) wData.series[exId] = {};
        wData.series[exId]['done'] = cb.checked;
        self.saveWorkoutData(wData);
        self.updateProgressDisplay();
      });
    });

    // Plank timer buttons
    document.querySelectorAll('.plank-timer-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var seconds = parseInt(btn.dataset.seconds);
        var name = btn.dataset.exerciseName || 'Prancha';
        TimerEngine.startCountdown(seconds, name.toUpperCase(), null, null);
      });
    });

    // Stretch timer buttons (no sides)
    document.querySelectorAll('.stretch-timer-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var seconds = parseInt(btn.dataset.seconds);
        var name = btn.dataset.name || 'Alongamento';
        TimerEngine.startCountdown(seconds, name.toUpperCase(), null, null);
      });
    });

    // Stretch with sides buttons
    document.querySelectorAll('.stretch-sides-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var seconds = parseInt(btn.dataset.seconds);
        var name = btn.dataset.name || 'Alongamento';
        TimerEngine.startStretchWithSides(seconds, name, null);
      });
    });
  },

  // ── Event: Series Checked ──────────────────────────────────

  onSeriesChecked(exerciseId, setNum, checked, exerciseIndex) {
    var wData = this.getWorkoutData();
    if (!wData.series[exerciseId]) wData.series[exerciseId] = {};
    wData.series[exerciseId][setNum] = checked;
    this.saveWorkoutData(wData);

    // Update the exercise progress bar inline (without full re-render)
    this.updateExerciseProgress(exerciseId);
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
          var restSeconds = Utils.parseRest(exercise.rest);
          if (restSeconds > 0) {
            var nextName = this.getNextExerciseName(exercises, exIdx);
            TimerEngine.startRest(restSeconds, nextName, null);
          }
        }
      }
    }
  },

  // ── Event: Weight Changed ──────────────────────────────────

  onWeightChanged(exerciseId, setNum, weight) {
    var wData = this.getWorkoutData();
    if (!wData.weights) wData.weights = {};
    var key = exerciseId + '_' + setNum;
    wData.weights[key] = weight;
    this.saveWorkoutData(wData);
  },

  // ── Update: Exercise Progress (inline, no full re-render) ──

  updateExerciseProgress(exerciseId) {
    var card = document.querySelector('.exercise-card[data-exercise-id="' + exerciseId + '"]');
    if (!card) return;

    var checkboxes = card.querySelectorAll('.series-checkbox');
    var total = checkboxes.length;
    var completed = 0;
    checkboxes.forEach(function(cb) { if (cb.checked) completed++; });

    var progressSpan = card.querySelector('.exercise-progress span');
    var progressBar = card.querySelector('.exercise-progress .progress-bar');
    if (progressSpan) progressSpan.textContent = completed + '/' + total + ' séries';
    if (progressBar) progressBar.style.width = (total > 0 ? Math.round((completed / total) * 100) : 0) + '%';
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

    // Check for workout completion badge
    if (pct >= 100) {
      BadgeManager.unlock('first-workout');
      Toast.show('Treino concluido! Arrasou! \uD83D\uDCAA', 'success');
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
// Manages the Nutrition page with 3 sub-tabs:
//   1. Plano do Dia (meal plan with logging)
//   2. Receitas (recipe browser)
//   3. Lista de Compras (shopping list with checkboxes)

const NutritionManager = {
  currentSubTab: 'plano',
  currentRecipe: null,

  init() {
    var self = this;
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
      case 'receitas':
        html += this.currentRecipe ? this.renderRecipeDetail() : this.renderRecipeGrid();
        break;
      case 'compras':
        html += this.renderShoppingList();
        break;
    }

    container.innerHTML = html;
    this.attachListeners();
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'plano', label: '\uD83C\uDF7D\uFE0F Plano do Dia' },
      { id: 'receitas', label: '\uD83D\uDCD6 Receitas' },
      { id: 'compras', label: '\uD83D\uDED2 Lista de Compras' }
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

  // ── Sub-tab 1: Plano do Dia ────────────────────────────────

  getMealPlanType() {
    var day = new Date().getDay(); // 0=Sun, 6=Sat
    return (day === 0 || day === 6) ? 'descanso' : 'treino';
  },

  getMealLogData() {
    return StorageManager.getForDate('nutrition') || { meals: {} };
  },

  saveMealLogData(data) {
    StorageManager.setForDate('nutrition', data);
  },

  calculateProtein(loggedMeals) {
    var planType = this.getMealPlanType();
    var meals = MEALS[planType].meals;
    var total = 0;
    meals.forEach(function(meal, index) {
      var mealKey = 'meal_' + index;
      if (loggedMeals[mealKey]) {
        // Use average protein from both options
        var protA = NutritionManager.extractProtein(meal.optionA.macros);
        var protB = NutritionManager.extractProtein(meal.optionB.macros);
        total += Math.round((protA + protB) / 2);
      }
    });
    return total;
  },

  extractProtein(macroStr) {
    var match = macroStr.match(/(\d+)g\s*prot/);
    return match ? parseInt(match[1], 10) : 0;
  },

  renderMealPlan() {
    var planType = this.getMealPlanType();
    var plan = MEALS[planType];
    var logData = this.getMealLogData();
    var loggedMeals = logData.meals || {};
    var proteinConsumed = this.calculateProtein(loggedMeals);
    var proteinTarget = planType === 'treino' ? 170 : 160;
    var proteinPct = Math.min(100, Math.round((proteinConsumed / proteinTarget) * 100));

    var html = '';

    // Day type note
    var day = new Date().getDay();
    if (day === 6) {
      html += '<div class="card glass" style="text-align:center; margin-bottom: 12px;">';
      html += '<span style="font-size:1.1rem;">\uD83C\uDF89 Dia livre! Escolha 1 refei\u00E7\u00E3o livre com modera\u00E7\u00E3o</span>';
      html += '</div>';
    } else if (day === 0) {
      html += '<div class="card glass" style="text-align:center; margin-bottom: 12px;">';
      html += '<span style="font-size:1.1rem;">\uD83D\uDE34 Dia de descanso \u2014 calorias um pouco menores (~2.100-2.200)</span>';
      html += '</div>';
    }

    // Protein counter
    html += '<div class="card glass protein-counter">';
    html += '  <div class="progress-label" style="margin-bottom:6px;">';
    html += '    <span>\uD83D\uDCAA Prote\u00EDna: ' + proteinConsumed + 'g / ' + proteinTarget + 'g</span>';
    html += '    <span>' + proteinPct + '%</span>';
    html += '  </div>';
    html += '  <div class="progress-bar-wrapper progress-bar-lg">';
    html += '    <div class="progress-bar-fill" style="width:' + proteinPct + '%"></div>';
    html += '  </div>';
    html += '</div>';

    // Summary macros card
    html += '<div class="card glass" style="text-align:center; padding:12px;">';
    if (planType === 'treino') {
      html += '<span style="font-size:0.85rem; opacity:0.85;">\uD83D\uDCCA Meta di\u00E1ria: ~2.400 kcal | 170g prot | 250g carb | 70g gord</span>';
    } else {
      html += '<span style="font-size:0.85rem; opacity:0.85;">\uD83D\uDCCA Meta di\u00E1ria: ~2.150 kcal | 160g prot | 220g carb | 65g gord</span>';
    }
    html += '</div>';

    // Meal cards
    var meals = plan.meals;
    for (var i = 0; i < meals.length; i++) {
      var meal = meals[i];
      var mealKey = 'meal_' + i;
      var isLogged = !!loggedMeals[mealKey];

      html += '<div class="card glass meal-card">';
      html += '  <div class="meal-header">';
      html += '    <span class="meal-emoji">' + meal.emoji + '</span>';
      html += '    <div class="meal-header-info">';
      html += '      <strong>' + meal.name + '</strong>';
      html += '      <span class="meal-time">' + meal.time + '</span>';
      html += '    </div>';
      html += '    <button class="btn btn-sm ' + (isLogged ? 'btn-primary' : 'btn-outline') + ' meal-log-btn" data-meal="' + mealKey + '">';
      html += isLogged ? '\u2705 Comi' : 'Comi \u2713';
      html += '    </button>';
      html += '  </div>';
      html += '  <div class="meal-options">';
      html += '    <div class="meal-option">';
      html += '      <strong>Op\u00E7\u00E3o A:</strong> ' + meal.optionA.description;
      html += '      <span class="meal-macros">' + meal.optionA.macros + '</span>';
      html += '    </div>';
      html += '    <div class="meal-option">';
      html += '      <strong>Op\u00E7\u00E3o B:</strong> ' + meal.optionB.description;
      html += '      <span class="meal-macros">' + meal.optionB.macros + '</span>';
      html += '    </div>';
      html += '  </div>';
      html += '</div>';
    }

    return html;
  },

  // ── Sub-tab 2: Receitas ────────────────────────────────────

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

  // ── Sub-tab 3: Lista de Compras ────────────────────────────

  getShoppingData() {
    return StorageManager.getValue('shoppingList', {});
  },

  saveShoppingData(data) {
    StorageManager.setValue('shoppingList', data);
  },

  renderShoppingList() {
    var checkedItems = this.getShoppingData();
    var categories = Object.keys(SHOPPING_LIST);
    var html = '';

    categories.forEach(function(catKey) {
      var cat = SHOPPING_LIST[catKey];
      html += '<h3 style="margin-top:16px; margin-bottom:8px;">' + cat.emoji + ' ' + cat.label + '</h3>';

      cat.items.forEach(function(item) {
        var itemKey = catKey + '_' + item.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
        var isChecked = !!checkedItems[itemKey];

        html += '<label class="checkbox-wrapper">';
        html += '  <input type="checkbox" class="shopping-checkbox" data-item="' + itemKey + '"' + (isChecked ? ' checked' : '') + '>';
        html += '  <span class="checkbox-custom"></span>';
        html += '  <span class="checkbox-label">' + item.quantity + ' ' + item.name + ' \u2014 ' + item.price + '</span>';
        html += '</label>';
      });
    });

    // Total estimate
    html += '<div class="card glass" style="text-align:center; margin-top:20px;">';
    html += '  <strong>Custo semanal estimado: R$180-250</strong>';
    html += '  <p style="opacity:0.6; font-size:0.8rem; margin-top:4px;">Sem contar whey e itens que duram mais de 1 semana</p>';
    html += '</div>';

    // Reset button
    html += '<button class="btn btn-block btn-outline shopping-reset-btn" style="margin-top:12px;">';
    html += '  Limpar lista \u21BA';
    html += '</button>';

    return html;
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

  // ── Event listeners ────────────────────────────────────────

  attachListeners() {
    var self = this;

    // Sub-tab clicks
    document.querySelectorAll('#nutricao-content .sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = this.getAttribute('data-subtab');
        if (tab !== self.currentSubTab) {
          self.currentSubTab = tab;
          self.currentRecipe = null;
          self.render();
        }
      });
    });

    // Meal log buttons
    document.querySelectorAll('.meal-log-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var mealKey = this.getAttribute('data-meal');
        self.toggleMeal(mealKey);
      });
    });

    // Recipe card clicks
    document.querySelectorAll('.recipe-card[data-recipe]').forEach(function(card) {
      card.addEventListener('click', function() {
        var recipeId = this.getAttribute('data-recipe');
        self.showRecipe(recipeId);
      });
    });

    // Recipe back button
    var backBtn = document.querySelector('.recipe-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', function() {
        self.hideRecipe();
      });
    }

    // Recipe video button
    var videoBtn = document.querySelector('.recipe-video-btn');
    if (videoBtn) {
      videoBtn.addEventListener('click', function() {
        var videoKey = this.getAttribute('data-video');
        VideoModal.open(videoKey, 'recipe');
      });
    }

    // Shopping checkboxes
    document.querySelectorAll('.shopping-checkbox').forEach(function(cb) {
      cb.addEventListener('change', function() {
        var itemKey = this.getAttribute('data-item');
        var data = self.getShoppingData();
        if (this.checked) {
          data[itemKey] = true;
        } else {
          delete data[itemKey];
        }
        self.saveShoppingData(data);
      });
    });

    // Shopping reset button
    var resetBtn = document.querySelector('.shopping-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        self.resetShoppingList();
      });
    }
  }
};

// =============================================
// CARE MANAGER — Cuidados tab (Skincare, Hair, Depilation, Kegel)
// =============================================
// Renders 4 sub-tabs: Skincare, Cabelo, Depilação, Kegel.
// Each sub-tab has its own render method with cards, steps, timers, etc.

const CareManager = {
  currentSubTab: 'skincare',
  kegelTimerActive: false,

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    var self = this;
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
    }

    container.innerHTML = html;
    this.attachListeners();
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'skincare', label: '\u2728 Skincare' },
      { id: 'cabelo', label: '\uD83D\uDC87 Cabelo' },
      { id: 'depilacao', label: '\uD83E\uDE92 Depila\u00E7\u00E3o' },
      { id: 'kegel', label: '\uD83D\uDCAA Kegel' }
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

    // Morning routine
    html += this.renderSkincareRoutine(SKINCARE_ROUTINE.morning, false);

    // Night routine
    html += this.renderSkincareRoutine(SKINCARE_ROUTINE.night, true);

    // Body care
    html += this.renderBodyCare();

    // Alerts
    html += this.renderSkincareAlerts();

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

    // Hair care routine
    html += this.renderHairRoutine();

    // Hair growth timeline
    html += this.renderHairTimeline();

    // Supplement card
    html += this.renderHairSupplement();

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

    // Schedule reminder
    html += this.renderDepilationSchedule();

    // Areas
    html += this.renderDepilationAreas();

    // Step by step
    html += this.renderDepilationSteps();

    // Alerts
    html += this.renderDepilationAlerts();

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
    html += '<h3>\uD83E\uDE92 \u00C1reas de Depila\u00E7\u00E3o</h3>';

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

    // Standard Kegel exercise
    html += this.renderKegelStandard();

    // Reverse Kegel
    html += this.renderKegelReverse();

    // Tips
    html += this.renderKegelTips();

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

  // ── Event Listeners ────────────────────────────────────────

  attachListeners() {
    var self = this;

    // Sub-tab navigation
    var subTabs = document.querySelectorAll('#cuidados-content .sub-tab');
    subTabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        var targetTab = tab.dataset.subtab;
        if (targetTab && targetTab !== self.currentSubTab) {
          self.currentSubTab = targetTab;
          self.render();
        }
      });
    });

    // Hair length input
    var hairInput = document.getElementById('hair-length');
    if (hairInput) {
      hairInput.addEventListener('change', function() {
        var val = parseFloat(hairInput.value);
        if (!isNaN(val) && val >= 0 && val <= 50) {
          StorageManager.setValue('hairLength', val);
          self.render(); // Re-render to update timeline
        }
      });
    }

    // Kegel start button
    var kegelBtn = document.getElementById('kegel-start-btn');
    if (kegelBtn) {
      kegelBtn.addEventListener('click', function() {
        self.startKegelTimer();
      });
    }
  }
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

  // ── Lifecycle ──────────────────────────────────────────────

  init() {
    var self = this;
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
    }

    container.innerHTML = html;
    this.attachListeners();

    // Init charts after DOM is ready
    if (this.currentSubTab === 'graficos') {
      setTimeout(function() { self.initCharts(); }, 100);
    }
  },

  // ── Sub-tab navigation ─────────────────────────────────────

  renderSubTabs() {
    var tabs = [
      { id: 'fotos', label: '\uD83D\uDCF8 Fotos' },
      { id: 'medidas', label: '\uD83D\uDCCF Medidas' },
      { id: 'graficos', label: '\uD83D\uDCC8 Gr\u00e1ficos' },
      { id: 'conquistas', label: '\uD83C\uDFC6 Conquistas' }
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
      html += '<div class="badge ' + cls + '">';
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
      StorageManager.setValue('photos', photos);

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

  // ── Event listeners ────────────────────────────────────────

  attachListeners: function() {
    var self = this;

    // Sub-tab clicks
    document.querySelectorAll('#progresso-content .sub-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var tab = this.getAttribute('data-subtab');
        if (tab !== self.currentSubTab) {
          self.currentSubTab = tab;
          self.render();
        }
      });
    });

    // Photo upload inputs
    document.querySelectorAll('#progresso-content input[type="file"]').forEach(function(input) {
      input.addEventListener('change', function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var angle = input.getAttribute('data-angle');
        self.handlePhotoUpload(file, angle);
      });
    });

    // Compare button
    var compareBtn = document.getElementById('compare-photos-btn');
    if (compareBtn) {
      compareBtn.addEventListener('click', function() {
        self.showComparison();
      });
    }

    // Save measurements
    var saveBtn = document.getElementById('save-measurements');
    if (saveBtn) {
      saveBtn.addEventListener('click', function() {
        self.saveMeasurements();
      });
    }

    // Live ratio calculation
    var cinturaInput = document.getElementById('measure-cintura');
    var quadrilInput = document.getElementById('measure-quadril');
    if (cinturaInput) {
      cinturaInput.addEventListener('input', function() { self.updateRatioDisplay(); });
    }
    if (quadrilInput) {
      quadrilInput.addEventListener('input', function() { self.updateRatioDisplay(); });
    }

    // Delete photos by date
    document.querySelectorAll('.progress-delete-date').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var date = this.getAttribute('data-date');
        if (confirm('Apagar todas as fotos de ' + Utils.formatDateBR(date) + '?')) {
          self.deletePhotosForDate(date);
        }
      });
    });

    // Delete measurement
    document.querySelectorAll('.measurement-delete').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var date = this.getAttribute('data-date');
        if (confirm('Apagar medi\u00e7\u00e3o de ' + Utils.formatDateBR(date) + '?')) {
          self.deleteMeasurement(date);
        }
      });
    });
  }
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
          '<p>Arthur -- Transformação Corporal v1.0</p>' +
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

      var message = null;
      if (h === 6 && m === 15) message = 'Bom dia, Arthur! Skincare + protetor solar';
      else if (h === 17 && m === 30) message = 'Bora treinar? Não esquece a garrafinha de água';
      else if (h === 19 && m === 30) message = 'Skincare da noite + Kegel!';
      else if (h === 22 && m === 15) message = 'Hora de descansar. Sono = recuperação muscular';

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
