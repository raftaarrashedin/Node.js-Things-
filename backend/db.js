const mongoose = require('mongoose')

const db_uri ="mongodb+srv://raftaarrashedin_mongodb:mUaDMb3FqKsY_Nd@cluster0.rro8gtk.mongodb.net/node_js_operation?retryWrites=true&w=majority"

const connect_db = async() => {
	try {

		const connection = await mongoose.connect(db_uri);
		if(!connection){
			console.log("Database not connected.")
		}
		console.log("Database connection successful.")

	}catch(Error){
		console.log(Error)
	}
}

module.exports = connect_db;
