const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((prev, cur) => (prev + cur),0);
};

const multiply = function(array) {
  return array.reduce((prev, cur) => (prev * cur),1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(number) {
  if (number === 0) return 1;

  let factorial = number;
	for (let i = number - 1; i >= 1; i--) {
    factorial = i * factorial;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
