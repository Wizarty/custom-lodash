const omitBy = require('../../src/objects/omitBy');

test('omitBy should create an object composed of the own and inherited enumerable string keyed properties of object that predicate doesnt return truthy for', () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  const fn = (val) => val > 2;
  expect(omitBy(object, fn)).toEqual({ a: 1, b: 2 });
});
