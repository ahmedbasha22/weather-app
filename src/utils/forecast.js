const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59536843df41d8e27edccb6ff20e6abe&query=' + latitude + ',' + longitude
    request({
        url,
        json: true
    }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to WeatherStack!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            const data = body.current
            callback(undefined, data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out, but it feels like ' + data.feelslike + ' degrees out.')
        }
    }) 
}

module.exports = forecast