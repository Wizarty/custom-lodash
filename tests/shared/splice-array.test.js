const mySplicedArray = require('../../src/shared/splice-array');

test('splice-array should return a modified array with provided start index and number of removed items', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySplicedArray(array, 2, 2)).toEqual([1, 2, 5, 6]);
});

test('splice-array should return an original array if number of removed items is undefined', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySplicedArray(array)).toEqual([1, 2, 3, 4, 5, 6]);
});
