const omit = require('../../src/objects/omit');

test('omit should create an object composed of the own and inherited enumerable property paths of object that are not omitted', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const keys = ['b', 'c', 'd'];
  expect(omit(object, keys)).toEqual({ a: 1, e: 5 });
});
