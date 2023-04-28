var express = require('express');
var router = express.Router();
var path= require('path');
const { insertFunction } = require('../src/insert');


/*      routing  */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/create', function(req, res, next) {
  res.render('adduser');
});

router.post('/store', function(req, res, next) {
      var name=req.body.name;
      var email=req.body.email;
      var pass=req.body.pass;

      insertFunction(name,email,pass,(data,err)=>{
            if(err)
              throw err;
            res.send("Data insert successfully");  
      });
});
router.get('/finduser',function(req,res,next){
  
});




module.exports = router;
