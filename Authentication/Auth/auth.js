const jwt = require('jsonwebtoken')

const dotenv= require("dotenv")

const verifyToken=(req,res,next)=>{
    console.log(req.headers)
    const authHeader= req.headers.token;
    //console.log("🚀 ~ file: auth.js:7 ~ verifyToken ~ authHeader:", authHeader)

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,"MYSECERTKEY",(err,user)=>{
            if(err) res.status(403).json("Token is invalid");
            req.user=user;
            next();
        })
    }
    else{
        return res.status(401).json("You are not authenticated!");
    }
}
module.exports=verifyToken