/*
Lettercase Counter
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

*/

/*
P:
  - Get a string as argument 
  - Returns an object containing three properties
    - One representing the number of lowercase characters
    - Second representing the number of uppercase characters
    - Third representing the number of neither, (uppercase, or lowercase)

D:
- Int: A string
- Out: An object

A:
1. Iterate through the input string
2. Find the number of lowercase, uppercase characters and neither
3. Returns the object

  - Create a function called letterCaseCount, that accepts, one param, a string
    - Initialize count object with three properties, uppercase, lowercase, neither, assign them to 0    
    
    - Iterate through the input string, Initialize index to 0
      - If the current character is a lowercase, create lowercase property, and assign 0 to its value
      - If the current character is an uppercase create uppercase property and assign 0 to its value
      - If the the current character is not a lowercase nor uppercase, create neither property, and assign 0 to its value

      - In each iteration check the current character if a lowercase increment the value of uppercase prop by 1

      - Or if an uppercase increment the value of uppercase prop by 1
    
      - Or not a lowercase, nor uppercase, incremnt the value of neither prop by 1

    - Return count


    
*/

function isUpper(char) {
  return char === char.toUpperCase() && char.match(/[A-Z]/);
}

function isLower(char) {
  return char === char.toLowerCase() && char.match(/[a-z]/);
}


function letterCaseCount(string) {

  const count = {
    uppercase: 0,
    lowercase: 0,
    neither: 0
  }

  for (let index = 0; index < string.length; index += 1) {
    if (isUpper(string[index])) {
      count.uppercase += 1;
    } else if (isLower(string[index])) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
  }

  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
