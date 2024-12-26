/*
List of Digits
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.

Examples:

P:
  - Get a positive integer
  - Return a list of the digits (number);

A:
  1. Iterate through numbers
  2. Convert input numbers to string
  2. Append it to an array

  - Inside the digitList function
  -------------------------------
    - Initialize `array` to an empty array
    - Convert the input numbers to string with reassigning the numbers
    - Iterate through numbers 
      - Convert each number to number version, and append each one to `array`
    - Return `array`
*/
const log = console.log;

function digitList(numbers) {
  let array = [];
  numbers = String(numbers);

  for (let index = 0; index < numbers.length; index += 1) {
    array.push(Number(numbers[index]));
  }

  log(array);
  
}
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]