/* =============================================
   ROUTER.JS — Hash-based Page Router
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var Router = {

  /* Pages in display order (left → right). */
  pages: ['home', 'treino', 'corpo', 'menu'],

  /* Currently active page slug. */
  currentPage: '',

  /* ---- Bootstrap ---- */

  /**
   * Bind nav clicks and hashchange, then show the initial page.
   */
  init: function() {
    var self = this;

    // Attach click handlers to all bottom-nav items
    var navItems = document.querySelectorAll('.nav-bottom__item');
    navItems.forEach(function(item) {
      item.addEventListener('click', function() {
        var page = item.dataset.page;
        if (page) self.navigate(page);
      });
    });

    // Support browser back / forward buttons
    window.addEventListener('hashchange', function() {
      var hash = location.hash.replace('#', '');
      if (self.pages.indexOf(hash) !== -1) {
        self.showPage(hash);
      }
    });

    // Show initial page from URL hash, defaulting to first page
    var initial = location.hash.replace('#', '');
    self.showPage(self.pages.indexOf(initial) !== -1 ? initial : self.pages[0]);
  },

  /* ---- Navigation ---- */

  /**
   * Navigate by updating the URL hash.
   * The hashchange listener calls showPage automatically.
   * @param {string} page
   */
  navigate: function(page) {
    location.hash = page;
  },

  /**
   * Show a page: toggle .page--active on containers,
   * update nav active state, dispatch 'pageChange' event.
   * @param {string} page
   */
  showPage: function(page) {
    if (!page || this.pages.indexOf(page) === -1) {
      page = this.pages[0];
    }

    var prev = this.currentPage;
    this.currentPage = page;

    // Toggle page sections
    document.querySelectorAll('.page').forEach(function(el) {
      el.classList.remove('page--active');
    });
    var target = document.getElementById('page-' + page);
    if (target) {
      target.classList.add('page--active');
    }

    // Update nav active state
    document.querySelectorAll('.nav-bottom__item').forEach(function(item) {
      item.classList.remove('nav-bottom__item--active');
      if (item.dataset.page === page) {
        item.classList.add('nav-bottom__item--active');
      }
    });

    // Fechar modal ao trocar de pagina
    var modal = document.getElementById('exercise-modal');
    if (modal) modal.classList.add('hidden');

    // Emit custom event so feature modules can react
    var event = new CustomEvent('pageChange', {
      detail: { page: page, prev: prev },
      bubbles: true
    });
    document.dispatchEvent(event);
  }

};
