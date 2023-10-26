//  function that checks the level of nesting of an array
const nestedArray = (arr) => {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      const depth = 1 + nestedArray(item);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }
  return maxDepth;
};

const flattenArray = (arr) => {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  const flatArray = [];
  for (const element of arr) {
    flatArray.push(...flattenArray(element));
  }
  return flatArray;
};

// function to check if a number is prime or not
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
  return true;
}

// function to find the sum of all elements in an array recursively
function sumOfArray(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.shift() + sumOfArray(numbers);
}

// function to remove duplicate elements from an array
function removeDuplicate(array) {
  return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}
