// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

// Tested values are all between 0 and 100. There is no need to check for negative values or
// values greater than 100.
/*
P:
// Write a function that determines the mean (average) of the three scores passed to it, 
and returns the letter associated with that grade.

E:

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

D:
  - Input: Number
  - Output: A string letter that reperesents the grade

A:
  - Given three numbers, write a function named `getGrade`
    - initialize average to the return value of ((num1 + num2 + num3) / 3
    - if (average is greater than or equal to 90 and less than or equal to 100) 
      - return 'A'
    - else if (average is greater than or equal to 80 and less than or equal to 90) 
      - return 'B'
    - else if (average is greater than or equal to 70 and less than or equal to 80) 
      - return 'C'
    - else if (average is greater than or equal to 60 and less than or equal to 70) 
      - return 'D'
    - else if (average is greater than or equal to 50 and less than or equal to 60) 
      - return 'F'



*/

function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average <= 90) {
    return 'B';
  } else if (average >= 70 && average <= 80) {
    return 'C';
  } else if (average >= 60 && average <= 70) {
    return 'D';
  } else if (average >= 50 && average <= 60) {
     return 'F';
  }
}



console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

