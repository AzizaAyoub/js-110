

/*
How long are you?
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/

/*
P:
  - Input: a string 
  - Output: An array of words and its length property
  - Rules: 
    - Output array should contains every word from input string
    - Every word should followed by a space and the word's length
    - If the function doesn't recives any argument returrn empty array
    - If the argument is an empty stirng returns empty array
  
D:
Array: to store the return value

A:
- Convert the input string to an array of words
- Iterate through the array of words 
- Determine the length of the current word

1. Create a function called wordLengths(string) 
  - Initialize an empty array named `newArr`
  - If string is empty return empty array `[]`
  - Create an array of words from the input string, named `wordsArr`
  - Iterate through the `wordsArr`, 
    - Capture the current word length, assign it to `currenWordLen`
    - Append  a single space and length with the current word to `newArr`

  - Return `newArr`
*/
const log = console.log;

function wordLengths(string) {
  let newArr = [];
  if (!string) return [];

  
  let wordsArr = string.split(' ');
  wordsArr.forEach(word => {
    let currentWordLen = word.length;
    newArr.push(`${word} ${currentWordLen}`);
  });

  return newArr;

}

log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

log(wordLengths(''));      // []
log(wordLengths());        // []
