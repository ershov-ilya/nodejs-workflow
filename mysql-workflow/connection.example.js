var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 'dbpass',
  database : 'dbname'
});

module.exports = connection