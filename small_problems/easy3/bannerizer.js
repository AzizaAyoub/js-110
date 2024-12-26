// Write a function that will take a short line of text, and write it to the console log within a box.

// Examples:

// will log on the console:
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window.

*/

function logInBox(string) {
  let topSide = '+' + '-'.repeat(1+ string.length + 1) + '+';
  let leftSide1 = '|' + ' '.repeat(string.length + 2) + '|'
  let leftSide3 = '|' + ' '.repeat(string.length + 2) + '|';
  let bottomSide = '+' + '-'.repeat(1+ string.length + 1) + '+';

  console.log(topSide);
  console.log(leftSide1);
  console.log('| ' + string + ' |');
  console.log(leftSide3)
  console.log(bottomSide);
}

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox(''));
console.log(logInBox('Aziza Ayoub!'))