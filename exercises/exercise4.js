//  function that checks the level of nesting of an array
function createSingleDimensionArray() {
  let arr1 = [1, 2, 3, [4, 5, [6, 7]]];
  console.log(arr1.length);
  return arr1.flat(Infinity);
}

// function to check if a number is prime or not
function isPrime(n) {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
    return true;
  }
}

// function to find the sum of all elements in an array recursively

// function to remove duplicate elements from an array
function removeDuplicate(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
