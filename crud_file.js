const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`
const filePath1 = `${dirPath}/toDeleteapple.txt`

// To create the file
fs.writeFileSync(filePath,'This is a simple fruit file.')
fs.writeFileSync(filePath1,'This is a simple fruit file.')

// To read the file content
fs.readFile(filePath,'utf8',(err,item) =>{
	console.log(item)
})

// To update the file content
fs.appendFile(filePath,'and file name is apple.txt',(err) =>{
	if(!err) console.log("File is updated")
})

// To rename the file content
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
	if(!err) console.log("File name is updated")
})

fs.unlinkSync(`${dirPath}/toDeleteapple.txt`,(err) =>{
	if(!err) console.log("File is Deleted")
})

fs.unlinkSync(`${dirPath}/toDeleteapple.txt`,(err) =>{
	if(!err) console.log("File is Deleted")
})
fs.unlinkSync(`${dirPath}/toDeleteapple.txt`,(err) =>{
	if(!err) console.log("File is Deleted")
})
fs.unlinkSync(`${dirPath}/toDeleteapple.txt`,(err) =>{
	if(!err) console.log("File is Deleted")
})
