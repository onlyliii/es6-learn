/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
let sym = Symbol('My symbol');
console.log(String(sym));
console.log(sym.toString(sym));