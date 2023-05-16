const mongoose = require('mongoose');

const addToCartSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true,
    },
    time:{
        type:Date,
        default:new Date(),
    }
})

const AddToCart = new mongoose.model("addtocart",addToCartSchema);
module.exports=AddToCart;