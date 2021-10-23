const myLength = require("../shared/length");
const myPush = require("../shared/push");

const filter = (array, callback) => {
  const result = [];
  const length = myLength(array);
  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    if (callback(value, index, array)) {
      myPush(result, value);
    }
  }
  return result;
};

module.exports = filter;
