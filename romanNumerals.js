function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  let romanChar = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return roman.split("").reduce((acc, curr, index, array) => {
    if (
      (curr === "I" && array[index + 1] === "v") ||
      array[index + 1] === "x" ||
      (curr === "x" && array[index + 1] === "L") ||
      array[index + 1 === "c"] ||
      (curr === "C" && array[index + 1] === "D") ||
      array[index + 1] === "M"
    )
      return acc - romanChar[curr];
    return acc + romanChar[curr];
  }, 0);
}
