var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, rows, fields) {
  if (error) throw error;
  console.log('The solution is: ', rows[0].solution);
});
 
connection.end();