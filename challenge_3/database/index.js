const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'customerinformation'
});

db.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Success connect to MYSQL student')
  }
});

module.exports = db;