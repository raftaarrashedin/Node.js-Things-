const conn = require('./connection')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/register.html')
});

app.post('/',(req,res) => {
	// console.log(req.body);
	const name = req.body.name;
	const rollno = req.body.rollno;
	const subject = req.body.subject;
	const marks = req.body.marks;

	conn.connect((error) =>{
		if(error) throw error;

		const sql = "INSERT INTO students(name,rollno,subject,marks) VALUES('"+name+"','"+rollno+"','"+subject+"','"+marks+"')";

		conn.query(sql,(error,result) =>{name
			if(error) throw error;
			res.send('Student registration successfull'+result.insertId);
		})
	})
});



app.listen(7000)