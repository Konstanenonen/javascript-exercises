const ftoc = function(farenheit) {
  return Number(((farenheit - 32) * (5/9)).toFixed(1));
};

const ctof = function(celcius) {
  return Number((celcius * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
