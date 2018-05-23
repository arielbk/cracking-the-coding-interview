function solve(a, d) {
    var arr = [];
    // Create the array
    for (let i = 1; i <= a; i++) {
        arr.push(i);
    }

    // Rotate the array
    for (let i = 0; i < d; i++) {
	    // remove the first element off the array and assign it to last
    	var last = arr.shift();
    	// push it to the end of the array
    	arr.push(last);
	}

    var answerString = '';

    // Print the array as a string
    for (let i = 0; i < arr.length; i++) {
        answerString += i;
    }

    return answerString;
}
