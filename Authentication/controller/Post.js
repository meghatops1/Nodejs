const Post = require("../Model/post");
const Profile= require("../Model/profile");
var multer  =   require('multer');

class PostController{
    static createPost = async(req,res)=>{
        try{
            const {title,description}=req.body;
            if(!title || !description) return res.status(400).json("please enter input");

            const postObj= new Post({
                title,
                userId:req.user.id,
                description
            });
            await postObj.save();
            res.status(200).json(postObj);

        }
        catch(err){
             console.log(err);
        }
    }

    static  imageUpload = (req, res, next) => {
        const file = req.file.filename;
        
        if (!file) {
          const error = new Error('Please upload a file');
          error.statusCode = 400;
          console.log(error)
          throw error;
        }
        
        // Perform some action with the uploaded file, e.g. save to database, resize, etc.
        
        res.status(200).json({
          message: 'File uploaded successfully',
          filename: file.filename
        });
      };
      
}

module.exports=PostController;