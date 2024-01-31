const mongoose = require('mongoose')
const {Schema} = mongoose;

const signupSchema = new Schema({
	user_name : {
		type : String,
		required : true,
	},
	full_name : {
		type : String,
		required : true,

	},
	email : {
		type : String,
		required : true,
	},
	password : {
		type : String,
		required : true
	},
	confirm_password : {
		type : String,
		required : true
	}
})

module.exports = mongoose.model("signin",signupSchema);