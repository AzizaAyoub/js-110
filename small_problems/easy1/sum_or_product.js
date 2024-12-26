// Sum or Product of Consecutive Integers
// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Copy Code
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


/*
Input: A number greater than 0
Ouput: A number (sum or product)
Rules: 
  - Get a number greater than 0
  - IF the user enter  "s" returns the sum of the numbers from 1 upt the input number 
  - IF the user enter "p" retruns the product of the numbers from 1 upt the input number
D:
- Number 

A:
1. Calculate the sum of numbers from 1 upt input number
2. Calculate the product of numbers from 1 upt input number 


Helper func: sum 
input: number 
output: sum of the input number 

  - Initialize total to 0
  - Iterate through the input number, Initialize i to 1
    - Add the value of total to i, until i is less/equal to input number 

  - Retrun total 

Helper func: product
Input: number 
Ouput: product input number 

  - Initialize total to 1
  - Iterate through the input number Initialize i to 1
    - multiply the value of total with i, until i is less/equal to input number

  - Retrun total 

  - Create a function called sumOrProduct, that accepts two params, number, operation 

    - IF the second argument is "s" character 
      - Calculate the sum of numbers from 1 upt input number
    - IF the second argument is "p" character 
      - Calculate the product of numbers from 1 upt input number

  If s: Return sum 
  If p: Return product
*/

function sum(number) {
  let total = 0; 

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}


function product(number) {
  let total = 1; 

  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}


function sumOrProduct(number, operation) {
  if (operation.toLowerCase() === 's') {
    return `The sum of the integers between 1 and ${number} is ${sum(number)}`;
  } else {
    return `The product of the integers between 1 and ${number} is ${product(number)}`
  }
}

console.log(sumOrProduct(5, 's'));
console.log(sumOrProduct(6, 'p'));