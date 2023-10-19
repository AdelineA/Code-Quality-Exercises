function romanToIntegerConverter(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  const romanCharacters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  return roman
    .split("")
    .reduce((accumulator, currentCharacter, array, index) => {
      if (
        (currentCharacter === "I" && array[index + 1] === "v") ||
        array[index + 1] === "x" ||
        (currentCharacter === "x" && array[index + 1] === "L") ||
        array[index + 1 === "c"] ||
        (currentCharacter === "C" && array[index + 1] === "D") ||
        array[index + 1] === "M"
      )
        return accumulator - romanCharacters[currentCharacter];
      return accumulator + romanCharacters[currentCharacter];
    }, 0);
}
