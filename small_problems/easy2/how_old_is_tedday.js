// How Old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

// Teddy is 69 years old!

/*
Input: A number 
Oupt: A number
Rules:
  - Get a number as argument 
  - Returns a random number between (20-120-inclusive)

D:
--- Number 

A:
1. generates a random age 

  - Create a function called teddyAge, that accepts one param, a number 
    - Get a random number between (20-120-inclusive)
    - First decrement (min + 1 from max) than add min to the result
    - Round down it to a whole number (integer)
    - Return random age 
*/
const log = console.log;

function randomBetween(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

log(randomBetween(20, 120));
