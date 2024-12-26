/*
Search Word (Part 2)
The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').


*/

/*
P:
- Input: A word, and a text
- Output: A new string
- Rules:
  - Get a word a tex as arguments
  - Determine the word and its instances 
  - Each found word should convert to uppercase
  - Highlight the found words by uses (*asterisks*) 

D:
Array: to store the words of input text

A:
- Convert the input word to lowercase 
- Cnvert the input text to an array of words 
- Convert each word of array to lowercase
- Compare the input lowercase word with current Word
- If they equal, Convert it to uppercase an highlight

  1. Create a function named searchWord, that accepts two params a `word` and a `text`
    - Iinitialize `newString` to empty string ('')
    - Iinitialize `lowercaseWord` to the lowercase version of input `word`
    - Convert the input text to an array of words iterate through the array and convert each word to lowercase, assign the result to `wordsArr`
    - If the `lowercaseWord` is equal to the current word, convert it to UPPERCASE and *highlight* it
    - Assign the result to `newString`

  - Return `newString`
*/

const log = console.log;

function searchWord(word, text) {
  let newString = '';
  let lowercaseWord = word.toLowerCase();
  let wordsArr = text.split(' ').map(word => word.toLowerCase());

  wordsArr.map(word => {
    if (word === lowercaseWord) {
      newString += `*${word.toUpperCase()}* `
    } else {
      newString += word + ' ';
    }
  });

  return newString.trim();;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"