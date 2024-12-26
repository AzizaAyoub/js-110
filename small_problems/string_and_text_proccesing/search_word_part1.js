/*
Search Word (Part 1)
Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas. Also assume that the search is case-insensitive.

*/

/*
P:
- Input: A string 
- Output: A number 
- Rules: 
  - Get a string and a tex as arguments
  - Returns a number that representing the of times the word appears in this text
  - All words breaks are spaces
  - Some words may includes punctuation, (commas, periods)
  - The search is case-insensitive
  - The input tex length is not matter

D:
Array: to store the words from the input text

A:
- Convert the array to an array of words
- Iterate through the words array
- Search the passed word in the tex input
  1. Create a function called `searchWord`, that accepts two params, a `word` and a `text` 
    - Initialize `searchedWordNum` to 0
    - Initialize `lowercaseWord`, to the lowercase of input `word`
    - Convert the input `text` to an array of words, iterate through the `wordsArr` and handle the punctuations
    - Convert the current word to lowercase assign it to `wordsArr`

    - Iterate through the `wordsArr` again search the `lowercaseWord` in `wordsArr`
    - If the current word is equal to `lowercaseWord` increment the value of searchedWordNum by 1

  - Return `searchedWordNum`
*/

const log = console.log;


function searchWord(word, text) {
  let searchedWordNum = 0;
  let lowercaseWord = word.toLowerCase();

  let wordsArr = text.split(' ').map(word => word.replace(/[-,.?;:'!]/g, '').toLowerCase());


  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i] === lowercaseWord) {
      searchedWordNum += 1;
    } 
  }

  return searchedWordNum;

}




const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3