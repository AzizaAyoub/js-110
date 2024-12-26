// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

/*
To determine whether a given string ends with an exclamation mark or another specific mark,
we can use the `endsWith` method. Something like:
*/

console.log(str1.endsWith('!')); // true
console.log(str2.endsWith('!')); // false