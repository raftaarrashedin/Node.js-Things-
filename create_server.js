const http = require('http')

http.createServer((req,resp) => {
	resp.write("HELLO EVERYONE, THIS IS MD RASHEDIN");
}).listen(4500);