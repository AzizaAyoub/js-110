/*Rotation (Part 2)
Write a function that rotates the last count digits of a number. To perform the rotation, move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.

*/

/*
P:
- Input: two numbers
- Output: A rotated number 
- Rules: 
  - Get the last count digits of the input number
  - Move the first of the digits to the end 
  - And shift the remaining digits to the left

D:
Array: to store the input number digits
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

// Test cases  
log(rotateRightmostDigits(735291, 1));      // 735291  
log(rotateRightmostDigits(735291, 2));      // 735219  
log(rotateRightmostDigits(735291, 3));      // 735912  
log(rotateRightmostDigits(735291, 4));      // 732915  
log(rotateRightmostDigits(735291, 5));      // 752913  
log(rotateRightmostDigits(735291, 6));      // 352917