// Sum of positive

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

function positiveSum(arr) {
  var i,
  sum = 0;

  for (i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

positiveSum([1,2,3,4,5]);
