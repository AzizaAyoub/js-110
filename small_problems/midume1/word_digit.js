
/*
Word to Digit
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

*/

/*
P:
- Input: A string
- Output: A new string containing numbers
- Rules: 
  - Convert the every occurrence of a number word (zero, one, two)
    to its corresponding digit character (0, 1, 2)

D:
Array: to store the words of input string

A:
- Ietrate through the input string
- Convert every occurrence of a number word to its corresponding digit character

1. Create a function called wordToDigit, that accepts one param, a string
  - Initialize `numWords` to an array of "number-words"
  - Iterate through the input string initialize `index` to 0
    - If the current word is includes in the `numWords` array
      - Replace all words with digits 
    - Reassign the string to result 

  - Return `string`
*/

function wordToDigit(string) {
  let numWords = ["zero", 'one', 'two', 'three', 'four', 'five', 'six', 'seven']

  for (let index = 0; index < string.length; index += 1) {
    if (string.includes(numWords[index])) {
      string = string.replaceAll(numWords[index], index);
    }
  }
  return string;
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."