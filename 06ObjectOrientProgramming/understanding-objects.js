"use strict";
// var person = new Object();
// person.name = "zk";
// person.age = 25;
// person.sayName = function () {
//     return this.name;
// }
//
// console.log(person.sayName());
//
// var person2 = {
//     name: "zk",
//     age: 25,
//     sayName: function () {
//         return this.name;
//     }
// }
//
// console.log(person2.sayName());
//
// console.log(person == person2);

/** Data Properties */

/*var person3 = {};
Object.defineProperty(person3, "name", {
    configurable: true, // 是否可以delete
    enumerable: false, // for-in 中能访问到
    writable: true, // 是否可写
    value: "zk"
});

console.log(person3);
for(var prop in person3) {
    console.log(prop);
}
console.log("name" in person3);
person3.name = "zy";
delete person3.name;
console.log(person3);*/

/** Accessor Properties */

/*var book = {
    _year: 2004, // 下划线一般约定为不被外部访问
    edition: 1
}

Object.defineProperty(book, "year", {
    //enumerable: false,
    get: function () {
        return this._year;
    },
    set: function (newValue) {
        if(newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});

for(var prop in book) {
    console.log(prop);
}

book.year = 2005;
console.log(book.year);
console.log(book._year);
console.log(book.edition);
console.log(book);*/

/**  data properties and accessor properties 同时定义，默认属性都是false */
/*var book = {};
Object.defineProperties(book, {
   _year: {
       value: 2004,
       writable: true
   },
   edition: {
       value: 1,
       writable: true
    },
    year: {
       get: function () {
           return this._year;
       },
        set: function (newValue) {
            if(newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }
        }
    }
});

// 获取属性描述
var desc = Object.getOwnPropertyDescriptor(book, "_year");
console.log(desc);

var desc = Object.getOwnPropertyDescriptor(book, "year");
console.log(desc);*/
