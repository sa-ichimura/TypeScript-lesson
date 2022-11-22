function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 !== "string" && typeof input2 !== "string") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultConversion !== "as-number") {
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
    return result;
}
var combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);
var combinedNames = combine("max", "min", "as-text");
console.log(combinedNames);
