const  decoder= require('./getlocation')
const weather=require('./getweather')

const city = process.argv[2]

if(!city){
    console.log("Please enter city name : ");
    return;
}

decoder.geoDecoder(city,(data,err)=>{
    console.log(data);
    weather.getWeatherByCity(data.lat,data.lng,(data,err)=>{
        console.log(data);
    })
})