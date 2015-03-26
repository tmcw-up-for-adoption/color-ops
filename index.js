var colorFunctions = {
  toHSL: function(color) {
    var r = color[0] / 255,
    g = color[1] / 255,
    b = color[2] / 255,
    a = color[3];

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2, d = max - min;

    if (max === min) {
      h = s = 0;
    } else {
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s, l: l, a: a };
  },
  rgb: function(r, g, b) {
    return this.rgba(r, g, b, 1.0);
  },
  rgba: function(r, g, b, a) {
    var rgb = [r, g, b].map(function (c) { return number(c); });
    a = number(a);
    if (rgb.some(isNaN) || isNaN(a)) return null;
    rgb.push(a);
    return rgb;
  },
  hsl: function(h, s, l) {
    return this.hsla(h, s, l, 1.0);
  },
  hsla: function(h, s, l, a) {
    h = (number(h) % 360) / 360;
    s = number(s); l = number(l); a = number(a);
    if ([h, s, l, a].some(isNaN)) return null;

    var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s,
    m1 = l * 2 - m2;

    return this.rgba(hue(h + 1 / 3) * 255,
      hue(h) * 255,
      hue(h - 1 / 3) * 255,
      a);

    function hue(h) {
      h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
      if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
      else if (h * 2 < 1) return m2;
      else if (h * 3 < 2) return m1 + (m2 - m1) * (2 / 3 - h) * 6;
      else return m1;
    }
  },
  /**
   * Get the hue component of a color
   *
   * @param {Color} color
   * @returns {Number} hue
   */
  hue: function(color) {
    return Math.round(this.toHSL(color).h);
  },
  /**
   * Get the saturation component of a color as a string
   * representing percentage
   *
   * @param {Color} color
   * @returns {String} saturation
   */
  saturation: function(color) {
    return Math.round(this.toHSL(color).s * 100) + '%';
  },
  /**
   * Get the lightness component of a color as a string
   * representing percentage
   *
   * @param {Color} color
   * @returns {String} lightness
   */
  lightness: function(color) {
    return Math.round(this.toHSL(color).l * 100) + '%';
  },
  /**
   * Get the alpha component of a color
   *
   * @param {Array} color
   * @returns {Number} alpha
   */
  alpha: function(color) {
    return this.toHSL(color).a;
  },
  /**
   * Saturate or desaturate a color by a given amount
   *
   * @param {Color} color
   * @param {Number} amount
   * @returns {Color} color
   */
  saturate: function(color, amount) {
    var hsl = this.toHSL(color);

    hsl.s += amount / 100;
    hsl.s = clamp(hsl.s);
    return hsla(hsl);
  },
  /**
   * Lighten or darken a color by a given amount
   *
   * @param {Color} color
   * @param {Number} amount
   * @returns {Color} color
   */
  lighten: function(color, amount) {
    var hsl = this.toHSL(color);

    hsl.l += amount / 100;
    hsl.l = clamp(hsl.l);
    return hsla(hsl);
  },
  /**
   * Fade a color by a given amount
   *
   * @param {Color} color
   * @param {Number} amount
   * @returns {Color} color
   */
  fade: function(color, amount) {
    var hsl = this.toHSL(color);

    hsl.a += amount / 100;
    hsl.a = clamp(hsl.a);
    return hsla(hsl);
  },
  /**
   * Rotate the hue of a color by an amount given in decimal degrees.
   * @param {Color} color
   * @param {Number} degrees
   * @returns {Color} output
   */
  spin: function(color, amount) {
    var hsl = this.toHSL(color);
    var hue = (hsl.h + amount) % 360;

    hsl.h = hue < 0 ? 360 + hue : hue;
    return hsla(hsl);
  }
};

function hsla(h) {
  return colorFunctions.hsla(h.h, h.s, h.l, h.a);
}

function number(n) {
  if (typeof n === 'number') return n;
  else return NaN;
}

function clamp(val) {
  return Math.min(1, Math.max(0, val));
}

module.exports = colorFunctions;
