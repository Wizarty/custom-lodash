const myLength = require("../shared/length");

const compact = (array) => {
  const trueArr = [];
  const length = myLength(array);
  let falsy = false;
  for (let i = 0; i < length; i += 1) {
    falsy = Boolean(array[i]);
    if (falsy === true) {
      const trueArrLength = myLength(trueArr);
      trueArr[trueArrLength] = array[i];
    }
  }
  return trueArr;
};

module.exports = compact;
