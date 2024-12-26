/*
Alphabetical Numbers
Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
*/

/*
P:
  - Get an array of integers
  - returns an array of those sorted integers
  - The array should sort based on the English word for each number(zero, one, two, three....)

D:

- Int: An array of integers
- Out: An array of sorted integers

A:

1. Iterate through input array
2. Sort the input array, based on English word
3. Return the sorted array

  - Initialize a const var named, numObject to an object of numbers from 0 to 19


  - Create a function called alphabeticNumberSort, that accepts two  params, num1, num2
    - if the num1, is greater than num2, return 1
    - if the num1, is less than num2, return -1
    - if the num1, and num2 is equal return 0


  - Create a function named, sortArray, that accepts one param, an array
    - return the sorted version of array
*/

const NUMBER_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

function sortArray(num1, num2) {
  if (NUMBER_WORDS.num1 < NUMBER_WORDS.num2) return 1;
  if (NUMBER_WORDS.num1 > NUMBER_WORDS.num2) {
    return -1;
  } else {
    return 0;
  }
  
}

function alphabeticNumberSort(array) {
  return [ ...array].sort(sortArray);

}


console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
