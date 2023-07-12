const db = require('./DB');

function getAllStudents() {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM `students`';
      db.conenction.query(sql, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.stringify(result));
      });
    });
  }

  function addStudent(body) {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO students (Name) VALUES (${JSON.stringify(body.name)})`;
        db.conenction.query(sql, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(JSON.stringify(result));
        });
      });
  }
  

module.exports = {
 getAllStudents : getAllStudents,
 addStudent : addStudent
};