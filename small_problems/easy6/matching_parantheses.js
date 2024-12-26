/*
Matching Parentheses?
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

*/

/*
P:
- Input: A string
- Output: A boolean (true or false) 
- Rules:
  - Returns true if the parentheses in the input string are properly balanced, false otherwise
  - To be properly balanced, parentheses must occur in matching '(' and ')'
  - If one of the parentheses pair is not include the function should return false
  - The input string length is not matter

D:
Array to store the input string words

A:

1. Create a function called `isBalanced`, that accepts one param, a string
  - Initialize paren to 0 
  - Iterate through the input string
    - If current `word` is equal to '(', increment the value of paren by 1
    - If current `word` is equal to ')', decrement the value of paren by 1
  
    - If paren value is less than 0, returns false
  - return paren === 0
*/
 
function isBalanced(string) {
  let paren = 0;

  for (let index = 0; index < string.length; index += 1) {
  if (string[index] === '(') {
      paren += 1;
    } 
    if (string[index] === ')') {
      paren -= 1;
    }
    if (paren < 0) return false;
  }
  return paren === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);