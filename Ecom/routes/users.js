var express = require('express');
const User = require('../Model/UserModel');
var router = express.Router();
const UserController = require('../Controller/UserController');
const ProductController = require('../Controller/ProductController');

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.render('register',{layout:'admintemp'})
});
router.get('/signin', function(req, res, next) {
  res.render('login',{layout:'admintemp'})
});
router.post('/register',function(req,res,next){
     UserController.Signup(req,res,(data,err)=>{
          if(err){
            throw err;
          }
          else{
            res.send({'message':data});
          }
     });
})

router.post('/login',function(req,res,next){
     UserController.Login(req,res,(data,err)=>{
          if(err){
            throw err
          }
          if(data=="success"){
              res.redirect('/users/client');
          }
     });
})
router.get('/client',function(req,res,next){
   
  ProductController.viewProduct(req,res,(data,err)=>{
     if(err){
        throw err
     }
     else{
      console.log(data);
      res.render('client',{layout:'admintemp','product':data});
     }
  })
    
})

module.exports = router;
