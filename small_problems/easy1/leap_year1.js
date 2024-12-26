// Leap Years (Part 1)
// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.


/*
Input: A number (year)
Output: Boolean (true, false)
Rules: 
  - Get a number (year) greater than 0
  - If the input year is leap year retrun true 
  - If the input number is not a year returns false 

D:
-- Number 
-- Boolean 

A:
1. Determine the leap Years

  - Create a function called isLeapYear, that accepts one param a `year`
    - IF the year is evenly divisible by 400, 
      - Return true 
    - IF the year is evenly divisible by 100 
      - Return false 
    - IF the year is evenly divisible by 4 
      - Retruns true
*/

const log = console.log;

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true; 
  } else if (year % 100 === 0) {
    return false 
  } else {
    return year % 4 === 0;
  }
}

// Second solution:

function isLeapYear(year) {
  return (year % 400 === 0) ||  (year % 4 === 0 && year % 100 !== 0)? true : false 
}


log(isLeapYear(2016));      // true
log(isLeapYear(2015));      // false
log(isLeapYear(2100));      // false
log(isLeapYear(2400));      // true
log(isLeapYear(240000));    // true
log(isLeapYear(240001));    // false
log(isLeapYear(2000));      // true
log(isLeapYear(1900));      // false
log(isLeapYear(1752));      // true
log(isLeapYear(1700));      // false
log(isLeapYear(1));         // false
log(isLeapYear(100));       // false
log(isLeapYear(400));       // true