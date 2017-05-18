// avoid,会有性能问题
// setTimeout("console.log('xxx');", 1000);
// var id = setTimeout(function () {
//     console.log('preferred');
// }, 1000);
// clearTimeout(id);

/*var num = 0;
var max = 10;
var intervalId = null;
function incrementNumber() {
    num++;
    console.log(num);
    if(num == max) {
        clearInterval(intervalId);
        console.log('done');
    }
}
intervalId = setInterval(incrementNumber, 500);*/


// 最佳实践，用setTimeout取代setInterval
var num = 0;
var max = 10;
var intervalId = null;

function increment() {
    if(num < max) {
        num++;
        console.log(num);
        setTimeout(increment, 500);
    } else {
        console.log('done');
    }
}

increment();
