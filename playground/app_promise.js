const axios = require('axios');
const yargs = require('yargs');

const argv = yargs
    .option({
        a:{
            demand: true,
            alias: 'address',
            decribe : 'Address for Weather',
            string:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var address =  encodeURIComponent(argv.a);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

axios.get(geocodeUrl).then((response)=>{
    if (response.data.results[0].status === 'ZERO_RESULTS'){
        throw new Error ('Sorry we could not find your fucking address bitch');
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lon = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/efece54608163071c40b6dcdb2237a0c/${lat},${lon}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature = response.data.currently.temperature;
    var apparentTemperature  = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. But feels like ${apparentTemperature}.`);
}).catch((e)=>{
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect API Servers bitch.');
    }
    else{
        console.log(e.message);
    }
});