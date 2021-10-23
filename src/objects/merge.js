function merge(object, other) {
  for (const key in other) {
    object[key] = other[key];
  }
  return object;
}

module.exports = merge;
