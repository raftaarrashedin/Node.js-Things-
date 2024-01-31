const mongoose = require('mongoose')
const {Schema} = mongoose;

const loginSchema = new Schema({
	user_name: {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	}
})

module.exports = mongoose.model("login",loginSchema);