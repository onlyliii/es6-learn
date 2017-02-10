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
export { firstName, lastName, year};

//export命令除了输出变量，还可以输出函数或类（class）。
export function multiply(x, y) {
    return x * y;
};
//通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
function v1() { ... }
function v2() { ... }

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLatestVersion
};
//需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系
// 报错
export 1;

// 报错
var m = 1;
export m;

// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 报错
function f() {}
export f;

// 正确
export function f() {};

// 正确
function f() {}
export {f};











