const request = require('request')

const forecast =(latitude,longitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/522bb5225180bbf1a93af4cb87c980c8/'+latitude+','+longitude+'?units=si'

    request({ url : url , json: true},(error,response) =>{
        if(error)
        {
            callback('Unable to connect to Weather service',undefined)
        }
        else if(response.body.error)
        {
            callback('Unable to find Location',undefined)
        }
        else{
            callback(undefined,'It is corrently '+response.body.currently.temperature+' degrees out there. There '+(response.body.currently.precipProbability*100)+"% chance of rain")
        }
        
    })
}

module.exports = forecast