var express = require('express');
var router = express.Router();
const multer = require('multer');
const ProductController =  require('../Controller/ProductController');
const Product=require("../Model/ProductModel");

const multerStorage= multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null, 'public/images');
  },
  filename:(req,file,cb)=>{
    const ext = file.mimetype.split('/')[1];
    const fileName = `user-123-${Date.now()}.${ext}`;
    cb(null, fileName);
  }
})
const upload = multer({
  storage: multerStorage
});
  
/* GET home page. */
router.get('/', function(req, res, next) {
  const msg = req.flash('msg');
  ProductController.viewProduct(req,res,async(data,err)=>{
    if(err)
      console.log(err);
    
    data= await  Product.find();
    //res.send(data);
    res.render('viewproduct', { layout:'admintemp',product:data, 'msg':msg});
  })
 
});

router.get('/admin',function(req,res,next){
  res.render('admin',{layout:'admintemp'});
})

router.get('/addproduct',function(req,res,next){
  const msg = req.flash('msg');
  res.render('addproduct',{layout:'admintemp','msg':msg});
})

router.post('/insertproduct',upload.single('image'),function(req,res,next){
  console.log(req.body.pname)
  ProductController.ProductCreate(req,res,(data,err)=>{
     if(err){
       console.log(err);
     }
     req.flash('msg', data);
     res.redirect('/addproduct');
  });
})
router.get('/deleteproduct/:id',function(req,res,next){
    ProductController.deleteProduct(req,res,(data,err)=>{
        if(err){
          throw err;
        }
        else{
          req.flash('msg', data);
          res.redirect('/');
        }
    })
})
router.get('/editproduct/:id',function(req,res,next){
    ProductController.editProduct(req,res,(data,err)=>{
       if(err){
          throw err;
       }
       res.render('editproduct',{layout:'admintemp','data':data});
    })
})

router.post('/updateproduct/:id',upload.single('image'),function(req,res,next){
  
    ProductController.productUpdate(req,res,(data,err)=>{
        if(err){
          throw err;
        }
        else{
          req.flash('msg', data);
          res.redirect('/');
        }
    });
})
module.exports = router;
