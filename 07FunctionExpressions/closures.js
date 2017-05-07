//"use strict";
/** closures and variables */
/*function createFunctions() {
    var result = new Array();
    for(var i = 0; i < 10; i++) {
        result[i] = function () {
            return i;
        };
    }
    return result;
}*/

/*
function createFunctions() {
    var result = new Array();
    for(var i = 0; i < 10; i++) {
        result[i] = function (num) {
            return function(){
                return num;
            };
        }(i); // i -> num
    }
    return result;
}

var funs = createFunctions();
for(var i =0; i < 10; i++) {
    console.log(funs[i]());
}*/

/** the this object */
/*var name = "the window";
var object = {
    name: "my object",
    getNameFunc: function () {
        //console.log(this); // this is object
        var that = this;
        return function () {
            console.log(this); // this is window
            // return this.name;
            return that.name;
        }
    }
};
console.log(object.getNameFunc()());

function testThis() {
    console.log(this); // strict mode: 返回undefine, 否则返回window
}
testThis();*/

/*
var name = "window";
var object = {
    name: "my object",
    getName: function () {
        return this.name;
    }
};
// this is maintained
console.log(object.getName());
console.log((object.getName)());
// this is not maintained
var fun = object.getName;
console.log(fun()); */

/*
function outputNumbers(count) {
    (function () {
        for(var i=0; i<count; i++) {

        }
    })();

    console.log(i);
}
outputNumbers(5);*/

(function () {
    function test() {
        console.log('test');
    }
})();

window.test();
