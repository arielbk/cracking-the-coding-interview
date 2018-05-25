// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem
// there are a couple of tricks here ... I need to watch out for multiple letters
// (and related to this) JavaScript arrays are defined by reference...

function main() {
    const a = readLine();
    const b = readLine();

    // log deletions from strings A to B and from B to A
    console.log((countDeletions(a, b) + countDeletions(b, a)));
}

// strings are passed in so that actual values of array are not altered
function countDeletions(firstString, secondString) {

    var firstArray = firstString.split('');
    var secondArray = secondString.split('');

    // begin deletions counter
    var deletions = 0;

    // for every letter in first array
    for (let i = 0; i < firstArray.length; i++) {

        // is the letter in first array also in second array? Default: no
        var common = false;

        // for every letter in the second array
        for (let j = 0; j < secondArray.length; j++) {
            if (firstArray[i] === secondArray[j]) {
                common = true;

                // this is a necessary 'null' character to account for multiple letters
                secondArray[j] = 0;

                // if a common letter is found, effectively break this for loop
                j = secondArray.length
            }
        }

        // if letter is not in common, increase the deletions counter
        if (common === false) {
            deletions++
        }
    }

    // return total number of deletions
    return deletions;
}
