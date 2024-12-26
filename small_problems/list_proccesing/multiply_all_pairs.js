/*
Multiply All Pairs
Write a function that takes two array arguments, each containing a list of numbers, 
and returns a new array containing the products of all combinations of number pairs 
that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.
*/

/*
P:
    - Get two arrays as argument
    - Multiply each number with its pair 
    - Return an array that contain the products of all number pairs
    - The input arrays shouldn't be empty

D:

- Int: Two arrays of numbers
- Out: An array of products


A:

1. Iterate through the input arrays
2. Multiply the numbers that exist between the two arrays
3. Return an array of products 

    - Create a function called multiplyAllPairs, that accepts two params, Array
        - Initialize `multipyedPairs` to an empty array ([])

        - Iterate through the input array (first arr1)
            - Iterate through the input array (second arr2)
                - Multipy that numbers together, append the result to `multiplyedPairs`

        - Return `multiplyedPairs`
        

*/

function multiplyAllPairs(arr1, arr2) {
  let multiplyAllPairs = [];

  arr1.forEach(number1 => {
    arr2.forEach(number2 => {
        multiplyAllPairs.push(number1 * number2);
    })
  });

  return multiplyAllPairs;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]