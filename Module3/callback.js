const fs=  require('fs');

const data= fs.readFile('hello.txt','utf-8',function(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
});