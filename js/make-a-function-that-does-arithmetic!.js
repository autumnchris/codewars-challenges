// Make a function that does arithmetic!

/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".
*/

// Solved by doing the arithmetic inside of a switch statement

function arithmetic(a, b, operator){

  var result = 0;

  switch (operator) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      result = a / b;
      break;
    default:
      result;
  }

  return result;
}

arithmetic(1, 2, 'add');

// Solved by doing the arithmetic outside of a switch statement

function arithmetic(a, b, operator){

  switch (operator) {
    case 'add':
      operator = '+';
      break;
    case 'subtract':
      operator = '-';
      break;
    case 'multiply':
      operator = '*';
      break;
    case 'divide':
      operator = '/';
      break;
  }

  var result = eval(a + operator + b);

  return result;
}

arithmetic(1, 2, 'add');

// Solved using an object literal

function arithmetic(a, b, operator){

  var arithmeticOperators = {
    'add': '+',
    'subtract': '-',
    'multiply': '*',
    'divide': '/'
  };

  var result = eval(a + arithmeticOperators[operator] + b);

  return result;
}

arithmetic(1, 2, 'add');
