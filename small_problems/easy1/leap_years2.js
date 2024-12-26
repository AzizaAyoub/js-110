// Leap Years (Part 2)
// This is a continuation of the previous exercise.

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

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
    - IF the year is before 1752 and evenly divisible by 400, 
      - Return true 
    - IF the year is evenly divisible by 100 
      - Return false 
    - IF the year is evenly divisible by 4 
      - Retruns true
*/
const log = console.log;

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true; 
  } else if (year % 400 === 0) {
    return true; 
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
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
log(isLeapYear(1700));      // true
log(isLeapYear(1));         // false
log(isLeapYear(100));       // true
log(isLeapYear(400));       // true
