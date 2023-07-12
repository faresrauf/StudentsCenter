const mysql = require('mysql2');
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'studentscenter'
});
 
connection.connect((error) => {
  if (error) {
  throw error;
  }

  console.log('Connected to MySQL database: studentscenterdb!');
});

module.exports.conenction = connection;