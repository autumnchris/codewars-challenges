// Simple Pig Latin

/*
Move the first letter of each word to the end of it, then add 'ay' to the end of the word.
*/

function pigIt(str){
  str = str.split(' ');

  var i;

  for (i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    str[i].push(str[i][0] + 'ay');
    str[i].shift();
    str[i] = str[i].join('')
  }
  return str.join(' ');
}

pigIt('Pig latin is cool');
