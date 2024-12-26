/*
Double Char (Part 2)

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.


*/

/*
P:
1. Iterate through input string
2. Double non-vowel characters 
3. Return new string

- Inside the `repeater` function param: `string`
  - Convert string to an array of chars, assign it to `charsArr`
  - Initialize `consonants` to every consonant chars
  - Initialize newString to empty strirng

  - Iterate through `charsArr`
    - If char is include in consonants, doubles this char
    - Else assign char to newString without doubling
  - Convert the array back to string and assign it to `newString`

- Return `newString`
*/

const log = console.log;

function doubleConsonants(string) {
  let consonants = [
    'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 
    'q', 'r', 's', 't', 'v', 'y', 'x', 'z', 'w'
  ];

  let charsArr = string.split('');
  let newString = '';

  charsArr.map(char => {
    if (consonants.includes(char)) {
      newString += char.repeat(2);
    } else {
      newString += char;
    }
  }).join('');

  return newString;
}


log(doubleConsonants('String'));          // "SSttrrinngg"
log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
log(doubleConsonants(''));                // ""