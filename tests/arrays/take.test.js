const take = require('../../src/arrays/take');

test('take should creates a slice of array with num elements taken from the beginning.', () => {
  const array = [1, 2, 3];
  expect(take(array, 2)).toEqual([1, 2]);
});

test('take should return the original array if num is more, than array length', () => {
  const array = [1, 2, 3];
  expect(take(array, 5)).toEqual([1, 2, 3]);
});

test('take should return array with the first argument if num is not provided', () => {
  const array = [1, 2, 3];
  expect(take(array)).toEqual([1]);
});
