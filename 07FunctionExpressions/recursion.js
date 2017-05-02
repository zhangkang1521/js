/*function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}*/

// 解决了上面的问题，但arguments.callee不能用在strict mode下
/*function factorial(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}*/

// 很好的解决了上面存在的问题 named function expression (命名函数表达式)
var factorial = function f(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
};

// may be error
var fac = factorial;
factorial = null;
console.log(fac(4));