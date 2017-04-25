//"use strict";
var str = "hello world";

// console.log(str.length);
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));

// var result = str.concat(" world", "!");
// console.log(str);
// console.log(result);

// console.log(str.slice(3));
// console.log(str.substring(3));
// console.log(str.substr(3));
//
// console.log(str.slice(3, 7));
// console.log(str.substring(3, 7));
// console.log(str.substr(3, 7)); // 总共7个字符

// slice：负数会加上字符串长度 substring：负数全部看成0 substr: 第一个参数加上字符串长度，第二个参数看成0
// console.log(str.slice(-3));
// console.log(str.substring(-3));
// console.log(str.substr(-3));

// console.log(str.slice(3, -4)); // slice(3, 7)
// console.log(str.substring(3, -4)); // substring(3, 0) -> substring(0, 3)
// console.log(str.substr(3, -4)); // substr(3, 0)

// var str2 = " hello ";
// console.log(str2.length);
// console.log(str2.trimLeft().length);
// console.log(str2.trimRight().length);
// console.log(str2.trim().length);

var text = "cat,bat,sat,fats";

// var pattern = /.at/ig;
// var matches = text.match(pattern);
// console.log(matches.index);
// console.log(matches[0]);
// console.log(matches[1]);
// console.log(matches.lastIndex);

// var pos = text.search(/at/);
// console.log(pos);

// 第一个参数是字符串，只会替换第一个
// var result = text.replace("at", "ond");
// console.log(result);
// // 第一个参数是正则，会按正则替换
// result = text.replace(/at/g, "ond");
// console.log(result);
//
// result = text.replace(/(.at)(s)?/g, "ond($1)$2");
// console.log(result);

// replace 第二个参数可以是函数
// var result = text.replace(/.at/g, function (m, pos, originalText) {
//     return m + pos;
// });
// console.log(result);

// console.log(text.split(","));
// console.log(text.split(",", 2));
// console.log(text.split(/[^,]+/)); //匹配不是逗号的

//console.log(text.match(/[^,]+/g))

// console.log(text.localeCompare("a"));
// console.log(text.localeCompare("b"));
// console.log(text.localeCompare("d"));
// console.log(text.localeCompare("z"));

// console.log(String.fromCharCode(97, 98));

// console.log("baidu".link("http://www.baidu.com"));
