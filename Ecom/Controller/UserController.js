const mongoose = require('mongoose')

const User = require("../Model/UserModel");

const Signup = async(req,res,cb)=>{
    
    try{
        const user = new User({
            "username":req.body.username,
            "email":req.body.email,
            "password":req.body.pass
        });

        await user.save();
        cb("data successfully inserted");
    }
    catch(err){
        cb(undefined,err);
    }

} 

const Login = async(req,res,cb)=>{
    try{
    const user= await User.findOne({email:req.body.email,password:req.body.pwd});
    if(user){
        session = req.session;
        session.userid = user.id;
        console.log(req.session);
        //====token auth==========//
        /* const sessionToken = uuid.v4()
        const now = new Date()
        const expiresAt = new Date(+now + 120 * 1000)
        const session = new Session(username, expiresAt)
        sessions[sessionToken] = session
        res.cookie("session_token", sessionToken, { expires: expiresAt })*/
        cb("success");
        }
    }catch(err){
        cb(undefined,err);
    }
    
}

module.exports={Signup,Login}