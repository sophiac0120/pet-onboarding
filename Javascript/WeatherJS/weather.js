// API Key: 3eaaffd4b4a015ce5f2f0eb6cf4a3201

class Weather {
    constructor(city, state){
        this.apiKey = '3eaaffd4b4a015ce5f2f0eb6cf4a3201';
        this.city = city;
        this.state = state;
    }


async getWeather(){
    console.log('HI');
    const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    
    const responseData = await response.json();

    return responseData.current_observation;
}

async changeLocation(city, state){
    this.state = state;
    this.city = city;
}
}