/*

Double Char (Part 1)

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

P:
1. Iterate through input string
2. Double every character
3. Return new string

- Inside the `repeater` function param: `string`
  - Convert string to an array of chars, assign it to `charsArr`

  - Iterate through `charsArr`
  - Doubles every character of `charsArr` and assign it to `newString`
  - Convert the array back to string and assign it to `newString`

- Return `newString`
*/
const log = console.log;

function repeater(string) {
  let charsArr = string.split('');

  let newString = charsArr.map(char => {
    return char.repeat(2);
  }).join('');

  return newString;
}

log(repeater('Hello'));        // "HHeelllloo"
log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
log(repeater(''));             // ""

// Other ways:
/*
A:
1. Iterate through the input string
2. Double each character of input string
  ---- Create repeater function with one param a string
    - Initialize newString to an empty string
    - Iterate through the input string
      - Double each current character of input string
      - Assign the result to newString
    - Return newString
*/
const repeater = function(string) {
  let newString = '';
  if (string === '') return string;
  for (let idx = 0; idx < string.length; idx += 1) {
    newString += string[idx] + string[idx];
  }
  return newString;
}
// Second way:
const repeaterr = function(string) {
  if (string === '') return string;
  return [...string].map(char => {
    return char + char;
  }).join('');
}
// Third way:
const repeat = function(string) {
  let newString = '';
  if (string === '') return string;
  [...string].forEach(char => {
    newString += char + char;
  });
  return newString;
}
log(repeater('Hello'));        // "HHeelllloo"
log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
log(repeater(''));             // ""
