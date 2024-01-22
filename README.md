
# ES6-ES13
|视频教程|课程资料|手敲详细注释版|
| :---: | :---: |:---:|
|[2023最强ES6~ES13教程，语法+案例，一套全搞定！](https://www.bilibili.com/video/BV1hM4y1r7cp?p=1&vd_source=8178530fbcba3b01db39ea80d35da960)|[百度网盘](https://pan.baidu.com/s/1VBJ_3M6-zYrMQor6Uylfgw?pwd=04ve)|[更新中](./code/) |

- [ES6-ES13](#es6-es13)
  - [ES6 - 2015](#es6---2015)
    - [1、简介](#1简介)
    - [2、let 和 const 命令](#2let-和-const-命令)
      - [let](#let)
      - [const](#const)
      - [let和const区别](#let和const区别)
    - [3、解构赋值](#3解构赋值)
      - [解构分类](#解构分类)
      - [数组解构](#数组解构)
      - [对象解构](#对象解构)
      - [字符串解构](#字符串解构)
    - [4、字符串扩展](#4字符串扩展)
      - [模板字符串](#模板字符串)
      - [新增的方法](#新增的方法)
    - [5、对象扩展](#5对象扩展)
      - [对象属性方法简写](#对象属性方法简写)
      - [表达式方法属性名和方法名](#表达式方法属性名和方法名)
      - [assign()](#assign)
      - [is()](#is)
    - [6、数组扩展](#6数组扩展)
      - [扩展运算符 ...](#扩展运算符-)
      - [find()](#find)
      - [findIndex()](#findindex)
      - [Array.from()](#arrayfrom)
      - [Array.of()](#arrayof)
    - [7、函数扩展](#7函数扩展)
    - [8、数值扩展](#8数值扩展)
      - [二进制和八进制表示法](#二进制和八进制表示法)
    - [9、Symbol](#9symbol)
    - [10、Class](#10class)
      - [基本语法](#基本语法)
      - [继承](#继承)
      - [get与set](#get与set)
      - [静态属性和方法](#静态属性和方法)
    - [11、Set 和 Map 数据结构](#11set-和-map-数据结构)
      - [Set](#set)
      - [Map](#map)
    - [12、Iterator](#12iterator)
    - [13、Promise](#13promise)
      - [基本语法 then()](#基本语法-then)
      - [promose.all()](#promoseall)
      - [promise.race()](#promiserace)
    - [14、Generator](#14generator)
    - [15、Module](#15module)
      - [ES6Module模块带来的好处？](#es6module模块带来的好处)
      - [语法](#语法)
      - [基本使用](#基本使用)
      - [模块整体加载](#模块整体加载)
      - [export default](#export-default)
    - [16、Proxy 代理](#16proxy-代理)
  - [ES7 - 2016](#es7---2016)
    - [1、数组的includes()方法](#1数组的includes方法)
    - [2、幂操作:指数操作符 \*\*](#2幂操作指数操作符-)
  - [ES8 - 2017](#es8---2017)
    - [1、字符串方法padStart() 和 padEnd()](#1字符串方法padstart-和-padend)
    - [2、对象方法 entries() 和 values()](#2对象方法-entries-和-values)
    - [3、async和await](#3async和await)
  - [ES9 - 2018](#es9---2018)
    - [1、rest参数和扩展运算符](#1rest参数和扩展运算符)
    - [2、Promise.finally（）](#2promisefinally)
    - [3、await可以和for…of循环一起使用，以串行的方式运行异步操作](#3await可以和forof循环一起使用以串行的方式运行异步操作)
  - [ES10 - 2019](#es10---2019)
    - [1、字符串方法 trimStart() 和 trimEnd()](#1字符串方法-trimstart-和-trimend)
    - [2、对象方法 fromEntries()](#2对象方法-fromentries)
    - [3、数组方法 flat() 和 flatMap()](#3数组方法-flat-和-flatmap)
  - [ES11 - 2020](#es11---2020)
    - [1、字符串方法matchAll()](#1字符串方法matchall)
    - [2、Bigint](#2bigint)
    - [3、Promise.allSettled()](#3promiseallsettled)
    - [4、动态加载import() + 复合写法](#4动态加载import--复合写法)
      - [复合写法](#复合写法)
      - [动态加载](#动态加载)
  - [ES12 - 2021](#es12---2021)
    - [1、 字符串方法replaceAll()](#1-字符串方法replaceall)
    - [2、 逻辑赋值操作符：??=, \&\&=, ||=](#2-逻辑赋值操作符--)
    - [3、 数字分隔符](#3-数字分隔符)
    - [4、 Promise.any()](#4-promiseany)
  - [ES13 - 2022](#es13---2022)
    - [1、数组方法 at()](#1数组方法-at)
    - [2、对象扩展私有属性#及in判断](#2对象扩展私有属性及in判断)
      - [私有属性](#私有属性)
      - [静态成员的私有属性](#静态成员的私有属性)
      - [静态代码块](#静态代码块)
      - [使用in来判断某个对象是否拥有某个私有属性](#使用in来判断某个对象是否拥有某个私有属性)
    - [3、Top-level Await](#3top-level-await)


## ES6 - 2015

### 1、简介

ECMAScript2015 简称ES6，是JavaScript的下一个版本标准，在2015.06发版。

主要是为了解决 ES5 的先天不足，比如 JavaScript 里并没有类的概念，但是目前浏览器的 JavaScript 是 ES5 版本，大多数高版本的浏览器也支持 ES6，不过只实现了 ES6 的部分特性和功能。

它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

- 1997年：ECMAScript 1.0
- 1998年：ECMAScript 2.0
- 1999年：ECMAScript 3.0
- 2006年：ECMAScript 4.0 未通过
- 2009年：ECMAScript 5.0
- 2015年：ECMAScript 6.0
- 2016年：ECMAScript 7.0
- 2017年：ECMAScript 8.0
- 2018年：ECMAScript 9.0
- 2019年：ECMAScript 10.0
- 2020年：ECMAScript 11.0
- 2021年：ECMAScript 12.0
- 2022年：ECMAScript 13.0

### 2、let 和 const 命令

#### let 

let 用来声明变量的。 语法类似var

    1.  `let`不可以先使用后声明（没有变量提升的问题） 
    2.  `let`不允许重复声明变量 
    3.  `let`关键字拥有块级作用域

#### const

const 常量，不可以改变的变量 。规范，命名时都是大写

```js
     <script>
         function fn(){
            const PI = 3.1415926;
            //PI = 5; //报错，1.1常量不允许修改值
                      //      1.2常量必须赋初始值
            

            const obj = {
                a:1
            }
            obj.a = 5; //正确
            //obj = {b:1}//报错
            console.log(obj); //{a:5}
            /*
              存储一个数值，表示存储的一个值。
              如果存储的是一个对象，实际上是存储的一个地址，
                  只要地址不变而修改地址里的内容是可以的
            */ 
         }
         fn()
     </script>
```

#### let和const区别

`let` 声明的变量的值可以改变，`const` 声明的变量的值不可以改变

`let` 声明的时候可以不赋值，`const` 声明的时候必须赋值

### 3、解构赋值 

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

在代码书写上简洁且易读，语义更加清晰明了；也方便了复杂对象中数据字段获取。

#### 解构分类

**数组解构**  **对象解构**  **字符串解构**

**布尔值解构**  **数值解构**  **函数参数解构**

#### 数组解构

```js
        //左边一种结构，右边一种结构，左右一一对应
        {
            //1.基本的数组结构
            let a,b;
            [a,b] = [1,2];
            console.log(a,b)
        }
        {
            //2.嵌套数组结构
            let [a,b,[c]] = ["a","b",["c"]];
            console.log(a,b,c)
        }
        {
            //3.剩余运算符方式
            let a,b;
            [a,...b] = [1,2,3,4,5.5,6,7];
            //a取第一个值，剩下所有值都属于b
            console.log(a,b)
        }
        {
            //4.忽略方式 
            let [,,,a,,,...b]=[10,20,30,'zhangsan',50,60,'lisi',70,80];
            console.log(a,b) 
        }
        {
            //5.不完全解构   //如果解构不成功，变量的值就默认等于undefined
            let a,b;
            [a,b] = [1]; 
            console.log(a,b)
        } 
        {
             //6.解构默认值   //匹配结果为undefined时触发默认值
            let [a,b = 5 ] = [40];
            console.log(a,b);
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
            console.log(a,b)
            t = a;
            a = b;
            b = t;
            console.log(a,b) 
        }
        {
            //方式2
            let a = 11;
            let b = 22;
            console.log(a,b)
            a = a + b;  //a : 33
            b = a - b;  //b : 11 (33-22)
            a = a - b;  //a : 22 (33-11)
            console.log(a,b)
        }
        {
            console.log('解构')
            //方式3
            let a = 11;
            let b = 22;
            [a,b] = [b,a];
            console.log(a,b)
        }
        {
            //** 场景2：使用函数返回值
            function fn(){
                return [10,20,30];
            }
            let result = fn();
            console.log(result[0],result[1])

            //函数方式来解构的数组赋值
            let a,b,c ;
            [a,b,c] = fn();
            console.log(a,b,c)
        } 
        {
            function fn(){
                return [10,20,30,'zhangsan',50,60,'lisi',70,80];
            }
            let a,b ; 
           // [10,20,30,'zhangsan',50,60,'lisi',70,80];
           //    ,  ,  ,   a      ,  ,  ,   b
            [,,,a,,,...b] = fn();
            //如果b的前面增加了...，则数组后面的所有值都会赋给b变量
            console.log(a,b)
        }
```

#### 对象解构

```js
/*
         对象解构与数组解构的不同：
            数组是按元素顺序排列解构的，
            而对象与顺序无关，让变量与属性名相同就可以一一解构了
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

            let obj1 = {name1: "zhangsan"};
            let {name1,age } = obj1;
            console.log(name1,age)   //找不到undefined
        }
        {
            //3. 基本的对象解构 - 变量名与解构对象属性名不同方式：
            let obj =  {name:'zhangsan',age:19};
            let {age:myage,name:myname} = obj;
            console.log(myname,myage)
        } 
        {
            //4. 剩余运算符对象解构 -浅拷贝
            let obj ={width:300,height:500,imgsrc:'aaa.png'};
            let {width, ...rest} = obj;  
            obj.width = 900
            console.log(obj)
        }  
        {
            //5. 对象默认值
            let {width=666,height:myheight} ={width1:100,height:200,imgsrc:'aaa.png'}; 
            console.log(width,myheight)
        }
        {  
            // ** 常用场景
            function getUser(uid){
                return {
                    name:'zhangsan',
                    nike:'黑法斗',
                    age:20,
                    uid:1001,
                    address:'深圳市南山区'
                } 
            }

            //不用解构
            let obj = getUser(1001);
            console.log(obj.nike,obj.address);
            //解构方式
            let {nike,address} = getUser(1001);
            console.log(nike,address)
        }
```



#### 字符串解构

```js
        let [a,b,c,d] ='zhangsan'
        console.log(a,b,c,d)

        let {length}  = 'zhangsan';
        console.log(length)
```



### 4、字符串扩展

#### 模板字符串


```
			 * 
			 * 传统的字符串拼接
			 * 缺点：
			 * 		不能正常换行
			 * 		不能友好插入变量
			 * 		不能友好的处理单引号和双引号的相互嵌套问题
			 * 
			 * ES6模板字符串
			 * 		使用反引号
			 * 		可以当成普通字符串串使用，也可以定义多行字符串还可以嵌套变量
```

#### 新增的方法

includes()

```js
let str = `hello world`;
//includes() 判断是否包含 返回true/false
console.log(str.includes(`llo`));  //true
console.log(str.includes(`temp`));  //false
```

startsWith()和endsWith()

```js
//startsWith() 判断字符串是否在原字符串的头部  返回true/false
console.log(str.startsWith(`llo`)); //false
console.log(str.startsWith(`he`));  //true
		
//endsWith() 判断字符串是否在原字符串的结尾 返回true/false
console.log(str.endsWith(`zhang`)); //false
console.log(str.endsWith(`world`));  //true
```

repeat()

```js
//repeat() 将字符串重复N次，并返回
console.log(str.repeat(2));//hello worldhello world
```

### 5、对象扩展

#### 对象属性方法简写

```js
let router = "router";
let vue = {
      router, //等同于router:router
      data() {
		 console.log('vue.data()');
	  }
	  //等同于下面
	  //				data:function(){
	  //					console.log('vue.data()');
	  //				}
}
console.log(vue.router)
vue.data(); 
```

#### 表达式方法属性名和方法名

```js
			let obj = {
					//myName:'zhangsan'
					["my" + "Name"]: "zhangsan",
					["say" + "Hi"]: function() {
						console.log('sayHi')
					}
				}
				console.log(obj);
				obj.sayHi();
				obj['say' + 'Hi']();

				//好处：可以动态访问属性名 
				var nameobj = {};
				var arr = ['张三', '李四', '王五'];
				for(i = 0; i < 3; i++) {
					nameobj["name" + i] = arr[i];
				}
				console.log(nameobj);

				for(let i = 0; i < 3; i++) {
					console.log(nameobj['name' + i])
				}
```

#### assign()

```js
let a = { name: 'zhangsan' }
let b = { name: 'lisi', age: 20 }
let c = { address: '南山区' } 
let target = Object.assign({}, a, b, c); 
console.log(target)
```

#### is()

```js
console.log("1" === 1) //false
console.log("1" == 1) //true
console.log({} == {})       //false

let flag1 = Object.is('1', 1);   
console.log(flag1)//false
let flag2 = Object.is({}, {});
console.log(flag2) //false
```

### 6、数组扩展

#### 扩展运算符 ...

```js
let arr1 = [1,2,3]
let arr2 = [4,5,6]

console.log([...arr1,...arr2])
```

#### find()

```js
//find()  用于找出第一个符合条件的数组成员
let arr = [20,30,88,11];
let newarr = arr.find(function(item){
		return item>20;
})
console.log(newarr)
```

#### findIndex()

```js
//findIndex() 返回第一个符合条件的数组成员的位置，
//如果所有成员都不符合条件，则返回-1。
let arr = [20,30,88,11];
let index = arr.findIndex(function(item){
	return item>30;
})
console.log(index)
```
#### Array.from()
```js
//Array.from(obj[,fn]) 将两类对象转换为真正的数组
//1.类似于数组的对象
//2.可遍历(iterable)的对象
//要求：类数组对象，具有length属性用域执行数组的长度，没有则转换为空数组
//     类数组对象的属性，必须为数值型或字符串的数字。
//用途：1.获取到的dom元素，可以很方便的转换成数组使用
//      2. arguments
//     3.有长度的json 
let arrLike = {
	'0':'name',
	'1':'age',
     length:2
}
let arr2 = Array.from(arrLike);
console.log(arr2);
```
#### Array.of()
```js
//Array.of() 将一组值转换为数组
console.log(Array.of(1,2,3))
console.log(Array.of(66))
```

### 7、函数扩展

0. this
1. call和apply和bind
2. 函数默认值
3. 箭头函数

```js
        let fn = v => v;
        //无参函数
        var fn5 = () => 5;
        console.log(fn5());   // 5
        //有参函数
        var fn6 = (a, b) => a + b;
        console.log(fn6(5, 6));   //11

        //如果返回值是一个对象，则必须使用（）
        var fn = (a, b) => ({
            name: a,
            age: b
        })
        console.log(fn("zhangsan", 19));

        //如果箭头函数的代码块部分多于一条语句，
        //就要使用大括号将它们括起来，并且使用return语句返回。
        var fn = (a, b) => {
            a = 9;
            b = 10;
            return a + b;
        }
        console.log(fn(1, 3));
```

箭头函数注意点

（1）箭头函数没有自己的`this`对象（详见下文）。

（2）不可以当作构造函数，也就是说，不可以对箭头函数使用`new`命令，否则会抛出一个错误。

（3）不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用`yield`命令，因此箭头函数不能用作 Generator 函数

### 8、数值扩展

#### 二进制和八进制表示法

```js
let numA = 100
let numB = 0x100
let numC = 0o100
let numD = 0b100
```

### 9、Symbol

```js
//Symbol一种新的原始数据类型Symbol，表示独一无二的值。
//它是 JavaScript 语言的第七种数据类型，
//前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
//Symbol 值通过Symbol函数生成,得到一个Symbol数据类型的值
let a = Symbol();
let b = Symbol();
console.log(a) //Symbol()
console.log(typeof a); //symbol
console.log(a == b); //false
```

### 10、Class

在ES6中，class (类)作为对象的模板被引入，可以通过 class 关键字定义类。

class 的本质是 function。

它可以看作一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。

#### 基本语法

```js
//ES5方式 定义类
// 构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 将方法定义在原型上
Person.prototype.sayHi = function () {
    console.log(`你好我叫${this.name}, 我今年${this.age}岁了`);
}

let person = new Person('AK', 23);
console.log(person);
person.sayHi();    
```

```JS
// ES6 方式定义类, class 本质上还是函数function
class Person {
    // 构造器，相当于构造函数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 定义方法，默认定义在原型上
    sayHi() {
        console.log(`你好我叫${this.name}, 我今年${this.age}岁了`);
    }
}

let person = new Person('AK', 24);
console.log(person);
person.sayHi();
```



#### 继承

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`你好我叫${this.name}, 我今年${this.age}岁了`);
    }
}

// 使用关键字extends实现继承
class Student extends Person {
    constructor(name, age, score) {
        // 调用父类的构造器进行初始化,必须放在第一行
        super(name, age);
        this.score = score;
    }
    // 其他方法
    // ...
}

let student = new Student('77', 24, 100);
console.log(student);
student.sayHi();
```

#### get与set

```js
//ES6 get 和 set 关键字  （取值，赋值）
//某个属性设置存值函数和取值函数，拦截该属性的存取行为
//有时候希望访问属性时能返回一个动态计算后的值
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 使用 get/set 保护实例的属性的同时可以进行一些验证操作
    // 获取pName值的时候执行
    get pName() {
        console.log('执行了get方法...');
        return this.name;
    }
    // 修改pName值的时候执行
    set pName(value) {
        console.log('执行了set方法...');
        this.age = value;
    }
}

let person = new Person('ak', 24);
console.log(person.pName);
person.pName = 'AK';
console.log(person);
```

#### 静态属性和方法

```js
// 静态属性/静态方法：直接通过类名打点                 例如：Person.type Person.tell()
// 普通属性/普通方法：需要进行实例化， 通过实例调用      例如：p.name p.age
class Person {
    constructor(name, age) {
        // 普通属性
        this.name = name;
        this.age = age;
    }
    // 普通方法
    sayHi() {
        console.log(`你好我叫${this.name}, 我今年${this.age}岁了`);
    }

    // 定义静态属性
    static type = 'typeA-static';
    // 定义静态方法
    static tell() {
        console.log('tell:', Person.type);
    }
}
// 调用静态属性和方法
console.log(Person.type);
console.log(Person.tell());
```

### 11、Set 和 Map 数据结构

#### Set

- Set 是 ES6 提供的新的数据结构，类似于数组，但是成员的值都是唯一的，没有重复的值。
- Set本身是一个构造函数，用来生成Set数据结构。

```js
/**
* Set：一种数据结构，类似与数组，但是成员的值唯一，无重复值
* 作用：存储多个数据的容器
* 属性：size()  查看集合元素个数
* 方法：
* add()		 增加元素
* has()		 判断元素是否存在
* clear()   清空元素
* keys()	获取所有键的迭代器
* values()	 获取所有值的迭代去
* entries() 获取键值对的迭代器
 */

{
    // 创建Set方式一
    let list = new Set();
    list.add('a');  // 增加元素
    list.add('b');
    list.add('a');  // 不报错，无效果
    console.log(list);
}
{
    // 创建Set方式二
    let arr = ['a', 'b', 'c', 'd', 'a'];
    console.log(arr);
    let list = new Set(arr);  // 数组去重
    console.log(list);
}
{
    // 常用属性和方法
    let arr = ['a', 'b', 'c', 'd', 'a'];
    let list = new Set(arr);
    // 查看元素个数
    console.log(list.size);
    // 判断元素是否存在
    console.log('has:', list.has('a'));
    // 删除元素
    if (list.has('c')) {
        console.log('delete:', list.delete('c'));
    }
    // 清空元素
    // list.clear();
    // console.log(list);
    // 遍历set元素
    // set中键和值是一样的
    list.forEach((key, value, set) => {
        console.log('forEach', key, value, set);
    })

    // 获取所有键的集合
    console.log('keys:', list.keys());
    // 遍历所有的键
    for (let key of list.keys()) {
        console.log('keys', key);
    }

    // 获取所有值的集合
    console.log('values:', list.values());
    // 遍历所有的值
    for (let value of list.values()) {
        console.log('values', value);
    }

    // 获取所有键值对的集合
    console.log('entries', list.entries());
    // 遍历所有键值对
    for (let [key, value] of list.entries()) {
        console.log('entries', key, value);
    }
}
```

#### Map

Map 是 ES6 中新增的**数据结构**，Map 类似于对象，但普通对象的 key 必须是[字符串](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)或者数字，而 Map 的 key 可以是任何数据类型…

```js
// Map 集合数据结构 键值对
// 1. 创建map
let map = new Map();
// 2. 添加元素
map.set('name', 'AK');
map.set('age', 23);
console.log(map, map.size);  // 查看元素个数
// 3. 获取元素
console.log(map.get('name'));
// 4. 删除元素
console.log(map.delete('age'));
// 5. 清空元素
map.clear();
console.log(map);
// 6. 遍历
for (let key of map.keys()) {
    console.log('key:', key);
}
for (let value of map.values()) {
    console.log('value:', value);
}
for (let [key, value] of map.entries()) {
    console.log('entries:', key, value);
}
map.forEach((value, key) => {
    console.log('forEach:', key, value);
})
```

### 12、Iterator

**概念：**
  iterator是一种接口机制，为各种不同的数据结构提供统一的访问机制
**作用：**
  为各种数据结构，提供一个统一的、简便的访问接口；
  使得数据结构的成员能够按某种次序排列。
  ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
**执行顺序**
（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。 


```js
{
    let arr = ['张三', '李四', '王五'];
    console.log(arr);
    let it = arr[Symbol.iterator]();  // 动态调用array内部实现的iterator接口
    // 实现了接口相当于拥有了next()指针, 可以使用它访问容器接口
    console.log(it.next());  // {value: '张三', done: false}
    console.log(it.next());  // {value: '李四', done: false}
    console.log(it.next());  // {value: '王五', done: false}
    console.log(it.next());  // {value: undefined, done: true}

    // for ... of 相当于上面代码的语法糖
    for (let item of arr) {
        console.log(item);
    }
}
{
    // 只要实现了iterator接口就可以采用for ... of 的方法遍历
    let map = new Map();
    map.set('name1', 'ak');
    map.set('name2', 'ak');
    console.log(map);
    let it = map[Symbol.iterator]();
    console.log(it.next());  // {value: ['name1', 'ak'], done: false}
    console.log(it.next());  // {value: ['name2', 'ak'], done: false}
    console.log(it.next());  // {value: undefined, done: true}
}
{
    // 动手给对象实现iterator接口
    let obj = {
        arr: ['1', '2', '3'],
        [Symbol.iterator]() {
            let nextIndex = 0;
            return {
                next() {
                    return nextIndex < obj.arr.length ? { value: obj.arr[nextIndex++], done: false } : { value: undefined, done: true }
                }
            }
        }
    };

    let it = obj[Symbol.iterator]();
    for (let item of obj) {
        console.log('obj:', item);
    }
}
```

原生具备 Iterator 接口的数据结构
  Array
  Map
  Set
  String
  TypedArray 
  函数的 arguments 对象
  NodeList 对象

### 13、Promise

Promise是ES6异步编程的一种解决方案(目前最先进的解决方案是async和await的搭配（ES8），但是它们是基于promise的)，从语法上讲，Promise是一个对象或者说是构造函数，用来封装异步操作并可以获取其成功或失败的结果。

从语法上来说：Promise是一个构造函数

从功能上来说：Promise对象用来**封装一个异步操作**并可以获取其成功/失败的结果值

>Promise对象代表一个异步操作，
>有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
>Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。
>一旦状态改变，就「凝固」了，会一直保持这个状态，不会再发生变化。
>并且一旦状态改变，promise.then()绑定的函数就会调用。

作用：解决回调地狱的问题

缺点：首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

#### 基本语法 then() 

```js
let promise = new Promise((resolve, reject) => {
    // resolve 成功要执行的回调函数
    // reject 失败要执行的回调函数
    console.log('Promise');  // promise创建则立马执行

    // 模拟异步操作
    setTimeout(() => {
        resolve('一直在一起');
        // reject('分手了');
    }, 2000);
});

// Promise的三种状态
console.log('pending',promise);

// 接受异步结果
promise.then(res => {
    // 成功执行 res为resolve的返回值
    console.log('res:', res);
    console.log('fulfilled',promise);
}, err => {
    // 失败执行 err 为reject的返回值
    console.log('err:', err);
    console.log('rejected',promise);
});
```

模拟Promise解决回调地狱的问题

```js
// 模拟先A后B在C的方式
// 使用then进行链式调用
let ajax = (url, data) => {
    return new Promise((resolve, reject) => {
        // 模拟异步时常
        setTimeout(() => {
            console.log('请求', url);
            resolve();
        }, 2000)
    })
}

ajax('/A').then(res => {
    console.log('A请求响应了');
    return ajax('/B');
}).then(res => {
    console.log('B请求响应了');
    return ajax('/C');
}).then(res => {
    console.log('C请求响应了');
})
```

#### promose.all()

```js
// Promise.all([p1, p2, p3])  可以将多个Promise实例包装成一个新的Promise实例。
// 场景：加载多张图片，都加载出来后 一起显示到页面中。

let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'rp1');
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'rp2');
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'rp3');
});

// p1, p2, p3 都是异步操作并且同时开始的。
// 结果的顺序和传入参数的顺序相同，不管谁先响应
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
})
//这带来了一个绝大的好处：在前端开发请求数据的过程中，
//偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all()毫无疑问可以解决这个问题。
//注意：如果有一个失败，直接触发失败状态的回调函数，不理会其它Promise是否已完成。
```

应用场景1：多个请求结果合并在一起
应用场景2：合并请求结果并处理错误
应用场景3：验证多个请求结果是否都是满足条件

#### promise.race()

```js
//Promise.race()
//Promise.race([p1,p2,p3])里面哪个结果响应的快，就返回哪个
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "p1");
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "p2");
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "p3");
});
Promise.race([p1, p2, p3]).then(
    success => {
        console.log(success);  // p3 为响应最快的结果
    }
);
//race() 其它场景
//异步操作和定时器放在一起，，如果定时器先触发，就认为超时，告知用户；
//例如我们要从远程的服务家在资源如果5000ms还没有加载过来我们就告知用户加载失败
```

[Promise应用场景](https://www.yisu.com/zixun/145491.html)

应用场景1：图片请求超时

应用场景2：请求超时提示

应用场景3：验证多个请求结果是否都是满足条件

### 14、Generator
概念：
Generator是一个迭代器生成函数，其返回值是一个迭代器（Iterator），可用于异步调用。
语法：
一是在 function 后面，函数名之前有个 * ；
函数内部有 yield 表达式。
（其中 * 用来表示函数为 Generator 函数，yield 用来定义函数内部的状态）
执行机制
调用 Generator 函数和调用普通函数一样，在函数名后面加上()即可，但是 Generator 函数不会像普通函数一样立即执行，而是返回一个指向内部状态对象的指针，所以要调用遍历器对象Iterator 的 next 方法，指针就会从函数头部或者上一次停下来的地方开始执行。


```js
// Generator 函数是 ES6 提供的一种异步编程解决方案
// Generator 函数是一个状态机，封装了多个内部状态。
// 执行 Generator 函数会返回一个遍历器对象Iterator
// Generator也是一个遍历器对象Iterator生成函数
// 返回的遍历器对象Iterator，可以依次遍历 Generator 函数内部的每一个状态
{
    // 基本语法 * 创建Generator函数
    let tell = function* () {
        console.log(1);
        yield;  // yield 暂停产出关键字
        console.log(2);
        yield;
        console.log(3);
    }
    // Generator函数返回迭代器
    let it = tell();
    // 通过next()执行一下步，遇到yield暂停
    it.next();
    it.next();
    it.next();
}

{
    // yield 返回值
    let tell = function* () {
        console.log(1);
        yield 'a';
        console.log(2);
        yield 'b';
        console.log(3);
        return 'c';
    }
    let it = tell();
    console.log(it.next());  // {value: 'a', done: false}
    console.log(it.next());  // {value: 'b', done: false}
    console.log(it.next());  // {value: undefined, done: true} 添加return后输出 {value: 'c', done: true}  
}

{
    // yield 传参
    let tell = function* () {
        console.log('1:');
        let res1 = yield;
        console.log('2:', res1);
        let res2 = yield;
        console.log('3:', res2);
    }

    let it = tell();
    it.next(10);  // 1:		第一个传入的参数是没有意义的，没法赋值给yield
    it.next(20);  // 2: 20
    it.next(30);  // 3: 30
}

{
    // 需求 使用for ... of 方式遍历对象属性值
    let obj = {
        name: 'ak',
        age: 24,
        address: 'zhejiang',
        *[Symbol.iterator]() {
            yield obj.name;
            yield obj.age;
            yield obj.address;
        },
        // [Symbol.iterator]: function* () {
        // 	yield obj.name;
        // 	yield obj.age;
        // 	yield obj.address;
        // }
    };

    for (let item of obj) {
        console.log('item:', item);
    }

}
{
    // 需求先A后B在C
    let ajax = (url, data) => {
        return new Promise((resolve, reject) => {
            resolve(data);
        })
    };

    let steps = function* () {
        let aaa = yield ajax('/aaa', 'a参数').then(res => {
            console.log('aaa的响应结果:', res);
            return it.next('a的响应值');
        });

        let bbb = yield ajax('/bbb', 'b参数').then(res => {
            console.log('bbb的响应结果', res, aaa);
            return it.next('b的响应值');
        })
        let ccc = yield ajax('/ccc', 'c参数').then(res => {
            console.log('ccc', res, bbb);
            return it.next('c的响应值');
        })
        };

    let it = steps();
    it.next();

}
```



Generator函数是将函数分步骤阻塞 ，只有主动调用next() 才能进行下一步 ，

因为asyns函数相当于Generator函数的语法糖，做出了优化，所以这里对Generator函数不做赘述，

而且一般用到异步编程的时候一般也只用async和promise

### 15、Module

> 历史上，JavaScript
> 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。 
>
> JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS。
>
> CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用`require()`和`module.exports`，ES6 模块使用`import`和`export`。

#### ES6Module模块带来的好处？
避免变量污染，命名冲突
提供代码的复用率、维护性
依赖关系管理

#### 语法

```shell
export 命令：用于规定模块对外的接口
外部能够读取模块内部的某个变量、函数
使用as关键字重命名
该命令可以出现在模块的任何位置，只要处于模块顶层即可，除了块作用域内(import也是如此)。

import 命令：用于输入其它模块提供的功能
变量、函数
使用as关键字
输入的变量都是只读的
Import命令具有提升效果
```

#### 基本使用

```js
// export 
export let name = 'zhangsan';
//or
let name = 'zhangsan';
export {name}
//or
let name = 'zhangsan';
export { name as myname}

//import 
import {name} from './xxx.js'
//or
import {myname} from './xxx.js'
//or
import {myname as newname} from './xxx.js'
```

#### 模块整体加载

```js
// export 
export function fn1(args) {
  return args;
}

// import 
import { fn1 } from './xx.js';
// or
import * as obj  from './export.js';
```

#### export default

```js
// 本质上，export default就是输出一个叫做default的变量或方法，
// 然后系统允许你为它取任意名字

// export 
export default "";
export default {};

// import
import xxx from './xxx.js';
```



### 16、Proxy 代理

```js
{
    let obj = { name: 'zhangsan', age: 20, address: '地址' };
    let objproxy = new Proxy(obj, {
        //get 用来拦截对目标对象属性的访问请求
        get: function (target, propKey) {
            //				    return 'abc';  //1
            console.log("get:", target, propKey)
            return obj[propKey]; //返回模板对象属性值 2
        }
    });
    //访问属性，触发get方法
    console.log(objproxy.name);    //abc |  zhangsan
    console.log(objproxy.age)      //abc |  20
    console.log(objproxy.address)  //abc |  地址
}
{
    //				如果访问目标对象不存在的属性，会抛出一个错误。
    // 				如果没有这个拦截函数，访问不存在的属性，只会返回undefined
    let obj = { name: 'zhangsan', age: 20, address: '地址' };
    let objproxy = new Proxy(obj, {
        get: (target, key) => {
            if (key in obj) {
                return obj[key];
            } else {
                //throw new ReferenceError(`该对象上不存在${key}属性`)
            }

        }
    })
    console.log(objproxy.name);
    console.log(objproxy.temp);
}
{
    let obj = { name: 'zhangsan', age: 20, address: '地址' };
    let objproxy = new Proxy(obj, {
        //get 用来拦截对目标对象属性的访问请求
        get: function (target, key) {
            return obj[key]; //返回模板对象属性值 2
        },
        //set 方法用来拦截某个属性的赋值操作，可以接受四个参数，
        //依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选
        set: function (target, key, value) {
            if (key == "age") {
                if (value > 100) {
                    throw new RangeError('年龄输入无效');// 值不在允许范围内
                }
            }
            if (typeof value == "string") {
                value = value.trim();
            }
            // 对于满足条件的 age 属性以及其他属性，直接保存
            target[key] = value;
        }
    });

    //				objproxy.age= 500;
    objproxy.name = "    zhangsan     ";
    console.log(objproxy.name);
}
```





## ES7 - 2016

### 1、数组的includes()方法

```js
//表示某个数组是否包含给定的值，方法返回一个布尔值，
//与字符串的includes方法类似
let arr = [20,30,88,11];
let flag = arr.includes(20)
console.log(flag); 
```

### 2、幂操作:指数操作符 **

```js
let result1 = 2 ** 3;
console.log(result1);//8
let result2 = 3 ** 3
console.log(result2); //27
```

## ES8 - 2017

### 1、字符串方法padStart() 和 padEnd()

ES2017 引入了[字符串](https://so.csdn.net/so/search?q=%E5%AD%97%E7%AC%A6%E4%B8%B2&spm=1001.2101.3001.7020)补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。`padStart()`用于头部补全，`padEnd()`用于尾部补全。

```js
let str = 'AK';
//padStart(目标长度[,填充字符串])
console.log(str.padStart(10));  // 默认采用空格补充
console.log(str.padStart(10, 'x'));

//padEnd(目标长度[,填充字符串])
console.log(str.padEnd(10, "x"));

// 适用场景： 
// 　　1. 常见用途是为数值补全指定位数
console.log('1'.padStart(6, '0'));
// 　　2. 另一个用途是提示字符串格式
// 日期月份位数填充padStart
console.log('12'.padStart(10, 'YYYY-MM-DD'));  // YYYY-MM-12
console.log('12-12'.padStart(10, 'YYYY-MM-DD'));  // YYYY-12-12
// 表单标签右对齐padStart
// 表单标签左对齐padEnd
```

### 2、对象方法 entries() 和 values()

```js
{
    //Object.values() 或许对象中的属性值，结果是个一维数组
    let result1 = Object.values({ name: 'zhangsan', age: 20 })
    console.log(result1); // ["zhangsan", 20]
    let result2 = Object.values(["张三", "李四"])
    console.log(result2); // ["张三", "李四"]
}
{
    //Object.entries()将某个对象的可枚举属性与值按照二维数组的方式返回
    let result1 = Object.entries({ name: 'zhangsan', age: 20 })
    console.log(result1);  // [["name", "zhangsan"],["age", 20]]
    let result2 = Object.entries(["张三", "李四"])
    console.log(result2);  // [["0", "张三"], ["1", "李四"]]
}
{
    // 用于初始化Map
    let map = new Map([['name', 'ak']]);
    console.log(map);
    let map2 = new Map(Object.entries({ name: 'zhangsan', age: 20 }))
    console.log(map2);
}
```

### 3、async和await

ES7 标准引入了 async 函数，使得异步操作变得更加方便. 它就是 Generator 和 Promise 函数的语法糖

异步代码同步化。

>async函数就相当于自执行的Generator函数，相当于自带一个状态机，
>
>在await的部分等待返回， 返回后自动执行下一步。
>
>而且相较于Promise,async的优越性就是把每次异步返回的结果从then中拿到最外层的方法中，
>
>不需要链式调用，只要用同步的写法就可以了。更加直观而且，更适合处理并发调用的问题。
>
>但是async必须以一个Promise对象开始 ，所以async通常是和Promise结合使用的

```js
let p1 = () => Promise.resolve('hello')
async function fn() {
    let res = await p1(); //感觉像同步编程一样
    //await获取的是resolve()传递给then的数据。
    //而reject()传递给then的数据需要通过try...catch()...
    console.log('demo2-1', res);
    console.log('demo2-2');
}
fn();
```

## ES9 - 2018

### 1、rest参数和扩展运算符

```js
// 1.扩展运算符  ...
let aobj = {
    name: 'zhangsan',
    age: 29,
    address: '南山区'
}
//对象解构
let { name, ...curobj } = aobj;
console.log(name, curobj);//zhangsan {age: 29, address: "南山区"}

//合并对象
let bobj = {
    a: 1,
    b: 2
};
let cobj = { b:5, c: 3, ...bobj };  // 同名则后面覆盖前面
//	等同于let cobj = Object.assign({},bobj)
console.log(cobj); // {b: 2, c: 3, a: 1}
```

```js
// 2.引入 rest 参数（形式为...变量名）
// 注意，rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
// 可用于解决箭头函数无法使用arguments的场景
function fn(...args) {
    for (let t in args) {
        console.log(t, args[t]);
    }
}
fn('a', 1, 23, 4, 5); //把零散的数变成数组，上面。
```

### 2、Promise.finally（）

无论如何都执行的代码

```js
// catch(callback) 于指定发生错误时的回调函数。
// 使用catch替换then第二个err函数的写法，原因里catch也可以捕获到success函数内发生的错误。
// finally (callback) 不管程序是否报错，无论如何都执行的代码
// promise状态一旦改变就会凝固，不会再改变。因此promise一旦fulfilled了，再抛错，也不会变为rejected，就不会被catch了。

let promise = new Promise((resolve, reject) => {
    // 如：显示请求数据的动画
    console.log('Promise立即执行');

    // 模拟一个异常
    throw new Error('发生异常');

    resolve('成功了...');
    // reject('失败了...');
});

promise.then(res => {
    console.log('res:', res);

}, err => {
    // 只捕获promise中的错误，不会捕获res中的错误
    console.log('err:', err);

}).catch(err => {
    // 捕获所有的错误
    console.log('catch:', err);
}).finally(() => {
    // 如：使动画消失
    console.log('finally');
})
```

### 3、await可以和for…of循环一起使用，以串行的方式运行异步操作

```js
// ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，
// 除了next()方法返回一个Promise。
// 因此await可以和for...of循环一起使用，以串行的方式运行异步操作
async function process(array) {
    for await (let i of array) {
        doSomething(i);
    }
}
```



## ES10 - 2019

### 1、字符串方法 trimStart() 和 trimEnd()

>`trimStart()` 用于删除前导空白。它还有一个别名 `trimLeft()`，两者做着相同的事情。
>
>`trimEnd()` 删除尾部的空白。此方法的别名为 `trimRight()`。同样，两者做着相同的事情

```js
let str = "   hello    "
        console.log(str);
        console.log(str.trimStart(str))
        console.log(str.trimLeft(str))
        console.log(str.trimEnd(str)) 
        console.log(str.trimRight(str))
```

首选属性 `trimStart` 和 `trimEnd`。`trimleft` 和 `trimright` 属性主要是为了与旧代码兼容而提供的。

### 2、对象方法 fromEntries()

> 把键值对列表转换为一个对象，这个方法是和 Object.entries() 相对的
>
> 对象结构是一个是有键和值组合 {a:1} 
>
> ​        基于这个逻辑，如果我们想将某个东西转成对象，就必须要传递键和值。
>
> ​        有两种类型的参数可以满足这些要求：
>
> ​            1.具有嵌套键值对的数组
>
> ​            2.Map 对象 (键值对结构)

```js
Object.fromEntries([
    ['foo', 1],
    ['bar', 2]
])
// {foo: 1, bar: 2}
```

### 3、数组方法 flat() 和 flatMap()

> 用于将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组
> **作用**：会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回
> **返回值**：一个包含将数组与子数组中所有元素的新数组
> **是否改变原有数组**：否


```js
[1, 2, [3, [4, 5]]].flat()
// [1, 2, 3, [4, 5]]
[1, 2, [3, [4, 5]]].flat(2)
// [1, 2, 3, 4, 5]
```

> **作用**：首先使用映射函数映射每个元素，然后将结果压缩成一个新数组
> **返回值**：一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 `depth`值为`1`
> **是否改变原有数组**：否

```js
let arr = [1, 2, 3];
let arg = arr.map(x => [x * 2]);
console.log(arg) // [[2], [4], [6]]
console.log(arr)// [1, 2, 3]
//-----------------
let arg2 = arr.flatMap(x => [[x * 2]]);
console.log(arg) //[[2], [4], [6]]
console.log(arr)// [1, 2, 3]
```

## ES11 - 2020

### 1、字符串方法matchAll()

> 返回一个包含所有匹配正则表达式的结果及其分组捕获组的迭代
>
> 语法：str.matchAll(reg)
>
> reg：正则表达式对象。如果不是正则表达式则会使用new RegExp(obj)隐式转换为正则表达式。表达式必须设置为 g (全局模式)否则会报错
>
> 返回值：一个迭代器，可以使用for…of…，数组新增的扩展符(…)或Array.from()实现功能

```js
const str = 'hello javascript hello css'
console.log(...str.matchAll(/hello/g))
// [0: "hello", groups: undefined, index: 0, input: "hello javascript hello css"]
// [0: "hello", groups: undefined, index: 17, input: "hello javascript hello css"]

// 0: "hello"  匹配的字符串，如果有使用分组会在后面依次列出来
// groups: undefined  没有使用命名捕获组会返回undefined，否则会返回包含命名捕获组的对象
// index: 0  匹配的结果在当前字符串位置开始的索引
// input: "hello javascript hello css" 当前字符串 
```

### 2、Bigint

> JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值，这使得 JavaScript 不适合进行科学和金融方面的精确计算

```js
9007199254740992 //9007199254740992
9007199254740993 //9007199254740992

Math.pow(2,53) === Math.pow(2,53)+1
```

为了与 Number 类型区别，BigInt 类型的数据必须添加后缀`n`。

```js
1234 // 普通整数
1234n // BigInt

// BigInt 的运算
1n + 2n // 3n
```

### 3、Promise.allSettled()

```js
//Promise.all([p1, p2, p3]) 等待多个请求完成后触发then，有一个失败则触发catch
//Promise.race([p1, p2, p3]) 触发最先完成的一个请求，成功then，失败catch
//Promise.allSettled([p1, p2, p3]) 不管这些请求是否成功都会执行then方法
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'p1');
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'p2');
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'p3');
});

// 不管p1, p2, p3那一个失败了，都会执行到res
Promise.allSettled([p1, p2, p3]).then(res => {
    console.log('success:', res)
}).catch(err => {
    console.log('err:', err);
});
```

### 4、动态加载import() + 复合写法

#### 复合写法

```js
///export
export * from './aaaa.js';

//相当于
// import {xxx} from './aaaa.js' 
// export {xxx}

//import 
import {xxx} from './bbbb.js'
// console.log(xxxx)
```

#### 动态加载

```js
// ES11-2020之前都是只能静态加载模块的, 不能使用表达式或者是变量

// let path = './index.js';
// import { numberA } from path;  // 报错
// if (true) {
//   import { numberA } from './index.js';  // 报错
// } 

// import { numberA } from './index.js';   // 导入语句过多，如果不使用的话，可能会造成加载时间过
// console.log(numberA);


// 如何实现动态加载即按需加载资源

// 动态加载 import()
console.log(import('./index.js')); // 返回promise对象
import('./index.js').then(res => {
    console.log("res", res, res.numberA);
})

// 支持表达式
if (true) {
    import('./index.js').then(res => {
        console.log("res", res, res.numberA);
    })
}

let module = await import('./index.js');
console.log(module.numberA);
```



## ES12 - 2021

### 1、 字符串方法replaceAll()

> 替换所有符合匹配规则的字符

- 字符串的replace方法，只替换找到的第一个符合的字符串
- replaceAll会找到所有符合的字符串，然后都替换掉

```js
//替换所有符合匹配规则的字符
let str = "abcdefgaaa";
console.log(str.replace(/a/g, 'A'));
console.log(str.replaceAll("a", "A"));  //AbcdefgAAA
```

### 2、 逻辑赋值操作符：??=, &&=, ||=

```js
// 或赋值运算符
x ||= y
// 等同于
x || (x = y)

// 与赋值运算符
x &&= y
// 等同于
x && (x = y)

// Null 赋值运算符
x ??= y
// 等同于
x ?? (x = y)
```

### 3、 数字分隔符

允许数值字面量中间包含不连续`_`，以提高可读性

这个新特性是为了方便程序员看代码而出现的，如果数字比较大，那么看起来就不是那么一目了然

```js
 const numA = 11122233344;
 const numB = 111_222_333_44;

```

分隔符不仅可以分割十进制，也可以分割二净值或者十六净值的数据，非常好用。

```javascript
const number = 1_000_000_000_000;
const binary = 0b1010_0101_1111_1101;
const hex = 0xA1_B2_C3;
```

### 4、 Promise.any()

> 只要参数实例有一个变成`fulfilled`状态，包装实例就会变成`fulfilled`状态；如果所有参数实例都变成`rejected`状态，包装实例就会变成`rejected`状态。
>
> Promise.any()`跟`Promise.race()`方法很像，只有一点不同，就是`Promise.any()`不会因为某个 Promise 变成`rejected`状态而结束，必须等到所有参数 Promise 变成`rejected`状态才会结束。

```js
let p1 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000, 'p1');
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 2000, 'p2');
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, 'p3');
});
// Promise.any([p1, p2, p3,])只有有一个先完成就执行then，所有的都失败了才执行catch
Promise.any([p1, p2, p3]).then(res => {
    console.log('success:', res)
}).catch(err => {
    console.log('err:', err);
});
```

## ES13 - 2022

### 1、数组方法 at()

>  at()方法接收一个下标并返回该下标所对应的数组的数据，下标值允许是正数或者负数。如果是负整数则会从数组的最后开始向前进行搜索并返回对应下标的数组数据，如果下标值超过数组的长度则返回undefined。

```
let arr = ['aaa','bbb','ccc','ddd','fff'];
console.log(arr.at(0));   // 'aaa' 
console.log(arr.at(1));   // 'bbb'   
console.log(arr.at(-1));  // 'fff'   
console.log(arr.at(5));   // undefined
```

### 2、对象扩展私有属性#及in判断

#### 私有属性

```js
class Cache{
    #obj  ={} 
    get(key){
        return this.#obj[key]
    }
    set(key,value){
        this.#obj[key] =value
    }
}

let cache = new Cache()
cache.set("name","zhangsan")
```

#### 静态成员的私有属性

```js
 class Cache{
     static #count = 0; 
     static getCount(){
         return this.#count
     } 
    #obj  ={} 
    get(key){
        return this.#obj[key]
    }
    set(key,value){
        this.#obj[key] =value
    }
} 
let cache = new Cache()
cache.set("name","zhangsan")

console.log(Cache.getCount())
```

#### 静态代码块

> ES13允许在类中通过`static`关键字定义一系列静态代码块，这些代码块只会在类被创造的时候**执行一次**。这其实有点像一些其他的如C#和Java等面向对象的编程语言的静态构造函数的用法。
>
> 一个类可以定义任意多的静态代码块，这些代码块会和穿插在它们之间的静态成员变量一起按照定义的顺序在类初始化的时候执行一次。我们还可以使用`super`关键字来访问父类的属性。

```js
 class Cache{
    static obj = new Map()
    static {
        this.obj.set("name","kerwin")
        this.obj.set("age",100)
    }

    static{
        console.log(this.obj)
    }
}

console.log(Cache.obj)
```

#### 使用in来判断某个对象是否拥有某个私有属性

```js
class Cache {
    #obj = {}

    get(key) {
        return this.#obj[key]
    }
    set(key, value) {
        this.#obj[key] = value
    }

    hasObj(){
        return #obj in this
    }
}

let cache = new Cache()
console.log(cache.hasObj())
```



### 3、Top-level Await

> 顶层`await`只能用在 ES6 模块，不能用在 CommonJS 模块。这是因为 CommonJS 模块的`require()`是同步加载，如果有顶层`await`，就没法处理加载了。

```js
<script type="module">
    function ajax() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data-1111");
        }, 1000);
    })
}

let res = await ajax();
console.log(res)

</script>
```

