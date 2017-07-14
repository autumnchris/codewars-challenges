// Descending Order

/*
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){

  n = n.toString().split('').map(Number).sort().reverse();
  var result = n.join('');
  result = Number(result);

  return result;
}

descendingOrder(145263);
