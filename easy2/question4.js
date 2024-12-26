// Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

console.log("Four score and ".concat(famousWords));
console.log("Four score and " + famousWords);

/*
We can use the concat method for the first way and for the second way we can use the + operator
*/