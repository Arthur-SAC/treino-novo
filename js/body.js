/* =============================================
   BODY.JS — BodyManager
   Measurements, progress photos, asymmetry.
   Global object — loaded via <script> tag, no modules.
   ============================================= */

var BodyManager = {

  /* ---- Config ---- */

  measurementFields: [
    { key: 'cintura',   label: 'Cintura'  },
    { key: 'quadril',   label: 'Quadril'  },
    { key: 'coxa_esq',  label: 'Coxa Esq' },
    { key: 'coxa_dir',  label: 'Coxa Dir' },
    { key: 'busto',     label: 'Busto'    },
    { key: 'braco',     label: 'Braco'    }
  ],

  photoSlots: [
    { key: 'frente',  label: 'Frente'  },
    { key: 'lado',    label: 'Lado'    },
    { key: 'costas',  label: 'Costas'  }
  ],

  /* ---- Bootstrap ---- */

  init: function() {
    var self = this;
    document.addEventListener('pageChange', function(e) {
      if (e.detail && e.detail.page === 'corpo') {
        self.render();
      }
    });
  },

  /* ---- Data Helpers ---- */

  getLatest: function() {
    var all = StorageManager.getMeasurements();
    if (!all || all.length === 0) return null;
    return all[all.length - 1];
  },

  getPrevious: function() {
    var all = StorageManager.getMeasurements();
    if (!all || all.length < 2) return null;
    return all[all.length - 2];
  },

  saveMeasurement: function(data) {
    var all = StorageManager.getMeasurements() || [];
    data.date = StorageManager.getDateKey(new Date());
    all.push(data);
    StorageManager.setMeasurements(all);
  },

  /* ---- Photos (base64 in localStorage) ---- */

  getPhoto: function(slot) {
    return StorageManager.getValue('photo:' + slot, null);
  },

  setPhoto: function(slot, base64) {
    StorageManager.setValue('photo:' + slot, base64);
  },

  deletePhoto: function(slot) {
    try { localStorage.removeItem('photo:' + slot); } catch (e) {}
  },

  /* ---- Diff Formatting ---- */

  formatDiff: function(current, prev, field) {
    if (prev === null || prev === undefined) return '';
    var prevVal = parseFloat(prev[field]);
    var currVal = parseFloat(current[field]);
    if (isNaN(prevVal) || isNaN(currVal)) return '';
    var diff = currVal - prevVal;
    if (diff === 0) return '';
    var sign = diff > 0 ? '+' : '';
    var cls  = diff > 0 ? 'positive' : 'negative';
    return '<span class="measurement-card__diff measurement-card__diff--' + cls + '">' +
             sign + diff.toFixed(1) + ' cm' +
           '</span>';
  },

  /* ---- Render Sections ---- */

  renderMeasurements: function(latest, prev) {
    var self = this;
    if (!latest) {
      return '<p class="body-empty">Nenhuma medicao registrada ainda.<br>Use o formulario abaixo para comecar.</p>';
    }

    // Size badge from StyleManager (if available)
    var sizeBadge = '';
    if (typeof StyleManager !== 'undefined' && latest.quadril) {
      var sz = StyleManager.getSize('bottom', parseFloat(latest.quadril));
      if (sz) sizeBadge = '<span class="size-badge">' + sz + '</span>';
    }

    var cards = self.measurementFields.map(function(f) {
      var val = latest[f.key];
      if (val === undefined || val === '') return '';
      var diff = self.formatDiff(latest, prev, f.key);
      return (
        '<div class="measurement-card">' +
          '<span class="measurement-card__label">' + f.label + '</span>' +
          '<span class="measurement-card__value">' + parseFloat(val).toFixed(1) + '</span>' +
          '<span class="measurement-card__unit">cm</span>' +
          (diff ? diff : '<span class="measurement-card__diff measurement-card__diff--neutral">&nbsp;</span>') +
        '</div>'
      );
    }).join('');

    var dateStr = latest.date ? ' <small class="text-muted">(' + latest.date + ')</small>' : '';
    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">Medicoes atuais' + dateStr +
          (sizeBadge ? ' &nbsp;' + sizeBadge : '') +
        '</div>' +
        '<div class="measurements-grid">' + cards + '</div>' +
      '</div>'
    );
  },

  renderAsymmetry: function(latest) {
    if (!latest) return '';
    var esq = parseFloat(latest.coxa_esq);
    var dir = parseFloat(latest.coxa_dir);
    if (isNaN(esq) || isNaN(dir)) return '';

    var max  = Math.max(esq, dir, 40);  // floor reference at 40cm for bar scale
    var pEsq = Math.min(100, (esq / max) * 100);
    var pDir = Math.min(100, (dir / max) * 100);
    var diff = Math.abs(esq - dir);
    var mismatch = diff > 1.5;

    var fillClass = mismatch ? 'asymmetry-bar__fill asymmetry-bar__fill--mismatch' : 'asymmetry-bar__fill';
    var noteClass = mismatch ? 'asymmetry-note asymmetry-note--warn' : 'asymmetry-note asymmetry-note--ok';
    var noteText  = mismatch
      ? 'Assimetria de ' + diff.toFixed(1) + ' cm — foque no lado menor durante o treino unilateral.'
      : 'Simetria dentro do esperado (' + diff.toFixed(1) + ' cm de diferenca).';

    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">Simetria de coxas</div>' +
        '<div class="asymmetry-card">' +
          '<div class="asymmetry-bar">' +
            '<span class="asymmetry-bar__label">Esq.</span>' +
            '<div class="asymmetry-bar__track">' +
              '<div class="' + fillClass + '" style="width:' + pEsq.toFixed(1) + '%"></div>' +
            '</div>' +
            '<span class="asymmetry-bar__value">' + esq.toFixed(1) + '</span>' +
          '</div>' +
          '<div class="asymmetry-bar">' +
            '<span class="asymmetry-bar__label">Dir.</span>' +
            '<div class="asymmetry-bar__track">' +
              '<div class="' + fillClass + '" style="width:' + pDir.toFixed(1) + '%"></div>' +
            '</div>' +
            '<span class="asymmetry-bar__value">' + dir.toFixed(1) + '</span>' +
          '</div>' +
          '<p class="' + noteClass + '">' + noteText + '</p>' +
        '</div>' +
      '</div>'
    );
  },

  renderPhotos: function() {
    var self = this;
    var slots = self.photoSlots.map(function(slot) {
      var photo = self.getPhoto(slot.key);
      var inner = photo
        ? '<img src="' + photo + '" alt="Foto ' + slot.label + '">' +
          '<button class="progress-photo__delete" data-photo-delete="' + slot.key + '" title="Remover foto">x</button>'
        : '<div class="progress-photo__placeholder">' +
            '<span class="progress-photo__plus">+</span>' +
            '<span class="text-xs text-muted">' + slot.label + '</span>' +
          '</div>';

      return (
        '<div class="progress-photo-wrap">' +
          '<div class="progress-photo" data-photo-slot="' + slot.key + '">' +
            inner +
          '</div>' +
          '<p class="progress-photo__label">' + slot.label + '</p>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">Fotos de progresso</div>' +
        '<div class="progress-photos__grid">' + slots + '</div>' +
        '<input type="file" id="photo-file-input" accept="image/*" capture="environment" class="hidden">' +
      '</div>'
    );
  },

  renderForm: function() {
    var self   = this;
    var latest = self.getLatest();

    var inputs = self.measurementFields.map(function(f) {
      var val = (latest && latest[f.key] !== undefined) ? latest[f.key] : '';
      return (
        '<div class="measure-input-group">' +
          '<label class="measure-input-group__label" for="measure-' + f.key + '">' + f.label + '</label>' +
          '<input class="input" type="number" inputmode="decimal" id="measure-' + f.key + '" ' +
            'name="' + f.key + '" placeholder="0.0" value="' + val + '" step="0.1" min="0" max="200">' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">Registrar medicoes (cm)</div>' +
        '<form id="measurements-form" class="measurements-form" novalidate>' +
          inputs +
          '<div class="measurements-form-footer">' +
            '<button type="submit" class="btn btn--corpo btn--full">Salvar medicoes</button>' +
          '</div>' +
        '</form>' +
      '</div>'
    );
  },

  /* ---- Main Render ---- */

  render: function() {
    var self      = this;
    var container = document.getElementById('corpo-container');
    if (!container) return;

    var latest = self.getLatest();
    var prev   = self.getPrevious();

    var html = (
      '<div class="body-header">' +
        '<h1 class="body-header__title">Corpo</h1>' +
        '<p class="body-header__subtitle">Medicoes, simetria e fotos de progresso</p>' +
      '</div>' +
      self.renderMeasurements(latest, prev) +
      self.renderAsymmetry(latest) +
      self.renderPhotos() +
      self.renderForm()
    );

    container.innerHTML = html;
    self._bindEvents(container);
  },

  /* ---- Event Binding ---- */

  _bindEvents: function(container) {
    var self = this;

    // Form submit
    var form = container.querySelector('#measurements-form');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var data = {};
        var hasAny = false;
        self.measurementFields.forEach(function(f) {
          var input = form.querySelector('[name="' + f.key + '"]');
          if (input && input.value !== '') {
            data[f.key] = parseFloat(input.value);
            hasAny = true;
          }
        });
        if (!hasAny) return;
        self.saveMeasurement(data);
        self.render();
      });
    }

    // Photo tap — open file picker
    var pendingSlot = null;
    var fileInput   = container.querySelector('#photo-file-input');

    container.addEventListener('click', function(e) {
      // Delete photo button
      var deleteBtn = e.target.closest('[data-photo-delete]');
      if (deleteBtn) {
        e.stopPropagation();
        var slotKey = deleteBtn.dataset.photoDelete;
        self.deletePhoto(slotKey);
        self.render();
        return;
      }

      // Photo slot tap
      var photoEl = e.target.closest('[data-photo-slot]');
      if (photoEl && fileInput) {
        pendingSlot = photoEl.dataset.photoSlot;
        fileInput.value = '';
        fileInput.click();
      }
    });

    if (fileInput) {
      fileInput.addEventListener('change', function() {
        if (!fileInput.files || !fileInput.files[0] || !pendingSlot) return;
        var file   = fileInput.files[0];
        var reader = new FileReader();
        reader.onload = function(ev) {
          self.setPhoto(pendingSlot, ev.target.result);
          pendingSlot = null;
          self.render();
        };
        reader.readAsDataURL(file);
      });
    }
  }

};
