// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Felix",
  lastName: "Kipkemoi",
  age: 22,
  location: "Kenya",
};

const student2: Student = {
  firstName: "Dabitha",
  lastName: "Smith",
  age: 22,
  location: "Kericho",
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

// Create table elements
const table = document.createElement("table");
const tableHeader = document.createElement("tr");

const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

tableHeader.appendChild(headerFirstName);
tableHeader.appendChild(headerLocation);
table.appendChild(tableHeader);

// Append a row for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const cellFirstName = document.createElement("td");
  cellFirstName.textContent = student.firstName;

  const cellLocation = document.createElement("td");
  cellLocation.textContent = student.location;

  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);

  table.appendChild(row);
});

// Add table to the DOM
document.body.appendChild(table);
