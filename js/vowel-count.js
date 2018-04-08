// Vowel Count

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
  var i,
  vowelsCount = 0;

  for (i = 0; i < str.length; i++) {

    if (str[i].match(/[aeiou]/g)) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}

getCount('abracadabra');
