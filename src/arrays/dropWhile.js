const myLength = require("../shared/length");
const mySlice = require("../shared/slice");

function dropWhile(array, predicate) {
  const l = myLength(array); let
    index = 0;
  for (let i = 0; i < l; i++) {
    if (!predicate(array[i], i, array)) {
      index = i;
      break;
    }
  }
  if (index === 0) return [];
  return mySlice(array, 0, index);
}

module.exports = dropWhile;
