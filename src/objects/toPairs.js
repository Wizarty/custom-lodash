const myLength = require("../shared/length");
const myPush = require("../shared/push");

const toPairs = (obj) => {
  const newArr = [];
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.myLength; i += 1) {
    newArr.myPush([keys[i], obj[keys[i]]]);
  }
  return newArr;
};

module.exports = { toPairs };
