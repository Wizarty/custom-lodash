const myLength = require("./length");
const myPush = require("./push");

function mySlice(array, start, end) {
  const data = array;
  const length = myLength(array);
  let stop = length - 1;
  const resultArr = [];
  if (start === undefined) {
    return data;
  }
  if (start < 0) {
    start += length;
  }
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }
  for (let index = start; index <= stop; index += 1) {
    const element = data[index];
    myPush(resultArr, element);
  }
  return resultArr;
}

module.exports = mySlice;
