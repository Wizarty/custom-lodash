const myPush = require("./push");

function mySpliceRemovedItems(array, start, count) {
  const { length } = array;
  const removedItems = [];
  let newCount = count;
  if (newCount > 0) {
    newCount -= 1;
  } else {
    return [];
  }
  for (let i = 0; i < length; i += 1) {
    if (((i <= start + newCount && i >= start) || (i <= start && i >= start + newCount))) {
      myPush(removedItems, array[i]);
    }
  }
  return removedItems;
}

module.exports = mySpliceRemovedItems;
