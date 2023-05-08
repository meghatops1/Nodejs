const mongoose= require('mongoose');
const express= require('express');
const Users = require('../models/users');
const router = express.Router();
const app =express();
//get all user information
router.get("/users",async(req,res)=>{
   const users=await Users.find({});

    try{
        res.send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
})
//create new user
router.post("/users",async(req,res)=>{
    const userObj=new Users(req.body);

    try{
        await userObj.save();
        res.send(userObj);
    }
    catch(err){
        res.status(500).send(err);
    }
})
//get  user by id
router.get('/users/:id',async(req,res)=>{
    try{
        const userData =await Users.findById(res.params.id);
        
        res.send(userData);
    }
    catch(err){
        res.status(500).send(err);
    }
})
//update user
router.put('/users/:id',async(req,res)=>{
try{
    console.log(req.body);
    const users=await Users.findByIdAndUpdate(req.params.id,req.body);
    res.send(users);
    }
catch(err){
    res.status(500).send(err);
}
})
//delete user
router.delete('/users/:id',async(req,res)=>{
    try{
        const users=await Users.findByIdAndDelete(req.params.id);
        res.send(users);
        }
    catch(err){
        res.status(500).send(err);
    }
    })
router.delete('/users',async(req,res)=>{
        try{
            const users=await Users.findByIdAndDelete(req.query.id);
            res.send(users);
            }
        catch(err){
            res.status(500).send(err);
        }
        })
module.exports = router;