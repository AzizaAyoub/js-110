// Write a function that returns an Array that contains every other element of an Array that is 
// passed in as an argument. The values in the returned list should be those values that are in 
// the 1st, 3rd, 5th, and so on elements of the argument Array.

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function oddities(array) {
  let oddList = [];

  for (let i = 0; i < array.length; i += 2) {
    oddList.push(array[i]);
  }
  return oddList;
}// Odd Lists
// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

/*
Input: An array 
Output: A new array 
Rules: 
  - Get an array as argument 
  - Returns the array that contains the every other element of the input array 
  - The input array should contains the elements that are at odd indices 
  - The input array length doesn't matter 

D:
--- Array 

A:
1. Iterate through the input array 
2. Create an array from the elements which are at odd indices of the input array 

  - Create a function called odditie, that accepts one param, an array 
    - Create an empty array named `resultArr` 
    - Iterate through the input array, initialize `idx` to 0
      - IF the current element index is even than add the current element to `resultArr`
    - Return `resultArr`
*/

function oddities(array) {
  let resultArr = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    if (idx % 2 === 0) {
      resultArr.push(array[idx]);
    }
  }

  return resultArr;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []