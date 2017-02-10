"use strict";

/**
 * Created by pinli on 2/10/2017.
 */
// symbol是一种类似字符串的数据类型
var sym = Symbol();
Boolean(sym); // true
!sym; // false

if (sym) {}
// ...


// Number(sym) // TypeError
// sym + 2 // TypeError
//# sourceMappingURL=symbol2.js.map