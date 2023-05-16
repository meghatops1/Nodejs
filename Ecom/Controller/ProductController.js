
const Product = require('../Model/ProductModel');
const AddToCart = require('../Model/AddToCart');

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
        const cartData= await AddToCart.find({userId:req.session.userid});
        console.log("🚀 ~ file: ProductController.js:24 ~ viewProduct ~ cartData:", cartData)
        const productData= await Product.find();
        cb(productData)
    }
    catch(err){
        cb(undefined,err);
    }
}

const deleteProduct = async(req,res,cb)=>{
    try{
        const id= req.params.id;
        console.log(id);
        await Product.deleteOne({_id:id});
        cb("Document suuceessfully Deleted");
    }catch(err){
        cb(undefined,err);
    }
}

const editProduct = async(req,res,cb)=>{
    try{
        const id = req.params.id;
        const productData= await Product.findOne({_id:id});
        cb(productData)
    }
    catch(err){
        cb(undefined,err);
    }
}

const productUpdate = async(req,res,cb)=>{
    try{
        const updateObj={
            pname:req.body.pname,
            price:req.body.price,
            qty:req.body.qty,
            image:req.file.filename
        }
        await Product.findByIdAndUpdate(req.params.id,updateObj);
        cb("data update successfully");
    }
    catch(err){
         cb(undefined,err);
    }

}
const addToCart = async(req,res,cb)=>{
    try{
    const addtocart = new AddToCart({
        productId:req.params.id,
        userId:req.session.userid,
        time:new  Date()
        
    });
    await addtocart.save();
    const response= {"success":"Product Added To Cart"};
    cb(response);
    }catch(err){
        cb(undefined,err);
    }
}

const viewCart = async (req,res,cb)=>{
    
    try{
        const data= await AddToCart.aggregate([
            {

            $lookup:{
                from:"products",
                localField:"productId",
                foreignField:"id",
                as:"product"
            }
            },
            {
                $match:{
                    userId:req.session.userid
                }
            }
    
    ])
        console.log(data);
        cb(data);
    }
    catch(err){
        cb(undefined,err);
    }
}


module.exports={ProductCreate,viewProduct,deleteProduct,editProduct,productUpdate,addToCart,viewCart};