const express = require('express')
const path = require('path')
const hbs = require('hbs')
const PORT=process.env.PORT || 9000
const exphbs = require('express-handlebars');
const app= express();
const geoDecoder = require('./geodecoder');
const weather=require('./wheather');


const viewPath= path.join(__dirname)+'/templates/views';
const publicPath=path.join(__dirname)+'/public';
const partialPath=path.join(__dirname)+'/templates/layouts';
app.set('view engine','hbs');
app.set('views',viewPath);
app.use(express.static(publicPath));
hbs.registerPartials(partialPath);



app.get('/', function(req, res){
    res.render('home', {
       array: ['Node', 'Javascript', 'PHP', 'React'],
       message: 'Tops Technology'
    })
})
  
app.get('/about', function(req, res){
    res.render('about');
})
app.get('/contact', function(req, res){
    res.render('contact');
})
app.get('/location',function(req,res){
    var city = req.query.city || "surat,gujarat";//optional query string
    console.log(city)
    geoDecoder.getGeoLocation(city,(data,err)=>{
        console.log(data);
        weather.getWeather(data.lat,data.lng,(data,err)=>{
            if(err)
                throw err;
            res.send(data);
        })
    })
})
app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})