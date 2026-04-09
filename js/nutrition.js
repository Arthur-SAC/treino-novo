/* =============================================
   NUTRITION.JS — NutritionManager + ShoppingManager
   Meal detail view and weekly shopping list.
   Global objects — loaded via <script> tag, no modules.
   ============================================= */

/* =============================================
   NutritionManager
   Renders a meal detail panel into a given container.
   ============================================= */

var NutritionManager = {

  /* ---- State ---- */
  _currentMealId:  null,
  _selectedOption: 0,

  /* ---- Entry Point ---- */

  /**
   * Render full meal detail into containerEl.
   * @param {string}      mealId      — key in MEALS: 'cafe', 'lanche1', etc.
   * @param {HTMLElement} containerEl — target container
   */
  renderMealDetail: function(mealId, containerEl) {
    var meal = MEALS[mealId];
    if (!meal || !containerEl) return;

    this._currentMealId  = mealId;
    this._selectedOption = 0;

    containerEl.innerHTML = this._buildHTML(meal, 0);
    this._bindEvents(containerEl, meal);
  },

  /* ---- HTML Builders ---- */

  _buildHTML: function(meal, selectedIdx) {
    var option = meal.options[selectedIdx];

    return (
      '<div class="meal-detail">' +
        this._buildPills(meal, selectedIdx) +
        this._buildPrepTime(option) +
        this._buildIngredients(option) +
        this._buildSteps(option) +
        this._buildSupplements(option) +
      '</div>'
    );
  },

  _buildPills: function(meal, selectedIdx) {
    var pills = meal.options.map(function(opt, i) {
      var active = i === selectedIdx ? ' meal-option-btn--active' : '';
      return (
        '<button class="meal-option-btn' + active + '" data-option-index="' + i + '">' +
          opt.name +
        '</button>'
      );
    });

    return '<div class="meal-options">' + pills.join('') + '</div>';
  },

  _buildPrepTime: function(option) {
    if (!option.prepTime) return '';
    return (
      '<p class="meal-prep-time">' +
        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' +
        'Preparo: ' + option.prepTime +
      '</p>'
    );
  },

  _buildIngredients: function(option) {
    if (!option.ingredients || !option.ingredients.length) return '';

    var items = option.ingredients.map(function(ing) {
      return '<li class="meal-ingredient">' + ing + '</li>';
    }).join('');

    return (
      '<div class="meal-section">' +
        '<p class="meal-section__title">Ingredientes</p>' +
        '<ul>' + items + '</ul>' +
      '</div>'
    );
  },

  _buildSteps: function(option) {
    if (!option.steps || !option.steps.length) return '';

    var items = option.steps.map(function(step, i) {
      return (
        '<li class="meal-step">' +
          '<span class="meal-step__num" aria-hidden="true">' + (i + 1) + '</span>' +
          '<span class="meal-step__text">' + step + '</span>' +
        '</li>'
      );
    }).join('');

    return (
      '<div class="meal-section">' +
        '<p class="meal-section__title">Como Fazer</p>' +
        '<ol>' + items + '</ol>' +
      '</div>'
    );
  },

  _buildSupplements: function(option) {
    var supps = option.supplements;
    if (!supps || !supps.length) return '';

    var items = supps.map(function(s) {
      return '<li class="meal-supplements__item">' + s + '</li>';
    }).join('');

    return (
      '<div class="meal-supplements">' +
        '<p class="meal-supplements__label">' +
          '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline-block;vertical-align:middle;margin-right:5px"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>' +
          'Suplementos' +
        '</p>' +
        '<ul>' + items + '</ul>' +
      '</div>'
    );
  },

  /* ---- Events ---- */

  _bindEvents: function(containerEl, meal) {
    var self = this;

    containerEl.addEventListener('click', function(e) {
      var btn = e.target.closest('.meal-option-btn');
      if (!btn) return;

      var idx = parseInt(btn.getAttribute('data-option-index'), 10);
      if (isNaN(idx) || idx === self._selectedOption) return;

      self._selectedOption = idx;

      // Full re-render of the inner content (pills + detail)
      var detail = containerEl.querySelector('.meal-detail');
      if (detail) {
        detail.innerHTML =
          self._buildPills(meal, idx) +
          self._buildPrepTime(meal.options[idx]) +
          self._buildIngredients(meal.options[idx]) +
          self._buildSteps(meal.options[idx]) +
          self._buildSupplements(meal.options[idx]);
      }
    });
  }

};

/* =============================================
   ShoppingManager
   Weekly shopping list grouped by supermarket section.
   ============================================= */

