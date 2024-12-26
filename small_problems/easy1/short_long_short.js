
// Short Long Short
// Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.


/*
Input: two string 
Output: a new string 
Rules; 
  - Get two string as arguments
  - Retrun a new concatenated string 
  - While str1 length is less than str2 
    - Return str1 str2 str 
  - While str2 length is less than 
    - Retrun str2 str1 str2

D: 
-- String 

A:
1. Determine which input string length is less than 
2. concatenat both input strings together base on thier length 

  - Create a function shortLongShort, that accepts two params, str1, str2 
    - IF the length of str1 is less than str2 
      - concatenat str1 str2 and again str1, retrun it 
    - ELSE concatenat str2 str1 and again str2, return it 

*/

function shortLongShort(str1, str2) {
  return str1.length < str2.length ? str1 + str2 + str1 :  str2 + str1 + str2;
  
}

// Second solution 
function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  } 
}



console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
