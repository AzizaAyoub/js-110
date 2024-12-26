// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
input: a string 
output: an object 
rules:
  - Get the percentage of characters that are uppercase letters 
  - Get the percentage of characters that are lowercase letters 
  - Get the percentage of characters that are neither
  - The input string should contain at least one character 

D:
object: to store the percentages 

A:
- Get the length of characters in all cases (uppercase, lowercase, neither) 
- Get the percentage of them 

  - Create a function called letterPercentages, with one param a string 
  - Initialize count to the three properties uppercase, lowercase neither
  - Get the length of characters that are uppercase (divide it by the input string length) multiply it by 100
  - Do the same thing for uppercase letters and neither 
  
  - Iterate through the count object 
    - Fixed the value of each prop to two decimal points
    - Reassign each key of the count objet to the result 
  - Return count 
*/

const log = console.log;

function letterPercentages(string) {
  let count = {
    lowercase: ((string.match(/[a-z]/g) || []).length / string.length) * 100,
    uppercase: ((string.match(/[A-Z]/g) || []).length / string.length) * 100,
    neither: ((string.match(/[^a-zA-Z]/g) || []).length / string.length) * 100,
  }

  for (let key in count) {
    count[key] = count[key].toFixed(2);
  }
  return count;
}

log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

log(letterPercentages('AbCd +Ef'));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

log(letterPercentages('123'));
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
