//---------------call/apply作用------------------
{
  let func = function (arg1, arg2) {
    this.value1 = arg1;
    this.value2 = arg2;
    console.log(this);//window
  };
  //由于this默认指向window，因此结果为undefined
  func(1, 2);
  console.log(func.value1, func.value2) // undefined;
  // console.log(window.value1, window.value2);// 浏览器运行结果 1 2 


  //语法：函数.call(thisobj, arg1, arg2);  其中thisobj为要用作 this 对象的对象。
  func.call(func, '值1', '值2'); //改变func函数指向
  console.log(func.value1, func.value2);
  // console.log(window.value1, window.value2);
}
{
  //----------------------测试---------------------------
  let obj = function () {
    console.log(this);    // 'lisi'
    console.log(typeof this);      //  Object
    console.log(this instanceof String);    // true
  }
  obj.call('lisi');
}
{
  //妙用
  //-------------------------------------------------------------
  //获取数组中最大值 
  //number 本身没有 max 方法，但是 Math 有，我们就可以借助 call 或者 apply 使用其方法。
  let numbers = [52, 666, 111, -222];
  let maxnumber = Math.max.apply(null, numbers);
  //apply第二个参数为数组
  console.log(maxnumber);  //666
  let maxnumber2 = Math.min.call(null, 52, 666, 444, -333);
  console.log(maxnumber2);  //-333
}
{
  // ----------------------------bind()----------------------------
  //			说完了 apply 和 call ，再来说说bind。bind() 方法与 apply 和 call 很相似，
  //          也是可以改变函数体内 this 的指向。
  let bindobj = function () {
    console.log(this.x);
  }
  let foo = {
    x: 3
  }
  bindobj(); // undefined
  let func = bindobj.bind(foo); //bind返回一个函数
  func(); // 3 

}
{
  //-----------------------------三个方法的对比-----------------------------
  let obj = {
    x: 81,
  };
  function getX() {
    return this.x;
  }
  console.log(getX.bind(obj)()); //81
  console.log(getX.call(obj)); //81
  console.log(getX.apply(obj)); //81 
  //三个输出的都是81，但是注意看使用 bind() 方法的，他后面多了对括号。 
  /*
   apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
   apply 、 call 、bind 三者第一个参数都是this要指向的对象，也就是想指定的上下文；
   apply 、 call 、bind 三者都可以利用后续参数传参；
   bind 是返回对应函数，便于稍后调用；apply 、call 则是立即调用 。
  */
}
{
  //-------------------------------------------------------------
  //面试题：定义一个log方法，使其代理console.log()方法。
  //方式一： 
  function log(msg) {
    //				console.log( arguments);//参数对象
    console.log(msg);
  }
  log(1);

  //上面方法基本的需求，但是当传入参数的个数是不确定的时候，上面的方法就失效了 。
  //解决方案下面，使用apply或者call
  function log() {
    console.log.apply(console, arguments);
  }
  log(1);
  log(1, 2);

  //接下来的要求是给每一个 log 消息添加一个"(豆瓣网：)"的前辍
  //log("hello world");    //(豆瓣网：)hello world
  //这个时候需要想到arguments参数是个伪数组，
  //通过 Array.prototype.slice.call 转化为标准数组，再使用数组方法unshift  
  function log() { //start end // 0  this.length
    let args = Array.prototype.slice.call(arguments);
    args.unshift('(TCL：)');
    console.log.apply(console, args);
  };
  log(1);
  log(1, 2);
}