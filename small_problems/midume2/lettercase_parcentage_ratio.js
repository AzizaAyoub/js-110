// Lettercase Percentage Ratio
// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

/*
input: a string with (numbers)
output: an object of three properties
rules: 
  - The input string will always contain at least one character 

D:
--- string 
--- object 

A:
1. get the length of the input string 
  - assign to count 
2. return an object 
  - get all the uppercase letters and divide the length of uppercase letters first with by count, then multiply it by 100
  
  - get all the lowercase letters and divide the length of lowercase letters first with by count, then multiply it by 100
  
  - get all the neither letters and divide the length of neither  letters first with by count, then multiply it by 100


*/

const log = console.log;

function letterPercentages(string) {
  let count = string.length;

  return {
    uppercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    lowercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-zA-Z]/) || []).length / count) * 100).toFixed(2)
  }
}

log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Second way:
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}