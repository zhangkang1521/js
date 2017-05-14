/*
// var leftPos = (typeof window.screenLeft == 'number') ? window.screenLeft : window.screenX;

var leftPos = window.screenLeft == undefined ? window.screenX : window.screenLeft;
var topPos = window.screenTop == undefined ? window.screenY : window.screenTop;
console.log(leftPos);
console.log(topPos);
// window.moveBy(10, 50);
// console.log(leftPos);
// console.log(topPos);
function test() {
    var leftPos = window.screenLeft == undefined ? window.screenX : window.screenLeft;
    var topPos = window.screenTop == undefined ? window.screenY : window.screenTop;
    console.log(leftPos);
    console.log(topPos);
}*/

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;
console.log(pageWidth, pageHeight);
console.log(window.outerWidth, window.outerHeight);
