//  function that checks the level of nesting of an array
function createSingleDimensionArray() {
  let arr1 = [1, 2, 3, [4, 5, [6, 7]]];
  console.log(arr1.length);
  return arr1.flat(Infinity);
}
console.log(createSingleDimensionArray());
