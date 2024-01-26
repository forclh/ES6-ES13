{
  // 1. ES5函数的默认值
  function fn(time) {
    time = time || 1000;
    console.log("默认值：" + time);
  }
  fn();
  //  ES6 默认值
  function fn1(time = 1000) {
    console.log("默认值：" + time);
  }
  fn1();
}
{
  // 建议默认值后面不建议再有没有默认值的参数
  function fn1(x, time = 1000, y) {
    console.log("默认值：", x, time, y);
  }
  fn1(); //undefined 1000 undefined
  fn1(1000); //1000 1000 undefined
  fn1(1000, 2000); // 1000 2000 undefined
  //fn1(1000,,1000);  //报错
  fn1(100, undefined, 100); //100 1000 100   希望 x=100, y=100
}  