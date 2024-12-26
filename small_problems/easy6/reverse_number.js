/*
Reverse Number

Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

/*
P:
Int: Number
Out: Reverse number
Inter: Get an array of numbers

1. Convert numbers to the numbers array
2. Iterate through numbers array
3. Reverse the array
4. Return the result 
5. In result 0 shouldn't be include

- Inside the `reverseNumber` function, param: `number`
  - Convert the numbers to a string, then an array, assign it to `numsArr`

  - Reverse the `numsArr` array, assign it to `reversedNums`
  - Convert back the `reversedNums` array to number
  
  - Return `reversedNums`

*/

const log = console.log;

function reverseNumber(number) {
  let numsArr = String(number).split('');  
  let reversedNums = numsArr.reverse().join('');
  
  return parseInt(reversedNums, 10)
}
log(reverseNumber(12345));    // 54321
log(reverseNumber(12213));    // 31221
log(reverseNumber(456));      // 654
log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
log(reverseNumber(1)); // 1