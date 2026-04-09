/* =============================================
   SILHOUETTE.JS — SilhouetteManager
   SVG body silhouette that adjusts to real measurements.
   Shows current body + target overlay for the active phase.
   Global object — loaded via <script> tag, no modules.
   ============================================= */

/* ---- Body Control Points ----
   Each point has a Y position and a baseX (half-width from center).
   Points with a 'key' scale based on user measurements.
   Points with 'fixed: true' remain constant.
*/

var BODY_POINTS = [
  // Cabeca — rosto mais redondo, masculino no ponto de partida
  { y: 0,   part: 'head_top',    baseX: 22, fixed: true },
  { y: 12,  part: 'head_upper',  baseX: 25, fixed: true },
  { y: 26,  part: 'head_mid',    baseX: 24, fixed: true },
  { y: 38,  part: 'jaw',         baseX: 22, fixed: true },
  { y: 48,  part: 'chin',        baseX: 16, fixed: true },
  // Pescoco — mais grosso (masculino)
  { y: 56,  part: 'neck',        baseX: 13, key: 'pescoco',     refCm: 40 },
  { y: 64,  part: 'neck_base',   baseX: 16, key: 'pescoco',     refCm: 40 },
  // Ombros — mais largos que quadril (masculino)
  { y: 72,  part: 'shoulder',    baseX: 52, key: 'ombro',       refCm: 113 },
  { y: 79,  part: 'delt',        baseX: 54, key: 'ombro',       refCm: 113 },
  // Peito — reto, sem curva de busto
  { y: 96,  part: 'upper_chest', baseX: 48, key: 'busto',       refCm: 106 },
  { y: 110, part: 'bust',        baseX: 48, key: 'busto',       refCm: 106 },
  { y: 122, part: 'underbust',   baseX: 46, key: 'busto',       refCm: 106 },
  // Barriga — mais larga que quadril (gordura abdominal)
  { y: 138, part: 'mid_torso',   baseX: 44, key: 'cintura',     refCm: 96 },
  { y: 152, part: 'waist',       baseX: 44, key: 'cintura',     refCm: 96 },
  // Quadril — reto, quase mesmo tamanho da cintura (masculino)
  { y: 166, part: 'above_hip',   baseX: 44, key: 'quadril',     refCm: 106 },
  { y: 180, part: 'hip',         baseX: 46, key: 'quadril',     refCm: 106 },
  { y: 194, part: 'hip_widest',  baseX: 46, key: 'quadril',     refCm: 106 },
  { y: 208, part: 'upper_thigh', baseX: 40, key: 'quadril',     refCm: 106 },
  { y: 218, part: 'crotch',      baseX: 28, key: 'coxa_esq',    refCm: 64 }
];

/* Leg points — from crotch down */
var LEG_POINTS = [
  { y: 218, part: 'crotch',     baseX: 28, key: 'coxa_esq',    refCm: 64 },
  { y: 232, part: 'upper_thigh',baseX: 26, key: 'coxa_esq',    refCm: 64 },
  { y: 252, part: 'mid_thigh',  baseX: 23, key: 'coxa_esq',    refCm: 64 },
  { y: 276, part: 'lower_thigh',baseX: 19, key: 'coxa_esq',    refCm: 64 },
  { y: 298, part: 'knee',       baseX: 16, fixed: true },
  { y: 315, part: 'upper_calf', baseX: 17, key: 'panturrilha', refCm: 40 },
  { y: 334, part: 'calf',       baseX: 16, key: 'panturrilha', refCm: 40 },
  { y: 356, part: 'lower_calf', baseX: 12, fixed: true },
  { y: 378, part: 'ankle',      baseX: 9,  fixed: true },
  { y: 390, part: 'heel',       baseX: 8,  fixed: true },
  { y: 398, part: 'foot',       baseX: 11, fixed: true }
];

/* Arm control points — one side, will be mirrored.
   offsetFromBody = gap between body edge and arm inner edge.
   width = arm thickness at that point. */
