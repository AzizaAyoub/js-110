// Given a number and an array, determine whether the number is included in the array.

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1)); // false
console.log(numbers.includes(number2)); // true

/*
To check whether a number exist in an array we can use the includes method, if the number exist it 
returns true, if not, returns false
*/