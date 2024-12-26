// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.


/*
In: A string
Out: A boolean (true, false)
Rules:
  - Get a string and returns true if the passed string is a palindrome (reads the same backwards and forwards)
  - The case is matter, meaning that (Madam is not a palindrome but madam is)
  - All characters are matter ("madam i'm adam" is not but "madam i madam" is)

D:
Array to store the characters of input string

1. Iterate through the input string characters
2. Find palindromes 

  - Create a function called isPalindrome with a string param
    - Convert the string to an array of characters 
    - Reverse the array of characters
    - Convert back it to string
    - Compare the reversed string with the original input string 
    - If equal return ture, otherwise false 
*/

const log = console.log; 

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

log(isPalindrome('madam'));               // true
log(isPalindrome('Madam'));               // false (case matters)
log(isPalindrome("madam i'm adam"));      // false (all characters matter)
log(isPalindrome('356653'));              // true


// --------------------------------------------------------------

// Explain what's gonna return  on line 13 and why?

// Does the function below have any side effects? If so, refactor the
//  function so it doesn't have any side effects.

let students = ["Chris", "Pete", "Nick", "Jordan"];

function passedStudents(list) {
  let passed = list.splice(2, 2);
  return passed;
}

passedStudents(students);
console.log(students); // ["Chris", "Pete"]
 
// passedStudents is inoked on line #15 and passed students as argument.
// students contains an array 

