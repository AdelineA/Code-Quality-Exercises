// function to convert a number to its binary representation

const convertNumberToBinary = (num) => {
  return (num >>> 0).toString(2);
};

// function to calculate the Fibonacci sequence up to a given number

const getFibonacciSequence = (num) => {
  if (num <= 1) return num;
  return getFibonacciSequence(num - 1) + getFibonacciSequence(num - 2);
};