var ARM_POINTS = [
  { y: 72,  part: 'shoulder',   offsetFromBody: 0,  width: 0,   key: 'braco',     refCm: 35 },
  { y: 83,  part: 'upper_arm1', offsetFromBody: 3,  width: 7,   key: 'braco',     refCm: 35 },
  { y: 106, part: 'upper_arm2', offsetFromBody: 5,  width: 6.5, key: 'braco',     refCm: 35 },
  { y: 132, part: 'mid_arm',    offsetFromBody: 6,  width: 6,   key: 'braco',     refCm: 35 },
  { y: 158, part: 'elbow',      offsetFromBody: 7,  width: 5,   fixed: true },
  { y: 184, part: 'forearm1',   offsetFromBody: 6,  width: 5,   key: 'antebraco', refCm: 27 },
  { y: 208, part: 'forearm2',   offsetFromBody: 5,  width: 4.5, key: 'antebraco', refCm: 27 },
  { y: 228, part: 'wrist',      offsetFromBody: 4,  width: 3.5, fixed: true },
  { y: 240, part: 'hand_top',   offsetFromBody: 3,  width: 4,   fixed: true },
  { y: 254, part: 'hand_mid',   offsetFromBody: 2.5,width: 3.5, fixed: true },
  { y: 264, part: 'fingertip',  offsetFromBody: 2,  width: 1.5, fixed: true }
];

/* ---- Phase Targets ---- */

var PHASE_TARGETS = {
  1: { pescoco: 37, ombro: 105, busto: 98, cintura: 88, quadril: 104, coxa_esq: 60, coxa_dir: 60, braco: 32, antebraco: 25, panturrilha: 37 },
  2: { pescoco: 36, ombro: 104, busto: 97, cintura: 82, quadril: 106, coxa_esq: 63, coxa_dir: 63, braco: 31, antebraco: 25, panturrilha: 38 },
  3: { pescoco: 35, ombro: 103, busto: 96, cintura: 76, quadril: 110, coxa_esq: 66, coxa_dir: 66, braco: 30, antebraco: 24, panturrilha: 39 },
  4: { pescoco: 35, ombro: 102, busto: 95, cintura: 74, quadril: 112, coxa_esq: 68, coxa_dir: 68, braco: 30, antebraco: 24, panturrilha: 39 }
};

/* ---- Default Measurements (approx. 96kg 173cm) ---- */

var DEFAULT_MEASUREMENTS = {
  pescoco: 40, ombro: 112, busto: 105, cintura: 95, quadril: 108,
  coxa_esq: 64, coxa_dir: 65, braco: 35, antebraco: 27, panturrilha: 40
};

/* ============================================= */

