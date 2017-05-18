/** 使用navigator获取浏览器信息 */
// console.log(navigator.appCodeName);
// console.log(navigator.javaEnabled());
// for(var prop in navigator) {
//     console.log(prop, navigator[prop]);
// }


// console.log(navigator.plugins);
// 判断是否含有插件，不兼容IE
function hasPlugin(name) {
    name = name.toLowerCase();
    for(var i=0; i < navigator.plugins.length; i++) {
        if(navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
            return true;
        }
    }
    return false;
}

// console.log(hasPlugin("flash"));
// console.log(hasPlugin("xx"));

// 检查IE是否包含插件，IE使用COM Object
function hasIEPlugin(name) {
    try{
        new ActiveXObject(name);
        return true;
    } catch(e) {
        // console.log(e);
        return false;
    }
}
// console.log(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
// console.log(hasIEPlugin("xx"));

// 判断是否有flash插件，兼容所有浏览器
function hasFlash() {
    if(hasPlugin("flash")){
        return true;
    }
    return hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
}

function hasXX() {
    if(hasPlugin("xx")){
        return true;
    }
    return hasIEPlugin("x");
}

console.log(hasFlash());
console.log(hasXX());

