const request = require('request');

var geocodeAddress = (address)=>{
    return new Promise((resolve, reject)=>{
        var encodedAddress =  encodeURIComponent(address);
        request({
                url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                json:true
            },(error, response, body)=>{
                if(error){
                    reject('Unable to Connect Google bitch Server.');
                }
                else if(body.status == 'ZERO_RESULTS'){
                    reject('Sorry we could not find your fucking address bitch');
                }
                else if(body.status == 'OK')  {
                    resolve({
                        address : body.results[0].formatted_address,
                        Latitude : body.results[0].geometry.location.lat,
                        Longtitude : body.results[0].geometry.location.lng
                    });
                }
            }
        );
    });
};

geocodeAddress('000000').then((location)=>{
    console.log(JSON.stringify(location,undefined,2));
},(errorMessage)=>{
    console.log(errorMessage);
});