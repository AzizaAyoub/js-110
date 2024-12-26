/*
Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, and returns the result as a string with the
 value rounded to three decimal places.



*/

/*
P:
  - Get an array of integers
  - Return the average in string version,
  - rounded to three decimal places


  - Inside the `multiplicativeAverage` function 
  --------------------------------------------
    - Initialize `product` to 0
    - Initialize `length` to the length of input array
    
    - Iterate through input array
      - multiply each number, assign the result to `product`
    
    - Divide `product` by the length of the array, initialize `average` to it
    - Round down average to a three dicimal places and return

    
*/

let log = console.log;

function multiplicativeAverage(array) {
  let product = 1;
  let length = array.length;

  for (let i = 0; i < array.length; i += 1) {
    product *= array[i];
  }

  let average = product / length;
  return average.toFixed(3);
}

log(multiplicativeAverage([3, 5]));                   // "7.500"
log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"