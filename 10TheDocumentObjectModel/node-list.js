var divs = document.getElementsByTagName("div");
console.log(divs.length);
document.body.appendChild(document.createElement("div"));
console.log(divs); // HTMLCollection是实时的
console.log(divs.length);