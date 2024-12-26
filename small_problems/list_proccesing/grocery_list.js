/*
Grocery List
Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.


*/

/*
P:
  - Get a nested collection (array) 
  - Return a one-dimensional array
  - Each element in the grocery list contains a fruit name and teh desired quantity
  - The input array should be, such that each fruit name appears the number of its desired quantity

D:
- Int: A nest array
- Out: A one-dimensional array

A:

1. Iterate through the input array
2. Return a one-dimensional array

  - Create a function called buyFruit, that accepts, one param, a nest array
    - Iterate through the Array 
      - Return: fills the array from the value of 0 index upt 1 index, flat the array 


*/

function buyFruit(arr) {
  return arr.map(arr => {
    return Array(arr[1]).fill(arr[0]);
  }).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// ------------------------------------------

function buyFruit(fruitsList) {
  return fruitsList
    .map(fruit => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }

  return result;
}