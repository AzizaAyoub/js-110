/*
Rotation (Part 1)
Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.

*/

/*
P:
- input: An array 
- Output: An array
- Rules:
  - Rotate the input array by moving the first element to the end
  - The input array should not modify
  - If the input array is empty return empty array
  - If the input is not an array return undefined
  - Input array can contain any type of values
  - The input array length is not matter

D:
- 

A:
- Get a deep copy of original array
- Iterate over the copyed array
- slice the first element from copy array
- Append it to the end of the copyed array

  - Create a function called rotateArray(array)
    - If inupt array is empty return empty []
    - If input array is not an array return `undefined`

    - Create a deep copy of the input array, assign the result to `deepCopy` variable
    - shift the first element from `deepCopy` 
    - Append it to the end of the `deepCopy`

    - return `deepCopy`
*/

const log = console.log;

function rotateArray(array) {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];

  let  deepCopy = JSON.parse(JSON.stringify(array));

  deepCopy.push(deepCopy.shift());

  return deepCopy;



}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
log(rotateArray());                         // undefined
log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
log(rotateArray(array));                    // [2, 3, 4, 1]
log(array);                                 // [1, 2, 3, 4]