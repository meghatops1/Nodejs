const mongoose= require('mongoose')

const CONNECTDB = (url)=>{
    mongoose.connect(url).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = CONNECTDB;
   