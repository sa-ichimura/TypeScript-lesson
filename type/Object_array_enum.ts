// 型指定をObjectとした場合Object内の方推論がができない
// この場合型推論が効いているので方指定しない方が良い
const person: {
  name: string,
  age: number,
  hobbies: string[], //array 
  role: [number, string] //tuple
} = {
  name: 'hoge',
  age: 23,
  hobbies: ['sports', 'cooking'], //array
  role:[2, 'admin']
}

// enum型自動的に定数に対して数値が付与される
// 任意の数値を割り当てることもできる
enum Role  {
  ADMIN,
  READ_ONLY
}
