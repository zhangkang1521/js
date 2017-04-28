/** prototype chain  存在子类共享属性问题，构造函数参数问题，很少单独使用 */
/*function Base() {
    this.property = 'I am base value';
    this.friends = ["fangjun", "wangwei"]; // 子类共享，会出问题
}
Base.prototype.getSuperValue = function () {
    return this.property;
}

function Sub() {
    this.subProperty = 'I am sub value';
}
Sub.prototype = new Base();
Sub.prototype.getSubValue = function () {
    return this.subProperty;
};
// 重写方法
Sub.prototype.getSuperValue = function () {
    return 'override!';
};

var base = new Base();
var sub = new Sub();
var sub2 = new Sub();
console.log(Base.prototype);
console.log(Sub.prototype);

// console.log(sub instanceof Sub);
// console.log(sub instanceof Base);
// console.log(sub instanceof Object);
//
// console.log(Sub.prototype.isPrototypeOf(sub));
// console.log(Base.prototype.isPrototypeOf(sub));
// console.log(Object.prototype.isPrototypeOf(sub));

// console.log(sub.getSuperValue()); // 通过下面3步才找到，1.instance 2.SubType.protoType 3.SuperType.protoType
// console.log(sub.hasOwnProperty("subProperty"));
// console.log(sub.getSubValue());

sub.friends.push("junjian");
console.log(base);
console.log(sub);
console.log(sub2);*/

/** constructor stealing ，虽然解决了colors在子类中共享的问题，也能解决参数问题，但prototype中的函数无法继承，所以很少单独使用 */

/*function SuperType() {
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.getSuperValue = function () {
    return 'superValue';
}
function SubType() {
    SuperType.call(this);
    // SuperType.call(this, "zk"); //解决参数问题
}

// console.log(SuperType.prototype);
// console.log(SubType.prototype);

var sub1 = new SubType();
// var sub2 = new SubType();
// sub1.colors.push("black");
console.log(sub1 instanceof SubType);
console.log(sub1 instanceof SuperType); // false

// console.log(sub1);
// console.log(sub2);*/

/** ☆☆☆ Combination Inheritance ,很好的解决了上述两个问题，每个实例都有独立的属性，共用的方法 */

/*function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    return this.name;
}

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
SubType.prototype = new SuperType();

var sub1 = new SubType("zk", 25);
var sub2 = new SubType("zy", 16);
sub2.colors.push("black");
console.log(sub1);
console.log(sub2);
console.log(sub1.sayName())
console.log(sub2.sayName())
// console.log(sub1 instanceof SubType);
// console.log(sub1 instanceof SuperType);
// console.log(sub1 instanceof Object);*/

/** Prototypal Inheritance */
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: "zk",
    friends: ["fangjun", "junjian"]
};

// var p1 = object(person);
// var p1 = Object.create(person); //效果同上面的object方法
// var p2 = Object.create(person);
// p1.friends.push("wangwei");
// p2.friends.push("yancheng");
// console.log(person);
// console.log(p1);
// console.log(p2);

// 第二个参数加属性
// var p3 = Object.create(person, {
//     name: {
//         value: "zy"
//     },
//     age: {
//         value: 25
//     }
// });
// console.log(p3);

// var p4 = JSON.parse(JSON.stringify(person)); // deep copy
// // Object.assign(p4, person); // 只会copy reference
// p4.friends.push("yancheng");
// p4.name = "xx";
// console.log(person);
// console.log(p4);


/** Parasitic Inheritance */

function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function () {
        return "hi";
    }
    return clone;
}

var anotherPerson = createAnother(person);
console.log(anotherPerson);

