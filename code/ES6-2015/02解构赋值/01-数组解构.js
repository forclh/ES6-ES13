/**
 *  解构：左边一种结构，右边一种结构，左右一一对应
    1. 完全解构
    2. 不完全解构(部分解构)  
    3. 忽略方式解构 
    4. 嵌套解构
    5. 剩余运算符方式解构 
    6. 解构默认值
    7. 使用场景
      场景1：使用解构方式实现两数交换？
      场景2：使用函数返回值
 */

{
  //1.基本的数组解构 完全解构
  //完全解构
  let a, b;
  [a, b] = [1, 2];
  console.log(a, b);
}
{
  //2.部分解构  ,  
  let a, b;
  [a, b] = [1];
  console.log(a, b);//1 undefined
  //若解构不成功，变量的值就等于 undefined

  let [c] = [1, 2];
  console.log(c);  //1 
}
{
  //3.忽略方式解构 
  let [, , d] = [1, 2, 3];
  console.log(d);  //3
}
{
  //4. 嵌套解构
  let [a, b, [c]] = ["a", "b", ["c"]];
  console.log(a, b, c)
}
{
  //5. 剩余运算符方式解构
  let a, b;
  [a, ...b] = [1, 2, 3, 4, 5.5, 6, 7];
  //a取第一个值，剩下所有值都属于b
  console.log(a, b)
}
{
  //6. 解构默认值  //匹配结果为undefined时触发默认值
  let [a, b = 5] = [40];
  console.log(a, b);
  //默认值情况，当没有给第二个参数时，默认取5. 
}
{
  //let a = 11;
  //let b = 22;
  //** 场景1：如何实现两数交换？
  //方式1：
  let a = 11;
  let b = 22;
  let t;
  console.log(a, b)
  t = a;
  a = b;
  b = t;
  console.log(a, b)
}
{
  //方式2
  let a = 11;
  let b = 22;
  console.log(a, b)
  a = a + b;  //a : 33
  b = a - b;  //b : 11 (33-22)
  a = a - b;  //a : 22 (33-11)
  console.log(a, b)
}
{
  console.log('解构')
  //方式3
  let a = 11;
  let b = 22;
  [a, b] = [b, a];
  console.log(a, b)
}
{
  //** 场景2：使用函数返回值
  function fn() {
    return [10, 20, 30];
  }
  let result = fn();
  console.log(result[0], result[1])

  //函数方式来解构的数组赋值
  let a, b, c;
  [a, b, c] = fn();
  console.log(a, b, c)
}
{
  function fn() {
    return [10, 20, 30, 'zhangsan', 50, 60, 'lisi', 70, 80];
  }
  let a, b;
  // [10,20,30,'zhangsan',50,60,'lisi',70,80];
  //    ,  ,  ,   a      ,  ,  ,   b
  [, , , a, , , ...b] = fn();
  //如果b的前面增加了...，则数组后面的所有值都会赋给b变量
  console.log(a, b)
} 