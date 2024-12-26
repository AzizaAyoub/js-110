/*
All Substrings
Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

*/

/*
P:

  - Get a string as argument
  - Returns an arrray of all substrings
  - Oreder the returned list by where in the string the substring begins

D:

- Int: String 
- Out: An array of Substrings


A:

1. Iterate through the input string
2. Convert the input string into an array of Substrings
3. Return the array

  - Create a function called `allSubstrings`, that accepts one param, a string
    - Initialize `substrings` to an empty array ([])
    - Iterate through the input `string`, initialize `index` to 0
      - Iterate through the string, initialize `index2` to `index + 1`
        - Get the substring starting at `index` upt `index2`
        - Append the substring to the `substrings` array
      - End the loop if `index2` to is less/equal to string.length
    - End the loop if `index` is less than string.length
    - Return `substrings`
*/

const p = console.log;

function substrings(string) {
  let substrings = [];

  for (let index = 0; index < string.length; index += 1) {
    for (let index2 = index + 1; index2 <= string.length; index2 += 1) {
      substrings.push(string.slice(index, index2));
    }
  }
  return substrings;
}

p(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]