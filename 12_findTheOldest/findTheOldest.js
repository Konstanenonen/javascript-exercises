const findTheOldest = function(array) {
  return array.reduce((previousValue, currentValue) => {
    if (currentValue.yearOfDeath === undefined) {
      const currentValueAge = new Date().getFullYear() - currentValue.yearOfBirth;
      const previousValueAge = previousValue.yearOfDeath - previousValue.yearOfBirth;
      return (currentValueAge > previousValueAge) ? currentValue : previousValue;
    } else {
      const currentValueAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
      if (previousValue.yearOfDeath === undefined) {
        const previousValueAge = new Date().getFullYear() - previousValue.yearOfBirth;
        return (currentValueAge > previousValueAge) ? currentValue : previousValue;
      } else {
        const previousValueAge = previousValue.yearOfDeath - previousValue.yearOfBirth;
        return (currentValueAge > previousValueAge) ? currentValue : previousValue;
      }
    } 
  })
};

// Do not edit below this line
module.exports = findTheOldest;
