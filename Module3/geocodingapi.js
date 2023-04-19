var https = require('follow-redirects').https;

var placeDetails = function() {
	this.places = [];
}

//Step 1: Get coordinates based on the entered zipcode.
function CoordinateResponse(response) {
	var data = "";
	var sdata = "";
	var latitude = "";
	var longitude = "";

	response.on('data', function(chunk) {
		data += chunk;
	});
	response.on('end', function() {
		sdata = JSON.parse(data);
        console.log(sdata);
		// latitude = sdata.results[0].geometry.viewport.northeast.lat;
		// longitude = sdata.results[0].geometry.viewport.northeast.lng;
		// placeSearch(latitude, longitude, 50000);
	});
}
function getCoordinates(zipcode) {
	https.request({
		host: 'maps.googleapis.com',
		path: '/maps/api/geocode/json?address=' + zipcode + '&key=AIzaSyDcI2Vo0n_XetDUflsjPWSqf3awkLmoOtA',
		method: 'GET'},CoordinateResponse).end();
}

getCoordinates(395007);