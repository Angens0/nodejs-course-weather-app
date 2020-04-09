const request = require('request')
const geocode = require('./utils/geocode')

// const weather = ({longitude, latitude}, callback) => {
//     const url = `http://api.weatherstack.com/current?access_key=084faa9609f60350e65abf5ad4d4dd02&query=${latitude},${longitude}`

//     request({ url, json: true }, (error, response) => {
//         if(error) {
//             console.log('Unable to connect to weather service!')
//             return
//         } else if(response.body.error) {
//             console.log('Unable to find location')
//             return
//         }
    
//         callback(response.body.current, response.body.location)
//         // const {weather_descriptions, temperature, feelslike} = response.body.current
//         // console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees`)
//     })
// }

// const printWeather = ({weather_descriptions, temperature, feelslike}, location) => {
//     console.log(`The curent weather in ${location.name}, ${location.country}:\n${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees`)
// }

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})