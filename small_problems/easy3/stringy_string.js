// Stringy Strings
// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

/*
Input: A number 
Output; A string (number-1-0)
Rules: 
  - Get a number as argument 
  - Returns a string the altered the input number to '1's and '0's 
  - The output string should always starts from 1
  - The Output string should be same with given integer

D:
--- Number 
--- String 

A:
1. Iterate through the input number 
2. Get a string of '1's and '0's 

  - Create a function called `stringy`, that accepts one param a number 
    - Inintialize `resultStr` to an empty string 
    - Iterate through the input number, initialize `idx` to 0
      - IF the current `idx` is even, concatenate the string '1' with `resultStr`
      - Else concatenate the string '0' with `resultStr`
    - Return `resultStr`
*/

const log = console.log;

function stringy(number) {
  let resultStr = '';
  for (let idx = 0; idx < number; idx += 1) {
    idx % 2 === 0 ? resultStr += '1' : resultStr += '0'
  }

  return resultStr;
}

// Second solution:

function stringy(number) {
  let resultStr = '';
  for (let idx = 0; idx < number; idx += 1) {
    if (idx % 2 === 0) resultStr += '1';
    if (idx % 2 === 1) resultStr += '0';
  }

  return resultStr;
}


function stringy(number) {
  return [...Array(number)].map((_, idx) => idx % 2 === 0 ? '1' : '0').join('');

}

log(stringy(6));    // "101010"
log(stringy(9));    // "101010101"
log(stringy(4));    // "1010"
log(stringy(7));    // "1010101"