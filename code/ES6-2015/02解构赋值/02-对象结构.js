/**
 * 对象解构与数组解构的不同：
    数组是按元素顺序排列解构的，
    而对象与顺序无关，让变量与属性名相同就可以一一解构了

    1. 完全解构
    2. 部分解构
    3. 解构之后重命名   
    4. 剩余运算符对象解构 -浅拷贝
    5. 对象默认值
    6. 对象解构常用场景函数返回值 
 */

{
  //1. 基本的对象解构
  let obj = { name: 'zhangsan', age: 19 };
  let { age, name } = obj;
  console.log(name, age);
}
{
  //2. 部分解构
  let obj = { name: 'zhangsan', age: 19 };
  let { name } = obj;
  console.log(name);

  let obj1 = { name1: "zhangsan" };
  let { name1, age } = obj1;
  console.log(name1, age)   //找不到undefined
}
{
  //3. 基本的对象解构 - 变量名与解构对象属性名不同方式：
  let obj = { name: 'zhangsan', age: 19 };
  let { age: myage, name: myname } = obj;
  console.log(myname, myage)
}
{
  //4. 剩余运算符对象解构 -浅拷贝
  let obj = { width: 300, height: 500, imgsrc: 'aaa.png' };
  let { width, ...rest } = obj;
  obj.width = 900
  console.log(obj)
}
{
  //5. 对象默认值
  let { width = 666, height: myheight } = { width1: 100, height: 200, imgsrc: 'aaa.png' };
  console.log(width, myheight)
}
{
  // ** 常用场景
  function getUser(uid) {
    return {
      name: 'zhangsan',
      nike: '黑法斗',
      age: 20,
      uid: 1001,
      address: '深圳市南山区'
    }
  }

  //不用解构
  let obj = getUser(1001);
  console.log(obj.nike, obj.address);
  //解构方式
  let { nike, address } = getUser(1001);
  console.log(nike, address)
}