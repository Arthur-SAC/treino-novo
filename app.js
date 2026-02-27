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
    // WorkoutManager.init();   // Task 7
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
    const phaseKey = 'phase' + currentPhase;
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
// INITIALIZE APP
// =============================================

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
