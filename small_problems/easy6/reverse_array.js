/*
Reversed Arrays
Write a function that takes an Array as an argument and reverses its elements in place. That is, mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().


*/

/*
P:
- Input: An array 
- Output: A reversed array
- Rules:
  - Get an array of elements
  - Reverse the elements of input array
  - The input array should mutates
  - Built-in methods shouldn't used 
  - The input array length is not matter

D:
Loop

A:
- Iterate through the input array 
- Reverse the elements of inupt array

1. Create a function called reverse(array) 
  - Initialize leftIndex to 0
  - Initialize rightIndex to the last element of the input Array

  - While leftIndex is less than the array.length divided by 2
    - Assign the rightIndex element to leftIndex
    - Assign the leftIndex element to rightIndex 
    - Increment the value of leftIndex by 1
    - Decrement the value of rightIndex by 1
  - Return array 
*/


function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
      leftIndex += 1;
      rightIndex -= 1;
  }

  return array; 
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
