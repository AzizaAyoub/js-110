// A double number is an even-length number whose left-side digits are exactly the same as 
// its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 
// 444, 334433, and 107 are not.


/*
P:
// Write a function that returns the number provided as an argument multiplied by two, 
// unless the argument is a double number; otherwise, return the double number as-is.

E:
console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888

D:
  - Number 

A:
  - Given a number write a function named `twice`
    - initialize `numToString` to the return value of `String(num)`
    - initialize `center` to the return value of `Math.floo()`
    - initialize `lefteNum` to the left side of the `num` parameter
    - initialize `rightNum` to the right side of the `num` parameter
    - initialize `index` to 0

    - iterate over the num value
      - if the leftNum is equal to the rightNum 
        - return the initial number as-is in the form of Number
      - else 
        return number * 2
*/


const log = console.log;

function isDouble(number) {
  let numberToString = String(number);
  let center = numberToString.length / 2;
  let leftSide = numberToString.substring(0, center);
  let rightSide = numberToString.substring(center);

  return leftSide === rightSide

}

// isDouble(37);

function twice(number) {
 return isDouble(number) ? number : number * 2;
}

// Second way:

function twice(number) {
  if(isDouble(number)){
    return number 
  } else {
    return number * 2;
 } 
}

log(twice(37));          // 74
log(twice(44));          // 44
log(twice(334433));      // 668866
log(twice(444));         // 888
log(twice(107));         // 214
log(twice(103103));      // 103103
log(twice(3333));        // 3333
log(twice(7676));        // 7676
