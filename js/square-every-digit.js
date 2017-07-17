// Square Every Digit

/*
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out.

Note: The function accepts an integer and returns an integer
*/

// Solved by multiplying the digit times itself

function squareDigits(num){

  num = num.toString().split('').map(Number);

  for (var i = 0; i < num.length; i++) {
    num[i] *= num[i];
    var result = num.join('');
    result = Number(result);
  }

  return result;
}

squareDigits(9119);

// Solved by using Math.pow()

function squareDigits(num){

  num = num.toString().split('').map(Number);

  for (var i = 0; i < num.length; i++) {
    num[i] = Math.pow(num[i], 2);
    var result = num.join('');
    result = Number(result);
  }

  return result;
}

squareDigits(9119);
