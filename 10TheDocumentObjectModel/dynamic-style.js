/** 动态包含css文件 <link rel="stylesheet" type="text/css" href="./index.css">*/
// function loadStyle(url) {
//     var link = document.createElement('link');
//     link.rel = "stylesheet";
//     link.type = "text/css";
//     link.href = url;
//     var head = document.getElementsByTagName("head")[0];
//     head.appendChild(link);
// }
// loadStyle("./index.css");

/** 动态包含css */
function loadStyleString(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css)); // IE7不支持
    }catch (e) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}

loadStyleString(".red { color: red}");
// loadStyleString("");


