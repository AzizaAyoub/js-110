/*
Capitalize Words
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.


*/

/*
P:
  - Get a string as argument
  - Returns a new string with all first character uppercase
  

D:
- Int: A string
- Out: A new string

A:

1. Iterate through the input string
2. Capitalize each first character of each word
3. Return the result 

  - Create a function called wordCap, that accepts one param, a string
    - Initialize a `newString` to empty string ('')
    - Convert the string to an array of words assign it to `wordsArr`
    - Iterate through the input string
      - Capitalize first character of current word, concatenate with the remaining lowercase characters 
      - Convert back it to string
      - Assign the result to `newString`, 

    - Return `newString`
*/

function wordCap(string) {
  let newString = [];
  let wordsArr = string.split(' ');

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i]) {
      newString.push(wordsArr[i][0]
               .toUpperCase() + wordsArr[i]
               .slice(1)
               .toLowerCase() + ' ');
    }
  
  }
  
  return newString.join('');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'