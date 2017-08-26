const request = require('request');

var geocodeAddress = (ad, callback)=>{
    var address =  encodeURIComponent(ad);
    request({
            url : `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json:true
        },(error, response, body)=>{
            if(error){
                callback('Unable to Connect Google bitch Server.');
            }
            else if(body.status == 'ZERO_RESULTS'){
                callback('Sorry we could not find your fucking address bitch');
            }
            else if(body.status == 'OK')  {
                callback(undefined, {
                    address : body.results[0].formatted_address,
                    Latitude : body.results[0].geometry.location.lat,
                    Longtitude : body.results[0].geometry.location.lng
                });
            }
        }
    );
};

module.exports={geocodeAddress};
