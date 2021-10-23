const chunk = require('../../src/arrays/chunk');

test('chunk should create an array of elements split into groups the length of size', () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  expect(chunk(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
});
