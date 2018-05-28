// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
// to make the story of the problem logical:
// find which 2 elements in arr add together to make var money
// test cases are complex - this solution works but times out on them... binary search?

function solve(arr, money) {

  // their n cannot be trusted - make my own
  n = arr.length;

  // loop through every element in the array
  for (let i=0; i<n; i++) {
    // assign the first flavor
    var flavour1 = arr[i]

    // create an array with other possible flavors
    // because 'objects' are passed by reference, we use this trick
    var possibles = JSON.parse(JSON.stringify(arr));
    // remove this possibility, but preserve original index
    possibles[i] = null;

    // loop through every other element in the array
    for (let j=0; j<n; j++) {

      // we found the unique combination
      if (arr[i] + possibles[j] === money && possibles[j] !== null) {
        //log it and return (problem uses 1 index so +1)
        console.log((i+1) + ' ' + (j+1));
        return 0;
      }
    }
  }
}
