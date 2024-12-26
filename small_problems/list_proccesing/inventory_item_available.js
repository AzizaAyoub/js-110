/*
Inventory Item Availability
Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

You may (and should) use the transactionsFor function from the previous exercise.

*/

/*
P:
  - Get an id, and an array of (transactions)
  - Returns true or false based on whether or not an inventory item is available.

D:
- Int: An id, and an arrray
- Out: A boolean value (true, false)

A:

1. Iterate through the input array
2. Determine whether the value of `quantity` is greater than 0
3. Return the result

  - Create a function called isItemAvailable, that accepts two params: an id and an array of (transactions)
    - Initialize `sum` to 0
    - Iterate through the input array
      - If `id` is equal to the passed `id` and  value of movment is equal to string 'in'
        - Add the value of `quantity` with `sum`
        - Check whether `sum` is greater than 0, if so, return true
        - Else return false


  - Create a function called transactions, that accepts two params: an ID, and an array (transactions)
    - Initialize transaction to an empty array ([])
    
    - Iterate through the `transactions` array
      - Return the object(s) whose ID value is equal to specified ID item, passed in



*/

const log = console.log;  

function transactionsFor(id, transactions) {  
  let transaction = [];  
  for (let element of transactions) {  
    if (element.id === id) {  // Fixed hardcoded id  
      transaction.push(element);  
    }  
  }  
  return transaction;  
}  

function isItemAvailable(id, array) {  
  let transactionsObj = transactionsFor(id, array);  
  let sum = transactionsObj.reduce((sum, transaction) => {  
    if (transaction.movement === 'in') {  
      return sum + transaction.quantity;    
    } else {  
      return sum - transaction.quantity;   
    }  
  }, 0);  

  return sum > 0;  
}  

let transactions = [   
  { id: 101, movement: 'in',  quantity: 5 },  
  { id: 105, movement: 'in',  quantity: 10 },  
  { id: 102, movement: 'out', quantity: 17 },  
  { id: 101, movement: 'in',  quantity: 12 },  
  { id: 103, movement: 'out', quantity: 20 },  
  { id: 102, movement: 'out', quantity: 15 },  
  { id: 105, movement: 'in',  quantity: 25 },  
  { id: 101, movement: 'out', quantity: 18 },  
  { id: 102, movement: 'in',  quantity: 22 },  
  { id: 103, movement: 'out', quantity: 15 },  
];  

log(isItemAvailable(101, transactions)); // false  
log(isItemAvailable(103, transactions)); // false  
log(isItemAvailable(105, transactions)); // true



// -------------------------------------------------------------
// Inventory Item Availability
// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.


let transaction = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];




/*
-Were trying to see based on the trasaction id number if an item is available or not- we must determin this by calc. the total quantity of the item based on its movement "in" and "out"


-- Input: id number and the `transactions` object
-- Output: boolean

-- helper function 
--loop


1. use a helper function to filter through the main `transactions` array to get all of the specific id objects
2. main function `is item available 
-- based on `movement` calculate the total quantites
-- if the quantity is > 0
-- reurn true (its available)
--- else false 


- Helper Function:
-declare a function `transactionsFor` that accepts two params -> `itemId` and the `transactions` array
return transaction array (filtered through) to get the transaction.id === (mathches) itemId


-Main Function:
`isItemAvailable` -> accept (itemId, transactions) 

- declare a variable `numOfTransactions` set it equal to the return value of our helper function

- declare a variable `total` set it equal to 0

-iterate over `numOfTransaction` 
- if the transaction.movement === 'in'
-then add `transaction.quanitiy` to the `total`variable
- else if the `transation.movent` === 'out' 
- then subtract `transaction.quantity` from the `total` variable

return `total` > 0
*/



function transactionsFor(itemId, transactions) {
return transactions.filter(transaction => transaction.id === itemId);
}

function isItemAvailable(itemId, transactions) {
const itemTransactions = transactionsFor(itemId, transactions);

let totalQuantity = 0;

itemTransactions.forEach(transaction => {
if (transaction.movement === 'in') {
totalQuantity += transaction.quantity;
} else if (transaction.movement === 'out') {
totalQuantity -= transaction.quantity;
}
});

return totalQuantity > 0;
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

