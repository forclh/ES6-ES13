/**
 *对象扩展
    1.属性和方法的简洁表达方式
      如果一个对象的属性名和外面的一个变量名同名，
      可以直接将变量名作为属性名，
      并会自动地把变量的值作为属性的值
    2.表达式方式属性名和方法名 
 */

{
  // 1.属性和方法的简洁表达方式
  let router = "router";
  let vue = {
    router, //等同于router:router
    data() {
      console.log('vue.data()');
    }
    //等同于下面
    // data:function(){
    //   console.log('vue.data()');
    // }
  }
  console.log(vue.router)
  vue.data();
}
{
  // 2.表达式方式属性名和方法名，需要用中括号包裹表达式
  let obj = {
    //myName:'zhangsan'
    ["my" + "Name"]: "zhangsan",
    ["say" + "Hi"]: function () {
      console.log('sayHi')
    }
  }
  console.log(obj);
  obj.sayHi();
  obj['say' + 'Hi']();

  // 好处：可以动态访问属性名
  var nameobj = {};
  var arr = ['张三', '李四', '王五'];
  // 动态添加属性名
  for (i = 0; i < 3; i++) {
    nameobj[arr[i] + (i + 1)] = arr[i];
  }
  console.log(nameobj);

  // 动态获取的属性值
  for (let i = 0; i < 3; i++) {
    console.log(nameobj[arr[i] + (i + 1)])
  }
} 