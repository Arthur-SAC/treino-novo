/* =============================================
   STYLE.JS — StyleManager
   Colors, clothing by phase, size calculator, lingerie guide.
   Global object — loaded via <script> tag, no modules.
   Depends on: StorageManager, STYLE_GUIDE (data/style.js)
   ============================================= */

var StyleManager = {

  /* ---- Size Calculator ---- */

  /**
   * Look up a size in STYLE_GUIDE.sizeChart.
   * @param {string} type         — 'bottom', 'top', or 'panties'
   * @param {number} measurement  — cm value
   * @returns {string|null}       — e.g. "M / 38" or null
   */
  getSize: function(type, measurement) {
    if (typeof STYLE_GUIDE === 'undefined') return null;
    var chart = STYLE_GUIDE.sizeChart && STYLE_GUIDE.sizeChart[type];
    if (!chart || !measurement) return null;

    var val = parseFloat(measurement);
    if (isNaN(val)) return null;

    for (var i = 0; i < chart.length; i++) {
      var row = chart[i];
      // bottom / panties use minHip / maxHip
      if (row.minHip !== undefined) {
        if (val >= row.minHip && val < row.maxHip) return row.size;
      }
      // top uses minBust / maxBust
      if (row.minBust !== undefined) {
        if (val >= row.minBust && val < row.maxBust) return row.size;
      }
    }

    // If measurement is above the last row max, return largest size
    var last = chart[chart.length - 1];
    if (last) {
      var lastMax = last.maxHip || last.maxBust;
      if (val >= lastMax) return last.size + '+';
    }

    return null;
  },

  /* ---- Internal helpers ---- */

  _getPhaseData: function(phaseNum) {
    if (typeof STYLE_GUIDE === 'undefined') return null;
    var found = null;
    (STYLE_GUIDE.phases || []).forEach(function(p) {
      if (p.phase === phaseNum) found = p;
    });
    return found;
  },

  _getCurrentMeasurements: function() {
    var all = StorageManager.getMeasurements();
    if (!all || all.length === 0) return null;
    return all[all.length - 1];
  },

  /* ---- Render Sections ---- */

  _renderColorPalette: function(currentPhase) {
    if (typeof STYLE_GUIDE === 'undefined') return '';

    var skin = STYLE_GUIDE.skinTone;
    if (!skin) return '';

    var bestColors = (skin.bestColors || []).filter(function(c) {
      if (c.when === 'Todas as fases') return true;
      var match = c.when.match(/Fase (\d+)\+/);
      if (match) return currentPhase >= parseInt(match[1], 10);
      return true;
    });

    var bestSwatches = bestColors.map(function(c) {
      return (
        '<div class="color-swatch">' +
          '<div class="color-swatch__circle" style="background:' + c.hex + '" title="' + c.name + '"></div>' +
          '<span class="color-swatch__name">' + c.name + '</span>' +
        '</div>'
      );
    }).join('');

    var avoidSwatches = (skin.avoidColors || []).map(function(c) {
      return (
        '<div class="color-swatch color-swatch--avoid" title="Evitar: ' + c.why + '">' +
          '<div class="color-swatch__circle" style="background:' + c.hex + '"></div>' +
          '<span class="color-swatch__name">' + c.name + '</span>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">Cores do seu palette</div>' +
        '<div class="color-palette">' + bestSwatches + '</div>' +
        '<div class="body-section__heading" style="margin-top:var(--space-4)">Evitar</div>' +
        '<div class="color-palette">' + avoidSwatches + '</div>' +
      '</div>'
    );
  },

  _renderClothing: function(currentPhase, measurements) {
    var self = this;
    var phaseData = self._getPhaseData(currentPhase);
    if (!phaseData) return '';

    var items = (phaseData.items || []).map(function(item) {
      var sizeStr = '';
      if (measurements && item.sizeGuide) {
        var measureVal = null;
        if (item.sizeGuide === 'quadril' && measurements.quadril) {
          measureVal = parseFloat(measurements.quadril);
          var sz = self.getSize('bottom', measureVal);
          if (sz) sizeStr = sz;
        } else if (item.sizeGuide === 'busto' && measurements.busto) {
          measureVal = parseFloat(measurements.busto);
          var szTop = self.getSize('top', measureVal);
          if (szTop) sizeStr = szTop;
        }
      }

      return (
        '<div class="style-phase-item">' +
          '<div class="style-phase-item__type">' +
            '<span>' + item.type + '</span>' +
            (sizeStr ? '<span class="style-phase-item__size">' + sizeStr + '</span>' : '') +
          '</div>' +
          '<p class="style-phase-item__desc">' + item.desc + '</p>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="body-section">' +
        '<div class="body-section__heading">' + phaseData.title + '</div>' +
        items +
      '</div>'
    );
  },

  _renderLingerie: function(measurements) {
    var self = this;
    if (typeof STYLE_GUIDE === 'undefined' || !STYLE_GUIDE.lingerie) return '';

    var lingerie = STYLE_GUIDE.lingerie;

    // Check criteria: hip - waist > 20cm
    var criteriaMet = false;
    if (measurements && measurements.quadril && measurements.cintura) {
      var hip    = parseFloat(measurements.quadril);
      var waist  = parseFloat(measurements.cintura);
      criteriaMet = (!isNaN(hip) && !isNaN(waist)) && (hip - waist > 20);
    }

    var criteriaClass = criteriaMet
      ? 'lingerie-criteria lingerie-criteria--met'
      : 'lingerie-criteria';

    var criteriaText = criteriaMet
      ? 'Criterio atingido — diferenca quadril-cintura acima de 20 cm!'
      : lingerie.whenReady;

    // Panty size
    var pantySize = '';
    if (measurements && measurements.quadril) {
      var sz = self.getSize('panties', parseFloat(measurements.quadril));
      if (sz) pantySize = '<p class="text-sm" style="margin-bottom:var(--space-3)">Tamanho de calcinha: <strong>' + sz + '</strong></p>';
    }

    // howToChoose tips
    var chooseTips = (lingerie.howToChoose || []).map(function(tip) {
      return '<li class="lingerie-tip">' + tip + '</li>';
    }).join('');

    // howToWear tips
    var wearTips = (lingerie.howToWear || []).map(function(tip) {
      return '<li class="lingerie-tip">' + tip + '</li>';
    }).join('');

    return (
      '<div class="body-section">' +
        '<div class="lingerie-section">' +
          '<div class="lingerie-section__title">Guia de lingerie</div>' +
          '<p class="' + criteriaClass + '">' + criteriaText + '</p>' +
          pantySize +
          '<div class="lingerie-tips">' +
            '<div class="lingerie-tips__heading">Como escolher</div>' +
            '<ul class="lingerie-tips__list">' + chooseTips + '</ul>' +
          '</div>' +
          '<div class="lingerie-tips">' +
            '<div class="lingerie-tips__heading">Como usar</div>' +
            '<ul class="lingerie-tips__list">' + wearTips + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  },

  /* ---- Main Render ---- */

  render: function(containerEl) {
    if (!containerEl) return;
    var self         = this;
    var currentPhase = StorageManager.getPhase();
    var measurements = self._getCurrentMeasurements();

    var html = (
      self._renderColorPalette(currentPhase) +
      self._renderClothing(currentPhase, measurements) +
      (currentPhase >= 3 ? self._renderLingerie(measurements) : '')
    );

    if (!html) {
      html = '<p class="body-empty">Dados de estilo nao disponiveis.</p>';
    }

    containerEl.innerHTML = html;
  }

};
