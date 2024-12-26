/*
Staggered Caps (Part 1)
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.


*/


/*
In: string
Out: string
Rules:
 - Convert every other character to uppercase, starting with the first char
 - Ignore non-alphabetic chars
 - Input string lentgh doesn't matter

Array: to store all characters of input string

 - Iterate through all chars of input string
 - Convert every other char to uppercase

1. Split the input string into an array of characters
2. Iterate through the array
 - If the current idx is odd
  - Convert the current char to uppercase
 - If the current idx is even
  - Convert the current char to lowercase
3. Convert the array to a string, return it
*/

function staggeredCase(string) {
  let chars  = string.split('')
  return chars.map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


function string(string) {
  let sub = [];
  return string.split('').map(_, idx => {
    return sub.push(string.slice(0, idx + 1))
  }).join();
}
console.log(string('abcde'));