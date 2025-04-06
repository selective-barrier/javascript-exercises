const convertToCelsius = function(fahrenheit) {
  if (!((typeof fahrenheit === "number") && isFinite(fahrenheit))) {
    return "ERROR";
  }
  return Math.round(((fahrenheit - 32) / (9 / 5)) * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  if (!((typeof celsius === "number") && isFinite(celsius))) {
    return "ERROR";
  }
  return Math.round((celsius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
