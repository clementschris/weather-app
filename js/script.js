let searchInp = document.querySelector('.weather__search');
let city = document.querySelector('.weather__city');
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator--humidity>.value');
let wind = document.querySelector('.weather__indicator--wind>.value');
let pressure = document.querySelector('.weather__indicator--pressure>.value');
let image = document.querySelector('.weather__image');
let temperature = document.querySelector('.weather__temperature>.value');

let weatherAPIKey = '54653dca6878a4649b659650fd3cbc6a';
let weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

searchInp.addEventListener('keydown', async (e) => {
    if(e.keyCode === 13) {
        let weather = await getWeatherByCityName(searchInp.value);
        updateCurrentWeather(weather);
    }
})

let updateCurrentWeather = (data) => {
    city.textContent = data.name + ', ' + data.sys.country;
    day.textContent = dayOfWeek();
}

let dayOfWeek = () => {
    return new Date().toLocaleDateString('en-EN', {'weekday': 'long'});
}