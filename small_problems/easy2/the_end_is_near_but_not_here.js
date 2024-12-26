// The End Is Near But Not Here
// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

/*
Input: A String
Ouput: A string (next to last word)
Rules: 
  - Get a string as argument 
  - Return the word that is next to last
  - Input string should be at least two words 
  
D:
--- string 

A:
1. Iterate through the input string 
2. Get the word that is next to last 

  - Create a function called penultimate, that accepts one param a string 
    - Convet the input string to an array of words, assign it to `wordsArr` 
    
      - Slice off the next to last word from the `wordsArr` 
      - Convert it back to string, return it
*/

function penultimate(string) {
  let wordsArr = string.split(' ')
  return wordsArr.slice(wordsArr.length - 2, wordsArr.length - 1).join('');  
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
