const reverseString = function (string) {
  let reverseString  = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string.at(i);
  }
  return reverseString
  // better
  // return string.split("").reverse.join;
};


// Do not edit below this line
module.exports = reverseString;
