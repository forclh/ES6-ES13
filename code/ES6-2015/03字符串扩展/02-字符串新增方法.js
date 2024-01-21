/**
 * 字符串新增的方法
    1.includes() 判断是否包含 返回true/false
    2.startsWith() 判断字符串是否在原字符串的头部  返回true/false
    3.endsWith() 判断字符串是否在原字符串的结尾 返回true/false
    4.repeat() 将字符串重复N次，并返回
 */


let str = `hello world`;
//includes() 判断是否包含 返回true/false
console.log(str.includes(`llo`));  //true
console.log(str.includes(`temp`));  //false

//startsWith() 判断字符串是否在原字符串的头部  返回true/false
console.log(str.startsWith(`llo`)); //false
console.log(str.startsWith(`he`));  //true

//endsWith() 判断字符串是否在原字符串的结尾 返回true/false
console.log(str.endsWith(`zhang`)); //false
console.log(str.endsWith(`world`));  //true

//repeat() 将字符串重复N次，并返回
console.log(str.repeat(2));//hello worldhello world