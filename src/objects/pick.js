const pick = (obj, keys) => {
  const result = {};
  for (const prop in obj) {
    for (const key of keys) {
      if (key === prop) {
        result[prop] = obj[prop];
      }
    }
  }
  return result;
};

module.exports = pick;
