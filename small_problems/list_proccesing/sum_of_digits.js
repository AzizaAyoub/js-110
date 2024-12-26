/*
Sum Of Digits
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

*/

/*
P:
  - Get a positive integer
  - Return the sum of its digits
  - Use buitl-in methods

D:

- Int: A positive integer
- Out: Sum of the digits
- Inter: An array of chars

A:

1. Convert integer to string
2. Convert string to an array of chars
3. Iterate through the array of characters
4. Return Sum

  - Create a function called sum, that accepts one param, an integer
    - Convert the `integer` to string, assign it to `numToStr` 
    - Convert the numToStr to an array of characters, (method chaining) reduce the array of characters, assign the return value to `sum`
    - Return `sum`
*/

function sum(integer) {
  let numToStr = String(integer);
  let sum = numToStr.split('').reduce((acc, initialValue) => acc + Number(initialValue), 0);

  return sum;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45