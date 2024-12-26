/*
Combine Two Lists Time 6:22PM

Write a function that combines two arrays passed as arguments, and returns a new array that contains 
all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.

Example:

*/
/*
P:
- Get two arrays that contains same number of elements
- Return a new array that contains all the elements of input arrays
- With each element taken in alternation
- Input arrays shouldn't be empty

A:

1. Iterate through input arrays 
2. Return result

- Inside the interleave function
-------------------------------------
  - Initialize result to an empty array

  - Iterate through arr1
    - If index is less than the length of arr2 
      - Append one element form arr1 and one from arr2 to the result
  
  - Return result
*/

const log = console.log;

function interleave(arr1, arr2) {
  let result = [];

  for (let i = 0; i < combinedArr.length; i += 1) {
    if (i < arr1.length) {
      result.push(arr1[i], arr2[i]);
    }
  }

  log(result);
  
}
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