var ShoppingManager = {

  /* ---- Section display order and labels ---- */
  SECTION_ORDER: [
    'Hortifrúti',
    'Carnes',
    'Ovos',
    'Laticínios',
    'Grãos e Cereais',
    'Mercearia',
    'Temperos',
    'Suplementos'
  ],

  /* ---- Storage ---- */

  getCheckedItems: function() {
    return StorageManager.getValue('shopping_checked', {});
  },

  toggleItem: function(key) {
    var checked = this.getCheckedItems();
    if (checked[key]) {
      delete checked[key];
    } else {
      checked[key] = true;
    }
    StorageManager.setValue('shopping_checked', checked);
  },

  /* ---- Entry Point ---- */

  render: function(containerEl) {
    if (!containerEl) return;

    var sections  = this._groupBySection();
    var checked   = this.getCheckedItems();
    var self      = this;

    containerEl.innerHTML = this._buildHTML(sections, checked);
    this._bindEvents(containerEl);
  },

  /* ---- Grouping ---- */

  _groupBySection: function() {
    var map = {};

    // Flatten all items from every category in SHOPPING_BASE
    Object.keys(SHOPPING_BASE).forEach(function(category) {
      var items = SHOPPING_BASE[category];
      items.forEach(function(item) {
        var sec = item.section || 'Outros';
        if (!map[sec]) map[sec] = [];
        map[sec].push(item);
      });
    });

    // Return as ordered array, including any unlisted sections at the end
    var self    = this;
    var ordered = [];
    var seen    = {};

    self.SECTION_ORDER.forEach(function(sec) {
      if (map[sec]) {
        ordered.push({ title: sec, items: map[sec] });
        seen[sec] = true;
      }
    });

    // Append any section not in SECTION_ORDER
    Object.keys(map).forEach(function(sec) {
      if (!seen[sec]) {
        ordered.push({ title: sec, items: map[sec] });
      }
    });

    return ordered;
  },

  /* ---- HTML Builder ---- */

  _buildHTML: function(sections, checked) {
    var self  = this;
    var total = 0;
    var done  = 0;

    // Count totals for the header badge
    sections.forEach(function(sec) {
      sec.items.forEach(function(item) {
        total++;
        if (checked[self._itemKey(item)]) done++;
      });
    });

    var sectionsHTML = sections.map(function(sec) {
      return self._buildSection(sec, checked);
    }).join('');

    return (
      '<div class="shopping-list">' +
        '<div class="shopping-header">' +
          '<span class="shopping-header__label">Lista Semanal</span>' +
          '<span class="shopping-header__badge">' + done + ' / ' + total + '</span>' +
        '</div>' +
        sectionsHTML +
      '</div>'
    );
  },

  _buildSection: function(section, checked) {
    var self  = this;
    var items = section.items.map(function(item) {
      return self._buildItem(item, checked);
    }).join('');

    return (
      '<div class="shopping-section">' +
        '<p class="shopping-section__title">' + section.title + '</p>' +
        items +
      '</div>'
    );
  },

  _buildItem: function(item, checked) {
    var key     = this._itemKey(item);
    var isDone  = !!checked[key];
    var doneClass = isDone ? ' shopping-item--done' : '';
    var checkClass = isDone ? ' shopping-item__check--done' : '';
    var checkmark  = isDone
      ? '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>'
      : '';

    return (
      '<div class="shopping-item' + doneClass + '" data-key="' + key + '">' +
        '<span class="shopping-item__check' + checkClass + '" aria-hidden="true">' + checkmark + '</span>' +
        '<span class="shopping-item__name">' + item.name + '</span>' +
        '<span class="shopping-item__qty">' + item.qty + '</span>' +
      '</div>'
    );
  },

  /* ---- Events ---- */

  _bindEvents: function(containerEl) {
    var self = this;

    containerEl.addEventListener('click', function(e) {
      var item = e.target.closest('.shopping-item');
      if (!item) return;

      var key    = item.getAttribute('data-key');
      var isDone = item.classList.contains('shopping-item--done');

      // Toggle in storage
      self.toggleItem(key);

      // Update DOM in-place (avoid full re-render for performance)
      var check = item.querySelector('.shopping-item__check');

      if (isDone) {
        // Un-check
        item.classList.remove('shopping-item--done');
        check.classList.remove('shopping-item__check--done');
        check.innerHTML = '';
      } else {
        // Check
        item.classList.add('shopping-item--done');
        check.classList.add('shopping-item__check--done');
        check.innerHTML = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
      }

      // Update the header badge counter
      self._updateBadge(containerEl);
    });
  },

  _updateBadge: function(containerEl) {
    var badge   = containerEl.querySelector('.shopping-header__badge');
    if (!badge) return;

    var total   = containerEl.querySelectorAll('.shopping-item').length;
    var done    = containerEl.querySelectorAll('.shopping-item--done').length;
    badge.textContent = done + ' / ' + total;
  },

  /* ---- Helpers ---- */

  /**
   * Stable key for a shopping item, based on name + section.
   * @param {{ name: string, section: string }} item
   * @returns {string}
   */
  _itemKey: function(item) {
    return (item.section + ':' + item.name)
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_:áàãâéêíóôõúüç]/gi, '');
  }

};
