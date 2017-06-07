// node 最常见的为elementNode和textNode
var node = document.getElementById('a');
// console.log(node.nodeType);
// console.log(Node.ELEMENT_NODE);
// console.log(node.nodeName); // element tag
// console.log(node.nodeValue);// 一般是null

// childNodes并不是数组
// console.log(node.childNodes);
// console.log(node.childNodes[0]);
// console.log(node.childNodes.item(1));
// console.log(node.childNodes.length);



// var arr = Array.prototype.slice.call(node.childNodes, 0);
// for(var i=0; i < arr.length; i++) {
//     console.log(arr[i].nextSibling);
// }

// console.log(node.hasChildNodes());

// console.log(node.ownerDocument == document);