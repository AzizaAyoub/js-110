// Running Totals
// Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.


/*
Input: an array
Output: A new array 
Rules:
  - Get an array of numbers as argument 
  - Return a new array that contains the same elements
  - The Output array would be with each element's value being the running total from the original array 
  - If the input array length is 0 return empty array 

D:
--- Array 

A:
1. Iterate through the input array 
2. Find ou the running totals from the input array 

  - Create a function called runningTotal, that accpets one param an array  
    - Initialize `totalArray` to an empty array 
    - Initialize idx to 0
    - Iterate through the input array
      - Append the first element to the `totalArray` 
        - IF the length of `totalArray` and input array not equal
        - Add the current element of `totalArray` with the input array current `idx + 1`
        - Append the result to `totalArray` 
*/

const log = console.log; 

const runningTotal = function(array) {
  if (array.length === 0) return array;
  let totalArray = [];
  
  totalArray.push(array[0]);
  for (let idx = 0; idx <= array.length; idx += 1) {
    if (totalArray.length < array.length) {
      totalArray.push(totalArray[idx] + array[idx + 1]);
    }
  }

  return totalArray;
}




log(runningTotal([2, 5, 13]));             // [2, 7, 20]
log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
log(runningTotal([3]));                    // [3]
log(runningTotal([]));                     // []

// ----- Second Way ----- 

function runningTotal(array) {
  let emptyArr = [];
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    emptyArr.push(sum += array[index]);
  }
  return emptyArr;
}

log(runningTotal([2, 5, 13]));             // [2, 7, 20]
log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
log(runningTotal([3]));                    // [3]
log(runningTotal([]));                     // []