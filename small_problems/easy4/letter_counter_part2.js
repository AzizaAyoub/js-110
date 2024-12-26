
// Letter Counter (Part 2)
// Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of "it's" is 3, not 4.

// Words consist of any sequence of non-space characters.


/*
Input: A string 
Output: An object
Rules:
  - Get a string as argument 
  - Returns an object 
  - The output object should be like, each key is the length of the word 
  - The value shold be the number of word 
  - Exclude the non-alphabetic characters in the output object
  - When the input string is empty returns empty object

D:
--- String 
---- Object 


A:

1. Covert input string to an array of words 
2. Iterate through the array of words
3. Get the length of each word 
4. Get the number of each word
  - Initialize `count` to an empty object 
  - If the input string length is equal to 0, return {}

  - Convert the input string to an array of words, assign it to `wordsArray`
  - Iterate through the `wordsArray` 
    - Get the length of the current word, exclude non-alphabetic characters assign it to `wordLength` 
    - If `wordLength` is not exist in the `count` object 
      - Assign 1 to the `wordLength` in the `count` object
    - Else icrement the value of `wordLength` by 1

  - Return `count`
*/
const log = console.log;

function wordSizes(string) {
  if (string.length === 0) return {};

  const count = {};
  string.split(' ').forEach(word => {
    let wordLength = word.match(/[a-z]/gi).length;

    if (!count.hasOwnProperty(wordLength)) {
      count[wordLength] = 1;
    } else {
      count[wordLength] += 1;
    }
  });

  return count;
}

log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
log(wordSizes(''));                                            // {}

// ---- Second way:

log(cleanUp('abd393-###2@da,?I='));


function wordSizes(str) {
  
  if (str === '') return {};

  return str.split(' ').reduce((count, word) => {
      word = cleanUp(word);
      if (!count.hasOwnProperty(word.length)) {
        count[word.length] = 1;
      } else {
        count[word.length] += 1;
      }
      return count;
  }, {});
}

log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
log(wordSizes('')); // {}

