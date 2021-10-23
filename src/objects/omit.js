/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const omit = (obj, keys) => {
  const result = obj;
  for (const prop in result) {
    for (const key in keys) {
      if (keys[key] === prop) {
        delete result[prop];
      }
    }
  }
  return result;
};

module.exports = omit;
