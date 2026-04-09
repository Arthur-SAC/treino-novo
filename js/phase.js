/* =============================================
   PHASE.JS — PhaseManager
   Phase progression with exercise goals and progress bars.
   Global object — loaded via <script> tag, no modules.
   Depends on: StorageManager, PHASE_GOALS (data/style.js)
   ============================================= */

var PhaseManager = {

  /* ---- Phase Names ---- */

  phaseNames: {
    1: 'Fase 1 — Base',
    2: 'Fase 2 — Forma',
    3: 'Fase 3 — Ousada',
    4: 'Fase 4 — Femme Fatale'
  },

  /* ---- Data ---- */

  getCurrentPhase: function() {
    return StorageManager.getPhase();
  },

  getGoalsForNextPhase: function() {
    var current = this.getCurrentPhase();
    var key     = current + 'to' + (current + 1);
    if (typeof PHASE_GOALS !== 'undefined' && PHASE_GOALS[key]) {
      return PHASE_GOALS[key];
    }
    return null;
  },

  /* ---- Progress Check ---- */

  checkGoals: function() {
    var goals    = this.getGoalsForNextPhase();
    var current  = this.getCurrentPhase();

    if (!goals) {
      return {
        ready:       current >= 4,
        maxPhase:    current >= 4,
        progress:    [],
        description: current >= 4
          ? 'Voce atingiu a fase maxima. Incrivel!'
          : 'Sem criterios definidos para a proxima fase.'
      };
    }

    var progress = [];
    var allMet   = true;

    // Exercise weight goals
    var exerciseGoals = goals.exerciseGoals || [];
    exerciseGoals.forEach(function(goal) {
      var history = StorageManager.getWeightHistory(goal.exerciseId);
      var best    = 0;
      if (history && history.length > 0) {
        history.forEach(function(entry) {
          if (entry.weight > best) best = entry.weight;
        });
      }
      var pct  = goal.targetWeight > 0
        ? Math.min(100, Math.round((best / goal.targetWeight) * 100))
        : 100;
      var met  = best >= goal.targetWeight;
      if (!met) allMet = false;

      progress.push({
        name:   goal.name,
        best:   best,
        target: goal.targetWeight,
        pct:    pct,
        met:    met,
        unit:   'kg'
      });
    });

    // Weeks check (use first measurement date as proxy if available)
    var weeksProgress = null;
    if (goals.minWeeks) {
      var measurements  = StorageManager.getMeasurements();
      var startDateStr  = null;
      if (measurements && measurements.length > 0 && measurements[0].date) {
        startDateStr = measurements[0].date;
      }
      var weeksElapsed = 0;
      if (startDateStr) {
        var start = new Date(startDateStr);
        var now   = new Date();
        weeksElapsed = Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
      }
      var weeksMet = weeksElapsed >= goals.minWeeks;
      var weeksPct = Math.min(100, Math.round((weeksElapsed / goals.minWeeks) * 100));
      if (!weeksMet) allMet = false;
      weeksProgress = {
        name:   'Semanas de treino',
        best:   weeksElapsed,
        target: goals.minWeeks,
        pct:    weeksPct,
        met:    weeksMet,
        unit:   'sem'
      };
      progress.push(weeksProgress);
    }

    return {
      ready:       allMet && progress.length > 0,
      maxPhase:    false,
      progress:    progress,
      description: goals.description || ''
    };
  },

  /* ---- Advance Phase ---- */

  advancePhase: function() {
    var current = this.getCurrentPhase();
    if (current < 4) {
      StorageManager.setPhase(current + 1);
    }
  },

  /* ---- Render ---- */

  render: function(containerEl) {
    if (!containerEl) return;
    var self    = this;
    var current = self.getCurrentPhase();
    var name    = self.phaseNames[current] || ('Fase ' + current);
    var result  = self.checkGoals();
    var next    = current + 1;
    var nextName = self.phaseNames[next] || ('Fase ' + next);

    // Current phase card
    var html = (
      '<div class="phase-card">' +
        '<div class="phase-card__name">' + name + '</div>' +
    ''
    );

    // StyleManager phase description (if available)
    if (typeof STYLE_GUIDE !== 'undefined' && STYLE_GUIDE.phases) {
      var phaseData = null;
      STYLE_GUIDE.phases.forEach(function(p) {
        if (p.phase === current) phaseData = p;
      });
      if (phaseData) {
        html += '<p class="phase-card__description">' + phaseData.description + '</p>';
      }
    }

    // Max phase state
    if (result.maxPhase) {
      html += '<p class="text-success text-sm">Voce atingiu a fase maxima — Femme Fatale. Incrivel!</p>';
      html += '</div>';
      containerEl.innerHTML = html;
      return;
    }

    // Goals for next phase
    html += '<div class="body-section__heading" style="margin-top:var(--space-3)">Para atingir ' + nextName + '</div>';

    if (result.description) {
      html += '<p class="text-muted text-xs" style="margin-bottom:var(--space-3)">' + result.description + '</p>';
    }

    result.progress.forEach(function(item) {
      var barColor = item.met ? 'var(--color-success)' : 'var(--color-corpo)';
      html += (
        '<div class="phase-goal">' +
          '<div class="phase-goal__header">' +
            '<span class="phase-goal__name">' + item.name + '</span>' +
            '<span class="phase-goal__progress-text">' +
              item.best + ' / ' + item.target + ' ' + item.unit +
            '</span>' +
          '</div>' +
          '<div class="progress-bar">' +
            '<div class="progress-bar__fill" style="width:' + item.pct + '%;background:' + barColor + '"></div>' +
          '</div>' +
        '</div>'
      );
    });

    // Ready banner
    if (result.ready) {
      html += (
        '<div class="phase-ready-banner">' +
          '<div class="phase-ready-banner__text">Pronta para ' + nextName + '!</div>' +
          '<button class="btn btn--corpo btn--sm" id="phase-advance-btn">Avancar para ' + nextName + '</button>' +
        '</div>'
      );
    }

    html += '</div>';

    // Seletor manual de fase
    html += '<div style="margin-top:24px; padding:16px; background:var(--bg-card); border-radius:12px; border:1px solid var(--border-color);">';
    html += '<p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Trocar fase manualmente:</p>';
    html += '<div style="display:flex; gap:8px; flex-wrap:wrap;">';
    for (var i = 1; i <= 4; i++) {
      var isActive = i === current;
      var btnStyle = isActive
        ? 'background:var(--color-treino); color:white; border-color:var(--color-treino);'
        : '';
      html += '<button class="btn btn--ghost" data-set-phase="' + i + '" style="flex:1; min-width:60px; ' + btnStyle + '">' +
        'Fase ' + i +
      '</button>';
    }
    html += '</div>';
    html += '</div>';

    containerEl.innerHTML = html;

    // Bind advance button
    var advBtn = containerEl.querySelector('#phase-advance-btn');
    if (advBtn) {
      advBtn.addEventListener('click', function() {
        self.advancePhase();
        self.render(containerEl);
      });
    }

    // Bind manual phase buttons
    containerEl.querySelectorAll('[data-set-phase]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var newPhase = parseInt(btn.dataset.setPhase);
        StorageManager.setPhase(newPhase);
        self.render(containerEl);
      });
    });
  }

};
