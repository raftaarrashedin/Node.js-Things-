const conn = require('./connection')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine','ejs')

// Establishing the MySQL connection
conn.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database: ' + error.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + conn.threadId);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html')
});

app.post('/', (req, res) => {
   
	conn.connect((error) =>{

		if(error) throw error;
		const name = req.body.name;
		const rollno = req.body.rollno;
		const subject = req.body.subject;
		const marks = req.body.marks;
		

		const sql = "INSERT INTO students(name,rollno,subject,marks) VALUES('"+name+"','"+rollno+"','"+subject+"','"+marks+"')";

		conn.query(sql,(error,result) =>{
			if(error) throw error;
			res.send('Student registration successfull'+result.insertId);
		})
	})
});

app.get('/students', (req, res) => {
    
    conn.connect((error) => {
        if(error) console.log(error);

        const sql = "SELECT * FROM students";

        conn.query(sql,(error, result) => {
            if(error) console.log(error);
            // console.log(result);
            res.render(__dirname+"/students",{students:result}) // Corrected filename here
        })
    })
});

app.get('/student_delete', (req, res) => {
    conn.connect((error) => {
		if(error) console.log(error);

		const sql = "DELETE FROM students where id = ?";

		const id = req.query.id;

		conn.query(sql,[id], (error,result) =>{
			if(error) console.log(error);

			res.redirect('/students')
		})
	})
});

app.post('/student_update',(req,res) => {
	conn.connect((error) => {
		if(error) console.log(error);

		const name = req.query.name;
		const rollno = req.query.rollno;
		const subject = req.query.subject;
		const marks = req.query.marks;
		const sql = "Update student set name = '"+name+"', rollno = '"+rollno+"', subject = '"+subject+"', marks = '"+marks+"' where id = ?";

		const id = req.query.id;
		conn.query(sql,[id], (error,result) => {
			if(error) console.log(error);

			res.redirect('/students') 

		})
	})
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
