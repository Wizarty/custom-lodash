function zip(...arrays) {
  const newArr = [];
  let firstArr = [];
  let secondArr = [];
  let length = 0;
  while (arrays[length] !== undefined) {
    length++;
  }
  for (let i = 0; i < length; i++) {
    firstArr = [...firstArr, arrays[i][0]];
  }
  for (let i = 0; i < length; i++) {
    secondArr = [...secondArr, arrays[i][1]];
  }
  return [...newArr, firstArr, secondArr];
}

module.exports = zip;
