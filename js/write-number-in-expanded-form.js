// Write Number in Expanded Form

/*
You will be given a number and you will need to return it as a string in Expanded Form.

NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  var i,
  factor = 1;

  num = num.toString().split('').map(Number).reverse();

  for (i = 1; i < num.length; i++) {
    factor *= 10;
    num[i] *= factor;
  }

  function noZeros(value) {
    return value !== 0;
  }
  num = num.filter(noZeros).reverse().join(' + ');
  return num;
}

expandedForm(70304);
