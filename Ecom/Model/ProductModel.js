const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    'pname':
    {
        type:String,
        required:true,
        trim:true,
    },
    'price':{
        type:String,
        required:true,
        trim:true,
    },
    'qty':{
        type:String,
        required:true,
        trim:true,
    },
    'image':{
        type:String,
        required:true,
        trim:true,
    }

})
const  Product = new mongoose.model("product",ProductSchema);
module.exports = Product;