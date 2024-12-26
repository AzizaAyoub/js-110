/*
Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.


*/
/*
P:
  - Get an integer
  - Create an array from 1 to input integer (inclusive)
  - Return an array

- Inside the sequence function param: number
  - Initialize an `array` to integers from 1 to input integer (inclusive)
  - Iterate through input number
    - append each number from 1 to number 
  - Return `array`
*/
const log = console.log;

function sequence(number) {
  let array = [];

  for (let i = 1; i <= number; i += 1) {
    array.push(i)
  }

  return array;
}
log(sequence(5));    // [1, 2, 3, 4, 5]
log(sequence(3));    // [1, 2, 3]
log(sequence(1));    // [1]