var test = require('tape'),
  ops = require('./');

test('alpha', function(t) {
  t.equal(ops.alpha([0, 0, 0, 0]), 0);
  t.equal(ops.alpha([0, 0, 0, 1]), 1);
  t.end();
});

test('saturation', function(t) {
  t.equal(ops.saturation([0, 0, 0, 0]), '0%');
  t.equal(ops.saturation([0, 0, 0, 1]), '0%');
  t.end();
});

test('lightness', function(t) {
  t.equal(ops.lightness([0, 0, 0, 0]), '0%');
  t.equal(ops.lightness([0, 0, 0, 1]), '0%');
  t.end();
});

test('hue', function(t) {
  t.equal(ops.hue([0, 0, 0, 0]), 0);
  t.equal(ops.hue([0, 0, 255, 1]), 240);
  t.end();
});

test('lighten', function(t) {
  t.deepEqual(ops.lighten([0, 0, 0, 0], 10), [25.5, 25.5, 25.5, 0]);
  t.deepEqual(ops.lighten([0, 0, 0, 0], 100), [255, 255, 255, 0]);
  t.deepEqual(ops.lighten([0, 0, 0, 0], -10), [0, 0, 0, 0]);
  t.deepEqual(ops.lighten([255, 0, 0, 0], -100), [0, 0, 0, 0]);
  t.end();
});

test('saturate', function(t) {
  t.deepEqual(ops.saturate([0, 0, 0, 0], 10), [0, 0, 0, 0]);
  t.deepEqual(ops.saturate([0, 0, 0, 0], 100), [0, 0, 0 ,0]);
  t.deepEqual(ops.saturate([100, 10, 10, 1], 10), [105.5, 4.500000000000012, 4.500000000000012, 1]);
  t.deepEqual(ops.saturate([100, 10, 10, 1], -10), [ 94.49999999999999, 15.500000000000016, 15.500000000000016, 1 ]);
  t.end();
});

test('fade', function(t) {
  t.deepEqual(ops.fade([0, 0, 0, 0], 10), [0, 0, 0, 0.1]);
  t.deepEqual(ops.fade([0, 0, 0, 0], 100), [0, 0, 0, 1]);
  t.deepEqual(ops.fade([0, 0, 0, 0], -10), [0, 0, 0, 0]);
  t.deepEqual(ops.fade([0, 0, 0, 0], -100), [0, 0, 0, 0]);
  t.end();
});

test('rgb', function(t) {
  t.deepEqual(ops.rgb(0, 0, 0), [0, 0, 0, 1]);
  t.deepEqual(ops.rgb(0, 20, 0), [0, 20, 0, 1]);
  t.end();
});

test('hsl', function(t) {
  t.deepEqual(ops.hsl(0, 0, 0), [0, 0, 0, 1]);
  t.deepEqual(ops.hsl(0, 20, 0), [0, 0, 0, 1]);
  t.end();
});

test('spin', function(t) {
  t.deepEqual(ops.spin([0, 0, 0, 0], 10), [0, 0, 0, 0]);
  t.deepEqual(ops.spin([255, 0, 0, 0], 10), [255, 42.5, 0, 0]);
  t.end();
});
