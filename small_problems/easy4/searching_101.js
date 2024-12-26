// Write a program that solicits six numbers from the user and logs a message that describes whether 
// the sixth number appears among the first five numbers.

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let numbers = [];

prompt('Enter the first number:');
numbers.push(Number(readline.question()));

prompt('Enter the second number:');
numbers.push(Number(readline.question()));

prompt('Enter the third number');
numbers.push(Number(readline.question()));

prompt('Enter the forth number');
numbers.push(Number(readline.question()));

prompt('Enter the fivth number');
numbers.push(Number(readline.question()));

prompt('Enter the last number');
let lastNumber = readline.question();
numbers.push(lastNumber);

if (numbers.includes(lastNumber)) {
  prompt(`The number ${lastNumber} appears in ${numbers}`);

} else {
  prompt(`The number ${lastNumber} doesn't appear in ${numbers}`);
}
