var div = document.getElementById("myDiv2");
// console.log(div.tagName);
// console.log(div.nodeName);

// console.log(div instanceof HTMLElement);
// console.log(div instanceof Element);

// console.log(div.id);
// console.log(div.title);
// console.log(div.className);

// 修改
// div.className = 'border pr5';
// div.title = 'changed title';

// console.log(div.getAttribute("id"));
// console.log(div.getAttribute("class"));
// console.log(div.getAttribute("title"));
// console.log(div.getAttribute("my"));

// console.log(div.id);
// console.log(div.className);
// console.log(div.title);
//console.log(div.my); // 不可以通过属性直接访问,IE可以
// console.log(div.style); // 有点特殊，返回对象
// console.log(div.getAttribute('style')); // 正常
// console.log(div.onclick); // 返回函数
// console.log(div.getAttribute('onclick')); // 正常

// div.setAttribute("my", "fuck");
// div.setAttribute("class", "right");

// div.removeAttribute("my");
// div.removeAttribute("class");
// div.removeAttribute("style");
// div.removeAttribute("onclick");

/** attributes属性，该属性含有一个NamedNodeMap,包含所有attribute */
// console.log(div.attributes.getNamedItem("id").nodeValue);
// console.log(div.attributes["id"].nodeValue);
// div.attributes["my"].nodeValue = "changed";
//
// div.attributes.removeNamedItem("my");

/** 遍历所有attribute */
// function outputAttribute(element) {
//     var pairs = new Array();
//     for(var i=0; i < element.attributes.length; i++) {
//         var attrName = element.attributes[i].nodeName;
//         var attrValue = element.attributes[i].nodeValue;
//         if(element.attributes[i].specified) { // 兼容ie7
//             pairs.push(attrName + ": " + attrValue);
//         }
//     }
//     return pairs.join("\n");
// }
//
// console.log(outputAttribute(div));

/** createElement */
// var div = document.createElement("div");
// div.id = "newDiv";
// document.body.appendChild(div);
//
// // ie支持这种方式
// var newDiv22 = document.createElement("<div id='newDiv22'></div>");
// document.body.appendChild(newDiv22);

var myList = document.getElementById("myList");
console.log(myList.childNodes.length);
for(var i=0; i < myList.childNodes.length; i++) {
    if(myList.childNodes[i].nodeType == 1) {
        console.log('i');
    }
}

// 这样会把所有的子孙节点都取出
var items = myList.getElementsByTagName("li");
console.log(items);