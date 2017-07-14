// Vowel Count

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.
*/

function getCount(str) {
  var vowelsCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/g)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

getCount('abracadabra');
