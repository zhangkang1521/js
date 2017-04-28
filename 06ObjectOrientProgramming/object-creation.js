/**  工厂模式，解决了创建对象重复代码问题，但无法识别对象的类型 */
// function createPerson(name, age, job) {
//     var o = new Object();
//     o.name = name;
//     o.age = age;
//     o.job = job;
//     o.sayName = function () {
//         return this.name;
//     }
//     return o;
// }
//
// var person1 = createPerson("zk", 25, "software engineer");
// var person2 = createPerson("zy", 15, "teacher");
// console.log(person1);
// console.log(person2);

/** 构造函数模式 */
/*
function Person(name, age , job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        return this.name;
    }
    // this.name = sayName
}

// 虽然能解决函数实例重复的问题，这样会造成混乱，这个函数式全局的，但应该属于对象Person
// function sayName() {
//     return this.name;
// }

var p1 = new Person("zk", 25, "software engineer"); // 用new，构造函数
var p2 = new Person("zy", 15, "teacher");
// console.log(p1 instanceof Person);
// console.log(p1 instanceof Object);
// console.log(p1.constructor);
//
// Person("zk", 25, "software engineer"); // 普通函数
// console.log(window.name);
//
// var o = new Object();
// Person.call(o, "zy", 15, "Nurse");
// console.log(o.name);

console.log(p1.sayName == p2.sayName); // 函数实例有两份*/

/** 使用prototype 解决两份函数的问题 */
// prototype中的数据是共享的，不可改变

// function Person() {}
// // Person.prototype.name = "zk";
// // Person.prototype.age = 20;
// // Person.prototype.sayName = function () {
// //     return this.name;
// // }
// Person.prototype = {
//     // constructor: Person, // 保证person1.constructor == Person，但会被for-in遍历出来
//     name: "zk",
//     age: 20,
//     friends: ["fangjun", "junjian"],
//     sayName: function () {
//         return this.name;
//     }
// }
// // 手动将constructor设回Person，并保证不会被for-in遍历出
// Object.defineProperty(Person.prototype, "constructor", {
//    enumerable: false,
//     value: Person
// });
//
//
// var p1 = new Person();
// var p2 = new Person();
// p2.name = "zy"; // 并没有改变prototype中的name

// console.log(p1.constructor == Person);
//
// delete p2.name;
// console.log(p2.hasOwnProperty("name"));
// console.log(p1);
// console.log(p2);
// console.log(p1.sayName == p2.sayName);
// console.log(p1.sayName());
// console.log(p2.sayName());// 先找instance中有没有，再找prototype中有没有
// console.log(Person.prototype.constructor);
// console.log(p1.__proto__);
// console.log(Person.prototype.isPrototypeOf(p1));
// console.log(Object.getPrototypeOf(p2).name);
// for(var prop in p2) {
//     console.log(prop);
// }

// console.log(Object.keys(Person.prototype));
// console.log(Object.keys(p2));
// console.log(Object.getOwnPropertyNames(Person.prototype));
// console.log(Object.getOwnPropertyNames(p2));

// console.log(Array.prototype);
// console.log(String.prototype);

// 给String类添加方法，不建议这么做，名字冲突可能会覆盖方法
// String.prototype.startWith = function (text) {
//     return this.indexOf(text) == 0;
// }
// var msg = "hello,world";
// console.log(msg.startWith("hello"));

// protoType是共享的
// p1.friends.push("wangwei");
// console.log(p1);
// console.log(p2);
// console.log(Person.prototype);

/** 组合 constructor/Prototype，一般都用这种模式 */
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ["fangjun", "wangwei"];
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        return this.name;
    }
};

var p1 = new Person("zk", 25);
var p2 = new Person("zy", 15);
p1.friends.push("junjian");
console.log(p1);
console.log(p2);
console.log(p1.sayName());
console.log(p2.sayName());
console.log(p1.sayName == p2.sayName);*/

/** 动态prototype */
/*
function Person(name, age) {
    this.name = name;
    this.age = age;
    if(typeof this.sayName != 'function') { //下面的代码只需只需一次
        console.log('say');
        Person.prototype.sayName = function () {
            return this.name;
        }
    }
}

var p1 = new Person("zk", 25);
var p2 = new Person("zy", 15);
console.log(p1);
console.log(p2);
console.log(p1.sayName());
console.log(p2.sayName());
console.log(p1.sayName == p2.sayName);
console.log(p1 instanceof Person);
console.log(p1.constructor == Person);*/

/** parasitic constructor 和工厂模式区别在new */
function Person(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function () {
        return this.name;
    }
    return o;
}

var p1 = new Person("zk", 25);
var p2 = new Person("zy", 15);
console.log(p1);
console.log(p2);
// console.log(p1.sayName());
// console.log(p2.sayName());
// console.log(p1.sayName == p2.sayName);
// console.log(p1 instanceof Person);
// console.log(p1.constructor == Person);


