//Write a function that takes a string argument and returns a list of substrings of that string.
//  Each substring should begin with the first letter of the word, and the list should be ordered
//  from shortest to longest.

/*
P:

- Input: string
- Output: An array of substrings 
- Rules: 
  - Get a string as argument
  - Create an array of substrings 
  - Each substring should begin with first letter of word
  - And the returned list should be ordered from shortest to longest
  - The input string length is not matter

D:
Array: to store the substrings 

A:
1. Iterate through the input string
2. Get the substring from the input string 
3. Return an arrray of substrings 

  - Create a function called leadingSubstrings, that accepts one param, a string
    - Iinitailize substrings to an empty array
    - Iterate through the input string, iinitailize index to 1
      - slice the character strating at index 0, upt `index`,
      append the result to substrings array

    - Return substrings 
*/
const log = console.log;

function leadingSubstrings(string) {
  let substrings = [];

  for (let index = 1; index <= string.length; index += 1) {
    substrings.push(string.slice(0, index))
  }

  return substrings;
}


log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
log(leadingSubstrings('a'));        // ["a"]
log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]





