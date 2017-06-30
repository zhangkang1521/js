/** css选择器 */
/*// 按css选择器，返回第一个元素
var myDiv = document.querySelector(".a");
console.log(myDiv);

// 返回匹配到的所有元素
var myDivList = document.querySelectorAll(".a");
console.log(myDivList);*/


// var strongs = document.querySelectorAll("p strong");
// var i, len;
// for(i=0, len = strongs.length; i < len; i++) {
//     strongs[i].className = "important";
// }
// console.log(strongs);


/** 是否匹配selector，不同浏览器判断方法不同 */
/*var myDiv = document.getElementById("zk");
console.log(myDiv.msMatchesSelector); // IE9+
console.log(myDiv.webkitMatchesSelector); // chrome
console.log(myDiv.webkitMatchesSelector("#zk"));*/


/** 子孙结点 */
var myChild = document.querySelector("#myChild");
console.log(myChild.firstChild); // IE9以下不返回空白的text node
console.log(myChild.firstElementChild);