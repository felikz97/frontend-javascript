interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Felix",
  lastName: "Kipkemoi",
  age: 20,
  location: "Kenya"
};

const student2: Student = {
  firstName: "Dabitha",
  lastName: "Johns",
  age: 22,
  location: "Kericho, Kenya"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.style.borderCollapse = "collapse";

const header = table.insertRow();
["First Name", "Location"].forEach(text => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  header.appendChild(th);
});

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
  [cell1, cell2].forEach(cell => {
    cell.style.border = "1px solid black";
    cell.style.padding = "8px";
  });
});

document.body.appendChild(table);
