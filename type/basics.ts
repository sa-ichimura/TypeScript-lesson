function add(n1: number, n2: number, printResult: boolean) {
  // データ型の名前の取得
  console.log(typeof n1);
  if (printResult) {
    return n1 + n2;
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2;
const printResult = true;

const result = add(number1, number2, printResult);
console.log(result);
