let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "name";

// 型が全くわからない場合はunknown型を使う
// anyの場合型checkが行われないが、unknwon型であれば型チェックを行うことを強制される
if (typeof userInput === "string") {
  userName = userInput;
}

// この関数が値を返すことは絶対にないことを明示的に表す(never型)
function generateError(message: string, code: number): never {
  throw { message: message, code: code };
}
generateError("エラーが発生しました", 500);
