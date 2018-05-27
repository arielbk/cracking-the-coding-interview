// https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem
// JS makes it pretty easy -- push = enqueue; shift = dequeue

// q (first line) : number of queries
// 1 x: Enqueue element  into the end of the queue.
// 2: Dequeue the element at the front of the queue.
// 3: Print the element at the front of the queue.

function processData(input) {
  // input is unformatted, so that's the first thing
  input = input.split('\n');
  // number of queries
  var q = input.shift();

  // a blank queue to add to
  var queue = [];

  // implement all the queries
  for (let i=0; i<q; i++) {
    // if query requires an enqueue, split the query and add the value
    if (input[i][0] == 1) {
      input[i] = input[i].split(' ');
      queue.push(input[i][1]);
    } else if (input[i] == 2) { // 2 : dequeue
      queue.shift();
    } else if (input[i] == 3) { // 3 : log the first element
      console.log(queue[0]);
    }
  }
}
