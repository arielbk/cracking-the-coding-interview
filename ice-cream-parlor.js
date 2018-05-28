// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem
// to make the story of the problem logical:
// find which 2 elements in arr add together to make var money
// test cases are complex - this solution works but times out on them... binary search?

// function solve(arr, money) {
//
//   // their n cannot be trusted - make my own
//   n = arr.length;
//
//   // loop through every element in the array
//   for (let i=0; i<n; i++) {
//     // assign the first flavor
//     var flavour1 = arr[i]
//
//     // create an array with other possible flavors
//     // because 'objects' are passed by reference, we use this trick
//     var possibles = JSON.parse(JSON.stringify(arr));
//     // remove this possibility, but preserve original index
//     possibles[i] = null;
//
//     // loop through every other element in the array
//     for (let j=0; j<n; j++) {
//
//       // we found the unique combination
//       if (arr[i] + possibles[j] === money && possibles[j] !== null) {
//         // log it and return (problem uses 1 index so +1)
//         console.log((i+1) + ' ' + (j+1));
//         return 0;
//       }
//     }
//   }
// }

// START AGAIN AND USE BINARY SEARCH...

// Complete the solve function below.
function solve(arr, money) {

  // first, sort the array and remove any flavours that are too expensive altogether
  const sortedArr = arr
    .filter(price => price<=money)
    .sort((a,b) => a-b)

  // set n as the current length of sorted possibilities
  const n = sortedArr.length;

  for (let i = 0; i<n; i++) {
    // remove end element and assign it to current
    let current = sortedArr.pop();
    // search for our current elements counterpart
    let query = money - current;

    // if binary search finds a counterpart
    if (binarySearch(sortedArr, query)) {
      // log the indexes (+1 since hackerrank asks for 1-base index)
      console.log(arr.indexOf(query)+1, arr.indexOf(current)+1);
      return;
    }
  }
  // Reached end of loop, no matches
  console.log('No match found :(');
}

// binary search function
function binarySearch(sortedArray, query) {
  if (sortedArray[midpoint] === query) { // found it!
    return query;
  }

  // whole number midpoint of input array
  var midpoint = Math.floor(sortedArray.length/2);

  if (sortedArray[midpoint] > query) { // search left half (recursion)
    sortedArray = sortedArray.slice(0, midpoint);
    return binarySearch(sortedArray, query)

  } else (sortedArray[midpoint] < query) { // search right half (recursion)
    sortedArray = sortedArray.slice(midpoint+1);
    return binarySearch(sortedArray, query);
  }
}
