/*
Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.


*/

/*
P: 
  - Get a string
  - Return a new string
  - The output should have a comma

1. Convert string to an array of words 
2. Swap the elements of the array
3. Convert back array of words to string
4. Return newString

- Inside the `swapName` function param: `string`
  - Convert input string to an array of words,
    - Reverse the array
    - Convert back it to string 
    - Assign it to newString
  - Return `newString`
*/

const log = console.log;

function swapName(string) {
  let swapName = string.split(' ').reverse().join(',');
  return swapName;
}

log(swapName('Joe Roberts'));    // "Roberts, Joe"