// Formatting decimal places #0

/*
Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
*/

function twoDecimalPlaces(n) {

  var rounded = Math.pow(10, 2);

  return Math.round(n * rounded) / rounded;
}

twoDecimalPlaces(4.659725356);
