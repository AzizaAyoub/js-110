/*
Swap Case
Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.


*/

/*
P:
  - Get a string as argument
  - Swap the uppercase letters to lowercase, and swap the lowercase letters to uppercase
  - Return a new string

D:

- Int: A string
- Out: A new string

A:

1. Iterate through the input string
2. Swap the words from upper to lower and from lower to upper
3. Returns the new swaped string 

  - Create a function named swapCase, that accepts one param, a string
    - Inititalize a `newString` to empty string 
    - Convert the string to an array of characters, assign it to `charsArr`
    - Iterate through the charsArr
      - If the current character is in lowercase, convert it to uppercase, assign it to `newString`
      - Else convert it to lowercase, and assign the result to `newString`
    - Return newString

*/

function swapCase(string) {
  let newString = '';
  let wordsArr = string.split('');

  for (let i = 0; i < wordsArr.length; i += 1) {
    let char = string[i];
    if (char === char.toUpperCase()) {
      newString += char.toLowerCase();
    } else {
      newString += char.toUpperCase();
    }
  }

  return newString;
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"

