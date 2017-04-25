// "use strict"

// var uri = "http://www.baidu.com/illegal value春";
// console.log(encodeURI(uri));
// console.log(encodeURIComponent(uri)); // 组成部分进行编码

// eval("alert('hi')");

// var msg = "hello";
// eval("alert(msg)");

// eval("var value = 100");
// console.log(value);

// window 是全局对象
// var color = 'red';
//
// function sayHello() {
//     console.log(window.color);
// }
//
// window.sayHello();
//
// var global = function () {
//     return this;
// }();
//
// global.sayHello();
//
// console.log(global === window);

// var max = Math.max(1, 3, 33);
// console.log(max);
//
// var arr = [1, 3, 44];
// console.log(Math.max.apply(Math, arr));

// [1,11) so [1,10]
for(var i=0; i< 10; i++) {
    //console.log(Math.floor(Math.random()*10 + 1));
}

function selectFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue)
}

console.log(selectFrom(2, 5));
