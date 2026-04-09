/* =============================================
   WORKOUT.JS — WorkoutManager
   Flashcard-style workout flow for the Treino page.
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var WorkoutManager = {

  /* ---- State ---- */
  exercises:    [],   // flattened array of all exercises (warmup + main + cooldown)
  currentIndex: 0,
  workoutData:  null, // { series: {}, weights: {} }
  startTime:    null,
  restTimer:    null,
  phase:        1,
  _eventsReady: false, // guard: bind container events only once

  /* ---- Phase Goal Targets ---- */
  PHASE_GOALS: {
    'f1-glute-bridge':      { target: 20,  nextPhase: 2 },
    'f1-rdl':               { target: 12,  nextPhase: 2 },
    'f2-hip-thrust-pesado': { target: 50,  nextPhase: 3 },
    'f2-rdl':               { target: 25,  nextPhase: 3 },
    'f2-stiff':             { target: 25,  nextPhase: 3 },
    'f3-hip-thrust-heavy':  { target: 80,  nextPhase: 4 },
    'f3-rdl-heavy':         { target: 45,  nextPhase: 4 }
  },

  /* ---- Bootstrap ---- */

  init: function() {
    var self = this;
    self.phase = StorageManager.getPhase();

    document.addEventListener('pageChange', function(e) {
      if (e.detail && e.detail.page === 'treino') {
        self.startWorkout();
      }
    });
  },

  /* ---- Build Exercise List ---- */

  startWorkout: function() {
    var day      = Utils.getDayOfWeek();
    var schedule = WEEK_SCHEDULE[day];

    if (!schedule) {
      this.renderNoWorkout(schedule);
      return;
    }

    // Dias especiais
    if (schedule.type === 'descanso-ativo') {
      this.renderYogaRebolar();
      return;
    }
    if (schedule.type === 'ativacao-leve') {
      this.renderAtivacaoLeve();
      return;
    }
    if (schedule.type === 'descanso-total') {
      this.renderNoWorkout(schedule);
      return;
    }
    if (schedule.type !== 'treino' || !schedule.workout) {
      this.renderNoWorkout(schedule);
      return;
    }

    var faseKey   = 'fase' + this.phase;
    var phaseData = WORKOUTS[faseKey];
    if (!phaseData) {
      this.renderNoWorkout(schedule);
      return;
    }

    var dayExercises = phaseData.days[schedule.workout];
    if (!dayExercises) {
      this.renderNoWorkout(schedule);
      return;
    }

    // Build warmup exercises
    var warmupSource = schedule.warmup === 'upper' ? WARMUP_UPPER : WARMUP_LOWER;
    var warmupExs = warmupSource.map(function(item, idx) {
      return {
        id:        'warmup-' + idx,
        name:      item.name,
        type:      'warmup',
        sets:      1,
        reps:      item.time,
        rest:      '',
        weight:    null,
        tip:       item.desc,
        narrative: item.narrative || '',
        why:       item.why || '',
        videoKey:  null,
        phase:     'Aquecimento'
      };
    });

    // Build main exercises
    var mainExs = dayExercises.exercises.map(function(ex) {
      return {
        id:        ex.id,
        name:      ex.name,
        type:      ex.type || 'main',
        sets:      ex.sets,
        reps:      ex.reps,
        rest:      ex.rest || '',
        weight:    ex.weight || null,
        tip:       ex.tip || '',
        narrative: ex.narrative || '',
        why:       ex.why || '',
        videoKey:  ex.videoKey || null,
        phase:     'Treino'
      };
    });

    // Build cooldown exercises
    var cooldownSource = schedule.cooldown === 'upper' ? COOLDOWN_UPPER : COOLDOWN_LOWER;
    var cooldownExs = cooldownSource.map(function(item, idx) {
      return {
        id:        'cooldown-' + idx,
        name:      item.name,
        type:      'cooldown',
        sets:      1,
        reps:      item.time,
        rest:      '',
        weight:    null,
        tip:       item.desc,
        narrative: item.narrative || '',
        why:       item.why || '',
        videoKey:  null,
        phase:     'Alongamento'
      };
    });

    this.exercises    = warmupExs.concat(mainExs, cooldownExs);
    this.currentIndex = 0;
    this.startTime    = Date.now();
    this.workoutData  = StorageManager.getWorkoutData() || {};
    if (!this.workoutData.series)  this.workoutData.series  = {};
    if (!this.workoutData.weights) this.workoutData.weights = {};

    this.renderExercise();
    if (!this._eventsReady) {
      this.bindContainerEvents();
      this._eventsReady = true;
    }
  },

  /* ---- Render: No Workout Today ---- */

  renderYogaRebolar: function() {
    var container = document.getElementById('workout-container');
    if (!container) return;

    var yogaLevel = 'iniciante';
    var yogaPoses = (typeof YOGA_LEVELS !== 'undefined') ? (YOGA_LEVELS[yogaLevel] || []) : [];
    var rebolarSteps = (typeof REBOLAR_STEPS !== 'undefined') ? REBOLAR_STEPS : [];

    var html = '<div style="padding:16px;">';
    html += '<button style="background:none; border:none; color:var(--text-primary); padding:8px 0; margin-bottom:8px;" onclick="Router.navigate(\'home\')">';
    html += '<svg class="icon" viewBox="0 0 24 24" style="vertical-align:middle;"><polyline points="15 18 9 12 15 6"/></svg> Voltar';
    html += '</button>';

    // Yoga
    html += '<h2 style="margin-bottom:12px; color:var(--color-skincare);">Yoga — Flexibilidade</h2>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px; line-height:1.5;">Flexibilidade te deixa mais sexy nos movimentos, previne lesoes e melhora amplitude nos exercicios. Quanto mais flexivel, mais feminino o corpo se move.</p>';

    yogaPoses.forEach(function(pose) {
      html += '<div class="card" style="margin-bottom:8px; padding:14px;">';
      html += '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">';
      html += '<strong style="font-size:0.95rem;">' + pose.name + '</strong>';
      html += '<span style="font-size:0.75rem; color:var(--color-skincare);">' + pose.time + '</span>';
      html += '</div>';
      html += '<p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">' + (pose.narrative || '') + '</p>';
      if (pose.why) {
        html += '<p style="font-size:0.8rem; color:var(--color-skincare); background:rgba(65,105,225,0.06); padding:8px 10px; border-radius:6px; margin-top:8px; line-height:1.4;">' + pose.why + '</p>';
      }
      html += '</div>';
    });

    // Ativacao gluteo esquerdo
    html += '<h3 style="margin-top:24px; margin-bottom:12px; color:var(--color-treino);">Ativacao Gluteo Esquerdo (obrigatorio)</h3>';
    html += '<div class="card" style="margin-bottom:8px; padding:14px;">';
    html += '<strong>Abducao perna esquerda</strong> <span style="color:var(--text-muted);">2x15</span>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">Deitada de lado, levantar perna esquerda</p>';
    html += '</div>';
    html += '<div class="card" style="margin-bottom:8px; padding:14px;">';
    html += '<strong>Hidrante esquerdo</strong> <span style="color:var(--text-muted);">2x15</span>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">De quatro, abrir joelho esquerdo pro lado</p>';
    html += '</div>';

    // Rebolar
    html += '<h2 style="margin-top:24px; margin-bottom:12px; color:var(--color-estilo);">Rebolar — Movimento de Quadril</h2>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px; line-height:1.5;">Rebolar treina controle do quadril, ativa musculos que a musculacao nao pega, e constroi a confianca corporal da femme fatale.</p>';

    rebolarSteps.forEach(function(fase) {
      html += '<div class="card" style="margin-bottom:8px; padding:14px;">';
      html += '<strong style="color:var(--color-estilo);">' + fase.fase + '</strong>';
      html += '<ul style="margin-top:8px; padding-left:20px; font-size:0.85rem; color:var(--text-secondary); line-height:1.6;">';
      fase.steps.forEach(function(step) {
        html += '<li style="margin-bottom:4px;">' + step + '</li>';
      });
      html += '</ul></div>';
    });

    html += '</div>';
    container.innerHTML = html;
  },

  renderAtivacaoLeve: function() {
    var container = document.getElementById('workout-container');
    if (!container) return;

    var html = '<div style="padding:16px;">';
    html += '<button style="background:none; border:none; color:var(--text-primary); padding:8px 0; margin-bottom:8px;" onclick="Router.navigate(\'home\')">';
    html += '<svg class="icon" viewBox="0 0 24 24" style="vertical-align:middle;"><polyline points="15 18 9 12 15 6"/></svg> Voltar';
    html += '</button>';

    html += '<h2 style="margin-bottom:12px; color:var(--color-success);">Ativacao Leve + Caminhada</h2>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px; line-height:1.5;">Dia de recuperacao ativa. O corpo cresce no descanso — hoje voce ajuda a recuperacao com movimento leve sem sobrecarregar.</p>';

    // Caminhada
    html += '<div class="card" style="margin-bottom:12px; padding:16px; border-left:3px solid var(--color-success);">';
    html += '<h3 style="margin-bottom:8px;">Caminhada Inclinada</h3>';
    html += '<div style="display:flex; gap:16px; margin-bottom:8px; font-size:0.9rem;">';
    html += '<span><strong>20-30 min</strong></span>';
    html += '<span>Inclinacao: <strong>8-12%</strong></span>';
    html += '<span>Velocidade: <strong>5-6 km/h</strong></span>';
    html += '</div>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.5;">Na esteira do predio. Postura ereta — nao se incline pra frente nem segure na barra. Deixe os bracos balancarem naturalmente. A inclinacao ativa o gluteo em cada passada.</p>';
    html += '<p style="font-size:0.8rem; color:var(--color-success); margin-top:8px;">Ativa gluteo sem sobrecarregar + melhora composicao corporal</p>';
    html += '</div>';

    // Ativacao gluteo esquerdo
    html += '<h3 style="margin-top:20px; margin-bottom:12px; color:var(--color-treino);">Ativacao Gluteo Esquerdo</h3>';
    var ativacoes = [
      { name: 'Abertura de concha esquerdo', reps: '2x15', desc: 'Deitada de lado, joelhos dobrados, abrir joelho de cima' },
      { name: 'Elevacao pelvica unilateral esquerdo', reps: '2x12', desc: 'Deitada, so pe esquerdo no chao, subir quadril e segurar 3s' },
    ];
    ativacoes.forEach(function(ex) {
      html += '<div class="card" style="margin-bottom:8px; padding:14px;">';
      html += '<div style="display:flex; justify-content:space-between;">';
      html += '<strong style="font-size:0.9rem;">' + ex.name + '</strong>';
      html += '<span style="color:var(--text-muted); font-size:0.8rem;">' + ex.reps + '</span>';
      html += '</div>';
      html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">' + ex.desc + '</p>';
      html += '</div>';
    });

    // Kegel
    html += '<h3 style="margin-top:20px; margin-bottom:12px;">Kegel</h3>';
    html += '<div class="card" style="padding:14px;">';
    html += '<strong>3 series de 10 contracoes</strong>';
    html += '<p style="font-size:0.85rem; color:var(--text-secondary); margin-top:4px;">Contraia o musculo do assoalho pelvico (como se fosse segurar o xixi) por 1 segundo, solte 1 segundo. 10x. Descanse 10s. Repita 3x.</p>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
  },

  renderNoWorkout: function(schedule) {
    var container = document.getElementById('workout-container');
    if (!container) return;

    var label = (schedule && schedule.label) ? schedule.label : 'Descanso';
    container.innerHTML =
      '<div class="workout-no-day anim-fade-in">' +
        '<div class="workout-no-day__icon">' +
          '<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/>' +
            '<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>' +
            '<line x1="6" y1="1" x2="6" y2="4"/>' +
            '<line x1="10" y1="1" x2="10" y2="4"/>' +
            '<line x1="14" y1="1" x2="14" y2="4"/>' +
          '</svg>' +
        '</div>' +
        '<h2 class="workout-no-day__title">Hoje e dia de descanso</h2>' +
        '<p class="workout-no-day__label">' + label + '</p>' +
        '<p class="workout-no-day__sub">Aproveitando para recuperar e crescer.</p>' +
      '</div>';
  },

  /* ---- Render: Current Exercise ---- */

  renderExercise: function() {
    var container = document.getElementById('workout-container');
    if (!container) return;

    var ex    = this.exercises[this.currentIndex];
    var total = this.exercises.length;
    var idx   = this.currentIndex;

    // Progress label
    var progressText = ex.phase + ' \u2014 ' + (idx + 1) + '/' + total;

    // GIF section
    var gifHTML = '';
    if (ex.videoKey && EXERCISE_VIDEOS[ex.videoKey] && EXERCISE_VIDEOS[ex.videoKey].gifUrl) {
      var gifUrl = EXERCISE_VIDEOS[ex.videoKey].gifUrl;
      gifHTML =
        '<div class="exercise-card__gif">' +
          '<img src="' + gifUrl + '" alt="' + ex.name + '" loading="lazy" ' +
            'onerror="this.parentElement.style.display=\'none\'">' +
        '</div>';
    }

    // Meta line
    var metaHTML = '<div class="exercise-card__meta">';
    if (ex.sets > 1) {
      metaHTML += '<span>' + ex.sets + ' x ' + ex.reps + '</span>';
    } else {
      metaHTML += '<span>' + ex.reps + '</span>';
    }
    if (ex.rest) {
      metaHTML += '<span class="exercise-card__meta-sep">\u00b7</span><span>Descanso: ' + ex.rest + '</span>';
    }
    metaHTML += '</div>';

    // Tip
    var tipHTML = '';
    if (ex.tip) {
      tipHTML =
        '<div class="exercise-card__tip">' +
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>' +
          '<span>' + ex.tip + '</span>' +
        '</div>';
    }

    // Warning (commonMistakes)
    var warningHTML = '';
    if (ex.videoKey && EXERCISE_VIDEOS[ex.videoKey] && EXERCISE_VIDEOS[ex.videoKey].commonMistakes) {
      var mistakes = EXERCISE_VIDEOS[ex.videoKey].commonMistakes;
      if (mistakes) {
        warningHTML =
          '<div class="exercise-card__warning">' +
            '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>' +
            '<span><strong>Erros comuns:</strong> ' + mistakes + '</span>' +
          '</div>';
      }
    }

    // Phase goal
    var goalHTML = this.renderPhaseGoal(ex.id);

    // Series buttons (only for main exercises with sets > 1)
    var seriesHTML = '';
    if (ex.phase === 'Treino' && ex.sets && ex.sets > 1 && ex.type !== 'plank' && ex.type !== 'vacuum') {
      var doneSeries = this.workoutData.series[ex.id] || {};
      seriesHTML = '<div class="series-row">';
      for (var s = 1; s <= ex.sets; s++) {
        var isDone = !!doneSeries[s];
        seriesHTML +=
          '<button class="series-btn' + (isDone ? ' series-btn--done' : '') + '" ' +
            'data-action="toggle-series" data-ex-id="' + ex.id + '" data-set="' + s + '" ' +
            'aria-label="Serie ' + s + (isDone ? ' concluida' : '') + '">' +
            s +
          '</button>';
      }
      seriesHTML += '</div>';
    }

    // Weight input (only for main exercises with weight)
    var weightHTML = '';
    if (ex.phase === 'Treino' && ex.weight) {
      var lastWeight = this.workoutData.weights[ex.id] || 0;
      var history    = StorageManager.getWeightHistory(ex.id);
      var suggestion = Utils.suggestNextWeight(history);
      var suggestText = '';
      if (suggestion && suggestion !== lastWeight) {
        suggestText = '<span class="weight-row__suggestion">Sugestao: ' + suggestion + ' kg</span>';
      }

      weightHTML =
        '<div class="weight-row">' +
          '<label class="weight-row__label" for="weight-input-' + ex.id + '">Peso (kg)</label>' +
          '<input class="weight-row__input" type="number" id="weight-input-' + ex.id + '" ' +
            'min="0" step="0.5" placeholder="0" value="' + (lastWeight || '') + '" ' +
            'data-action="weight-input" data-ex-id="' + ex.id + '">' +
          suggestText +
        '</div>';
    }

    // Navigation buttons
    var isFirst = idx === 0;
    var isLast  = idx === total - 1;
    var navHTML =
      '<div class="exercise-nav">' +
        '<button class="btn btn--ghost exercise-nav__btn' + (isFirst ? ' hidden' : '') + '" ' +
          'data-action="prev">Anterior</button>' +
        '<button class="btn btn--primary exercise-nav__btn" data-action="next">' +
          (isLast ? 'Finalizar' : 'Proximo') +
        '</button>' +
      '</div>';

    // Narrative (expandable)
    var narrativeHTML = '';
    if (ex.narrative) {
      narrativeHTML =
        '<details class="exercise-card__narrative">' +
          '<summary>Como fazer</summary>' +
          '<p>' + ex.narrative + '</p>' +
          (ex.why ? '<p class="exercise-card__why">' + ex.why + '</p>' : '') +
        '</details>';
    }

    // Phase badge color class
    var badgeClass = 'badge--warmup';
    if (ex.phase === 'Treino')      badgeClass = 'badge--main';
    if (ex.phase === 'Alongamento') badgeClass = 'badge--cool';

    container.innerHTML =
      '<div class="workout-view anim-fade-in">' +

        // Header
        '<div class="workout-header">' +
          '<button class="workout-header__back" data-action="back" aria-label="Voltar">' +
            '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<polyline points="15 18 9 12 15 6"/>' +
            '</svg>' +
          '</button>' +
          '<span class="workout-header__progress">' + progressText + '</span>' +
          '<span class="workout-header__spacer"></span>' +
        '</div>' +

        // Progress bar
        '<div class="workout-progress-bar"><div class="workout-progress-bar__fill" style="width:' + Math.round(((idx + 1) / total) * 100) + '%"></div></div>' +

        // Phase badge
        '<div class="workout-phase-badge ' + badgeClass + '">' + ex.phase + '</div>' +

        // Exercise card
        '<div class="exercise-card">' +
          gifHTML +
          '<div class="exercise-card__body">' +
            '<h2 class="exercise-card__name">' + ex.name + '</h2>' +
            metaHTML +
            tipHTML +
            warningHTML +
            goalHTML +
            seriesHTML +
            weightHTML +
            narrativeHTML +
          '</div>' +
        '</div>' +

        // Timer overlay (hidden by default)
        '<div class="rest-timer hidden" id="rest-timer-overlay">' +
          '<p class="rest-timer__label">Descanso</p>' +
          '<div class="rest-timer__circle" id="rest-timer-circle">' +
            '<span class="rest-timer__time" id="rest-timer-display">0:00</span>' +
          '</div>' +
          '<button class="btn btn--ghost rest-timer__skip" data-action="skip-rest">Pular</button>' +
        '</div>' +

        navHTML +

      '</div>';
  },

  /* ---- Render: Phase Goal ---- */

  renderPhaseGoal: function(exerciseId) {
    var goalDef = this.PHASE_GOALS[exerciseId];
    if (!goalDef) return '';

    var history = StorageManager.getWeightHistory(exerciseId);
    var current = history.length ? history[history.length - 1].weight : 0;
    var target  = goalDef.target;
    var pct     = Math.min(100, Math.round((current / target) * 100));

    return (
      '<div class="phase-goal">' +
        '<div class="phase-goal__header">' +
          '<span class="phase-goal__label">Meta fase ' + goalDef.nextPhase + ': ' + target + ' kg</span>' +
          '<span class="phase-goal__current">' + current + ' kg atual</span>' +
        '</div>' +
        '<div class="phase-goal__bar">' +
          '<div class="phase-goal__fill" style="width:' + pct + '%"></div>' +
        '</div>' +
      '</div>'
    );
  },

  /* ---- Render: Summary ---- */

  renderSummary: function() {
    var container = document.getElementById('workout-container');
    if (!container) return;

    var durationSec = Math.floor((Date.now() - this.startTime) / 1000);
    var durationMin = Math.round(durationSec / 60);

    // Count main exercises only
    var mainExs = this.exercises.filter(function(e) { return e.phase === 'Treino'; });
    var totalMain = mainExs.length;

    // Count completed series
    var seriesDone = 0;
    var self = this;
    Object.keys(self.workoutData.series).forEach(function(exId) {
      var sMap = self.workoutData.series[exId];
      Object.keys(sMap).forEach(function(s) {
        if (sMap[s]) seriesDone++;
      });
    });

    // Max weight lifted
    var maxWeight = 0;
    Object.keys(self.workoutData.weights).forEach(function(exId) {
      var w = self.workoutData.weights[exId];
      if (w > maxWeight) maxWeight = w;
    });

    container.innerHTML =
      '<div class="workout-summary anim-fade-in">' +
        '<div class="workout-summary__icon">' +
          '<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-treino)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<polyline points="20 6 9 17 4 12"/>' +
          '</svg>' +
        '</div>' +
        '<h2 class="workout-summary__title">Treino concluido!</h2>' +
        '<p class="workout-summary__subtitle">Cada serie e um passo em direcao a silhueta amazona.</p>' +
        '<div class="workout-summary__stats">' +
          '<div class="workout-summary__stat">' +
            '<span class="workout-summary__stat-value">' + durationMin + '</span>' +
            '<span class="workout-summary__stat-label">minutos</span>' +
          '</div>' +
          '<div class="workout-summary__stat">' +
            '<span class="workout-summary__stat-value">' + totalMain + '</span>' +
            '<span class="workout-summary__stat-label">exercicios</span>' +
          '</div>' +
          '<div class="workout-summary__stat">' +
            '<span class="workout-summary__stat-value">' + seriesDone + '</span>' +
            '<span class="workout-summary__stat-label">series feitas</span>' +
          '</div>' +
          '<div class="workout-summary__stat">' +
            '<span class="workout-summary__stat-value">' + (maxWeight || '\u2014') + (maxWeight ? ' kg' : '') + '</span>' +
            '<span class="workout-summary__stat-label">peso maximo</span>' +
          '</div>' +
        '</div>' +
        '<button class="btn btn--primary workout-summary__home" data-action="go-home">Voltar pro inicio</button>' +
      '</div>';
  },

  /* ---- Series Toggle ---- */

  toggleSeries: function(exerciseId, setNum) {
    if (!this.workoutData.series[exerciseId]) {
      this.workoutData.series[exerciseId] = {};
    }

    var wasNotDone = !this.workoutData.series[exerciseId][setNum];
    this.workoutData.series[exerciseId][setNum] = wasNotDone ? true : false;

    StorageManager.setWorkoutData(this.workoutData);

    // Update the button visually (no full re-render)
    var btn = document.querySelector(
      '[data-action="toggle-series"][data-ex-id="' + exerciseId + '"][data-set="' + setNum + '"]'
    );
    if (btn) {
      if (wasNotDone) {
        btn.classList.add('series-btn--done', 'anim-check');
        btn.addEventListener('animationend', function() {
          btn.classList.remove('anim-check');
        }, { once: true });
      } else {
        btn.classList.remove('series-btn--done');
      }
    }

    // Start rest timer if marking as done and rest is specified
    if (wasNotDone) {
      var ex = this.exercises[this.currentIndex];
      if (ex && ex.rest) {
        var seconds = this.parseRestSeconds(ex.rest);
        if (seconds > 0) {
          this.startRestTimer(seconds);
        }
      }
    }
  },

  /* ---- Weight Save ---- */

  saveCurrentWeight: function(exerciseId, inputEl) {
    var val = parseFloat(inputEl.value);
    if (!val || val <= 0) return;

    this.workoutData.weights[exerciseId] = val;
    StorageManager.setWorkoutData(this.workoutData);
    StorageManager.addWeightHistory(exerciseId, val);
  },

  /* ---- Rest Timer ---- */

  startRestTimer: function(seconds) {
    var self      = this;
    var overlay   = document.getElementById('rest-timer-overlay');
    var display   = document.getElementById('rest-timer-display');
    var circle    = document.getElementById('rest-timer-circle');

    if (!overlay || !display) return;

    overlay.classList.remove('hidden');
    if (circle) circle.classList.add('anim-pulse');

    var remaining = seconds;
    display.textContent = Utils.formatTime(remaining);

    self.restTimer = setInterval(function() {
      remaining--;
      display.textContent = Utils.formatTime(remaining);

      if (remaining <= 0) {
        self.stopRestTimer();
      }
    }, 1000);
  },

  stopRestTimer: function() {
    if (this.restTimer) {
      clearInterval(this.restTimer);
      this.restTimer = null;
    }

    var overlay = document.getElementById('rest-timer-overlay');
    var circle  = document.getElementById('rest-timer-circle');
    if (overlay) overlay.classList.add('hidden');
    if (circle)  circle.classList.remove('anim-pulse');
  },

  /* ---- Navigation ---- */

  goNext: function() {
    // Save weight before navigating
    var ex       = this.exercises[this.currentIndex];
    var weightEl = document.getElementById('weight-input-' + ex.id);
    if (weightEl && weightEl.value) {
      this.saveCurrentWeight(ex.id, weightEl);
    }

    this.stopRestTimer();

    if (this.currentIndex >= this.exercises.length - 1) {
      this.renderSummary();
    } else {
      this.currentIndex++;
      this.renderExercise();
    }
  },

  goPrev: function() {
    this.stopRestTimer();
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.renderExercise();
    }
  },

  /* ---- Event Delegation ---- */

  bindContainerEvents: function() {
    var self      = this;
    var container = document.getElementById('workout-container');
    if (!container) return;

    // Remove any prior listener by replacing the node — simplest approach
    // since we re-render on each exercise, we delegate on the stable container
    container.addEventListener('click', function(e) {
      var action = e.target.closest('[data-action]');
      if (!action) return;

      var type  = action.dataset.action;
      var exId  = action.dataset.exId;
      var setN  = action.dataset.set;

      switch (type) {
        case 'next':
          self.goNext();
          break;

        case 'prev':
          self.goPrev();
          break;

        case 'back':
          if (self.currentIndex > 0) {
            self.goPrev();
          } else {
            Router.navigate('home');
          }
          break;

        case 'toggle-series':
          self.toggleSeries(exId, parseInt(setN, 10));
          break;

        case 'skip-rest':
          self.stopRestTimer();
          break;

        case 'go-home':
          Router.navigate('home');
          break;
      }
    }, true);

    // Save weight on blur
    container.addEventListener('blur', function(e) {
      var inp = e.target.closest('[data-action="weight-input"]');
      if (!inp) return;
      var exId = inp.dataset.exId;
      if (exId) self.saveCurrentWeight(exId, inp);
    }, true);
  },

  /* ---- Helpers ---- */

  parseRestSeconds: function(restStr) {
    if (!restStr) return 0;
    // Handles "90seg", "60seg", "1min", "30 segundos", etc.
    var match = restStr.match(/(\d+)\s*(?:min|m\b)/i);
    if (match) return parseInt(match[1], 10) * 60;
    match = restStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  },

  getPhaseGoal: function(exerciseId) {
    var goalDef = this.PHASE_GOALS[exerciseId];
    if (!goalDef) return null;

    var history = StorageManager.getWeightHistory(exerciseId);
    var current = history.length ? history[history.length - 1].weight : 0;

    return { target: goalDef.target, current: current, nextPhase: goalDef.nextPhase };
  }

};
