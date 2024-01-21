/**
 * 模板字符串

  传统的字符串拼接
    不能正常换行
    不能友好插入变量
    不能友好的处理单引号和双引号的相互嵌套问题

  ES6模板字符串
    使用反引号
    可以当成普通字符串串使用，也可以定义多行字符串还可以嵌套变量
 */

//普通字符串
document.write(`Hello ES6 <br/>`);
//多行字符串
document.write(`Hello
             ES6`)
//嵌入变量
let str = `Hello`;
let obj = { name: 'zhangsan', age: 20 }
console.log(`${str},我叫${obj.name}今年${obj.age}`)
//函数调用
function fn() {
  return '你好，我是fn的内容';
}
console.log(`${fn()}`)