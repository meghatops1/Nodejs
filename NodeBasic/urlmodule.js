var url = require('url');

var link= "http://localhost:8080/hello.html?name=megha&subject=nodejs";

var querystring= url.parse(link,true);

console.log("hostname= "+querystring.host);

console.log("filename = "+querystring.pathname);

console.log("serach for ="+ querystring.search);

var qst= querystring.query;

console.log(qst.name);

console.log(qst.subject);