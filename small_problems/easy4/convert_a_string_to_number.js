// The parseInt() method converts a string of numeric characters (including an optional plus or 
// minus sign) to an integer. The method takes 2 arguments where the first argument is the string 
// we want to convert and the second argument should always be 10 for our purposes. parseInt() and 
// the Number() method behave similarly. In this exercise, you will create a function that does the 
// same thing.

// Write a function that takes a string of digits and returns the appropriate number as an integer. 
// You may not use any of the methods mentioned above.

/*
P: 
  - Get an numbers in string version
  - Returns numbers in number version
  - Built-in methods shouldn't be used


D:
Int: String
Out: Number
Inter: An array of numbers

A:
- Get the array of numbers from the input string digits
- Join the number elements in the array as one integer
- Return the integer
-------------------------------

Helper func: stringToArrayOfNumbers, param: stringDigits
1. Initialize an array of strings `numbers` (0-9)
2. Initialize an empty `resultArr` array 

3. Iterate through numb
4.Get the index of current number in `numbers`, push it  `resultArr`
5. Return `resultArr`
------------------------

Main Func: stringToInteger, param: stringDigits
1. Get the `numbers` array of stringDigits
2. Initialize `value` to 0;
3. Iterate through `numbers`
 - Multiply `value` by 10, add the result to currentNum
 - Reassign `value` to the result
4. Return `value`

*/

const log = console.log;

function stringToArrayOfNumbers(stringDigits) {
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultArr = [];

  for (let char of stringDigits) {
    if (numbers.includes(char)) resultArr.push(char)
  }
  return resultArr;

}

function stringToInteger(stringDigits) {
  let numArr = stringToArrayOfNumbers(stringDigits);
  let value = 0;

  for (let i = 0; i < numArr.length; i += 1) {
    value = (value * 10) + Number(numArr[i]);
  }

  return value;
}

// // Test Cases:
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
