const axios = require('axios');

const getWeatherByCity =(lat,log,callback)=>{

    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=daa89b6672226bb4b720e7278eeed84a`;

    console.log(url);

    axios.get(url).then(result=>{
        const dt = result.data.main

        const temp = dt.temp;
        const pressure = dt.pressure
        const humidity = dt.humidity
        const city = result.data.name;

        callback({
            temp,pressure,humidity,city
        })
    })
    .catch(err=>{
        callback(undefined,err)
    })
}

module.exports={getWeatherByCity};
