// https://www.hackerrank.com/challenges/ctci-balanced-brackets/problem
// this one looks fun
// checking if three bracket types are balanced (open and close)

function main() {
  const t = parseInt(readLine(), 10);

  // my code goes in here, new `const expression` is declared each iteration
  for (let tItr = 0; tItr < t; tItr++) {
    const expression = readLine();

    var balanced = true;

    // array to store order of brackets
    let brackets = [];

    // cycle through each char of expression
    for (let i=0; i<expression.length; i++) {

      // add opening brackets to array
      if (expression[i] === '{' ||
          expression[i] === '[' ||
          expression[i] === '(') {
            brackets.push(expression[i]);
          }

      // check if order of closing brackets matches opening sequence
      if ((expression[i] === '}' && brackets[brackets.length-1] === '{') ||
          (expression[i] === ']' && brackets[brackets.length-1] === '[') ||
          (expression[i] === ')' && brackets[brackets.length-1] === '(')) {
        brackets.pop();
      } else if (expression[i] === '}' || expression[i] === ']'
              || expression[i] === ')'){
        balanced = false;
      }
    }

    // if brackets is now empty AND balanced is still true, we really are balanced
    if (brackets.length === 0 && balanced === true) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}
