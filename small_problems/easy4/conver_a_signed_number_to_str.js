/*
Convert a String to a Signed Number
In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.


*/

/*
P:
- Input: A string represing number
- Output: A number
- Rules:
  - The input string may have a leading + or - sign
  - If the sign is a -, returns a negative number
  - If the sign is a +, returns a positive number
  - If there is no sign returns a positive number
  - The input should always contain a valid number
  - For conversion don't use built-in methods (parseInt(), Number())
  - The input string length is not matter

D:
An array to store the string (numbers)

A:
- Iterate through the input string 
- Convert the input string to an array of strings (numbers)
- Check the current num if it's include in the numbers array

Helper func:
1. Create a function called stringToArrayOfNumbers(stringDigits)
  - Initialize numbers to an array of strings (numbers)
  - Initialize `resultArr` to empty array
  - Iterate through the input string
    - if the current num is includes in the `numbers` array, append it to `resultArr`
    - return `resultArr`

Helper func:
2. Create a function called stringToInteger(stringDigits) 
  - Get an array from the stringDigits by invoking the `stringToArrayOfNumbers` func, assign it to `numArr`
  - Initialize value to 0
  - Iterate through the `numArr`, initialize index to 0
  - Multiply value by 10, add the result with current num
  - Reassign the value
  

Main func:
3. Create a function named stringToSignedInteger(string) 
  - If string first index is a truthy value
    - If case is - return the passed string in the form of a negative integer 
    - If case is + return the passed string in the form of a positive integer
    - Otherwise also return the string as number 

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

function stringToSignedInteger(string) {

  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);

  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
