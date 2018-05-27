// https://www.hackerrank.com/challenges/ctci-lonely-integer/problem
// finds an integer that only appears once in an array

function main() {
  // n is the number of integers, a is the array of integers
  const n = parseInt(readLine(), 10);
  const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

  // holder for any integers that have so far only appeared once
  var possibles = [];

  for (let i=0; i<n; i++) {

    // has this int doubled? default: no
    var double = false;

    // is it in the array of possibles? if so, remove it from possibles
    for (let j=0; j<possibles.length; j++) {
      if (a[i] === possibles[j]) {
        possibles.splice(j, 1);
        double = true;
      }
    }

    // if the number shows no double as yet, add it to possibles
    if (double === false) {
      possibles.push(a[i]);
    }

  }

  // log the one remaining possible
  console.log(possibles[0]);
}
