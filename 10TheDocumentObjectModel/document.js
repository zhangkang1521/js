// console.log(document.nodeType == Node.DOCUMENT_NODE);
// console.log(document.documentElement); // always points to <html> element
// console.log(document.childNodes);
// console.log(document.body);

// console.log(document instanceof HTMLDocument);
// console.log(document.doctype); // point to <!DOCTYPE>
// console.log(document.title);
// document.title = 'I changed title';
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.referrer);
//
// console.log(document.getElementById("mydiv"));
//
// // ie7 可以匹配 <input name='username'/>
// console.log(document.getElementById("username"));

// 不区分大小写
// var imgs = document.getElementsByTagName("img");
// console.log(imgs);
// console.log(imgs.namedItem("img1"));
// console.log(imgs['img1']);
// console.log(imgs.item(0));

// var allElements = document.getElementsByTagName("*");
// console.log(allElements);

// var color = document.getElementsByName("color");
// console.log(color);

// console.log(document.anchors); // 所有具有name属性的a标签
// console.log(document.forms);

// hasFeature不一定准确
// console.log(document.implementation.hasFeature("XML", "1.0"));
// console.log(document.implementation.hasFeature("Core", "3.0"));

