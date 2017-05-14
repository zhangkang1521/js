/** 所有全局定义的变量和函数都属于window */
// 两种定义方式的小区别
/*
var age = 29;
window.color = 'red';

// IE9 以下不支持
delete window.age; // 不能被删除
delete window.color; // 可以被删除

console.log(window.age);
console.log(window.color);

console.log(window);*/

/** 检查对象是否存在，用window，直接访问未定义的对象会报错 */
//var newValue = oldValue; // 报错
var newValue = window.oldValue; // 赋值为undefined
console.log(newValue);
