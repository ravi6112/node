const request = require('request');

var getWeather = (lat,lon,callback) => {
    request({
            url: `https://api.darksky.net/forecast/efece54608163071c40b6dcdb2237a0c/${lat},${lon}`,
            json: true
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                callback(undefined,{
                    temperature : body.currently.temperature,
                    apparentTemperature : body.currently.apparentTemperature

                });
            }
            else {
                callback('Unable to connect weather forecast bitch');
            }
        }
    );
};

module.exports={
    getWeather
};