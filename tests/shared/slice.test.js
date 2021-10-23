const mySlice = require('../../src/shared/slice');

test('slice should return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySlice(array, 2, 4)).toEqual([3, 4]);
});

test('slice should return a shallow copy if start is undefined', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySlice(array)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('slice should return a shallow copy of a portion of an array from the end of array if start index is negative', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySlice(array, -2)).toEqual([5, 6]);
});
