// ddaaiillyy ddoouubbllee
// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

/*
Input: a string 
Ouput: A new string 
Rules: 
  - Get a string as argument 
  - Returns a new string from input string 
  - The ouput string should contains each character one time
  - IF the string empty returns empty string 


D:
--- String 

A:
1. Iterate through the input string 
2. Get a new string of all possible characters, which should comes one time 

  - Create a function called crunch, that accepts one param a string 
    - Initialize finalStr to empty string 
    - Iterate through the input string, Initialize idx to 0
      - IF the current character is not equal to the upcomming element
        - Append it to the finalStr 
    - Return finalStr
*/

const log = console.log;

function crunch(string) {
  let finalStr = '';

  for (let idx = 0; idx <= string.length; idx += 1) {
    if (string[idx] !== string[idx + 1]) {
      finalStr += string[idx];
    }
  }

  return finalStr;
}

log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
log(crunch('4444abcabccba'));              // "4abcabcba"
log(crunch('ggggggggggggggg'));            // "g"
log(crunch('a'));                          // "a"
log(crunch(''));  