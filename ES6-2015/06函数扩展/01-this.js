/**
 *  this回顾
 *  this：this在执行时才能确认值，定义时无法确认 
    作为普通函数执行: this执行window
    作为构造函数执行：this在构造函数执行时，this指向即将new出来的对象
    作为对象属性执行：方法中的this执行这个对象 
    (全局，定时器，函数，事件，对象方法)
 */

{
  //普通函数
  function fn() {
    console.log(this); //  浏览器中是window对象，node是Global对象
  }
  fn();
}
console.log('---------------------------');

{
  // 构造函数
  function Person(name) {
    this.name = name;
    console.log(this);  // 指向创建的Person对象实例
  }
  let p = new Person('zhangsan');
}
console.log('---------------------------');

{
  // 对象属性
  let obj = {
    name: 'zhangsan',
    fn() {
      console.log(this, this.name);// 当作所在的obj对象
    }
  };
  obj.fn();
  // 修改对象内this的指向
  // obj.call(要指向的对象, 参数1, 参数2, 参数3,...)       直接调用函数
  // obj.apply(要指向的对象, [参数1, 参数2, 参数3,...])    直接调用函数
  // obj.bind(要指向的对象)                               返回对应的函数
  obj.fn.call({ name: 'wangwu' }); // this =={name:'wangwu'}
}
console.log('---------------------------');

{
  let temp = {
    name: 'A',
    fn() {
      console.log(this);
    }
  }
  let fn = temp.fn;
  fn();
}