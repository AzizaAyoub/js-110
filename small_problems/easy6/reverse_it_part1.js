// Reverse It (Part 1)
// Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order.

/*
Input: A string 
Output: A reversed string 
Rules:
  - reverse the input string 
  - If the input string is empty return empty string

D:
--- String 

A:
1. Convert the input string to an array of words 
2. Reverse the words of array 

  --- Create reverseSentence, with one param 
    --- IF the inptu string is empty return empty string 
    --- Convert the input string to an array of words 
    --- Reverse the array of words 
    --- Convert it back to a string return it
*/

const log = console.log;

function reverseSentence(string) {
  if (string === '') return '';

  return string.split(' ').reverse().join(' ');
}
log(reverseSentence(''));                       // ""
log(reverseSentence('Hello World'));            // "World Hello"
log(reverseSentence('Reverse these words'));    // "words these Reverse"



