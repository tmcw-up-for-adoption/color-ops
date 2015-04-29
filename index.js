var colorFunctions = {
  /**
   * Convert a color specified as an RGBA array
   * into an HSL object.
   *
   * @param {Array} color rgba color
   * @returns {Object} hsl representation of that color
   */
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
  /**
   * Given an r, g, b color, return a 4-element RGBA array
   * @param {number} r red
   * @param {number} g green
   * @param {number} b blue
   * @returns {Array} rgba array
   */
  rgb: function(r, g, b) {
    return this.rgba(r, g, b, 1.0);
  },
  /**
   * Given an rgba color as number-like objects, return that array
   * with numbers if possible, and null otherwise
   *
   * @param {number} r red
   * @param {number} g green
   * @param {number} b blue
   * @param {number} a alpha
   * @returns {Array} rgba array
   */
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
  /**
   * Given an HSL color as components, return an RGBA array
   *
   * @param {number} h hue
   * @param {number} s saturation
   * @param {number} l luminosity
   * @param {number} a alpha
   * @returns {Array} rgba color
   */
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
    return Math.round(this.toHSL(color).s * 100);
  },
  /**
   * Get the lightness component of a color as a string
   * representing percentage
   *
   * @param {Color} color
   * @returns {String} lightness
   */
  lightness: function(color) {
    return Math.round(this.toHSL(color).l * 100);
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
  },
  /**
   * Mix two colors.
   * @param {Color} color1
   * @param {Color} color2
   * @param {Number} degrees
   * @returns {Color} output
   */
  mix: function(color1, color2, amount) {
    var p = amount / 100.0;
    var w = p * 2 - 1;
    var hsl1 = this.toHSL(color1);
    var hsl2 = this.toHSL(color2);
    var a = hsl1.a - hsl2.a;

    var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
    var w2 = 1 - w1;

    var rgb = [
        color1[0] * w1 + color2[0] * w2,
        color1[1] * w1 + color2[1] * w2,
        color1[2] * w1 + color2[2] * w2
    ];

    var alpha = color1[3] * p + color2[3] * (1 - p);
    rgb[3] = alpha;
    return rgb;
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
