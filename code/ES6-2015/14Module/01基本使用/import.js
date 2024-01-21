//import 用于导入其它模块
//1.1 导入
// import {name,age,address} from './export.js'
// console.log(`你好,我叫${name},今年${age},住在${address}`)

//1.2 可以给变量取别名
import {name as myName,age,address} from './export.js'
console.log(`你好,我叫${myName},今年${age},住在${address}`)

//1.3 导入的变量都是只读的。
// age = 50;// Assignment to constant variable.

//1.4 导入的对象属性值可以修改  
//（多次执行导入export.js，整个页面也只执行一次）
import {obj,getObj} from './export.js' 
console.log(obj)
obj.name="zhaoliu"; 
//【略】
getObj();  //export.js 中 也被改变了。

//2.1 导入函数
add(10,20); //导入具有变量提升的效果 
import {addFn as add} from './export.js'
import {tempfn1,tempfn2} from './export.js'
tempfn1();


//注意：module静态，不能使用表达式和变量这些只有在运行时才能得到结果的语法结构。

//  let path = "./export.js";
// import  {test1} from path 
 
// if(1==1){
//    import {addFn as test1} from './export.js'
// }else{
//    import {addFn as test2} from './export.js'
// }
 
 
