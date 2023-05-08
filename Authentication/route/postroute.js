const express = require('express')
const Post = require('../controller/Post');
const verifyToken = require('../Auth/auth');
const multer = require('multer');
const router = express.Router();
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      const fileName = `user-123-${Date.now()}.${ext}`;
      cb(null, fileName);
    },
  });
  
  const upload = multer({
    storage: multerStorage
  });
  
  


router.post('/', verifyToken,Post.createPost);


router.post('/imageuplode',upload.single('file'),(req,res)=>{
    console.log(req.file.filename);
});


module.exports = router;