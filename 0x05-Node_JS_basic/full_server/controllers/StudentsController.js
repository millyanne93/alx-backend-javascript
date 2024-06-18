const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(req.databaseFile);
      
      res.status(200).send('This is the list of our students\n');
      
      Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).forEach(field => {
        res.write(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`);
      });

      res.end();
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const studentsByField = await readDatabase(req.databaseFile);
      const studentsInMajor = studentsByField[major] || [];

      res.status(200).send(`List: ${studentsInMajor.join(', ')}\n`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
