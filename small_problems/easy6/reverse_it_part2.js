/*
Reverse It (Part 2)
Write a function that takes a string argument containing one or more words and returns
a new string containing the words from the string argument. All five-or-more letter 
words should have their letters in reverse order. The string argument will consist of
only letters and spaces. Words will be separated by a single space.
*/

/*
- Get a string of words
  - Reverse the string
  - Return new string

- Inside the reverseSentence function param: string
  - Convert the string to an `array` of words
  - Initialize an empty array named `newString`

  - Iterate through `array` of words
    - if current element is greater than `WORD_LENGTH`
      - push the reverse version of this string to newArr
    - Ele push the current element as is

  - Return the string version of `newString`

Inside the `reverseWord` function param `str`
    Return 
      - Covert the word to an array of chars
      - Reverse the array
      - Convert back this array to string
      - Assign it to newString
*/

const log = console.log;

const WORD_LENGTH = 5;

function reverseWords(string) {
  let array = string.split(' ');
  let newArr = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= WORD_LENGTH) {
      newArr.push(reverseWord(array[i]));
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr.join(' ');
}

function reverseWord(str) {
  return str.split('').reverse().join('');
}


log(reverseWords('Professional'));             // "lanoisseforP"
log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
log(reverseWords('Launch School'));            // "hcnuaL loohcS"