// Get Middle Character
// Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

/*
Input: A string 
Output: A new string 
Rules:
  - Get a string as argument 
  - Return a the middle character 
  - If the input string length is an even length retrun two characters
  - If the input string length an odd length return one character 

D:
--- String 

A:
1. Get the middle character(s)

  - Create a function centerOf, that accepts one param, a string 
    - If the string length is odd return one middle character 
    - If the string length is even retrun two middle characters 
*/
const log = console.log;

function centerOf(string) {
  let centerIndex = (string.length - 1) / 2; 
  if (string.length % 2 === 1) {
    return string[centerIndex];
  } else {
    let leftIndex = (string.length / 2) - 1;
    return string[leftIndex];
  }
}

log(centerOf('I Love JavaScript')); // "a"
log(centerOf('Launch School'));     // " "
log(centerOf('Launch'));            // "un"
log(centerOf('Launchschool'));      // "hs"
log(centerOf('x'));                 // "x"