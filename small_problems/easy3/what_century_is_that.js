// Write a function that takes a year as input and returns the century. 
// The return value should be a string that begins with the century number, and ends with 'st', 'nd',
//  'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

/*
P:
// Write a function that takes a year as input and returns the century. 
// The return value should be a string that begins with the century number, and ends with 'st', 'nd',
//  'rd', or 'th' as appropriate for that number.

E:



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

D:
  - Number 
  - String

A:
 
*/

const log = console.log;

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (centuryNumber % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber) % 100) {
    return 'th'
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === '11' || lastTwo === '12' || lastTwo === '13';
}

log(century(2000));        // "20th"
log(century(2001));        // "21st"
log(century(1965));        // "20th"
log(century(256));         // "3rd"
log(century(5));           // "1st"
log(century(10103));       // "102nd"
log(century(1052));        // "11th"
log(century(1127));        // "12th"
log(century(11201));       // "113th"





