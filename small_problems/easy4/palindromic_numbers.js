// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. 
// A palindromic number reads the same forwards and backwards.

/*
Input: A number 
Output: Boolean (true, false)
Rules: 
  - Get a number as argument 
  - Return true if the input number is a Palindrome 
  - Returns false if the input string is not a palindrome 
  - A palindromic number read the same backwards forwards


D:
--- Number 
---- Boolean 


A:

1. Convert number to an array 
2. Find out is the input number a palindrome or not 

  - Create a function called isPalindromicNumber, that accepts one param a string
    - Initialize originalNumber assign it to the input number 
    - Initialize reversedNumber, assign it to the reversed version of input number 
    - Compare the originalNumber with the reversedNumber converted to number, if equal returns true, otherwise false

*/
const log = console.log;

const isPalindromicNumber = function(number) {
  let originalNumber = number;
  let reversedNumber = number.toString().split('').reverse().join('');
  return originalNumber === Number(reversedNumber);
}

// ------ Second Way ---------
function isPalindromicNumber(number) {
  return number === Number(String(number).split('').reverse().join(''));
}

log(isPalindromicNumber(34543));        // true
log(isPalindromicNumber(123210));       // false
log(isPalindromicNumber(22));           // true
log(isPalindromicNumber(5));            // true
