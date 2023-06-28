var table = document.createElement('table');
var number = 1;
for (var i = 0; i < 10; i++) {
  var row = document.createElement('tr');
  
  for (var l = 0; l < 10; l++) {
    var cell = document.createElement('td');
    cell.textContent = number;
    row.appendChild(cell);
    number++;
  }
  table.appendChild(row);
}
var container = document.getElementById('container');
container.appendChild(table);
