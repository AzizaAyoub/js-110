// Build a program that logs when the user will retire and how many more years the user has 
// to work until retirement.

/*
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
*/

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}


prompt('What is your age?');
let currentAge = Number(readline.question());

prompt('At what age would you like to retire?');
let retirementAge = Number(readline.question());



let workYearsToGo = retirementAge - currentAge;
let retirementYear = 2024 + workYearsToGo

prompt(`It's 2024. You will retire in ${retirementYear}`);
prompt(`You have only ${workYearsToGo}`);