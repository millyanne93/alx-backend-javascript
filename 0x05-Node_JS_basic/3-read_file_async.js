const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const header = lines[0].split(',');
      const firstnameIndex = header.findIndex(column => column === 'firstname');
      const fieldIndex = header.findIndex(column => column === 'field');

      const fields = {};
      const students = {};

      lines.slice(1).forEach((line) => {
        const values = line.split(',');
        const firstname = values[firstnameIndex];
        const field = values[fieldIndex];

        if (!fields[field]) fields[field] = 0;
        fields[field] += 1;

        if (!students[field]) students[field] = '';
        students[field] += students[field] ? `, ${firstname}` : firstname;
      });

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const count = fields[field];
          const list = students[field];
          console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
