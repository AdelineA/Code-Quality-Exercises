//  function that checks the level of nesting of an array
function createSingleDimensionArray() {
  let arr1 = [1, 2, 3, [4, 5, [6, 7]]];
  console.log(arr1.length);
  return arr1.flat(Infinity);
}

// function to check if a number is prime or not
function isPrime(num) {
  if(num != 'number') return false
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
  return true
}

// function to find the sum of all elements in an array recursively
function sumOfArray(number) {
  if (number.length === 0) return 0;
  return number.shift()  + sumOfArray(number);
}

// function to remove duplicate elements from an array
function removeDuplicate(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}
