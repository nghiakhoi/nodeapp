/* var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end('Hello');
}).listen(1234,'127.0.0.1');
console.log('Server da khoi dong'); */

var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err,data){
		
		res.writeHead(200,{'Content-type':'text/html'});
		res.end(data);
		
	});
	
}).listen(80,'127.0.0.1');
console.log('Server da khoi dong');

