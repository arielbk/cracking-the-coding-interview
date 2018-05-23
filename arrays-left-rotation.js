function solve(a, d) {

    // Start with an empty array
    var arr = [];

    // Populate the array
    for (let i = 1; i <= a; i++) {
        arr.push(i);
    }

    // Rotate the array d times
    for (let i = 0; i < d; i++) {
	    // remove the first element off the array and assign it to last
    	var last = arr.shift();
    	// push it to the end of the array
    	arr.push(last);
    }

    return arr;
}
