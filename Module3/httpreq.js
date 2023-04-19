const http = require('https');

http.get("https://jsonplaceholder.typicode.com/users",(res)=>{
    let data='';

      res.on('data', (chunk) => {
            data += chunk;
        });

    res.on('end', () => {
           console.log('Body:', JSON.parse(data))
       });
}).on("error",(err)=>{
    console.log("Error:"+err.message);
});