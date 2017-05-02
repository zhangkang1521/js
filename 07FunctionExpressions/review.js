/** 两种定义函数的方式, function declaration and function expression  */

// it's ok!
// sayHi();
// function sayHi() { // 全局预先加载
//     console.log('sayHi');
// }

// error!
// sayHi();
// var sayHi = function () {
//
// }


/**  function declaration */
// don't do this
/*var condition = true;
 if(condition) {
 function sayHi() {
 console.log('hi');
 }
 } else {
 function sayHi() {
 console.log('Yo');
 }
 }
 sayHi(); // IE always print 'Yo', chrome and firefox work as expected!*/

/** function expression */
// it's ok
/*
 var condition = true;
 var sayHi;
 if(condition) {
 sayHi = function() {
 console.log('hi');
 }
 } else {
 sayHi = function() {
 console.log('Yo');
 }
 }
 sayHi();*/


