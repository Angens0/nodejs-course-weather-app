const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=084faa9609f60350e65abf5ad4d4dd02&query=37.8267,-122.4233'

request({ url, json: true }, (error, response) => {
    const {weather_descriptions, temperature, feelslike} = response.body.current
    console.log(`${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees`)
})

const geocodeToken = 'pk.eyJ1IjoiYW5nZW5zMCIsImEiOiJjazhxbHJmcHUwNDlqM3BubGkyb203cmUxIn0.MPiPGwPNCL09ufaLIEllrg'
const geocodeSearchText = 'los angeles'
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${geocodeSearchText}.json?access_token=${geocodeToken}&limit=1`

request({ url: geocodeURL, json: true }, (error, response) => {
    const [longitude, latitude] = response.body.features[0].center
    console.log(longitude, latitude)
})