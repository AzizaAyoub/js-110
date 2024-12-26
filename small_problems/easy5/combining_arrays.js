/*
Combining Arrays

Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

Example:

*/

/*
P:
  - Get two arrays of numbers
  - Retrun an array of union values from both arrays
  - Values shouldn't be duplicated
  

D:
Int: Arrays
Out: An Array

A:
  1. Combine both arrays
  2. Iterate through both arrays
  3. return the result


  - Initialize result to empty array
  - Combine both arrays assign it to `combinedArr`
  - Iterate through the combinedArr array
    - if currentNum doesn't exist in result
      - append it to result
    
  - Return result
  */

  let l = console.log;
  
 // First approach:
  function union(arr1, arr2) {
    let result = [];
    let combinedArr = arr1.concat(arr2);
  
    combinedArr.forEach(num => {
      if (!result.includes(num)) {
        result.push(num);
      } 
    })
  
    return result;
  }
  

  // Second approach:
  function union(arr1, arr2) {
    let combinedArr = arr1.concat(arr2);
    return combinedArr.filter((num, idx) => {
      l({idx},  `indexOf: ${combinedArr.indexOf(num)}`, {num});
      return idx === combinedArr.indexOf(num);
    })
  }
  // [1, 3, 5, 3, 6, 5, 9]
  // iteration 1; idx = 0, num = 1
  // indexOf(num): 0
  // iteration 2; idx = 1, num = 3
  // indexOf(num): 1
  // / iteration 3; idx = 2; num = 5
  // indexOf(num): 2
  //  iteration 4; idx = 3; num = 3
  // indexOf(num): 1
  // iteration 5; idx = 4; num = 6
  // indexOf(num): 4
  // / iteration 5; idx = 5; num = 5
  // indexOf(num): 2
  //  iteration 6; idx = 6; num = 9
  // indexOf(num): 6
  
  
  
  l(union([1, 3, 5], [3, 6, 6, 1, 9]));    // [1, 3, 5, 6, 9]