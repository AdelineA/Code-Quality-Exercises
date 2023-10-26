// function to convert a number to its binary representation

const convertNumberToBinary = (num) => {
  return (num >>> 0).toString(2);
};

// function to calculate the Fibonacci sequence up to a given number

const fibonacci = (num) => {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
