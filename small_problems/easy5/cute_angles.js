// Cute Angles
// Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


// Note: your results may differ slightly depending on how you round values, but should generally be within a second or two of the results shown.

/*
In: number => angle
Out: string digit

- determine the degree, minutes, and seconds from the given floating point number that is angle.
- includes their corresponding symbols
- one degree is 60 minutes, 60 seconds are equal to 1 minute


degree: 
- integer part => 254

minutes: 
- (angle - degree) * 60
- 254.6 - 254 => 0.59 * 60 => 35
- minutes = 35

seconds:
- (angle - degree) * 60
- ((( 254.6 - 0.59) * 60) => 35.994 - 35) => 0.994 * 60 => 59.64
- 59

// 254°35'59"

farmula:
degree = (whole - integer)
minutes = (whole - integer) * minutes_per_degree
seconds = (((whole - integer) * 60) - minutes) * 60

A:

1. Get degree from the input number 
2. Get minutes 
3. Get seconds 

  --- 
  Create degree assign it to the whole number form input number 
  Create minutes assign it to the result of degree * 60
  Create seconds assign it to the (degree * 60) - minutes) again * 60 

  ---- Helper func padZero (number)---- 
    - Convert the number to string
    - If the number is betweeen 1-9
      - Concatenate a 0 with it
    - Othwise,return the number 
*/
const log = console.log;

const padZero = num => {
  return num.toString().padStart(2, '0');
}

const DEGREE = '\xB0';

const dms = function(num) {
  let degree = parseInt(num);
  let minutes = Math.floor((num - degree) * 60);
  let seconds = Math.floor((((num - degree) * 60) - minutes) * 60);
  return `${degree}°${padZero(minutes)}'${padZero(seconds)}"`;
};



// function padZero(num) {
//   return num >= '0' && num <=  '9';
// }


log(dms(30));           // 30°00'00"
log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
log(dms(360));          // 360°00'00" or 0°00'00"
