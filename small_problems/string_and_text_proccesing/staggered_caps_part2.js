/*

Staggered Caps (Part 2)
Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.


*/

/*
P:

- Input: a string 
- Output: A new string
- Rules:
  - Get a string as argument 
  - Convert the every other word to uppercase
  - Don't ignore the non-alphabetic characters
  - The input string length is not matter

D:
Array: to store the characters of input string 

A:
- Iterate through the input string 
- Convert the every other character to uppercase

1. Create a function called staggeredCase, that accepts one param a string
  - Iinitalize an empty array named newString
  - Convert 
  - Iterate through the input string, initialize index to 0
    - If the current index is odd convert the current character to uppercase
    - Else convert the current character to lowercase
    - Return newString
*/

function staggeredCase(string) {
  let newString = string.split('').map((char, index) => {
    if (index % 2 === 1) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');

  return newString;
}
console.log(staggeredCase("I Love Launch School!")) //  "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS")) //  "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers"))// "IgNoRe 77 ThE 444 nUmBeRs"
