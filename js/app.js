var App = {
  init: function() {
    StorageManager.init();
    Router.init();
    HomeManager.init();
    WorkoutManager.init();
    BodyManager.init();
    this._initCorpoTabs();
    this.renderMenu();
    console.log('App v2 iniciado');
  },

  /* ---- Corpo tab switching ---- */

  _initCorpoTabs: function() {
    var tabs    = document.querySelectorAll('[data-corpo-tab]');
    var panels  = document.querySelectorAll('.corpo-tab-panel');

    function showTab(tabKey) {
      tabs.forEach(function(t) {
        var active = t.dataset.corpoTab === tabKey;
        t.classList.toggle('corpo-tab--active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach(function(p) {
        var active = p.id === 'corpo-panel-' + tabKey;
        p.classList.toggle('corpo-tab-panel--active', active);
      });

      // Lazy-render phase / style panels on first show
      if (tabKey === 'fase') {
        var phaseContainer = document.getElementById('phase-container');
        if (phaseContainer) PhaseManager.render(phaseContainer);
      }
      if (tabKey === 'estilo') {
        var styleContainer = document.getElementById('style-container');
        if (styleContainer) StyleManager.render(styleContainer);
      }
    }

    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        showTab(tab.dataset.corpoTab);
      });
    });

    // Re-render corpo panels when navigating to the page
    document.addEventListener('pageChange', function(e) {
      if (e.detail && e.detail.page === 'corpo') {
        // BodyManager.init already handles medidas re-render via pageChange
        // Re-render whichever sub-tab is currently active
        var activeTab = document.querySelector('.corpo-tab--active');
        if (activeTab) {
          var key = activeTab.dataset.corpoTab;
          if (key === 'fase') {
            var pc = document.getElementById('phase-container');
            if (pc) PhaseManager.render(pc);
          }
          if (key === 'estilo') {
            var sc = document.getElementById('style-container');
            if (sc) StyleManager.render(sc);
          }
        }
      }
    });
  },

  _menuHTML: '',

  renderMenu: function() {
    var container = document.getElementById('menu-container');
    if (!container) return;

    var items = [
      { id: 'shopping', label: 'Compras', enabled: true,
        icon: '<svg class="icon icon--lg" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' },
      { id: 'bodycare', label: 'Cuidados Corpo', enabled: true,
        icon: '<svg class="icon icon--lg" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>' },
      { id: 'hairgrowth', label: 'Cabelo', enabled: true,
        icon: '<svg class="icon icon--lg" viewBox="0 0 24 24"><path d="M20 7c0-3-2.5-5-5.5-5S9 4 9 7c0 1.5.5 2.8 1.3 3.8L7 14l-3-1-1 3 3 1-1 3 3 1 1-3 3-1 3.2-3.2c1-.8 2.3-1.3 3.8-1.3 0 0 1-.5 1-2.5z"/></svg>' },
      { id: 'estilo', label: 'Meu Estilo', enabled: true,
        icon: '<svg class="icon icon--lg" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' }
    ];

    var html = '<h2 style="margin-bottom:16px;">Menu</h2><div class="menu-grid">';
    items.forEach(function(item) {
      html += '<div class="menu-item' + (item.enabled ? '' : ' menu-item--disabled') + '" data-menu="' + item.id + '">' +
        '<div class="menu-item__icon">' + item.icon + '</div>' +
        '<div class="menu-item__label">' + item.label + '</div>' +
        (item.enabled ? '' : '<div class="menu-item__badge">Em breve</div>') +
      '</div>';
    });
    html += '</div>';
    container.innerHTML = html;
    this._menuHTML = html;

    var self = this;
    container.onclick = function(e) {
      // Botao voltar
      var backBtn = e.target.closest('[data-action="back-menu"]');
      if (backBtn) {
        container.innerHTML = self._menuHTML;
        return;
      }

      var item = e.target.closest('[data-menu]');
      if (!item || item.classList.contains('menu-item--disabled')) return;

      var backHeader = '<button data-action="back-menu" class="btn btn--ghost" style="margin-bottom:16px;"><svg class="icon" viewBox="0 0 24 24" style="display:inline; vertical-align:middle;"><polyline points="15 18 9 12 15 6"/></svg> Voltar ao menu</button>';

      if (item.dataset.menu === 'shopping' && typeof ShoppingManager !== 'undefined') {
        container.innerHTML = backHeader;
        var wrapper = document.createElement('div');
        container.appendChild(wrapper);
        ShoppingManager.render(wrapper);
      }
      if (item.dataset.menu === 'bodycare' && typeof CareManager !== 'undefined') {
        container.innerHTML = backHeader;
        var wrapper = document.createElement('div');
        container.appendChild(wrapper);
        CareManager.renderBodyCare(wrapper);
      }
      if (item.dataset.menu === 'hairgrowth' && typeof CareManager !== 'undefined') {
        container.innerHTML = backHeader;
        var wrapper = document.createElement('div');
        container.appendChild(wrapper);
        CareManager.renderHairGrowth(wrapper);
      }
      if (item.dataset.menu === 'estilo' && typeof StyleManager !== 'undefined') {
        container.innerHTML = backHeader;
        var wrapper = document.createElement('div');
        container.appendChild(wrapper);
        StyleManager.render(wrapper);
      }
    };
  }
};

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
