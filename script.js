var start = new Date();

var table = document.getElementsByTagName('table')[0];
var rowNum = 1;
var mainArr = [];
var newTable = table.cloneNode(true);
for (var i = 1; i < newTable.rows.length; i++) {
  var tempArr = [];

  for (var k = 0; k < table.rows[i].cells.length; k++) {
    tempArr.push(table.rows[i].cells[k].textContent);
  }
  mainArr.push(tempArr);
}

mainArr.sort(sortTable);

for (var i = 0; i < mainArr.length; i++) {
  mainArr[i] = mainArr[i].join(' > ');
}

mainArr = mainArr.join(' > ');

mainArr = mainArr.split(' > ');

for (var i = 0; i < mainArr.length; i++) {
  newTable.getElementsByTagName('td')[i].textContent = mainArr[i];
}

table.parentElement.replaceChild(newTable, table);

function sortTable(ar1, ar2) {
  return ar1[rowNum] - ar2[rowNum];
}

var end = new Date();

alert(end - start);
