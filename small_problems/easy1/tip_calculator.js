// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. 
// The program must compute the tip, and then log both the tip and the total amount of the bill 
// to the console. You can ignore input validation and assume that the user will enter numbers.

/*
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

const readline = require('readline-sync');

function prompt(msg) {
	console.log(`=> ${msg}`);
}

prompt('What is the bill?');
let billAmount = Number(readline.question());

prompt('What is the tip parcentage?');
let tipParcentage = Number(readline.question());

let tip = (billAmount / 100) * tipParcentage;
let total = billAmount + tip;
console.log(total);

prompt(`The tip is $${tip.toFixed(2)}`);
prompt(`The total is $${total.toFixed(2)}`);