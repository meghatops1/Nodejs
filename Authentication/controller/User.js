const User = require("../Model/user");
const emailValidator = require("../validators/emailValidator");
const jwt = require("jsonwebtoken");


class UserControllers{
    //Register
    static Register = async(req,res,next)=>{
        const {fullname,email,password}=req.body;
        try{
            const user = await User.findOne({email:email})
            if(user) return res.status(500).json("This user already exist");
            if(!emailValidator(email)) return res.status(500).json("Enter valid email");
            const userObj = new User(req.body);
            await userObj.save();
            res.status(200).json("User created");
        }
        catch(err){
            next(err);
        }
    }
    //login
    static Login = async(req,res,next)=>{
        try{
            if(!req.body.email || !req.body.password) return next(ApiError.NotFound("please enter input"))

            const  user =await User.findOne({email:req.body.email});
            if(!user) return res.status(400).json("This user  doesn't exist");
            const isMatch = await user.matchPassword(req.body.password);
            if(!isMatch) return res.status(400).json("wrong password");
            const token = jwt.sign({id:user._id,email:user.email},"MYSECERTKEY",{ expiresIn: "1h" });
            const {password,otherDetails}=user._doc;
            res.status(200).json({user:{otherDetails,token}});


        }catch(err){
            next(err)
        };
    }
}

module.exports = UserControllers;