var table = document.getElementsByTagName('table')[0];
var mainArr = [];

for (var i = 1; i < table.rows.length; i++) {
  var tempArr = [];
  for (var k = 0; k < table.rows[i].cells.length; k++) {
    tempArr.push(table.rows[i].cells[k].textContent);
  }
  mainArr.push(tempArr);
}
