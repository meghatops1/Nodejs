const mongoose = require('mongoose')


const ProfileSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
})
const Profile = mongoose.model("Profile",ProfileSchema);
module.exports = Profile;