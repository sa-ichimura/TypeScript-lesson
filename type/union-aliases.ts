
type Combible =  number | string

function combine(
  input1: Combible,
  input2: Combible,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (
    (typeof input1 !== "string" && typeof input2 !== "string") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedNames = combine("max", "min", "as-text");
console.log(combinedNames);
