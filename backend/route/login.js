const express = require('express')
const router = express.Router();  
const login = require('../model/login')

router.post('/user_login',(req,res) => {
	try {
		login.create({
			user_name : "raftaar",
			password : "ddjdkksk"
		})
		res.status(200).json({
			Success: true,
			message : "All set"
		})
	}
	catch(Error){
		console.log("Error")
	}
})


module.exports = router;