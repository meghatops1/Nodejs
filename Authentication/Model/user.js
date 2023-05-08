const mongoose = require('mongoose')

const bcrypt = require('bcrypt')

const  UserSchema = new mongoose.Schema({
    fullname :{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required:true,
    },
    password :{
        type:String,
        required:true,
    }
});

UserSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password);
};
const User = new mongoose.model("User",UserSchema);
module.exports = User;