var SilhouetteManager = {

  /* Center X of the viewBox */
  cx: 100,

  /* Vertical offset for hair space above the head */
  yOff: 22,

  /* ---- Data Retrieval ---- */

  getMeasurements: function() {
    var all = StorageManager.getMeasurements();
    if (!all || all.length === 0) return null;
    var latest = all[all.length - 1];
    if (!latest.cintura && !latest.quadril && !latest.busto) return null;
    return latest;
  },

  getTargetMeasurements: function() {
    var phase = StorageManager.getPhase();
    return PHASE_TARGETS[phase] || PHASE_TARGETS[1];
  },

  hasMeasurements: function() {
    return this.getMeasurements() !== null;
  },

  /* ---- Point Calculation ---- */

  /**
   * Compute scaled X values for a set of control points.
   * Returns array of { x, y } where x = half-width from center.
   */
  scalePoints: function(pointsDef, measurements) {
    var pts = [];
    for (var i = 0; i < pointsDef.length; i++) {
      var bp = pointsDef[i];
      var x = bp.baseX;
      if (!bp.fixed && bp.key && measurements[bp.key]) {
        var ratio = parseFloat(measurements[bp.key]) / bp.refCm;
        ratio = Math.max(0.65, Math.min(ratio, 1.5));
        x = bp.baseX * ratio;
      }
      pts.push({ x: x, y: bp.y + this.yOff });
    }
    return pts;
  },

  /**
   * Interpolate the body half-width at a given Y from scaled body points.
   */
  interpX: function(pts, y) {
    for (var i = 0; i < pts.length - 1; i++) {
      if (y >= pts[i].y && y <= pts[i + 1].y) {
        var t = (y - pts[i].y) / (pts[i + 1].y - pts[i].y);
        return pts[i].x + (pts[i + 1].x - pts[i].x) * t;
      }
    }
    if (y <= pts[0].y) return pts[0].x;
    return pts[pts.length - 1].x;
  },

  /* ---- Catmull-Rom to Cubic Bezier ---- */

  /**
   * Convert array of {x,y} to smooth SVG cubic bezier commands.
   * tension: lower = tighter curves (0.25-0.5 is good range)
   */
  smooth: function(points, tension) {
    tension = tension || 0.35;
    if (points.length < 2) return '';
    var d = '';
    for (var i = 0; i < points.length - 1; i++) {
      var p0 = points[Math.max(i - 1, 0)];
      var p1 = points[i];
      var p2 = points[i + 1];
      var p3 = points[Math.min(i + 2, points.length - 1)];

      var cp1x = p1.x + tension * (p2.x - p0.x) / 3;
      var cp1y = p1.y + tension * (p2.y - p0.y) / 3;
      var cp2x = p2.x - tension * (p3.x - p1.x) / 3;
      var cp2y = p2.y - tension * (p3.y - p1.y) / 3;

      d += 'C' + _silR(cp1x) + ',' + _silR(cp1y) + ' ' +
                 _silR(cp2x) + ',' + _silR(cp2y) + ' ' +
                 _silR(p2.x) + ',' + _silR(p2.y) + ' ';
    }
    return d;
  },

  /* ---- Path Builders ---- */

  /**
   * Build the upper body path (head down to crotch level).
   * Returns a closed path string.
   */
  buildTorsoPath: function(measurements) {
    var cx = this.cx;
    var pts = this.scalePoints(BODY_POINTS, measurements);

    // Right contour (top to bottom)
    var right = [];
    for (var i = 0; i < pts.length; i++) {
      right.push({ x: cx + pts[i].x, y: pts[i].y });
    }

    // Left contour (bottom to top, mirrored)
    var left = [];
    for (var j = pts.length - 1; j >= 0; j--) {
      left.push({ x: cx - pts[j].x, y: pts[j].y });
    }

    // Start at top center of head
    var d = 'M' + _silR(cx) + ',' + _silR(right[0].y) + ' ';
    // Curve to right side of head
    d += 'C' + _silR(cx + 8) + ',' + _silR(right[0].y - 2) + ' ' +
               _silR(right[0].x - 4) + ',' + _silR(right[0].y) + ' ' +
               _silR(right[0].x) + ',' + _silR(right[0].y) + ' ';
    // Down the right side
    d += this.smooth(right, 0.35);
    // Across the bottom (crotch area — slight curve inward)
    var lastR = right[right.length - 1];
    var firstL = left[0];
    d += 'C' + _silR(lastR.x - 4) + ',' + _silR(lastR.y + 6) + ' ' +
               _silR(firstL.x + 4) + ',' + _silR(firstL.y + 6) + ' ' +
               _silR(firstL.x) + ',' + _silR(firstL.y) + ' ';
    // Up the left side
    d += this.smooth(left, 0.35);
    // Back to top center
    var lastL = left[left.length - 1];
    d += 'C' + _silR(lastL.x + 4) + ',' + _silR(lastL.y) + ' ' +
               _silR(cx - 8) + ',' + _silR(lastL.y - 2) + ' ' +
               _silR(cx) + ',' + _silR(lastL.y) + ' ';
    d += 'Z';
    return d;
  },

  /**
   * Build a single leg path.
   * side: 'right' or 'left'
   * The leg starts at the crotch Y and the outer edge uses LEG_POINTS.
   * The inner edge runs close to the center line.
   */
  buildLegPath: function(measurements, side) {
    var cx = this.cx;
    var sign = (side === 'right') ? 1 : -1;

    // Use leg-specific measurement if available
    var legMeas = {};
    for (var mk in measurements) {
      legMeas[mk] = measurements[mk];
    }
    if (side === 'left' && measurements.coxa_dir) {
      legMeas.coxa_esq = measurements.coxa_dir;
    }

    var pts = this.scalePoints(LEG_POINTS, legMeas);

    // Outer edge (away from center)
    var outer = [];
    for (var i = 0; i < pts.length; i++) {
      outer.push({ x: cx + sign * pts[i].x, y: pts[i].y });
    }

    // Inner edge (close to center) — mirrors the outer but narrower
    // The inner thigh gap is about 15-20% of the outer width from center
    var inner = [];
    for (var j = pts.length - 1; j >= 0; j--) {
      var innerRatio = 0.15;
      // The foot has its own inner shape
      if (LEG_POINTS[j].part === 'foot') innerRatio = 0.3;
      if (LEG_POINTS[j].part === 'heel') innerRatio = 0.35;
      if (LEG_POINTS[j].part === 'ankle') innerRatio = 0.4;
      // Crotch inner should be near center
      if (LEG_POINTS[j].part === 'crotch') innerRatio = 0.05;

      var innerX = cx + sign * (pts[j].x * innerRatio);
      inner.push({ x: innerX, y: pts[j].y });
    }

    // Build path
    var d = 'M' + _silR(outer[0].x) + ',' + _silR(outer[0].y) + ' ';
    d += this.smooth(outer, 0.35);

    // Foot bottom curve
    var lastO = outer[outer.length - 1];
    var firstI = inner[0];
    d += 'C' + _silR(lastO.x) + ',' + _silR(lastO.y + 3) + ' ' +
               _silR(firstI.x) + ',' + _silR(firstI.y + 3) + ' ' +
               _silR(firstI.x) + ',' + _silR(firstI.y) + ' ';

    // Inner edge going up
    d += this.smooth(inner, 0.3);
    d += 'Z';
    return d;
  },

  /**
   * Build an arm path for one side.
   */
  buildArmPath: function(measurements, side) {
    var cx = this.cx;
    var sign = (side === 'right') ? 1 : -1;
    var yOff = this.yOff;

    // Get body points to know where the body edge is at each Y
    var bodyPts = this.scalePoints(BODY_POINTS, measurements);

    // Calculate arm outer and inner edges
    var outer = [];
    var inner = [];

    for (var i = 0; i < ARM_POINTS.length; i++) {
      var ap = ARM_POINTS[i];
      var width = ap.width;
      if (!ap.fixed && ap.key && measurements[ap.key]) {
        var ratio = parseFloat(measurements[ap.key]) / ap.refCm;
        ratio = Math.max(0.65, Math.min(ratio, 1.5));
        width = ap.width * ratio;
      }

      // Body edge at this Y (already includes yOff via scalePoints)
      var bodyX = this.interpX(bodyPts, ap.y + yOff);
      var innerX = bodyX + ap.offsetFromBody;
      var outerX = innerX + width;

      outer.push({ x: cx + sign * outerX, y: ap.y + yOff });
      inner.push({ x: cx + sign * innerX, y: ap.y + yOff });
    }

    // Inner reversed (going back up)
    var innerRev = [];
    for (var j = inner.length - 1; j >= 0; j--) {
      innerRev.push(inner[j]);
    }

    // Build path
    var d = 'M' + _silR(outer[0].x) + ',' + _silR(outer[0].y) + ' ';
    d += this.smooth(outer, 0.3);

    // Fingertip curve
    var lastO = outer[outer.length - 1];
    var firstI = innerRev[0];
    d += 'Q' + _silR((lastO.x + firstI.x) / 2) + ',' + _silR(lastO.y + 4) + ' ' +
               _silR(firstI.x) + ',' + _silR(firstI.y) + ' ';

    // Inner edge going up
    d += this.smooth(innerRev, 0.3);
    d += 'Z';
    return d;
  },

  /**
   * Build curly hair suggestion paths.
   * Returns an array of path strings (each is a separate strand/volume).
   */
  buildHairPaths: function() {
    var cx = this.cx;
    var y0 = this.yOff; // top of head Y
    var paths = [];

    // Main volume — right side flowing down
    var pr = 'M' + cx + ',' + (y0 - 4) + ' ';
    pr += 'C' + (cx + 15) + ',' + (y0 - 7) + ' ' +
               (cx + 28) + ',' + (y0 - 1) + ' ' +
               (cx + 30) + ',' + (y0 + 14) + ' ';
    pr += 'C' + (cx + 32) + ',' + (y0 + 28) + ' ' +
               (cx + 28) + ',' + (y0 + 42) + ' ' +
               (cx + 24) + ',' + (y0 + 54) + ' ';
    // Curl at end
    pr += 'C' + (cx + 22) + ',' + (y0 + 58) + ' ' +
               (cx + 26) + ',' + (y0 + 60) + ' ' +
               (cx + 23) + ',' + (y0 + 64) + ' ';
    paths.push(pr);

    // Main volume — left side
    var pl = 'M' + cx + ',' + (y0 - 4) + ' ';
    pl += 'C' + (cx - 15) + ',' + (y0 - 7) + ' ' +
               (cx - 28) + ',' + (y0 - 1) + ' ' +
               (cx - 30) + ',' + (y0 + 14) + ' ';
    pl += 'C' + (cx - 32) + ',' + (y0 + 28) + ' ' +
               (cx - 28) + ',' + (y0 + 42) + ' ' +
               (cx - 24) + ',' + (y0 + 54) + ' ';
    pl += 'C' + (cx - 22) + ',' + (y0 + 58) + ' ' +
               (cx - 26) + ',' + (y0 + 60) + ' ' +
               (cx - 23) + ',' + (y0 + 64) + ' ';
    paths.push(pl);

    // Inner strand — right
    var sr = 'M' + (cx + 26) + ',' + (y0 + 22) + ' ';
    sr += 'C' + (cx + 30) + ',' + (y0 + 30) + ' ' +
               (cx + 26) + ',' + (y0 + 38) + ' ' +
               (cx + 28) + ',' + (y0 + 46) + ' ';
    paths.push(sr);

    // Inner strand — left
    var sl = 'M' + (cx - 26) + ',' + (y0 + 22) + ' ';
    sl += 'C' + (cx - 30) + ',' + (y0 + 30) + ' ' +
               (cx - 26) + ',' + (y0 + 38) + ' ' +
               (cx - 28) + ',' + (y0 + 46) + ' ';
    paths.push(sl);

    // Crown wave
    var cw = 'M' + (cx - 18) + ',' + (y0) + ' ';
    cw += 'C' + (cx - 8) + ',' + (y0 - 8) + ' ' +
               (cx + 8) + ',' + (y0 - 8) + ' ' +
               (cx + 18) + ',' + (y0) + ' ';
    paths.push(cw);

    return paths;
  },

  /* ---- Guide Lines ---- */

  getGuideLines: function(measurements) {
    var guides = [
      { part: 'bust',       label: 'Busto',   key: 'busto' },
      { part: 'waist',      label: 'Cintura',  key: 'cintura' },
      { part: 'hip_widest', label: 'Quadril',  key: 'quadril' },
      { part: 'mid_thigh',  label: 'Coxa',     key: 'coxa_esq' }
    ];

    var result = [];
    var allPts = BODY_POINTS.concat(LEG_POINTS);

    for (var i = 0; i < guides.length; i++) {
      var g = guides[i];
      for (var j = 0; j < allPts.length; j++) {
        if (allPts[j].part === g.part) {
          var val = measurements[g.key] ? parseFloat(measurements[g.key]) : null;
          result.push({
            y: allPts[j].y + this.yOff,
            label: g.label,
            value: val ? (val + 'cm') : ''
          });
          break;
        }
      }
    }
    return result;
  },

  /* ---- Full SVG Builder ---- */

  buildSVG: function(currentMeas, targetMeas, showLabels) {
    var vw = 200;
    var vh = 440;

    var svg = '<svg class="silhouette-svg" viewBox="0 0 ' + vw + ' ' + vh +
              '" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">';

    // --- Defs ---
    svg += '<defs>';
    // Background radial glow
    svg += '<radialGradient id="sil-glow" cx="50%" cy="42%" r="48%">';
    svg += '<stop offset="0%" stop-color="#DC143C" stop-opacity="0.07"/>';
    svg += '<stop offset="60%" stop-color="#DC143C" stop-opacity="0.02"/>';
    svg += '<stop offset="100%" stop-color="#DC143C" stop-opacity="0"/>';
    svg += '</radialGradient>';
    // Soft blur for glow layer
    svg += '<filter id="sil-blur" x="-30%" y="-10%" width="160%" height="120%">';
    svg += '<feGaussianBlur in="SourceGraphic" stdDeviation="2"/>';
    svg += '</filter>';
    svg += '</defs>';

    // Background glow ellipse
    svg += '<ellipse cx="100" cy="190" rx="75" ry="175" fill="url(#sil-glow)"/>';

    // === TARGET SILHOUETTE (dashed, behind) ===
    if (targetMeas) {
      svg += this._buildBodyGroup(targetMeas, {
        fill: 'none',
        stroke: 'rgba(76,175,80,0.6)',
        strokeWidth: '0.8',
        dash: '4,3',
        armFill: 'none',
        armStroke: 'rgba(76,175,80,0.5)',
        armStrokeWidth: '0.8',
        armDash: '4,3',
        showHair: false,
        showGlow: false
      });
    }

    // === CURRENT SILHOUETTE ===
    svg += this._buildBodyGroup(currentMeas, {
      fill: 'rgba(220, 20, 60, 0.12)',
      stroke: '#DC143C',
      strokeWidth: '1.4',
      dash: null,
      armFill: 'rgba(220, 20, 60, 0.09)',
      armStroke: '#DC143C',
      armStrokeWidth: '1.1',
      armDash: null,
      showHair: true,
      showGlow: true
    });

    // === GUIDE LINES ===
    if (showLabels) {
      var guides = this.getGuideLines(currentMeas);
      for (var g = 0; g < guides.length; g++) {
        var gy = guides[g].y;
        svg += '<line x1="15" y1="' + _silR(gy) + '" x2="185" y2="' + _silR(gy) +
               '" stroke="rgba(76,175,80,0.15)" stroke-width="0.5" stroke-dasharray="2,4"/>';
        if (guides[g].value) {
          svg += '<text x="186" y="' + _silR(gy - 2) +
                 '" fill="rgba(76,175,80,0.5)" font-size="6.5" font-family="Inter,sans-serif" text-anchor="end">' +
                 guides[g].label + ' ' + guides[g].value + '</text>';
        }
      }
    }

    svg += '</svg>';
    return svg;
  },

  /**
   * Internal: build all body part paths as a <g> group with given style options.
   */
  _buildBodyGroup: function(meas, opts) {
    var svg = '';

    var torso = this.buildTorsoPath(meas);
    var legR  = this.buildLegPath(meas, 'right');
    var legL  = this.buildLegPath(meas, 'left');
    var armR  = this.buildArmPath(meas, 'right');
    var armL  = this.buildArmPath(meas, 'left');

    // Soft glow behind current body
    if (opts.showGlow) {
      svg += '<g filter="url(#sil-blur)" opacity="0.35">';
      svg += '<path d="' + torso + '" fill="rgba(220,20,60,0.2)" stroke="none"/>';
      svg += '<path d="' + legR + '" fill="rgba(220,20,60,0.18)" stroke="none"/>';
      svg += '<path d="' + legL + '" fill="rgba(220,20,60,0.18)" stroke="none"/>';
      svg += '</g>';
    }

    // Stroke attrs
    var sAttr = ' stroke="' + opts.stroke + '" stroke-width="' + opts.strokeWidth + '"';
    if (opts.dash) sAttr += ' stroke-dasharray="' + opts.dash + '"';
    sAttr += ' stroke-linejoin="round" stroke-linecap="round"';

    var aAttr = ' stroke="' + opts.armStroke + '" stroke-width="' + opts.armStrokeWidth + '"';
    if (opts.armDash) aAttr += ' stroke-dasharray="' + opts.armDash + '"';
    aAttr += ' stroke-linejoin="round" stroke-linecap="round"';

    // Arms (behind torso)
    svg += '<path d="' + armR + '" fill="' + opts.armFill + '"' + aAttr + '/>';
    svg += '<path d="' + armL + '" fill="' + opts.armFill + '"' + aAttr + '/>';

    // Torso
    svg += '<path d="' + torso + '" fill="' + opts.fill + '"' + sAttr + '/>';

    // Legs
    svg += '<path d="' + legR + '" fill="' + opts.fill + '"' + sAttr + '/>';
    svg += '<path d="' + legL + '" fill="' + opts.fill + '"' + sAttr + '/>';

    // Hair
    if (opts.showHair) {
      var hairPaths = this.buildHairPaths();
      for (var h = 0; h < hairPaths.length; h++) {
        svg += '<path d="' + hairPaths[h] + '" fill="none" stroke="rgba(220,20,60,0.4)" stroke-width="1.3" stroke-linecap="round"/>';
      }
    }

    return svg;
  },

  /* ---- HTML Render ---- */

  render: function() {
    var userMeas = this.getMeasurements();
    var hasMeas = userMeas !== null;
    var currentMeas = hasMeas ? userMeas : DEFAULT_MEASUREMENTS;
    var targetMeas = this.getTargetMeasurements();

    var svg = this.buildSVG(currentMeas, targetMeas, hasMeas);

    var html = '<div class="silhouette-container" id="silhouette-widget" role="button" tabindex="0" aria-label="Ver medidas corporais">';

    html += '<div class="silhouette-wrap">';
    html += svg;

    if (!hasMeas) {
      html += '<div class="silhouette-overlay">';
      html += '<span class="silhouette-overlay__text">Toque pra inserir<br>suas medidas</span>';
      html += '</div>';
    }
    html += '</div>';

    if (hasMeas) {
      html += '<div class="silhouette-legend">';
      html += '<div class="silhouette-legend__item">';
      html += '<span class="silhouette-legend__swatch silhouette-legend__swatch--current"></span>';
      html += '<span>Voce agora</span>';
      html += '</div>';
      html += '<div class="silhouette-legend__item">';
      html += '<span class="silhouette-legend__swatch silhouette-legend__swatch--target"></span>';
      html += '<span>Meta da fase</span>';
      html += '</div>';
      html += '</div>';
    }

    html += '<span class="silhouette-link">ver medidas</span>';
    html += '</div>';
    return html;
  },

  /* ---- Event Binding ---- */

  bind: function() {
    var widget = document.getElementById('silhouette-widget');
    if (!widget) return;

    widget.addEventListener('click', function() {
      if (typeof Router !== 'undefined') {
        Router.navigate('corpo');
      }
    });

    widget.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (typeof Router !== 'undefined') {
          Router.navigate('corpo');
        }
      }
    });
  }

};

/* ---- Utility: round to 1 decimal ---- */
function _silR(n) {
  return (Math.round(n * 10) / 10).toString();
}
