/** 动态包含js文件 */
// var script = document.createElement("script");
// script.type = "text/javascript";
// script.src = "./text-node.js";
// document.body.appendChild(script);

// function loadScript(url) {
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src = url;
//     document.body.appendChild(script);
// }
//
// loadScript('./text-node.js');

/** 动态包含js代码 */
// var script = document.createElement("script");
// script.type = "text/javascript";
// // script.appendChild(document.createTextNode("console.log('haha');")); // ie7不支持
// script.text = 'console.log("test")';
// document.body.appendChild(script);

// function loadScriptString(code) {
//     var script = document.createElement("script");
//     script.type = "text/javascript";
//     try{
//         script.appendChild(document.createTextNode(code)); // ie7不支持
//     } catch (e) {
//         script.text = code;
//     }
//     document.body.appendChild(script);
// }
//
// loadScriptString('console.log("test code")');

// eval('console.log("eval test")');
