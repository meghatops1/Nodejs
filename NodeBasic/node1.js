var http =require('http');
var dt =require('./datefile.js')
http.createServer(function (req,res){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('hello wolrd'+dt.todaysDate());
}).listen(8080);