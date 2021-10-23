function myLength(array) {
  let length = 0;
  while (array[length] !== undefined) {
    length += 1;
  }
  return length;
}

module.exports = myLength;
