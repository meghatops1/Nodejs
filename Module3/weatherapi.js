const http = require('https');

http.get("https://api.openweathermap.org/data/3.0/onecall?lat=21.1867&lon=72.8375&exclude=&appid=daa89b6672226bb4b720e7278eeed84a",(res)=>{
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