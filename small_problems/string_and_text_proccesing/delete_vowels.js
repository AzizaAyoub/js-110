/*
Delete Vowels
Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

*/

/*
P:
  - Get an array of words
  - Return the same array without vowels


D:
- Int: An array
- Out: An array of words without vowels

A:

1. Iterate through the input string
2. Remove the vowels
3. Return the array

  - Create a function removeVowels, that accepts one param, an array
    - Initialize an emepty array named `newArr`
    - Iterate through the input array
    - Remove the vowels from the array
    - Assign the result to `newArr`
*/



const log = console.log;

function removeVowels(array) {
  return array.map(arr => arr.replace(/[aioue]/gi, ''));
}

log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

