// Write a program that prompts the user for two positive integers, and then prints the 
// results of the following operations on those two numbers: addition, subtraction, product, 
// quotient, remainder, and power. Do not worry about validating the input.

/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

const readline = require('readline-sync'); 

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt('Enter the first number:');
let firstNum = Number(readline.question());

prompt('Enter the second number:');
let secondNum = Number(readline.question());

let addition = firstNum + secondNum;
let multiplcation = firstNum * secondNum;
let division = firstNum / secondNum;
let subtraction = firstNum - secondNum;
let power = firstNum ** secondNum;
let remainder = firstNum % secondNum;

prompt(`${firstNum} + ${secondNum} = ${addition}`)
prompt(`${firstNum} * ${secondNum} = ${multiplcation}`)
prompt(`${firstNum} / ${secondNum} = ${division}`)
prompt(`${firstNum} - ${secondNum} = ${subtraction}`)
prompt(`${firstNum} ** ${secondNum} = ${power}`)
prompt(`${firstNum} % ${secondNum} = ${remainder}`);