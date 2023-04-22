var express = require('express')
var router = express.Router();
const path = require('path');
const app = express();
const option=[
    
]
app.use('/static', express.static(path.join(__dirname, 'public')))
app.get('/',function(req,res){
    res.sendFile('view/index.html',{root: __dirname },function(err){
        if(err){
            console.log(err);
        }
    });
});
app.get('/home',function(req,res){
    res.sendFile('view/home.html',{root: __dirname },function(err){
        if(err){
            console.log(err);
        }
    });
});


app.listen(3000);