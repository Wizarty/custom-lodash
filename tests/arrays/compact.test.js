const compact = require('../../src/arrays/compact');

test('compact should create an array with all falsey values removed', () => {
  const array = [0, 1, false, 2, '', 3];
  expect(compact(array)).toEqual([1, 2, 3]);
});
