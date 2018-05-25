// https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// this works, but does not utilise a hash table

function main() {
  const mn = readLine().split(' ');

  // the number of words in the magazine
  const m = parseInt(mn[0], 10);

  // the number of words in the ransom note
  const n = parseInt(mn[1], 10);

  // the actual words in the magazine, as an array
  const magazine = readLine().split(' ');

  // the actual words in the ransom, as an array
  const ransom = readLine().split(' ');

  // for every word in ransom note
  for (let i = 0; i < n; i++) {

    // does ransom word also exist in magazine? default: no
    var match = false;

    // for every word in magazine
    for (let j = 0; j < m; j++) {
      if (ransom[i] === magazine[j]) {

        // make it null, it is 'used' already
        magazine[j] = null;

        // we have a match
        match = true;

        // break the outer for loop
        j = m;
      }
    }

    // if no match has been made, it is not possible to make the ransom from available words
    if (match === false) {
      i = n;
      console.log('No');

      // and end the function
      return 0;
    }
  }

  // match must be be true
  console.log('Yes');

  return 0;
}
