const express = require('express')

const router = express.Router();

const signup =  require('../model/signup')

router.post('/signup',(req,res) => {

	try{
		signup.create({
			user_name : "raftaar69",
			full_name : "MD RASHEDIN",
			email : "raftaarrashedin100@gmail.com",
			password : "asasasas",
			confirm_password : "asasasas"
		})

		res.status(200).json({
			Success:true,
			message:"All good"
		})
	}catch(Error){
		console.log(Error)
	}
})

module.exports = router;