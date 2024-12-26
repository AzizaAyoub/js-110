/*
After Midnight (Part 1)
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

You may not use javascript's Date class methods.

A:
1. Determine the time of day before midnight
2. Determine the time of day after midnight
3. Format the time in hh:mm and return it
-----------
1. Initialize TOTAL_HOURS  to 24
2. Initialize MINUTES_PER_HOUR t0 60;
3. Initialize MINUTES_PER_DAY to TOTAL_HOURS * MINUTES_PER_HOUR

4. If `minutes` is less than 0
 - Get its absolute value assign it to positiveMinutes
 - reassign `minutes` to (minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY
5. If minutes is not less than 0
 - reassing minutes to minutes % MINUTES_PER_DAY

6. Get the hour, initialize it to dividing minutes by MINUTES_PER_HOUR rounded down to the nearest integer
6. Get the remainingMinutes by finding the remainder of minutes % MINUTES_PER_HOUR

7. return the hour and minutes padded with zero if necessary
*/

function padZero(num) {
  return String(num).padStart(2, '0');
}

function timeOfDay(minutes) {
  let TOTAL_HOURS = 24;
  let MINUTES_PER_HOUR = 60;
  let MINUTES_PER_DAY = TOTAL_HOURS * MINUTES_PER_HOUR;

  if (minutes < 0) {
    minutes = (minutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
    // console.log({minutes})
  } else {
    minutes = minutes % MINUTES_PER_DAY;
  }
 
  let hour = Math.floor( minutes / MINUTES_PER_HOUR);
  let remainingMinutes = minutes % MINUTES_PER_HOUR;
  return `${padZero(hour)}:${padZero(remainingMinutes)}`;
}


console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.

