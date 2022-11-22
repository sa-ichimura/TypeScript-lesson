# 型
|  型名  | 例 |  説明  |
| ---- | ---- | ---- |
|  number  | 1,2,4　|  integer, floatを含むすべての数値  |
|  string  | 'hoge'　|  全ての文字列  |
|  boolean  | true,false | trueまたはfalse  |
| Object | {age:10} | JavaScriptの全てのObject</br>Object型をより正確に定義できる |
|  Tuple  | [1,2] | TypeScript独自の型：長さ固定の配列 |
|  Enum  | enum Role {admin = 2, read_only = 3} | 定数を列挙 |
| Any | * | 全ての値が入る.TSは型のチェックをしない | 
| never | * |  値が絶対に返らないことを明示的に表す |