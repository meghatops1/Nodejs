const express = require('express')
const app =express();
const dotenv = require('dotenv');
dotenv.config();
const CONNECTDB = require("../config/config");
const UserRoute = require("../route/userrouter");
const PostRoute = require("../route/postroute");
const { connect } = require('mongoose');
const PORT= process.env.PORT || 5000;
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//connection
CONNECTDB(process.env.MONGO_DB_URL);

//Routes
app.use("/api/user",UserRoute);
app.use("/api/post",PostRoute);


//Listen port
app.listen(PORT,()=>{
    console.log(`listing  to por ${PORT}`);
})