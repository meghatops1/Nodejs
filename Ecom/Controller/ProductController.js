
const Product = require('../Model/ProductModel');

const ProductCreate=  async (req,res,cb) =>{
    try{        
        const product = new Product({
            pname:req.body.pname,
            price:req.body.price,
            qty:req.body.qty,
            image:req.file.filename
        });
        await product.save();
        cb("Data successfully Inserted",undefined);
    }
    catch(err){
        cb("",err);
    }    
}

const viewProduct = async(req,res,cb)=>{
    try{
        const productData= await Product.find();
        cb(productData)
    }
    catch(err){
        cb(undefined,err);
    }
}


module.exports={ProductCreate,viewProduct};