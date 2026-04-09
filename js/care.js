// ============================================================
// js/care.js — CareManager
// Renders skincare and hair routines in flashcard/step-by-step mode.
// Depends on: data/skincare.js (SKINCARE), data/hair.js (HAIR)
// ============================================================

var CareManager = {

  // ── Internal helpers ──────────────────────────────────────

  _closeModal: function() {
    var modal = document.getElementById('exercise-modal');
    if (modal) modal.classList.add('hidden');
  },

  _escapeHtml: function(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  // ── renderSkincare ─────────────────────────────────────────
  // routineKey: 'morning' | 'night'
  // containerEl: DOM element to render into

  renderSkincare: function(routineKey, containerEl) {
    var routine = SKINCARE[routineKey];
    if (!routine || !routine.steps || !routine.steps.length) {
      containerEl.innerHTML = '<p class="text-muted" style="padding:20px">Rotina nao encontrada.</p>';
      return;
    }

    var steps = routine.steps;
    var total = steps.length;
    var current = 0;
    var self = this;

    function render() {
      var step = steps[current];
      var isLast = current === total - 1;
      var counterLabel = routine.label + ' — Passo ' + (current + 1) + '/' + total;

      var waitHtml = '';
      if (step.waitTime) {
        waitHtml = '<div class="care-step__wait">Aguarde ' + self._escapeHtml(step.waitTime) + ' antes do proximo passo.</div>';
      }

      var tipHtml = '';
      if (step.tip) {
        tipHtml = '<div class="care-step__tip">' + self._escapeHtml(step.tip) + '</div>';
      }

      var productHtml = '';
      if (step.product) {
        productHtml = '<div class="care-step__product">' + self._escapeHtml(step.product) + '</div>';
      }

      var amountHtml = '';
      if (step.amount) {
        amountHtml = '<p class="care-step__amount">' + self._escapeHtml(step.amount) + '</p>';
      }

      containerEl.innerHTML =
        '<div class="care-step">' +
          '<p class="care-step__counter">' + self._escapeHtml(counterLabel) + '</p>' +
          '<h3 class="care-step__name">' + self._escapeHtml(step.name) + '</h3>' +
          productHtml +
          amountHtml +
          '<p class="care-step__howto">' + self._escapeHtml(step.howTo) + '</p>' +
          waitHtml +
          tipHtml +
          '<div class="care-nav">' +
            '<button class="btn btn--ghost btn--lg js-care-prev"' + (current === 0 ? ' disabled' : '') + '>Anterior</button>' +
            '<button class="btn btn--skincare btn--lg js-care-next">' + (isLast ? 'Concluir' : 'Proximo passo') + '</button>' +
          '</div>' +
        '</div>';

      containerEl.querySelector('.js-care-prev').addEventListener('click', function() {
        if (current > 0) { current--; render(); }
      });

      containerEl.querySelector('.js-care-next').addEventListener('click', function() {
        if (isLast) {
          self._closeModal();
        } else {
          current++;
          render();
        }
      });
    }

    render();
  },

  // ── renderBodyCare ─────────────────────────────────────────
  // Shows ALL body care sections as a scrollable list.

  renderBodyCare: function(containerEl) {
    var sections = SKINCARE.body.sections;
    if (!sections || !sections.length) {
      containerEl.innerHTML = '<p class="text-muted" style="padding:20px">Secoes nao encontradas.</p>';
      return;
    }

    var self = this;
    var html = '';

    sections.forEach(function(section) {
      // Daily habits list
      var dailyHtml = '';
      if (section.daily && section.daily.length) {
        dailyHtml = '<ul style="padding-left:0;margin:8px 0 12px">';
        section.daily.forEach(function(habit) {
          dailyHtml += '<li class="body-care-item">' + self._escapeHtml(habit) + '</li>';
        });
        dailyHtml += '</ul>';
      }

      // Treatment steps
      var treatmentHtml = '';
      if (section.treatment && section.treatment.length) {
        treatmentHtml = '<div style="margin-top:12px">';
        section.treatment.forEach(function(t) {
          treatmentHtml +=
            '<div style="margin-bottom:12px;padding:12px;background:var(--bg-elevated);border-radius:var(--radius-md)">' +
              '<p style="font-weight:600;font-size:0.9rem;margin-bottom:4px">' + self._escapeHtml(t.step) + '</p>' +
              '<p style="font-size:0.8rem;color:var(--color-skincare);margin-bottom:6px">' + self._escapeHtml(t.frequency) + '</p>' +
              '<p style="font-size:0.9rem;line-height:1.6;color:var(--text-secondary);margin-bottom:6px">' + self._escapeHtml(t.howTo) + '</p>' +
              '<p style="font-size:0.85rem;color:var(--color-skincare)">' + self._escapeHtml(t.product) + '</p>' +
            '</div>';
        });
        treatmentHtml += '</div>';
      }

      // Warnings
      var warningsHtml = '';
      if (section.warnings && section.warnings.length) {
        warningsHtml = '<div class="body-care-warning" style="margin-top:12px">';
        section.warnings.forEach(function(w) {
          warningsHtml += '<p style="margin-bottom:6px">' + self._escapeHtml(w) + '</p>';
        });
        warningsHtml += '</div>';
      }

      // Timeline
      var timelineHtml = '';
      if (section.timeline) {
        timelineHtml = '<p class="body-care-timeline" style="margin-top:10px">' + self._escapeHtml(section.timeline) + '</p>';
      }

      html +=
        '<div class="body-care-section">' +
          '<h4 class="body-care-section__title">' + self._escapeHtml(section.name) + '</h4>' +
          '<p class="body-care-section__freq">' + self._escapeHtml(section.frequency) + '</p>' +
          dailyHtml +
          treatmentHtml +
          timelineHtml +
          warningsHtml +
        '</div>';
    });

    containerEl.innerHTML = html;
  },

  // ── renderHairWash ─────────────────────────────────────────
  // Flashcard mode, purple color scheme.

  renderHairWash: function(containerEl) {
    var steps = HAIR.washDay.steps;
    if (!steps || !steps.length) {
      containerEl.innerHTML = '<p class="text-muted" style="padding:20px">Passos nao encontrados.</p>';
      return;
    }

    var total = steps.length;
    var current = 0;
    var self = this;

    function render() {
      var step = steps[current];
      var isLast = current === total - 1;
      var counterLabel = HAIR.washDay.label + ' — Passo ' + (current + 1) + '/' + total;

      var productHtml = '';
      if (step.product) {
        productHtml = '<div class="care-step__product care-step__product--hair">' + self._escapeHtml(step.product) + '</div>';
      }

      var amountHtml = '';
      if (step.amount) {
        amountHtml = '<p class="care-step__amount">' + self._escapeHtml(step.amount) + '</p>';
      }

      var tipHtml = '';
      if (step.tip) {
        tipHtml = '<div class="care-step__tip care-step__tip--hair">' + self._escapeHtml(step.tip) + '</div>';
      }

      containerEl.innerHTML =
        '<div class="care-step">' +
          '<p class="care-step__counter">' + self._escapeHtml(counterLabel) + '</p>' +
          '<h3 class="care-step__name care-step__name--hair">' + self._escapeHtml(step.name) + '</h3>' +
          productHtml +
          amountHtml +
          '<p class="care-step__howto">' + self._escapeHtml(step.howTo) + '</p>' +
          tipHtml +
          '<div class="care-nav">' +
            '<button class="btn btn--ghost btn--lg js-care-prev"' + (current === 0 ? ' disabled' : '') + '>Anterior</button>' +
            '<button class="btn btn--corpo btn--lg js-care-next">' + (isLast ? 'Concluir' : 'Proximo passo') + '</button>' +
          '</div>' +
        '</div>';

      containerEl.querySelector('.js-care-prev').addEventListener('click', function() {
        if (current > 0) { current--; render(); }
      });

      containerEl.querySelector('.js-care-next').addEventListener('click', function() {
        if (isLast) {
          self._closeModal();
        } else {
          current++;
          render();
        }
      });
    }

    render();
  },

  // ── renderHairGrowth ────────────────────────────────────────
  // Scrollable info page: tips list + growth phase cards.

  renderHairGrowth: function(containerEl) {
    var growth = HAIR.growth;
    if (!growth) {
      containerEl.innerHTML = '<p class="text-muted" style="padding:20px">Dados nao encontrados.</p>';
      return;
    }

    var self = this;

    // Tips list
    var tipsHtml = '';
    if (growth.tips && growth.tips.length) {
      tipsHtml = '<ul style="padding-left:0;margin:0 0 20px">';
      growth.tips.forEach(function(tip) {
        tipsHtml += '<li class="body-care-item">' + self._escapeHtml(tip) + '</li>';
      });
      tipsHtml += '</ul>';
    }

    // Growth phase cards
    var phasesHtml = '';
    if (growth.phases && growth.phases.length) {
      phasesHtml = '<h4 style="font-size:1rem;font-weight:600;margin-bottom:12px;color:var(--color-corpo)">Fases de Crescimento</h4>';
      growth.phases.forEach(function(phase) {
        phasesHtml +=
          '<div style="margin-bottom:14px;padding:14px;background:var(--bg-elevated);border-radius:var(--radius-md);border-left:3px solid var(--color-corpo)">' +
            '<p style="font-weight:600;font-size:0.95rem">' + self._escapeHtml(phase.length) + '</p>' +
            '<p style="font-size:0.8rem;color:var(--color-corpo);margin:3px 0 8px">' + self._escapeHtml(phase.months) + '</p>' +
            '<p style="font-size:0.9rem;line-height:1.6;color:var(--text-secondary)">' + self._escapeHtml(phase.style) + '</p>' +
          '</div>';
      });
    }

    containerEl.innerHTML =
      '<div style="padding:16px">' +
        '<h4 style="font-size:1rem;font-weight:600;margin-bottom:12px;color:var(--color-corpo)">Dicas de Crescimento</h4>' +
        tipsHtml +
        phasesHtml +
      '</div>';
  }

};
