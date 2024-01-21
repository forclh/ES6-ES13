//用于导入变量的文件-import命令
//1.1匿名加载 (默认输出，导入时不需要{})
// import myfn from './export.js';
// console.log(myfn);
// myfn(); // temp
 
//1.2对比正常输出  导入时需要 {}
// import {fn} from './export.js'
// fn();//fn
  
//2.1
import Person from './export.js';
let p = new Person('zhangsan');
console.log(p);
