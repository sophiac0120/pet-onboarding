const weather = new Weather('Boston', 'MA');
console.log(weather.city);

weather.getWeather()
    .then(results => {
        console.log(results);
    })
    .catch(err => console.log(err));