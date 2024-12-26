/*
Sum of Sums
Write a function that takes an array of numbers and returns the sum of the sums of each leading subsequence in that array. Examine the examples to see what we mean. You may assume that the array always contains at least one number.


*/

/*
P:
  - Get an array of numbers
  - Returns the sum of sums of each leading subsequence in array
  - The input array should contain at least one number;

D:
- Int: An array of number
- Out: Sum of sums

A: 

1. Iterate through the input array
2. Get the sum of sums
3. Return the result

  - Create a function named sumOfSums, that accepts one param, an array
    - Initialize `sum` to 0

    - Iterate through the input array initialize i to 1
      - slice the elements starting at index 0 upt `i`, (method chaining) reduce the returned array by slice, assign it to `sum`
    - Return the `sum`

*/
const log = console.log;

function sumOfSums(array) {
  let sum = 0; 

  array.map((_, i) => {
    sum += array.slice(0, i + 1).reduce((acc, initialValue) => acc + initialValue);
  })

  return sum;
}

log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
log(sumOfSums([4]));              // 4
log(sumOfSums([1, 2, 3, 4, 5]));  // 35



let name = console.log('aziza is a student in js119');