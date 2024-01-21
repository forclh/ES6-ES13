//用于导入变量的文件-import命令
//逐一加载写法：
import { fn1, fn2 } from './export.js';

console.log('fn1：' + fn1(5));
console.log('fn2：' + fn2(5));

//整体加载写法:
import * as obj  from './export.js';

console.log('fn1：' + obj.fn1(5));
console.log('fn2：' + obj.fn2(5));



