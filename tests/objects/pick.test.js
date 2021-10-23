const pick = require('../../src/objects/pick');

test('pick should create an object composed of the picked object properties', () => {
  const object = { a: 1, b: '2', c: 3 };
  expect(pick(object, ['a', 'c'])).toEqual({ a: 1, c: 3 });
});
