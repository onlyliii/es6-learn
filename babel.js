/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
var s1 = Symbol();
var s2 = Symbol();

console.log(s1 === s2);

var s11 = Symbol('foo');
var s12 = Symbol('foo');
console.log(s11 === s12);