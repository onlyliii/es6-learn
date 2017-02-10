'use strict';

/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
var obj = {
  toString: function toString() {
    return 'abc';
  }
};
var sym = Symbol(obj);
console.log(sym);
//# sourceMappingURL=babel3.js.map