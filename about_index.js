const express = require('express')
const app = express()

app.get('',(req,res) => {
	res.send(`
		<h1>Welcome,MD RASHEDIN</h1>
		<button><a href="/about"> Go to about Page</a></button>
		`)
});

app.get('/about',(req,res) => {
	res.send(`
		<input type = "text" placeholder="write something" value = "${req.query.name}" />
		<button>Click Here</button>


		`);

});

app.get('/contact',(req,res) => {
	res.send({
		name : 'raftaar',
		email : 'raftaar69@gmail.com'
	})
});