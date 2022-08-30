function fibonacci(num) {
  fibonacciArray = [0, 1];
  for (i = 0; i < num; i++) {
    fibonacciArray.push(
      fibonacciArray[fibonacciArray.length - 1] +
        fibonacciArray[fibonacciArray.length - 2]
    );
  }
  return fibonacciArray[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
