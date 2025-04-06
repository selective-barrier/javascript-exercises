const sumAll = function (firstInt, secondInt) {
  if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
    return "ERROR";
  } else {
    if (!(firstInt > 0) || !(secondInt > 0)) {
      return "ERROR";
    }
  }
  let start,
    end,
    sum = 0;
  if (firstInt > secondInt) {
    start = secondInt;
    end = firstInt;
  } else {
    start = firstInt;
    end = secondInt;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
