const openGeocoder = require('node-open-geocoder');
 
openGeocoder()
  .geocode('ring road,surat')
  .end((err, res) => {
    if(err)throw err;

    console.log(res);
  })