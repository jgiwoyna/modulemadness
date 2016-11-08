function conversion (num) {
  return num.toLocaleString("en", {style: 'currency', currency: 'USD'});
}

module.exports = conversion;
