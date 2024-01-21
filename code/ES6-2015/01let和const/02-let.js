/**
 *  let 用来声明变量的。 语法类似var
    1.let不可以先使用后声明（没有变量提升的问题） []
    2.let不允许重复声明变量 
    3.let关键字拥有块级作用域
 */

{
  // 1.let不可以先使用后声明（没有变量提升的问题）  
  var a = 10;
  let b = 20;
  console.log(a)
  console.log(b)

  //ES5变量提升
  console.log(tempA);
  var tempA = 30;

  //console.log(tempB);  //变量未声明不可以使用  ，纠正之前不合理的现象
  //（在代码块内，使用let命令声明变量之前，该变量都是不可用的。
  //暂时性死区，在log之前，tempB都不可以使用）
  let tempB = 30;
  if (true) {
    // console.log(tempB);
    let tempB = 99;
  }
}
{
  //2.let不允许重复声明变量
  var a = 10;
  var a = 20;
  console.log(a);

  let b = 10;
  //let b = 20; // 报错，Identifier 'b' has already been declared
  console.log(b);
}
{
  // 3.不会对for循环中的变量造成污染
  // 4.let关键字拥有块级作用域
  function fn1() {
    for (var i = 0; i < 5; i++) {
      console.log(i)
    }
    console.log(i); //5
  }
  fn1()

  function fn2() {
    for (let i = 0; i < 5; i++) {
      console.log(i)
    }
    // console.log(i); //报错 i is not defined  
  }
  fn2()

  if (1 == 1) {
    var a = 10;
  }
  console.log(a);  //10

  if (1 == 1) {
    let b = 20;
  }
  // console.log(b);//报错 b is not defined 
}
{
  // 4.let关键字拥有块级作用域
  let temp = 10;
  {
    let temp = 20;
    {
      let temp = 30;
    }
  }
  console.log(temp);
}