var test = require('tape'),
  ops = require('./');

test('alpha', function(t) {
  t.equal(ops.alpha([0, 0, 0, 0]), 0);
  t.equal(ops.alpha([0, 0, 0, 1]), 1);
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
  t.end();
});

test('darken', function(t) {
  t.deepEqual(ops.darken([0, 0, 0, 0], 10), [0, 0, 0, 0]);
  t.deepEqual(ops.darken([255, 0, 0, 0], 100), [0, 0, 0, 0]);
  t.end();
});

test('desaturate', function(t) {
  t.deepEqual(ops.desaturate([0, 0, 0, 0], 10), [0, 0, 0, 0]);
  t.deepEqual(ops.desaturate([255, 0, 0, 0], 100), [127.5, 127.5, 127.5, 0]);
  t.end();
});

test('spin', function(t) {
  t.deepEqual(ops.spin([0, 0, 0, 0], 10), [0, 0, 0, 0]);
  t.deepEqual(ops.spin([255, 0, 0, 0], 10), [255, 42.5, 0, 0]);
  t.end();
});
