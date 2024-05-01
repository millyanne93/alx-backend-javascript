// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const firstStudent: Student = {
    firstName: "Milly",
    lastName: "Anne",
    age: 15,
    location: "Capetown"
}

const secondStudent: Student = {
    firstName: "Adrian",
    lastName: "John",
    age: 19,
    location: "Pretoria"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

// Get the table element
const table = document.getElementById('studentTable') as HTMLTableElement;

// Render table header
const headerRow = table.createTHead().insertRow();
headerRow.insertCell(0).innerHTML = "<b>First Name</b>";
headerRow.insertCell(1).innerHTML = "<b>Location</b>";

// Create a new row for each student and append it to the table body
studentsList.forEach((student) => {
    const row = table.insertRow();
    row.insertCell(0).textContent = student.firstName;
    row.insertCell(1).textContent = student.location;
});
