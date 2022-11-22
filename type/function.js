"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult1(num) {
    console.log("result" + num);
}
// function型
//() 引数の型
// => 戻り値の型
let combileValuse;
combileValuse = add1;
console.log(combileValuse(1, 2)); // 3
//colleback関数戻り値にvoidが指定されている場合、戻り値がないではなく戻り値を使用しないという意味
// collback関数にreturn文があっても問題ない(コンパイルエラーにならない)
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=function.js.map