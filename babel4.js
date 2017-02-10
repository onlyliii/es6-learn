/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
var sym = Symbol('My Symbol');
// 'your symbol is '+ sym;
// TypeError: Cannot convert a Symbol value to a string
`you stmbol is ${sym}`;
// TypeError: Cannot convert a Symbol value to a string