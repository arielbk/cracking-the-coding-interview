// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem
// bubble sorts a list of numbers of length n and prints how many swaps it took, the first and the last element

function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);

  // start a counter for number of swaps
  var counter = 0;

  // maximum rounds it will take to swap all the elements, is the total number of elements
  for (let i = 0; i < n; i++) {

    // for every pair of elements
    for (let j = 0; j < n-1; j++) {

      // if elements are out of order, swap them
      if (a[j] > a[j+1]) {
        var temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;

        counter++;
      }
    }
  }

  console.log('Array is sorted in ' + counter + ' swaps.');
  console.log('First Element: ' + a[0]);
  console.log('Last Element: ' + a[n-1]);
}
