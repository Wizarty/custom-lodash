const myLength = require("./length");

function myPush(array, value) {
  const length = myLength(array);
  const newArr = array;
  newArr[length] = value;
  return newArr;
}

module.exports = myPush;
