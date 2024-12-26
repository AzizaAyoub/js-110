// The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
// Both of these methods mutate the original array as shown below. Write two distinct ways of 
// reversing the array without mutating the original array. Use reverse for the first solution, 
// and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(numbers); // [1, 2, 3, 4, 5]

numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [1, 2, 3, 4, 5]

/*
For both of the operation we can use the slice method to make a copy of the original array
and then use the reverse and sort method in the case our original array won't mutate.
*/