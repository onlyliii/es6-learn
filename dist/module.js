'use strict';

/**
 * Created by pinli on 2/10/2017.
 */
// CommonJS模块
var _require = require('fs'),
    stat = _require.stat,
    exists = _require.exists,
    readfile = _require.readfile;
//等同于


var _fs = require('fs');
var stat1 = _fs.stat;
var exists1 = _fs.exists;
var readfile1 = _fs.readfile;
console.log(stat === stat1);
console.log(exists === exists1);
console.log(readfile === readfile1);
//# sourceMappingURL=module.js.map