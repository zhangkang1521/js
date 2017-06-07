/** text node (nodeType is 3) */
var myText = document.getElementById("myText");
var textNode = myText.firstChild;
// console.log(textNode);
// textNode.appendData("haha");
// textNode.deleteData(1, 2);
//textNode.insertData(1, 'xx');
// textNode.splitText(1);
// console.log(myText.childNodes.length);
// textNode.nodeValue = 'changed';
// textNode.nodeValue = 'Some <strong>other</strong> message';

// var div = document.createElement("div");
//
// var first = document.createTextNode("first");
// div.appendChild(first);
// var second = document.createTextNode("second");
// div.appendChild(second);
//
// document.body.appendChild(div);
//
//
// console.log(div.childNodes.length);
// div.normalize();
// console.log(div.childNodes.length);

/** comment type (nodeType is 8) */
// var myComment = document.getElementById("myComment");
// console.log(myComment.firstChild.nodeType);
// console.log(myComment.firstChild);

/** CDATASection type (nodeType is 4) ,xml中使用，html中被浏览器当做注释 */
// var myCDATA = document.getElementById("myCDATA");
// console.log(myCDATA.firstChild);

/** DocumentType type (nodeType is 10) */
// console.log(document.doctype.nodeType);
// console.log(document.doctype);
// console.log(document.doctype.name); // HTML 紧接在DOCTYPE后面的

/** DocumentFragment type (nodeType is 11) 可以防止频繁渲染新的元素，可以先加到fragment，然后一次性渲染 */
// var fragment = document.createDocumentFragment();
// console.log(fragment.nodeType);
// var fragment = document.createDocumentFragment();
// var ul = document.getElementById("myList2");
// for(var i=0; i < 3; i++) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode("item"+i));
//     fragment.appendChild(li);
// }
// ul.appendChild(fragment);

/** Attr type (nodeType is 2) 一般不直接使用，已提供方法getAttribute,setAttribute */
// var attr = document.createAttribute("align");
// attr.value = 'left';
// console.log(attr.nodeType);
// var element = document.getElementById("myText");
// // element.setAttributeNode(attr);
// element.setAttribute("align", "left");
// var a = element.getAttributeNode("align");
// console.log(element.attributes['align'].nodeType);
// console.log(a.nodeType);