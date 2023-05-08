const mongoose= require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true,
        trim:true
    }
})

const CategoryModel = mongoose.model('category',CategorySchema);

module.exports=CategoryModel;