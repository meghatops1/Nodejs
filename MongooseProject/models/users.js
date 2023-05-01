const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const Users = mongoose.model('users',UserSchema);

module.exports= Users;