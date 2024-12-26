// Write another function that returns true if the string passed as an argument is a palindrome, 
// or false otherwise. This time, however, your function should be case-insensitive, and should 
// ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the 
// isPalindrome function you wrote in the previous exercise.


















// How can we hear each other?
// Come to this room



const log = console.log;

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


let isRealPalindrome = string => {
  string = removeNoneLetter(string.toUpperCase());

  return isPalindrome(string);
}

let removeNoneLetter = function(string) {
  let result = '';

  // Why does the forEach method doesn't work here?
  string.split('').forEach((element, index) => {
    if (isLetter(element[index]) || isNumber(element[index])) {
      result += element[index]
    }
  })

  return result;
}
function isLetter(char) {
  return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
}

function isNumber(num) {
  return num >= '0' && num <= '9';
}


log(isRealPalindrome('madam'));               // true
log(isRealPalindrome('Madam'));               // true (case does not matter)
log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
log(isRealPalindrome('356653'));              // true
log(isRealPalindrome('356a653'));             // true
log(isRealPalindrome('123ab321'));            // false

// console.log(isPalindrome('madam'));               // true
// console.log(isPalindrome('Madam'));               // false (case matters)
// console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
// console.log(isPalindrome('356653'));              // true

