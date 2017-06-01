// 怎样进入浏览器的quirk mode???
var o = { toString: function () {}, a: 'xx'};
for(var prop in o) {
    console.log(prop);
}
