/*
Multiply Lists
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

Example:

*/

/*
P:
  - Get two arrays that contain a list of numbers
  - Return a new array that contains the product of elements that have the same index
  - Both array should have the same length

A:
  1. Iterate through input array
  2. Return result

  - Initialize result to an empty array
  - Iterate through array
    - If index is less than the length of the arr1 array
      - Multiply the element of the arr1 with element of arr2 and append it to the result

  - Return result
*/
const log = console.log;

function multiplyList(arr1, arr2) {
  let result = [];

  for (let index = 0; index < arr1.length; index += 1) {
    if (index < arr2.length) {
      result.push(arr1[index] * arr2[index]);
    }
  }

  log(result);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]



