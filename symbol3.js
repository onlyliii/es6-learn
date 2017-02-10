/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
console.log(a[mySymbol]); // "Hello!"

//注意，Symbol值作为对象属性名时，不能用点运算符
var mySymbol = Symbol();
var a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"




