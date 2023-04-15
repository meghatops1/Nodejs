// var fs= require('fs');
// var http= require('http');
// 
// 
// http.createServer(function(req,res){
    // fs.readFile("hello.html",function(err,data){
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(data);
        // return res.end();
//   });
  fs.appendFile('hello.html', '<h2>Hello content!</h2>', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
//}).listen(8080);



