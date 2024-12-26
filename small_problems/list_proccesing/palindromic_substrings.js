/*
Palindromic Substrings
Write a function that returns a list of all palindromic substrings of a string. That is, each substring must consist of a sequence of characters that reads the same forward and backward. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

*/

/*
P:

  - Get a string as argument
  - Return all palindromic substrings 
  - Each substring must consist characters
  - Each substring must read the same forward, and backward
  - Duplicate substring should included multiple times
  - Substrings are case-sensetive
  - Sigle characters are not palindrome


  

D:
- Int: A string 
- Out: An array of palindromic substrings
- Inter: Get an array of words

A:

1. Get an array of all posible Substrings
2. Iterate through the substrings array 
3. Determine the palindromes from substrings array
4. Return the array of palindromic substrings

  - Create a function called `palindromes`, with one param, a string
    - Iinitlize `palindromes` to an empty array
    - Initialize `substrings` to the return value of `getAllSubstrings`
    - Iterate over array of `substrings`
     - If the length of a substring is greater than 1 and a `substring` is palindrome, append it to `palindromes` array
    - Return `palindromes` array
  =============================
  `getAllSubstrings` function with one param `string`
  - Initialize an empty `substrings` array
  - Iterate over `string` initiliaze `index` to 0
   -Iterate over `string` initialize `index2` to `index` + 1
    - Appned the `substrings` starting at `index` upt `index2` to `substrings` array
   - End the loop if `index2` is greater/equal to `string.length`
  - End the loop if `index` is equal to `string.length`
  - return `substrings` array
=================================
`isPalindrome` function with one param: `str`
- Convert str to an array, reverse the array, convert it back to 
a string
- Compare the reveresed string with str
- If equal, return true. false otherwise
*/

const p = console.log;

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
p(isPalindrome('AzizA'));

function getAllSubstrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    for (let index2 = index + 1; index2 <= string.length; index2 += 1) {
      substrings.push(string.slice(index, index2));
    }
  }
  return substrings;
}

p(getAllSubstrings('AzizA'));

function palindromes(string) {
  let palindromes = [];
  let substrings = getAllSubstrings(string);


  for (let i = 0; i < substrings.length; i += 1) {
    if (substrings[i].length > 1 && isPalindrome(substrings[i])) palindromes.push(substrings[i]);
  }

  return palindromes;
}

p(palindromes('abcd'));       // []
// ['ab', 'abc', 'abcd', 'bc', 'bcd', 'cd', 'd']

p(palindromes('madam'));      // [ "madam", "ada" ]

p(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

