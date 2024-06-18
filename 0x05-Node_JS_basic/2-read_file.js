const fs = require('fs');

function countStudents(path) {
  try {
    // Read data
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    // Split data and take only the list without header
    const lines = data.split('\n').filter(line => line.trim() !== '');
    // Give the header of data
    const header = lines[0].split(',');
    // Find firstname and field index
    const idxFn = header.findIndex(ele => ele === 'firstname');
    const idxFd = header.findIndex(ele => ele === 'field');
    // Declare two dictionaries for counting each field and storing list of students
    const fields = {};
    const students = {};

    lines.slice(1).forEach(line => {
      const list = line.split(',');
      if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
      fields[list[idxFd]] += 1;
      if (!students[list[idxFd]]) students[list[idxFd]] = '';
      students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
    });

    console.log(`Number of students: ${lines.length - 1}`);
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
