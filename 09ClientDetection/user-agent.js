var client = function () {
    var engine = {
        // 渲染引擎
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        // 版本
        ver: null
    };
    var browser = {
        ie: 0,
        firefox: 0,
        safari: 0,
        kongq: 0,
        opera: 0,
        chrome: 0
    };
    var system = {
        win: false,
        mac: false,
        x11: false
    }
    // 检测渲染引擎，浏览器，操作系统
    var ua = navigator.userAgent;
    // safari ua
    // var ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A';
    // var ua = 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/312.5 (KHTML, like Gecko) Safari/312.3';
    if(window.opera) { // opera

    } else if(/AppleWebKit\/(\S+)/.test(ua)) { // chrome or safari
        engine.ver = RegExp["$1"];
        engine.webkit = parseFloat(engine.ver);
        if(/Chrome\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.chrome = parseFloat(browser.ver);
        } else if(/Version\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.safari = parseFloat(browser.ver);
        } else {
            var safariVersion = 1;
            if(engine.webkit < 100) {
                safariVersion = 1;
            } else if(engine.webkit < 312) {
                safariVersion = 1.2;
            } else if(engine.webkit < 412) {
                safariVersion = 1.3;
            } else {
                safariVersion = 2;
            }
            browser.safari = browser.ver = safariVersion;
        }
    } else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) { // firefox
        engine.ver = RegExp["$1"];
        engine.gecko = parseFloat(engine.ver);
        if(/Firefox\/(\S+)/.test(ua)) {
            browser.ver = RegExp["$1"];
            browser.firefox = parseFloat(browser.ver);
        }
    } else if(/MSIE ([^;]+)/.test(ua)) { //IE
        engine.ver = browser.ver = RegExp["$1"];
        engine.ie = browser.ie = parseFloat(engine.ver);
    }
    // 操作系统
    var p = navigator.platform; // Win32
    system.win = p.indexOf('Win') == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p.indexOf("X11") == 0) || (p.indexOf("Linux") == 0);

    return {
        engine: engine,
        browser: browser,
        system: system
    }
}();

console.log(client);
if(client.engine.gecko) {
    console.log('gecko');
} else if(client.engine.ie) {
    console.log('ie');
}

// console.log(window.opera);
console.log(navigator.userAgent);



