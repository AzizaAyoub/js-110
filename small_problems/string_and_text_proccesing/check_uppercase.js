/*
Uppercase Check
Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.


*/

/*
P:
  - Get a string as argument
  - Return true if all characters are upper case
  - Return false otherwise

D:
- Int: String
- Out: Boolean (true, false) 

A:

1. Iterate through the input string
2. Check the characters if upper case
3. Return the result

  - Create a function named isUppercase, that accepts one param, a string 
    - If string is a falsy return true
    - Iterate through the input string
      - If all characters in that string are upper case return true
      - Else return false

*/

function isUppercase(string) {
  if (!string) return true;
  for (let i = 0; i < string.length; i += 1) {
    if (string === string.toUpperCase()) {
      return true;
    } else if (string === ' ') {
      return true;
    } else {
      return false;
    }
  }
}
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true