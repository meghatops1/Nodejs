const  axios =require('axios');

const geoDecoder = (city,callback)=>{
    var city = process.argv[2];
console.log(city);
axios.get('https://api.opencagedata.com/geocode/v1/json?q={city}&key=152ac75fd0ed4490a17b3d55e412f3c9')
.then(function (res){
    var result = res.data.results[0]['geometry'];
    const lat= result.lat;
    const lng=result.lng;
    callback({
        lat,lng
    })
})
.catch(function (err){
    callback(undefined,err);
})
.finally(function(){
    console.log("Data get");
});

}

module.exports={geoDecoder}
