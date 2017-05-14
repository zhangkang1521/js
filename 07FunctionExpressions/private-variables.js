// "use strict";
/*
function MyObject() {
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    this.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    }
}

// var obj = new MyObject();
// var obj2 = new MyObject();
// console.log(obj.publicMethod());
//
// console.log(obj.publicMethod == obj2.publicMethod);

// MyObject();
// console.log(window.publicMethod);

var obj3 = new MyObject();
obj3.publicMethod();*/

// one downside 方法不是单例的
/*function Person(name) {
    this.getName = function () {
        return name;
    }
    this.setName = function (value) {
        name = value;
    }
}




var person = new Person('zk');
console.log(person.getName());
person.setName('kk');
console.log(person.getName());*/

/** private static  */
/*(function () {
    var privateVariable = 10; // 所有实例共享 private static
    globalVariable = 'xxx';

    // constructor ,没有用var声明，是全局的
    MyObject = function () {
    };

    MyObject.prototype.getMethod = function () {
        return privateVariable;
    };

    MyObject.prototype.setMethod = function (value) {
        privateVariable = value;
    };

})();

var obj1 = new MyObject();
var obj2 = new MyObject();
//console.log(obj1.publicMethod == obj2.publicMethod);
console.log(obj1.getMethod());
console.log(obj2.getMethod());
obj1.setMethod(22);
console.log(obj1.getMethod());
console.log(obj2.getMethod());*/

/** module pattern */
/*
var singleton = function () {
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    return {
        publicProperty: true,
        publicMethod: function () {
            privateVariable++;
            return privateFunction();
        }
    };
}();

console.log(singleton.publicMethod());
console.log(singleton.publicProperty);*/

// 使用场景，初始化全局信息
/*
function BaseComponent() {

}

var application = function () {
    // private variables and functions
    var components = new Array();
    // 初始化
    components.push(new BaseComponent());

    return {
        getComponentCount: function () {
            return components.length;
        },
        registerComponent: function (component) {
            if(typeof component == 'object') {
                components.push(component);
            }
        }
    }

}();
console.log(application.getComponentCount());
application.registerComponent(new BaseComponent());
console.log(application.getComponentCount());*/

/** module augmentation pattern */

function CustomType() {
    
}

var singleton = function () {
    var privateVariable = 10;
    function privateFunction() {
        return false;
    }
    var object = new CustomType(); // 指定类型
    object.publicProperty = true;
    object.publicMethod = function () {
        privateVariable++;
        return privateFunction();
    };
    return object;
}();

console.log(singleton);