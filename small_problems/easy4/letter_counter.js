// Write a function that takes a string consisting of zero or more space separated words
// and returns an object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.
/*
p:
- Write a function taking string argument
- string has zero or more words
- return an object showing number of words based on their sizes
- each word has a non-spaces characters
- string can be empty, if so return an empty object

D:
In: string
Out: object
Inter: an array of words

A:
- Get the arrays of words from input string
- Create an object containing sizes and number of each word
- Return the result object
-------------
- Covnert the string into an array
- Initialize an empty object `count`
- Iterate over array of words
 - If word.length does not exist in `count`
  - Append it to `count` with a value of 1
 - If word.length exist in `count`
  - Increment its value by 1
- After iteration is done
- return `count`


*/
const log = console.log;

function wordSizes(str) {
  let count = {};


  str.split(' ').forEach(word => {
    if (!count.hasOwnProperty(word.length)) {
      count[word.length] = 1;
    } else {
      count[word.length]
    }
  });

  return count;
}
log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
log(wordSizes(''));      // {}

// ---- Second way:

/*
A:

1. Covert input string to an array of words 
2. Iterate through the input string 
3. Get the length of each word 
4. Get the number of each word
  - Initialize `count` to an empty object 
  - If the input string length is equal to 0, return {}

  - Convert the input string to an array of words, assign it to `wordsArray`
  - Iterate through the `wordsArray` 
    - Get the length of the current word, assign it to `wordLength` 
    - If `wordLength` is not exist in the `count` object 
      - Assign 1 to the `wordLength` in the `count` object
    - Else icrement the value of `wordLength` by 1

  - Return `count`
*/

const wordSize = string => {
  if (string.length === 0) return {};
  let array = string.split(' ');
  let count = {};
  for (let idx = 0; idx < array.length; idx += 1) {
    let wordLength = array[idx].length;
    if (!count.hasOwnProperty(wordLength)) {
      count[wordLength] = 1;
    } else {
      count[wordLength] += 1;
    }

  }

  return count;
}


log(wordSize('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
log(wordSize('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
log(wordSize("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
log(wordSize(''));                                            // {}
