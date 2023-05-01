const express= require('express');
const mongoose = require('mongoose');
const routeFile = require('./route/routerfile');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/crudproject').then(result=>{
    console.log("connection created");
})
.catch(err=>{console.log(err)});

app.use(routeFile);

app.listen(3000,()=>{
    console.log("server  is running.........");
});