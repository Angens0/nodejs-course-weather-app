const request = require('request')

const geocode = (adress, callback) => {
    const token = 'pk.eyJ1IjoiYW5nZW5zMCIsImEiOiJjazhxbHJmcHUwNDlqM3BubGkyb203cmUxIn0.MPiPGwPNCL09ufaLIEllrg'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(adress)}.json?access_token=${token}&limit=1`

    request({ url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
            return
        } else if(response.body.error || response.body.message === 'Not Found' || !response.body.features.length) {
            callback('Unable to find location', undefined)
            return
        }

        const [longitude, latitude] = response.body.features[0].center
        const {place_name} = response.body.features[0]
        callback(undefined, {longitude, latitude, place_name})
    })
}

module.exports = geocode