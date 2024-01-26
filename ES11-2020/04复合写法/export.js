export * from './public.js';

// export {number1} from './public.js'; 
/*
 * 复合写法
 */
//可以理解为：
// import {number1} from './public.js' 
// export {number1}


export let number3 = 30;
export default function(){
    console.log('default函数');
}