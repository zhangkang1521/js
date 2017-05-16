// window.open("http://www.baidu.com", "topFrame");
var bai = window.open("https://www.baidu.com", "xx", "height=600,width=400,resizable=no,top=100,left=300");
// console.log(bai.opener == window); // 持有打开窗口的引用
// setTimeout(function () {
//     bai.resizeTo(100, 100);
//     bai.moveTo(200, 200);
//     bai.close();
//     console.log(bai.closed); // 判断是否关闭
//
// }, 1000);

console.log(bai);
if(bai == null) {
    alert('the popup is blocked!');
}

