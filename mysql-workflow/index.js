let connection = require('./connection.private')

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
 
    console.log('connected as id ' + connection.threadId);
  
    connection.query('SELECT 1 + 1 AS solution', function (error, rows, fields) {
    if (error) throw error;
        console.log('The solution is: ', rows[0].solution);
    });// query Ends
    
    connection.query("INSERT INTO test (name) VALUES ('Артём')", function (error, rows, fields) {
    if (error) throw error;
        console.log(rows);
    });// query Ends
    
    connection.query('SELECT * FROM test', function (error, rows, fields) {
    if (error) throw error;
        console.log(rows);
    });// query Ends
    
});