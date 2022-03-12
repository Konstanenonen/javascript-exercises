const palindromes = function (string) {
  filteredString = string
    .toLowerCase()
    .match(/\w/g)
    .join('');

  reversedString = filteredString
    .split('')
    .reverse()
    .join('');

  return reversedString === filteredString;
};

// Do not edit below this line
module.exports = palindromes;
