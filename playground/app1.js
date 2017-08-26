
const yargs = require('yargs');
const geocode = require ('./geocode/geocode');
const weather = require('./weather/weather');

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
geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.Latitude,results.Longtitude, (errMsg, weatherResult) =>{
            if(errMsg){
                console.log(errMsg);
            }
            else{
                console.log(`Its currently ${weatherResult.temperature}. Its feel like ${weatherResult.apparentTemperature}.`);
            }
        });
    }
});
