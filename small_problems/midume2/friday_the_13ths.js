// Unlucky Days
// Some people believe that Fridays that fall on the 13th day of the month are unlucky days. Write a function that takes a year as an argument and returns the number of Friday the 13ths in that year. You may assume that the year is greater than 1752, which is when the United Kingdom adopted the modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

/*
input: a number (year)
output: a number (count)
rules: 
  - The input year should be greater than 1752
  - Get the number of Friday that 13ths in the input year 

D:
Array: to store the month of the year
Array: to store the days of a week 


A:
- Iterate through each month
- Get the days that falls the 13ths 
- Count the the day that falls on Friday 
  - Initialize thitheen to empty array
  - Iterate through the from strat from 0 
    - Get the  days that falls tha 13th 
  - Iterate through the thirtheens array, use count and day as param 
    - IF the current day is equal to Friday 
      - Increment count by one 
    - Else return count 
*/

const log = console.log; 

function fridayThe13ths(year) {
  let thirtheens = []; 

  for (let month = 0; month < 12; month += 1) {
    thirtheens.push(new Date(year, month, 13));
  }

  return thirtheens.reduce((count, day) => {
    return day.getDay() === 5 ? (count + 1) : count;
  }, 0)
}

log(fridayThe13ths(1986));      // 1
log(fridayThe13ths(2015));      // 3
log(fridayThe13ths(2017));      // 2