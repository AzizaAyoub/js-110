// What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

/*
This first return true second return false
The loose operator convert false to 0 in times of comparing.
But the strict equality operator do not.
 
Therefore the output is like this.
*/