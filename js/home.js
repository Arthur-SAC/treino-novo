/* =============================================
   HOME.JS — HomeManager
   Daily checklist split into "A fazer" / "Feitos".
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var HomeManager = {

  /* Array of { id, title, time, category } built from today's schedule */
  items: [],

  /* ---- Bootstrap ---- */

  init: function() {
    var self = this;
    self.loadDayItems();
    self.render();

    // Re-render when the user navigates back to the home page
    document.addEventListener('pageChange', function(e) {
      if (e.detail && e.detail.page === 'home') {
        self.render();
      }
    });
  },

  /* ---- Data Loading ---- */

  loadDayItems: function() {
    var day      = Utils.getDayOfWeek();                  // 0–6
    var schedule = WEEK_SCHEDULE[day];                    // { type, workout, … }
    var layout   = DAY_CARD_LAYOUTS[schedule.type] || []; // array of cardIds

    this.items = layout.map(function(cardId) {
      var card = DAILY_CARDS[cardId] || {};
      return {
        id:       cardId,
        title:    card.title || cardId,
        time:     card.time  || '',
        category: HomeManager.getCategory(cardId),
        icon:     HomeManager.getIconSVG(cardId)
      };
    });
  },

  /* ---- Category Helpers ---- */

  getCategory: function(cardId) {
    if (cardId === 'treino' ||
        cardId === 'yoga_rebolar' ||
        cardId === 'ativacao_leve') {
      return 'treino';
    }
    if (cardId === 'cafe'       ||
        cardId === 'lanche_manha'  ||
        cardId === 'almoco'        ||
        cardId === 'pre_treino'    ||
        cardId === 'lanche_tarde'  ||
        cardId === 'pos_treino'    ||
        cardId === 'jantar') {
      return 'nutricao';
    }
    if (cardId === 'skincare_manha' ||
        cardId === 'rotina_noturna') {
      return 'skincare';
    }
    return 'rotina';
  },

  /* ---- SVG Icons (feather-icon style, 20x20 viewport) ---- */

  getIconSVG: function(cardId) {
    var icons = {

      // ☀️ acordar — sun
      acordar: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',

      // 🧴 skincare_manha — droplet
      skincare_manha: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',

      // ☕ cafe — coffee
      cafe: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',

      // 🍎 lanche_manha — apple/circle
      lanche_manha: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5c0 5-5 11-5 11S7 12 7 7a5 5 0 0 1 5-5z"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/></svg>',

      // 🍽️ almoco — utensils / plate
      almoco: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',

      // ⚡ pre_treino — lightning / zap
      pre_treino: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',

      // 💪 treino — dumbbell
      treino: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5h11"/><path d="M6.5 17.5h11"/><line x1="3" y1="9.5" x2="3" y2="14.5"/><line x1="21" y1="9.5" x2="21" y2="14.5"/><line x1="3" y1="12" x2="21" y2="12"/><rect x="1" y="9" width="4" height="6" rx="1"/><rect x="19" y="9" width="4" height="6" rx="1"/></svg>',

      // 🐕 pos_treino — leaf (recovery)
      pos_treino: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8C8 10 5.9 16.17 3.82 19.34L4.5 20 6 18.5c.5 1 2 2.5 4 2.5 2.5 0 4-2 4-2s1.5 2 4 2 3.5-1.5 3.5-1.5S23 12 17 8z"/></svg>',

      // 🍌 lanche_tarde — banana / fruit
      lanche_tarde: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1-11 0z"/><path d="M4 13C4 7 9 3 14 5"/><line x1="14" y1="5" x2="15" y2="3"/></svg>',

      // 🧘 yoga_rebolar — figure / activity
      yoga_rebolar: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M15 8H9l-2 6 3-1v7h4v-7l3 1-2-6z"/><path d="M7 20c0-2 2-3 5-3s5 1 5 3"/></svg>',

      // 🟡 ativacao_leve — smile / activity
      ativacao_leve: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>',

      // 🌙 jantar — moon
      jantar: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',

      // 🌛 rotina_noturna — moon + star
      rotina_noturna: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/><line x1="20" y1="3" x2="20" y2="5"/><line x1="19" y1="4" x2="21" y2="4"/></svg>',

      // 💃 bonus_sensual — heart
      bonus_sensual: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',

      // 🚶 pos_atividade — activity
      pos_atividade: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',

      // 😴 descanso — moon (soft)
      descanso: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
    };

    return icons[cardId] || (
      // Fallback: generic circle-dot
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/></svg>'
    );
  },

  /* ---- Storage Helpers ---- */

  getCheckedItems: function() {
    return StorageManager.getChecklist() || {};
  },

  toggleItem: function(itemId) {
    var checked = this.getCheckedItems();
    if (checked[itemId]) {
      delete checked[itemId];
    } else {
      checked[itemId] = Date.now();
    }
    StorageManager.setChecklist(checked);
    this.render();
  },

  /* ---- Navigation / Detail ---- */

  openItem: function(itemId) {
    var self = this;

    // Treino
    if (itemId === 'treino' || itemId === 'yoga_rebolar' || itemId === 'ativacao_leve') {
      Router.navigate('treino');
      return;
    }

    // Refeicoes
    var mealMap = {
      cafe: 'cafe',
      lanche_manha: 'lanche1',
      almoco: 'almoco',
      pre_treino: 'pretreino',
      lanche_tarde: 'pretreino',
      jantar: 'jantar'
    };
    if (mealMap[itemId] !== undefined) {
      this.showItemDetail(itemId, function(container) {
        if (typeof NutritionManager !== 'undefined') {
          NutritionManager.renderMealDetail(mealMap[itemId], container);
        } else {
          container.innerHTML = '<p style="padding:20px; color:var(--text-muted);">Nutricao em breve</p>';
        }
      });
      return;
    }

    // Skincare manha
    if (itemId === 'skincare_manha') {
      this.showItemDetail(itemId, function(container) {
        if (typeof CareManager !== 'undefined') {
          CareManager.renderSkincare('morning', container);
        } else {
          container.innerHTML = '<p style="padding:20px; color:var(--text-muted);">Skincare em breve</p>';
        }
      });
      return;
    }

    // Rotina noturna (skincare noite)
    if (itemId === 'rotina_noturna') {
      this.showItemDetail(itemId, function(container) {
        if (typeof CareManager !== 'undefined') {
          CareManager.renderSkincare('night', container);
        } else {
          container.innerHTML = '<p style="padding:20px; color:var(--text-muted);">Skincare em breve</p>';
        }
      });
      return;
    }

    // Cards com steps (acordar, pos_treino, yoga_rebolar, etc)
    var cardData = DAILY_CARDS[itemId];
    if (cardData && cardData.content && Array.isArray(cardData.content.steps)) {
      this.showItemDetail(itemId, function(container) {
        container.innerHTML = HomeManager.renderCardSteps(cardData);
      });
      return;
    }

    // Default: toggle
    this.toggleItem(itemId);
  },

  formatText: function(text) {
    if (!text) return '';
    // Converte \n em <br>, **negrito** em <strong>
    return text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  },

  renderCardSteps: function(cardData) {
    var self = this;
    var html = '<div style="padding:16px;">';
    html += '<h3 style="margin-bottom:12px; font-size:1.2rem;">' + cardData.title + '</h3>';

    if (cardData.content.intro) {
      html += '<p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:16px; line-height:1.5;">' + self.formatText(cardData.content.intro) + '</p>';
    }

    cardData.content.steps.forEach(function(step, i) {
      html += '<div class="card" style="margin-bottom:10px; padding:14px;">';
      html += '<div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">';
      html += '<div style="width:28px; height:28px; border-radius:50%; background:var(--color-treino-dark); color:white; display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:700; flex-shrink:0;">' + (i + 1) + '</div>';
      html += '<strong style="font-size:0.95rem;">' + step.name + '</strong>';
      if (step.duration) {
        html += '<span style="color:var(--text-muted); font-size:0.75rem; margin-left:auto;">' + step.duration + '</span>';
      }
      html += '</div>';
      html += '<p style="font-size:0.85rem; color:var(--text-secondary); line-height:1.6; margin-bottom:8px;">' + self.formatText(step.description) + '</p>';
      if (step.why) {
        html += '<p style="font-size:0.8rem; color:var(--color-skincare); background:rgba(65,105,225,0.06); padding:8px 10px; border-radius:6px; line-height:1.4;">' + self.formatText(step.why) + '</p>';
      }
      html += '</div>';
    });

    if (cardData.content.supplements) {
      html += '<div style="padding:10px 14px; background:rgba(155,48,255,0.08); border-radius:8px; font-size:0.85rem; color:var(--color-nutricao); line-height:1.5;">' + self.formatText(cardData.content.supplements) + '</div>';
    }

    html += '</div>';
    return html;
  },

  checkMeasurementReminder: function() {
    var measurements = StorageManager.getMeasurements();
    // Nunca mediu — lembrar
    if (!measurements || measurements.length === 0) return 'nunca';

    var latest = measurements[measurements.length - 1];
    if (!latest.date) return 14;

    var lastDate = new Date(latest.date);
    var now = new Date();
    var diffDays = Math.floor((now - lastDate) / (1000 * 60 * 60 * 24));

    // Lembrar a cada 14 dias
    if (diffDays >= 14) return diffDays;
    return null;
  },

  showItemDetail: function(itemId, renderFn) {
    var modal   = document.getElementById('exercise-modal');
    var content = document.getElementById('modal-content');
    renderFn(content);
    modal.classList.remove('hidden');
    document.getElementById('modal-backdrop').onclick = function() {
      modal.classList.add('hidden');
    };
  },

  /* ---- Render ---- */

  render: function() {
    var self    = this;
    var checked = this.getCheckedItems();

    // Update greeting and day
    var greetingEl = document.getElementById('home-greeting');
    var dayEl      = document.getElementById('home-day');
    if (greetingEl) greetingEl.textContent = Utils.getGreeting() + ', Arthur';
    if (dayEl)      dayEl.textContent      = Utils.getDayName(Utils.getDayOfWeek());

    // Render silhouette widget
    var silMount = document.getElementById('silhouette-mount');
    if (silMount && typeof SilhouetteManager !== 'undefined') {
      silMount.innerHTML = SilhouetteManager.render();
      SilhouetteManager.bind();
    }

    // Lembrete de medicao a cada 2 semanas
    var measureReminder = self.checkMeasurementReminder();
    if (measureReminder) {
      var reminderEl = document.getElementById('measure-reminder');
      if (!reminderEl) {
        var silContainer = document.getElementById('silhouette-mount');
        if (silContainer) {
          var div = document.createElement('div');
          div.id = 'measure-reminder';
          div.style.cssText = 'margin:0 0 16px; padding:12px 16px; background:rgba(76,175,80,0.1); border:1px solid rgba(76,175,80,0.3); border-radius:12px; display:flex; align-items:center; gap:12px; cursor:pointer;';
          div.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#4CAF50" stroke-width="2"><path d="M1 12h4l3-9 4 18 3-9h4"/><circle cx="18" cy="12" r="3"/></svg>' +
            '<div style="flex:1;"><p style="font-size:0.85rem; font-weight:500; color:var(--color-success);">Hora de atualizar suas medidas!</p>' +
            '<p style="font-size:0.75rem; color:var(--text-muted);">Faz ' + measureReminder + ' dias desde a ultima medicao</p></div>';
          div.onclick = function() { Router.navigate('corpo'); };
          silContainer.parentNode.insertBefore(div, silContainer.nextSibling);
        }
      }
    }

    // Partition items
    var todo = [];
    var done = [];
    this.items.forEach(function(item) {
      if (checked[item.id]) {
        done.push(item);
      } else {
        todo.push(item);
      }
    });

    // Sort done items by completion timestamp (oldest first)
    done.sort(function(a, b) {
      return (checked[a.id] || 0) - (checked[b.id] || 0);
    });

    // Build a card's inner HTML
    function buildCard(item, isDone) {
      var doneClass = isDone ? ' todo-card--done' : '';
      return (
        '<div class="todo-card' + doneClass + '" data-id="' + item.id + '">' +
          '<button class="todo-card__check" aria-label="' + (isDone ? 'Marcar como a fazer' : 'Marcar como feito') + '" data-action="toggle">' +
            '<svg class="todo-card__check-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
              '<polyline points="20 6 9 17 4 12"/>' +
            '</svg>' +
          '</button>' +
          '<div class="todo-card__icon todo-card__icon--' + item.category + '">' +
            item.icon +
          '</div>' +
          '<div class="todo-card__info" data-action="open">' +
            '<div class="todo-card__title">' + item.title + '</div>' +
            (item.time ? '<div class="todo-card__time">' + item.time + '</div>' : '') +
          '</div>' +
        '</div>'
      );
    }

    var todoHTML = todo.length
      ? todo.map(function(item) { return buildCard(item, false); }).join('')
      : '<p class="todo-empty">Tudo feito por hoje!</p>';

    var doneHTML = done.length
      ? done.map(function(item) { return buildCard(item, true); }).join('')
      : '<p class="todo-empty">Nenhum item concluido ainda.</p>';

    var todoContainer = document.getElementById('todo-items');
    var doneContainer = document.getElementById('done-items');

    if (todoContainer) {
      todoContainer.innerHTML = todoHTML;
      // Show/hide the entire section based on whether there are items
      var todoSection = document.getElementById('todo-list');
      if (todoSection) {
        todoSection.style.display = (todo.length === 0 && done.length > 0) ? 'none' : '';
      }
    }
    if (doneContainer) {
      doneContainer.innerHTML = doneHTML;
      // Hide done section when empty
      var doneSection = document.getElementById('done-list');
      if (doneSection) {
        doneSection.style.display = done.length === 0 ? 'none' : '';
      }
    }

    // Event delegation — todo items
    if (todoContainer) {
      todoContainer.addEventListener('click', function(e) {
        var card = e.target.closest('.todo-card');
        if (!card) return;
        var itemId = card.dataset.id;
        var action = e.target.closest('[data-action]');
        var actionType = action ? action.dataset.action : 'open';

        if (actionType === 'toggle') {
          // Animate then move
          card.classList.add('anim-bubble-up');
          setTimeout(function() {
            self.toggleItem(itemId);
          }, 450);
        } else {
          self.openItem(itemId);
        }
      });
    }

    // Event delegation — done items
    if (doneContainer) {
      doneContainer.addEventListener('click', function(e) {
        var card = e.target.closest('.todo-card');
        if (!card) return;
        var itemId = card.dataset.id;
        var action = e.target.closest('[data-action]');
        var actionType = action ? action.dataset.action : 'open';

        if (actionType === 'toggle') {
          card.classList.add('anim-bubble-up');
          setTimeout(function() {
            self.toggleItem(itemId);
          }, 450);
        } else {
          // Tapping a done card body just untoggles (same as Bloco 1 spec)
          self.toggleItem(itemId);
        }
      });
    }
  }

};
