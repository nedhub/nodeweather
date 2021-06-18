const request = require('request')


const url = 'http://api.weatherstack.com/current?access_key=c45ad60ec2d8279aaa7a70741de21eb8&query=37.8267,-122.4233&units=f'

const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmVkaHViIiwiYSI6ImNranprMnVmazA1dW0ydnFqZGcxaTU3eGwifQ.IB3ru5q2356J8zWv9VnJPA&limit=1"



// request({ url: url2, json: true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')

//     } else if (response.body.error) {
//         console.log("Unable to find location")

//     }
    
    
    
    
//     else {
//         const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude, longitude)

//     }


    
// })

// request({ url: url, json: true }, (error, response) => {
//     // const data = JSON.parse(response.body)
//     console.log(" it is currently  " + response.body.current.temperature + ' degrees out.' +"There is a " +response.body.current.precip + " chance of rain ")

// })

//Geocoding
//Address -> Lat/Long -> Weather


//
// Goal: Print the lat/long for Los Angeles
// Have the request module parse it as JSON
// Print both the latitude and longitude for the terminal
// Test your work!


const geocode = (address, callback) => {

    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibmVkaHViIiwiYSI6ImNranprMnVmazA1dW0ydnFqZGcxaTU3eGwifQ.IB3ru5q2356J8zWv9VnJPA&limit=1'

    request({url:url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)

        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)

        }

    })
}


geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)


})
