// UTF-16 String Value
// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
/*
Input: A string 
Ouput: A number 
Rules: 
  - Get a string as argument 
  - Get the utf16 code value of each character 
  - And add thier code point value together 
  - Return the sum 

D:
--- String 
--- Number 

A: 
1. Iterate through each character of Input string 
2. Find out the utf16 code value of each character 
3 Get the sum of unicode point values

  - Create a function utf16Value, that accepts one param, a string 
    - Convert the string to an array of characters
    - Iterate through the array of characters get the utf16 value of each character, add them together and return the sum 
*/


const log = console.log;

function utf16Value(string) {
  let sum = 0;
  for (let char = 0; char < string.length; char += 1) {
    sum += string.charCodeAt(char);
  }
 return sum;
}

log(utf16Value('Four score'));         // 984
log(utf16Value('Launch School'));      // 1251
log(utf16Value('a'));                  // 97
log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.

const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
log(utf16Value(OMEGA));                  // 937
log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

