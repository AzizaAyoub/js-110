
// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

/*
Input: A number 
Output: A new number 
Rules: 
  - Get a number as argument 
  - computes the sum of all numbers between 1 and the input number (inclusive) 
  - The sum of numbers should computes which are multples of 3 and 5

D:
--- Number 

A:
1. Find out the multiples of 3 and 5 
2. computes the sum of these numbers 

Helper func: findMultiples:
Input: a number 
Output: An array 

    - Initliaze muli3And5 to an empty array 
    - Iterate through the input number, Initliaze idx to 1
      - Find out the numbers that are multiples of 3 and 5 
      - Assign the result to muli3And5 
    - Return muli3And5

Main func: multisum
Input: A number  
Output: A new number (sum)

  -- Initliaze muli3And5 array to the return value of findMultiples function 
  -- Iterate through the muli3And5 array 
    -- Add each current number with upcoming element, return the result 


*/

const log = console.log;

function findMultiples(number) {
  let muli3And5 = [];

  for (let idx = 1; idx <= number; idx += 1) {
    if (idx % 3 === 0 || idx % 5 === 0) {
      muli3And5.push(idx);
    }
  }
  return muli3And5;
}

function multisum(number) {
  let muli3And5 = findMultiples(number);
  return muli3And5.reduce((sum, currentVal) => sum += currentVal);
}

log(multisum(3));       // 3
log(multisum(5));       // 8
log(multisum(10));      // 33
log(multisum(1000));    // 234168

// Second solution 
function isMultiple(num, divisor) {
  return num % divisor === 0;
}
function multisum(maxValue) {
  let sum = 0;

  for (let num = 0; num <= maxValue; num += 1) {
    if (isMultiple(num, 3) || isMultiple(num, 5)) {
      sum += num;
    } 
  }

  return sum;

}

log(multisum(3));       // 3
log(multisum(5));       // 8
log(multisum(10));      // 33
log(multisum(1000));    // 234168
