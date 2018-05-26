// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
// recursive function to return the nth fibonacci number

function fibonacci(n) {

  // account for first two fibonacci numbers: 0 and 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // and now for recursive elegance
  return fibonacci(n-2) + fibonacci(n-1);
}
