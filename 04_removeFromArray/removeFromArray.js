const removeFromArray = function() {
  const args = [...arguments];
  const array = args[0];
  const targets = args.slice(1);

  return array.filter(item => !targets.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
