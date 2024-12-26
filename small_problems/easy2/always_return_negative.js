// Always Return Negative
// Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

/*
Input: A number 
Output: A negative number
Rules: 
  - Get a number as argument 
  - Return the negative form of the input number 

D:
--- Number 

A:
1. Get the negative number from the input number 

  - Create a function negative, that accepts one param, a string 
    - If the input number is less than 0
      - Return number 
    - Else return -number 
*/

const log = console.log;

function negative(number) {
  if (number < 0) {
    return number;
  } else {
    return -number
  }
}

// Second solution 

function negative(number) {
  return Math.abs(number) * -1;
}

log(negative(5));     // -5
log(negative(-3));    // -3
log(negative(0));     // -0