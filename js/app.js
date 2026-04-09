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

  renderMenu: function() {
    var grid = document.getElementById('menu-grid');
    if (!grid) return;

    var items = [
      { id: 'shopping', label: 'Compras', icon: 'cart', enabled: true },
      { id: 'bodycare', label: 'Cuidados Corpo', icon: 'shirt', enabled: true },
      { id: 'hairgrowth', label: 'Cabelo', icon: 'trending', enabled: true },
      { id: 'settings', label: 'Configuracoes', icon: 'gear', enabled: false }
    ];

    var icons = {
      cart: '<svg class="icon icon--lg" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
      trending: '<svg class="icon icon--lg" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
      shirt: '<svg class="icon icon--lg" viewBox="0 0 24 24"><path d="M20.38 3.46L16 2 12 5.69 8 2 3.62 3.46a2 2 0 0 0-1.34 2.23l1.09 5.97A2 2 0 0 0 5.35 13h13.3a2 2 0 0 0 1.98-1.34l1.09-5.97a2 2 0 0 0-1.34-2.23z"/><path d="M3 13v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/></svg>',
      gear: '<svg class="icon icon--lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'
    };

    var html = '';
    items.forEach(function(item) {
      html += '<div class="menu-item' + (item.enabled ? '' : ' menu-item--disabled') + '" data-menu="' + item.id + '">' +
        '<div class="menu-item__icon">' + icons[item.id] + '</div>' +
        '<div class="menu-item__label">' + item.label + '</div>' +
        (item.enabled ? '' : '<div class="menu-item__badge">Em breve</div>') +
      '</div>';
    });
    grid.innerHTML = html;

    var self = this;
    grid.onclick = function(e) {
      var item = e.target.closest('[data-menu]');
      if (!item || item.classList.contains('menu-item--disabled')) return;
      var menuContainer = document.getElementById('menu-container');

      if (item.dataset.menu === 'shopping' && typeof ShoppingManager !== 'undefined') {
        ShoppingManager.render(menuContainer);
      }
      if (item.dataset.menu === 'bodycare' && typeof CareManager !== 'undefined') {
        CareManager.renderBodyCare(menuContainer);
      }
      if (item.dataset.menu === 'hairgrowth' && typeof CareManager !== 'undefined') {
        CareManager.renderHairGrowth(menuContainer);
      }
    };
  }
};

document.addEventListener('DOMContentLoaded', function() {
  App.init();
});
