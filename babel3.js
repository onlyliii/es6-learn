/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
const obj = {
  toString() {
      return 'abc';
  }
};
const sym = Symbol(obj);
console.log(sym);


