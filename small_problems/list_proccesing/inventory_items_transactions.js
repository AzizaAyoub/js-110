/*
Inventory Item Transactions
Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.
*/

/*
P: 
  - Get an inventory item ID and a list of transactions
  - Return the array containing only 
    the transactions for specified inventory item

D:

- Int: An ID, an array of transactions
- Out: An array of object(s)

A:

1. Iterate through the input array 
2. Determine the object(s) that contain that specified id
3. Return the result

  - Create a function called transactions, that accepts two params: an ID, and an array (transactions)
    - Initialize transaction to an empty array ([])
    
    - Iterate through the `transactions` array
      - Return the object(s) whose ID value is equal to specified ID item, passed in


*/


function transactionsFor(id, transactions) {
  let transaction = [];
  for (let element of transactions) {
    if (element.id === 101) {
      transaction.push(element);
    }
  }

  return transaction;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
