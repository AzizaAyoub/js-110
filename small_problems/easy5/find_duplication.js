/*Find the Duplicate  Time: 1:59

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

*/

/*
P:
  - Get an array of unordered elements (numbers)
  - Return the number that occurs twice in input array

A:

1. Iterate through input array
2. Determine which value occurs twice
3. Return result

- Inside the `count` function params: `array`, `element`
  - Get an array of numbers
  - Initialize `count` to 0
  - Iterate through input array
  - If current number is equal to `element`
    - Increment count by 1

  - Return count


- Inside the findDup function param: `array`
  - Iterate through input array
    - If current number is equal to 2
      - return this number

*/
const log = console.log;

function count(array, element) {
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === element) {
      count += 1;
    } 
  }
  return count;
}

function findDup(array) {
  return array.find(element => {
    return count(array, element) === 2;
  })
}

log(findDup([1, 5, 3, 1]));                                // 1
log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 43, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73