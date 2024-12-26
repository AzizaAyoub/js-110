// Write a function that takes a positive integer, n, as an argument and logs a right triangle 
// whose sides each have n stars. The hypotenuse of the triangle (the diagonal side in the images 
// below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

function triangle(numbers) {
  let spaces = numbers - 1;
  let stars = 1;

  while (numbers > 0) {
    console.log(' '.repeat(spaces) + '*'.repeat(stars));

    spaces -= 1;
    stars += 1;
    numbers -= 1
  }
}