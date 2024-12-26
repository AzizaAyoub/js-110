/* How Many?  Time: 8:50AM

Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").


*/

/*
P:
  - Get an array
  - counts the number of occurrences of each element
  - Return each element alongside the number of occurrences
  - Consider case sensitive ("suv" !== "SUV")
  

D:
Int: - Array of elements
Out: - String

A:
  1. Iterate through input array
  2. Return result

  - Inside the `countOccurrences` function 
  ----------------------------------------
    - Initialize `counted` to zero

    - Iterate through input array
     - If it exists, increment its count by 1.
    - If it does not exist, initialize it to 0 and then increment its count by 1.


    - Return countOccurrences

  - Inside the logOccurrences function
  ---------------------------------------
    - Iterate through the array 
      - Log each item with its occurrences


  - Invoke the countOccurrences function pass an array as argument, assign the return value to `counted` var
  - Invoke the logOccurrences pass counted as argument
*/
const log = console.log;  

function countOccurrences(array) {  
  let countOccurrences = {};  

  for (let i = 0; i < array.length; i += 1) {  
     // Initialize to 0 if it does not exist, then increment  
     countOccurrences[array[i]] = (countOccurrences[array[i]] || 0) + 1;  
  }  

  // Return the object itself, no need for `log` here  
  return countOccurrences;  
}  

function logOccurrences(occurrences) {  
  for (let item in occurrences) {  
    log(`${item} => ${occurrences[item]}`); // Use occurrences[item]  
  }  
}  

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',  
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];  

const counted = countOccurrences(vehicles); // Get the counts  
logOccurrences(counted); // Just log the occurrences

/*
console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2
suv => 1
*/