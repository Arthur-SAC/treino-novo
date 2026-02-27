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
      headerGreeting.innerHTML = `<h1 style="font-size:1.1rem;">${Utils.getGreeting()}, Arthur!</h1>`;
    }

    // Initialize feature modules
    VideoModal.init();
    TimerEngine.init();
    BadgeManager.init();
    Dashboard.init();
    WorkoutManager.init();
    // NutritionManager.init(); // Task 8
    // CareManager.init();      // Task 9
    // ProgressManager.init();  // Task 10

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

    if (!video) { Toast.show('Video nao encontrado', 'error'); return; }

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
            ${todayWorkout.exercises ? todayWorkout.exercises.length + ' exercicios' : 'Dia de descanso ativo'}
          </p>
          <span class="btn btn-sm btn-outline" style="margin-top:0.5rem;">Ver treino &#8594;</span>
        </div>`;
    } else {
      html += `
        <div class="card glass">
          <h3>Dia de Descanso</h3>
          <p style="opacity:0.7;">Apenas alongamento leve, skincare, hidratacao e autocuidado!</p>
        </div>`;
    }

    // Today's meals card
    if (todayMeals) {
      html += `
        <div class="card glass" onclick="Router.navigate('nutricao')" style="cursor:pointer;">
          <h3>Refeicoes de Hoje</h3>
          <div style="display:flex; flex-direction:column; gap:0.3rem;">`;

      todayMeals.meals.forEach(meal => {
        html += `<span style="font-size:0.9rem;">${meal.emoji} <strong>${meal.name}</strong> — ${meal.time}</span>`;
      });

      html += `
          </div>
          <p style="opacity:0.6; font-size:0.85rem; margin-top:0.5rem;">Meta: ~2.400 kcal | 170g proteina</p>
          <span class="btn btn-sm btn-outline" style="margin-top:0.5rem;">Ver nutricao &#8594;</span>
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
    html += '<span>' + completedSeries + '/' + totalSeries + ' series (' + pct + '%)</span>';
    html += '</div>';
    html += '<div class="progress-bar-container">';
    html += '<div class="progress-bar" style="width:' + pct + '%"></div>';
    html += '</div>';
    html += '</div>';
    return html;
  },

  // ── Render: Rest Day ───────────────────────────────────────

  renderRestDay(dayData) {
    var msg = (dayData && dayData.restMessage) ? dayData.restMessage : 'Dia de descanso. Foque em skincare, hidratacao e autocuidado!';
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
      html += '<span>' + completedSets + '/' + totalSets + ' series</span>';
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
    html += '<p style="font-size:0.8rem; opacity:0.6; margin-top:0.5rem;">' + completedSets + '/' + totalSets + ' series feitas hoje</p>';
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
    html += '<span>Concluido</span>';
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
          Toast.show('Vacuum concluido! \uD83D\uDCA8', 'success');
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
    if (progressSpan) progressSpan.textContent = completed + '/' + total + ' series';
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
    if (span) span.textContent = completedSeries + '/' + totalSeries + ' series (' + pct + '%)';
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
// INITIALIZE APP
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
