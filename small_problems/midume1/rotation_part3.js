/*
Rotation (Part 3)
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, keep the first digit fixed in place and rotate the remaining digits to get 329175. Keep the first two digits fixed in place and rotate again to get 321759. Keep the first three digits fixed in place and rotate again to get 321597. Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.


*/

/*
P:
- Input: An integer
- Output: A maximum rotation of that integer

- Rules
  - In each iteartion one integer should move from left to right
  - And in each iteration the remaining intergers increment by 1 (like in first iteration 3 fixed in place, in second iteration 32 fixed in place and so on...)
  - The rotateRightmostDigits func should used

D:
- An array to store the digits of input integer

A:
Function rotateRightmostDigits(number, count):
Input: A number and a count that indicates how many digits from the right to rotate.
Output: A new number after rotating the specified digits to the right.

Steps:
  - Convert the input number into a string and split it into an array of characters (numArr).
  - Check if count is greater than the length of numArr or less than or equal to 0. If true, return the original number.
  - Extract the last count digits from numArr using slice and store them in extractedNum.
  - Remove the first digit from extractedNum and push it to the end of the array (this rotates the digits).
  - Get the unchanged part of the original number, which consists of the digits before the last count digits.
  - Concatenate unchangedPart and the modified extractedNum to form newNumArr.
  - Convert newNumArr back to a number and store it in newNum.

  Return newNum.

2. Function maxRotation(number):
Input: A number to apply maximum rotations on.
Output: The final rotated number after all possible rotations.

Steps:

  - Determine the total number of digits in the number by converting it to a string and finding its length (numberDigits).
  - Loop through count from numberDigits down to 2 (inclusive):
  - In each iteration, call rotateRightmostDigits(number, count) and update number with the returned value.
  - After all rotations, log the final result.
*/

const log = console.log;




function rotateRightmostDigits(number, count) {  
  let numArr = String(number).split('');  
  
  if (count > numArr.length || count <= 0) return number; 

   
  let extractedNum = numArr.slice(-count);  
  
  let firstDigit = extractedNum.shift();   
  extractedNum.push(firstDigit);   

  let unchangedPart = numArr.slice(0, numArr.length - count);  

 
  let newNumArr = unchangedPart.concat(extractedNum);  
  let newNum = Number(newNumArr.join('')); 

  return newNum;   
}  

function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  log(number);
}
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845