const express = require('express');
const app = express();

const conn = require('./db')
conn()

const port = 5000;


app.get('/',(req,res) => {
	res.send("Hello API");
})


app.use(express());

app.use('/api',require('./route/login'))
app.use('/api',require('./route/signup'))


app.listen(port)