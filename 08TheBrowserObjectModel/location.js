// console.log(window.location == window.document.location);
// console.log(window.location == location);
// for(var prop in location) {
//     console.log(prop, location[prop]);
// }

// 将参数转换成对象
/*
function getQueryStringArgs() {
    var args = {};
    var search = location.search.length > 0 ? location.search.substring(1) : "";
    var items = search.length ? search.split('&') : [];
    for(var i=0; i < items.length; i++) {
        var item = items[i];
        var keyValue = item.split("=");
        var key = decodeURIComponent(keyValue[0]);
        var value = decodeURIComponent(keyValue[1]);
        args[key] = value;
    }
    return args;
}
console.log(getQueryStringArgs());*/

// location.assign('https://www.baidu.com');
// window.location = 'https://www.baidu.com';
// location.href = 'https://www.baidu.com';

// location.hash = "#section1";
// location.search = '?a=AA';
// location.pathname = "dir";
// console.log(location.hash);
// setTimeout(function () {
//     //location.href = 'https://www.baidu.com';
//     location.replace('https://www.baidu.com'); // 区别在于不可以返回
// }, 1000);

// setTimeout(function () {
// 可能从缓存获取
//    // location.reload();
// 总是从服务器加载，最佳实践用这个
//    location.reload(true);
// }, 2000);