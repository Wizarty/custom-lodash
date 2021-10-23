const myPush = require("./push");

function mySplicedArray(array, start, count) {
  const { length } = array;
  const newArray = [];
  let newCount = count;
  if (newCount > 0) {
    newCount -= 1;
  } else {
    return array;
  }
  for (let i = 0; i < length; i += 1) {
    if (!((i <= start + newCount && i >= start) || (i <= start && i >= start + newCount))) {
      myPush(newArray, array[i]);
    }
  }
  return newArray;
}

module.exports = mySplicedArray;
