// Write a function that takes an array as an argument and returns an array that contains two element,
// each of which is an array. Put the first half of the original array elements in the first element 
// of the return value, and put the second half in the second element. If the original array contains 
// an odd number of elements, place the middle element in the first half array.

/*
P:
  - Get an array as argument
  - Return an array that contain two elements
  - Each element should be an array
  - First array should contain the first half of the original array
  - Second array should contain the second half of the original array
  - If the original array length is odd, place the middle element in the first arr

A:
2. Get the first half of the input array 
3. Get the second half of the input array 
----- ---

  - Create a function called halvsies, that accepts one param, an array 
    - Initialize empty array named, resultArray 
    - Get the half of the input array 
    - Slice off the first half from the input array start frorm idex 0 upt `half` assign it to firstHalf 
    - Slice off the second half from the input array start from `half` upt array length assign it to secondHalf 
    - Append both firstHalf and secondHalf to the resultArray 

    - Return resultArray

*/
const log = console.log;

function halvsies(array) {
  let resultArray = [];
  let half = Math.ceil(array.length / 2)
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);

  resultArray.push(firstHalf, secondHalf);
  return resultArray;
}

log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
log(halvsies([5]));                // [[5], []]
log(halvsies([]));                 // [[], []]
