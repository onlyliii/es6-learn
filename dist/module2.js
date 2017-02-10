'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
/**
 * Created by pinli on 2/10/2017.
 */
// 1
// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

//2
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
exports.firstName = firstName;
exports.lastName = lastName;
exports.year = year;

//export命令除了输出变量，还可以输出函数或类（class）。

function multiply(x, y) {
  return x * y;
};
//通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
//# sourceMappingURL=module2.js.map