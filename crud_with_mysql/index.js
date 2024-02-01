const mysql = require('mysql')
const con = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'node'
});

con.connect(function(error){
	if(error) throw error;

	con.query("SELECT * FROM STUDENTS", function(error,result){
		if(error) throw error;
		console.log(result);
	})
});