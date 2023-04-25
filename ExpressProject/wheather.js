const axios=require('axios')

const getWeather=(lat,lng,callback)=>{
    var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=daa89b6672226bb4b720e7278eeed84a`;

    axios.get(url).then(result=>{
        var dt= result.data.main;
          var temp=dt.temp;
          var humidity=dt.humidity;
          var pressure=dt.pressure;
          var city=result.data.name;
          callback({
            temp,humidity,pressure,city
          })
    })
    .catch(err=>{
       callback(undefined,err)
    })

}
module.exports={getWeather}