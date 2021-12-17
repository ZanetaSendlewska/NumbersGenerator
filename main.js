function generate() {
  const even = [];
  const odd = [];
  const generationsNumber = 20;
  const upperRange = 100;
  const lowerRange = 1;

  for (let i = 0; i < generationsNumber; i++) {
    let number = Math.floor(Math.random() * upperRange + lowerRange);
    number % 2 == 0 ? even.push(number) : odd.push(number);
  }

  const table = document
    .getElementById("Table")
    .getElementsByTagName("tbody")[0];

  cleanGeneratedNumbers(table);

  const row = table.insertRow(table.rows.length);

  const cell1 = row.insertCell(0);
  cell1.innerHTML = even.sort((a, b) => a - b);

  const cell2 = row.insertCell(1);
  cell2.innerHTML = odd.sort((a, b) => a - b);
}

function cleanGeneratedNumbers(table) {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}
