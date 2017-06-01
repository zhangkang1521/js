/*
console.log(document.getElementById("a"));
console.log(document.all["a"] == document.getElementById("a"));

function getElement(id) {
    if(document.getElementById) {
        return document.getElementById(id);
    } else if(document.all) {
        return document.all[id];
    } else {
        throw new Error("no way to retrive element");
    }
}
*/

/*function isSortable(object) {
    //return !!object.sort;
    return typeof object.sort == 'function';
}
console.log(isSortable({sort: 'xx'}));
console.log(isSortable({}));
console.log(isSortable({ sort: function () {
    
}}));*/

/** isHostMethod */
/*function hasCreateElement() {
    // IE8 使用COM object ，返回object，而不是function
    return typeof document.createElement == 'function';
}
console.log(hasCreateElement());
console.log(typeof document.createElement);
console.log(typeof document.getElementById);*/

/*function isHostMethod(object, property) {
    var t = typeof object[property];
    return t == 'function' || (!!(t=='object' && object[property])) || t=='unknown';
}

var xhr = new ActiveXObject("Microsoft.XMLHttp");
// if(xhr.open) {
//
// }
// console.log(typeof xhr['open']);
// console.log(typeof document.getElementById);
// console.log(typeof xhr['xxx']);
console.log(isHostMethod(xhr, 'open'));
console.log(isHostMethod(xhr, 'xxx'));
console.log(isHostMethod(document, 'getElementById'));
console.log(isHostMethod(document, 'xxx'));*/



