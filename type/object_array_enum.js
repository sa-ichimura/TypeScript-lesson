"use strict";
// 型指定をObjectとした場合Object内の方推論がができない
// この場合型推論が効いているので方指定しない方が良い
const person = {
    name: 'hoge',
    age: 23,
    hobbies: ['sports', 'cooking'],
    role: [2, 'admin']
};
// enum型自動的に定数に対して数値が付与される
// 任意の数値を割り当てることもできる
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
})(Role || (Role = {}));
