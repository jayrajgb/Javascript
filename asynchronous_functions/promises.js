function getWeather(){
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Rainy')
        }, 100);
    })
}

function getWeatherIcon(weather){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            switch(weather){
                case 'Sunny':
                    resolve('Weather: '+'☀️')
                    break
                case 'Cloudy':
                    resolve('Weather: '+'☁️')
                    break
                case 'Rainy':
                    resolve('Weather: '+'🌧️')
                    break
                default:
                    reject('SHITTT!!!')
            }
        }, 100)
    })
}

function onSuccess(data){
    console.log(data)
}

function onError(err){
    console.log(`ERROR: ${err}`)
}

function onFinally(){
    console.log("Done 👍")
}

getWeather()
    .then(getWeatherIcon)      
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)

// the getWeatherIcon() is not passed with an argument
// this is called 'Chaining'
// The first function if resolved, it passes the result as an argument to next function!
// Else if rejected, it moves all through the end and return error .catch