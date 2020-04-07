const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=084faa9609f60350e65abf5ad4d4dd02&query=37.8267,-122.4233'

request({ url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})