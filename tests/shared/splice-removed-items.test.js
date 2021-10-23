const mySpliceRemovedItems = require('../../src/shared/splice-removed-items');

test('splice-array should return an array with removed items', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySpliceRemovedItems(array, 2, 2)).toEqual([3, 4]);
});

test('splice-array should return an empty array if number of removed items is undefined', () => {
  const array = [1, 2, 3, 4, 5, 6];
  expect(mySpliceRemovedItems(array)).toEqual([]);
});
