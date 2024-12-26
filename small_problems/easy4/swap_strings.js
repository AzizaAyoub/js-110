/*
Letter swap 

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.
*/


/*
- Given a string containing words, 
- swaps the first and last letter of every word
- Each word should has at least one letter
- Eah string should has at least one word

D:
- Input: String
- Output: String
- Create an array of words 
- An array of swaped strings

A: 
- 1. Convert the input string to an array of words
- 2. Iterate over words swap each word
- 3. Retrun the array with words now swaped convertd back to string
-------------
- Initialize a swapedString to empty string 
- Initialize wordsArr to the words version of string
- If input string is one character 
  - retrun this character
- Iterates through wordsArr
- If the element.length gteater than 1 character 
  - Get the first character of the word
  - Get the last character of the word
  - Get the substring of words, start at index + 1 and word.length - 1
  - Concatnate last character with substring and first character with a single spaces
  
  - Assign the result to the swapedString 
- else 
  - Concatnate swapedString with a singal space
- Remove the last space from the swapedString, return it
*/

function swap(string) {
  let swapedString = '';
  let wordArr = string.split(' ');

  if (string.length === 1) {
    return string;
  }

  wordArr.forEach((element, index) => {
    if (element.length > 1) {
      let firstChar = element[0];
      let lastChar = element[element.length - 1];
      let subString = element.substring(1, element.length - 1);

      swapedString += `${lastChar}${subString}${firstChar} `;
    } else {
      swapedString += `${element} `;
    }

  })

  return swapedString.trimEnd();
}

// =============================================
function swap(str) {
  return str.split(' ').map((word) => {
    let firstChar = word.charAt();
    let lastChar = word.charAt(word.length -1);
    if (word.length > 1) {
      return lastChar.concat(word.slice(1, -1), firstChar);
    } else {
      return word;
    }
  }).join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde d'));                          // "ebcdA"
console.log(swap('a'));                              // "a"


// 

function swap(str) {
  return str.split(' ').map((word) => {

    if (word.length > 1) {
      return word.slice(-1)
                 .concat(word.slice(1, -1), word.slice(0, 1));
    } else {
      return word;
    }
  }).join(' ');
}
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde d'));                          // "ebcdA"
console.log(swap('a'));                              // "a"

/*

//  ---- Second way:
A:
1. Convert the input string to an array of characters
2. Iterate through the array of characteers 
3. Swaped the array of characteers
------- 

  - Convert the input string to an array of words
  - Iterate through the word array 
  - Swap the first and last character each word 
  - Convert the array of words back to string 
  - Return the swaped string 
   
*/

const log = console.log;

const swap = function(string) {
  return string.split(' ').map(word => {
  if (word.length === 1) return word;
  return word.slice(-1) + word.slice(1, -1) + word.slice(0, 1)
  }).join(' ');
}

log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
log(swap('Abcde'));                          // "ebcdA"
log(swap('a'));                              // "a"


