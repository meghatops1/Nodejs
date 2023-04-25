const axios = require('axios');

const getGeoLocation=(city,callback)=>{
 console.log("hghjg");
    var url=`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=152ac75fd0ed4490a17b3d55e412f3c9`;

    axios.get(url).then(function(res){
        var geometry=res.data.results[0].geometry;

        var lat=geometry.lat;
        var lng=geometry.lng; 
        callback({
            lat,lng
        })
    })
    .catch(function(err){
        callback(undefined,err)
    })
}

module.exports={getGeoLocation}
