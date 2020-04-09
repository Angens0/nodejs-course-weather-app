const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

geocode('New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast({longitude: -75.7088, latitude: 44.1545}, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })