//export 用于导出变量函数
//1.1 导出变量  方式一
// export let name = 'zhangsan';
// export let age = 20;
// export let address = "南山区";
//1.2 导出变量  方式二
let name = 'zhangsan';
let age = 20;
let address = "南山区";
export {name,age,address}

let obj ={
	name:'zhangsan',
	age:20
}
export {obj} 
//【略】
export function getObj(){
	console.log(obj,name);
}

// //2.1 导出函数 - 方法一
export function addFn(a,b){
	console.log(a+b);
}
//2.2导出类或者函数 - 方法二 取别名
function fn1(){
	console.log('fn1');
}
function fn2(){
	console.log('fn2');
}
export { fn1 as tempfn1,
		 fn2 as tempfn2 }

 