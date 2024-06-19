const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const header = data.trim().split('\n')[0].split(',');
      const idxFirstName = header.indexOf('firstname');
      const idxField = header.indexOf('field');

      const fields = {};
      const students = {};

      lines.forEach((line) => {
        if (line.trim()) { // Check if line is not empty
          const list = line.split(',');
          const field = list[idxField];
          const firstName = list[idxFirstName];

          if (!fields[field]) fields[field] = 0;
          fields[field] += 1;

          if (!students[field]) students[field] = [];
          students[field].push(firstName);
        }
      });

      const totalStudents = lines.filter((line) => line.trim()).length;
      let result = `Number of students: ${totalStudents}\n`;

      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          result += `Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}\n`;
        }
      }

      resolve(result.trim());
    });
  });
}

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.statusCode = 500;
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
