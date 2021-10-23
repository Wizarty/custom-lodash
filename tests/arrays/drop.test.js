const drop = require('../../src/arrays/drop');

test('drop should create a slice of array with n elements dropped from the beginning', () => {
  const array = [1, 2, 3];
  expect(drop(array, 2)).toEqual([3]);
});

test('drop should return an empty array if n is more, than array length', () => {
  const array = [1, 2, 3];
  expect(drop(array, 5)).toEqual([]);
});

test('drop should return the original array if n is equal to zero', () => {
  const array = [1, 2, 3];
  expect(drop(array, 0)).toEqual([1, 2, 3]);
});

test('drop should return the array without the first argument if n is not provided', () => {
  const array = [1, 2, 3];
  expect(drop(array)).toEqual([2, 3]);
});
