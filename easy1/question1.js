// Will the code below raise an error?


let numbers = [1, 2, 3];
numbers[6] = 5;

/*
No this code doesn't raise an error, instead it larges the length of the numbers array 
(declared on line 4)

Whenever, we large the length of the array without adding new elements it just large the length 
of the array and add empty slots.

So, now in numbers there are 3 initial elements and 3 empty slots.
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/*
Last line will return undefined, but there is no element even undefined.
*/