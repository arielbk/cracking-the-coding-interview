// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
// a is an array passed in, d is the number of times to rotate the array
// returns a rotated array

// where a is the input for the array, and d is the number of rotations to perform
function solve(a, d) {
    // Rotate the array
    for (let i = 0; i < d; i++) {
      // remove the first element off the array and assign it to last
      var last = a.shift();
      // push it to the end of the array
      a.push(last);
    }
    return a;
}
