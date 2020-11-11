const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
})

connection.connect((err) => {
  if (err) {
    console.log('err connecting to database', err);
  } else {
    console.log('connected to database');
  }
});


module.exports.bd = connection;