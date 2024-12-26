// Clean up the words
// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

/*
Input: A string 
Output: A new string 
Rules:
  - Get a string as argument 
  - Clean up the input string from non-alphabetic characters


D:
-- String 

A:
1. Clean up the input string from non-alphabetic characters 

  - Create a function called, cleanUp, that accepts one param, a string 
    - IF the input string contains non-alphabetic characters 
      - Replace it with a single space
*/

function cleanUp(string) {
  return string.replaceAll(/[^a-z]+/g, ' ');
}

// --------- Second Way ---------

function cleanUp(string) {
  return string.replace(/\W+/g, ' ')
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// ------- Third Way -------- 

function cleanUp(string) {
  return [...string].map(char => {
    if (char >= 'a' && char <= 'z') {
      return char;
    } else if (char >= 'A' && char <= 'Z') {
      return char;
    }
  }).join('')

}