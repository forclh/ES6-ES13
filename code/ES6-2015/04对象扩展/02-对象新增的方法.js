/**
 * 对象新增的方法
    1.Object.assign() 用于对象合并
    2.Object.is()方法  比较两个值是否严格相等 
    3.Object.setPrototypeOf(object,prototype) 用来设置一个对象的原型对象，返回参数对象本身。
    4.Object.getPrototypeOf(obj)
      与Object.setPrototypeOf() 方法配套，用于读取一个对象的原型对象
 */

{
  // 1.Object.assign() 用于对象合并
  // 注意点：如果不想改变原对象  可以在方法的第一个参数位置写一个空对象{}
  // 如果合并是存在相同属性则后面的对象会覆盖前面对象的属性值
  let a = { name: 'zhangsan' }
  let b = { name: 'lisi', age: 20 }
  let c = { address: '南山区' }
  let target = Object.assign({}, a, b, c);
  console.log(target)
}
{
  // 2.Object.is()方法  比较两个值是否严格相等 
  console.log("1" === 1)  // false
  console.log("1" == 1)  // true
  console.log({} == {})  // false

  let flag1 = Object.is('1', 1);
  console.log(flag1)  // false
  let flag2 = Object.is({}, {});
  console.log(flag2)  // false 比较的是内存地址
}
console.log('--------------------------');
{
  //3.Object.setPrototypeOf(object,prototype) 用来设置一个对象的原型对象，返回参数对象本身。
  let aobj = { myname: "zhangsan" };
  let bobj = { address: "南山区", age: 4 };
  Object.setPrototypeOf(aobj, bobj);
  console.log(aobj.address, aobj);
}
console.log('************');
{
  function Person() {
    this.name = "蚂蚁部落";
    this.age = 4;
  }

  let proto = {
    url: "www.softwhy.com"
  };

  Person.prototype.address = "青岛市南区";
  let one = new Person();
  let two = new Person();
  Object.setPrototypeOf(one, proto);
  console.log(one.address, one);
  console.log(two.address);
}
{
  console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
  //如果第一个参数不是对象，而是数值、字符串、布尔值、undefined、null
  //可以成功转换，但是返回值是第一个参数本身。
  console.log(Object.setPrototypeOf(1, {}));  //1
  console.log(Object.setPrototypeOf('abc', {})); //abc
  console.log(Object.setPrototypeOf(true, {}));  //true
  // console.log(Object.setPrototypeOf(undefined,{}));  //报错
  // console.log(Object.setPrototypeOf(null,{}));       //报错
}
{
  // 4.Object.getPrototypeOf(obj)
  // 与Object.setPrototypeOf() 方法配套，用于读取一个对象的原型对象
  function Person() {
    this.name = "蚂蚁部落";
    this.age = 4;
  }

  let proto = {
    url: "www.softwhy.com"
  };

  Person.prototype.address = "青岛市南区";
  let one = new Person();
  let two = new Person();
  Object.setPrototypeOf(one, proto);
  console.log(one.address, one);
  console.log(Object.getPrototypeOf(one));
}
{
  // 如果第一个参数不是对象，而是数值、字符串、布尔值、undefined、null
  console.log(Object.getPrototypeOf(1));  //Number
  console.log(Object.getPrototypeOf('abc')); //String
  console.log(Object.getPrototypeOf(true));  //Boolean
  // console.log(Object.getPrototypeOf(undefined));  //报错
  // console.log(Object.getPrototypeOf(null));       //报错
}
{
  // 5.Object.keys() 返回成员是参数对象自身的所有可遍历属性的键名
  //  Object.values() 返回成员是参数对象自身的所有可遍历属性的键值
  //  Object.entries() 返回成员是参数对象自身的所有可遍历属性的键值对
}