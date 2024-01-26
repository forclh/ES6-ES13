//用于导出变量的文件-export命令 
//本质上，export default就是输出一个叫做default的变量或方法，
//然后系统允许你为它取任意名字
//1.1 默认输出
// export default "zhangsan";
// export default function() {
// 	console.log('temp');
// }

// function temp(){
// 	console.log("temp2");
// }
// export default temp;

//1.2 对比正常输出
// export function fn(){
// 	console.log('fn')
// }
 
//一个模块只能有一个默认输出 
//也可以导出类
//2.1
export default class Person{
	constructor(name){
		this.name = name;
	}
}

 