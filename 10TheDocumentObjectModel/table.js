var table = document.createElement("table");
table.border = 1;
table.width = '100%';

var tbody = document.createElement("tbody");
table.appendChild(tbody);

// var row1 = document.createElement("tr");
// tbody.appendChild(row1);
//
// var td_1_1 = document.createElement("td");
// row1.appendChild(td_1_1);
// td_1_1.appendChild(document.createTextNode("cell 1,1"));
//
// var td_1_2 = document.createElement("td");
// row1.appendChild(td_1_2);
// td_1_2.appendChild(document.createTextNode("cell 1,2"));
//


tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[0].appendChild(document.createTextNode("cell 1 1"));
tbody.rows[0].cells[1].appendChild(document.createTextNode("cell 1 2"));

document.body.appendChild(table);