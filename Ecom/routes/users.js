var express = require('express');
const User = require('../Model/UserModel');
var router = express.Router();
const UserController = require('../Controller/UserController');
const ProductController = require('../Controller/ProductController');
const AddToCart = require('../Model/AddToCart');

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
   if(req.session.userid){

    ProductController.viewProduct(req,res,(data,err)=>{
        if(err){
           throw err
        }
        else{
          console.log(data);
          res.render('client',{layout:'admintemp','product':data});
        }
    })
  }
  else{
    res.redirect('/users/signin');
  }

    
})

router.get('/addtocart/:id',function(req,res,next){
     if(req.session.userid){
         console.log("🚀 ~ file: users.js:58 ~ router.get ~ req.session.userid:", req.session.userid)
         ProductController.addToCart(req,res,(data,err)=>{
              if(err){
                throw err;
              }
              else{
                res.redirect('/users/client');
              }
         })
     }
     else{
      res.redirect('/users/signin');
     }
      
})

router.get("/cart",function(req,res,next){
  if(req.session.userid){
    console.log(req.session.userid);
    ProductController.viewCart(req,res,(data,err)=>{
      if(err)
      throw err;
      res.send(data);
      //res.render('viewcart',{layout:'admintemp','cartdata':data});
    });
  }
  else{
    res.redirect('/users/signin');
  }
});

module.exports = router;
