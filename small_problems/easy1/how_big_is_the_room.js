// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

// Example:

/*
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

// Import the readline library:
const readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

// define prompt function:
function prompt(msg) {
    console.log(`=> ${msg}`);
}

prompt('What is the length of the room, in meters?');
let lengthOfRomm = parseInt(readline.question(), 10);

prompt('What is the width of the room, in meters?');
let widthOfRoom = parseInt(readline.question(), 10);

let areaInMeters = (lengthOfRomm * widthOfRoom);
let areaInSqFeet = (areaInMeters * SQMETERS_TO_SQFEET);

prompt(
    `The area of the room in is ${areaInMeters.toFixed(2)} in square meters,
     ${areaInSqFeet.toFixed(2)} in sqare feet.`
)
