const leapYears = function (year) {
  if (!Number.isInteger(year) || !(year > 0)) {
    return "ERROR";
  }
  const divisbleByFour = year % 4 === 0;
  const divisbleByOneHundred = year % 100 === 0;
  const divsibleByFourHundred = year % 400 === 0;
  return divisbleByFour
    ? divisbleByOneHundred
      ? divsibleByFourHundred
        ? true
        : false
      : true
    : false;
  //return (divisbleByFour && !divisbleByOneHundred) || divsibleByFourHundred;
};

// Do not edit below this line
module.exports = leapYears;
