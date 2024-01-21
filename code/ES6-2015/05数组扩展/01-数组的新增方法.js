/**
 *  0.扩展运算符...
    1.find(fn) 找出第一个符和条件的数组成员
    2.findIndex(fn) 找出第一个符和条件的数组成员 
    3.Array.of() 将一组值转换为数组
    4.Array.from(obj[,fn]) 将对象转换为真正的数组(类似于数组的对象,可遍历(iterable)的对象)
 */

{
  // 0.扩展运算符... 实现浅拷贝（只拷贝一层）
  let arr1 = ['a', 'b', 'c'];
  // let arr2 = arr1.concat();  // 之前的拷贝方式
  let arr2 = [...arr1];
  arr1.push('d');
  console.log(arr1, arr2);  // [ 'a', 'b', 'c', 'd' ] [ 'a', 'b', 'c' ]

  let arr3 = ['x', 'y', 'z'];
  let arr4 = [...arr1, ...arr3]  // 数组合并
  console.log(arr4);
}

{
  // 1. find()  用于找出第一个符合条件的数组成员
  let arr = [20, 30, 88, 11];
  let newarr = arr.find(function (item) {
    return item > 20;
  })
  console.log(newarr)
}

{
  // 2. findIndex() 返回第一个符合条件的数组成员的索引值，
  // 如果所有成员都不符合条件，则返回-1。
  let arr = [20, 30, 88, 11];
  let index = arr.findIndex(function (item) {
    return item > 30;
  })
  console.log(index)
}

{
  // 3. Array.of() 将一组值转换为数组  --了解
  console.log(Array.of(1, 2, 3))
  console.log(Array.of(66))
  //弥补 let arr = Array(3) ; 这种是三个长度空数组
}

{
  // 4. Array.from(obj[,fn]) 将两类对象转换为真正的数组
  // a.类似于数组的对象
  // b.可遍历(iterable)的对象
  // 要求：类数组对象，具有length属性用域执行数组的长度，没有则转换为空数组
  //     类数组对象的属性，必须为数值型或字符串的数字。
  // !用途： 
  // 1.获取到的dom元素，可以很方便的转换成数组使用
  // 2. arguments
  // 3.有长度的json 
  let arrLike = {
    '0': 'name',
    '1': 'age',
    length: 2
  }
  //ES5转换
  var arr1 = [].slice.call(arrLike);
  console.log(arr1);
  //ES6
  let arr2 = Array.from(arrLike);  // 需要具有length属性，以及索引的类数组对象
  console.log(arr2);

  //类似map
  Array.from(arrLike, function (item) {
    console.log(item)
  })
  Array.from(arrLike).map(function (item) {
    console.log(item)
  })

  // 转换arguments对象
  function fn() {
    console.log(arguments)
    // arguments.findIndex(function (item) {
    //   return item == "zhangsan";
    // })  //报错，arguments.findIndex is not a function

    console.log(arguments instanceof Array)  // false

    // ES5方式
    // let newarguments = Array.prototype.slice.call(arguments);
    // console.log(newarguments instanceof Array)

    //ES6方式
    let newarguments = Array.from(arguments);  // 将arrguments转换为正数组
    console.log(newarguments instanceof Array)  // true
    let index = newarguments.findIndex(function (item) {
      return item == "zhangsan";
    })
    console.log(index)
  }
  fn('zhangsan')
}