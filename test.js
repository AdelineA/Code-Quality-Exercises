function getNestingLevel(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  let maxDepth = 0;
  for (const item of arr) {
    if (Array.isArray(item)) {
      const depth = 1 + getNestingLevel(item);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }

  return maxDepth;
}

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [arr];
  }

  const flatArray = [];
  for (const item of arr) {
    flatArray.push(...flattenArray(item));
  }

  return flatArray;
}