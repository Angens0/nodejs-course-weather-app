const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

const adress = process.argv[2]

if(!adress) {
    console.log('Please provide and adress')
} else {
    geocode(adress, (error, geocodeData) => {
        if(error) return console.log(error)
    
        forecast(geocodeData, (error, forecastData) => {
            if(error) return console.log(error)
    
            console.log(geocodeData.location)
            console.log(forecastData)
        })
    })
}