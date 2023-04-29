const mongoose = require('mongoose');

main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    const blogSchema=new mongoose.Schema({
        title:String,
        description:String,
    });

    blogSchema.methods.viewPost = function viewPost(){
        console.log(`title=${this.title} and description =${this.description}`);
    };

    const Blog = mongoose.model('blog',blogSchema);

    const blog1= new Blog({title:"Daily News",description:"lorem "});
    await blog1.save();
    blog1.viewPost();

    const blogData= await Blog.find();
    console.log(blogData);


}

