// get API Key from openweather
// "apikey": "087d2d5670b960565c41ce98b2fb0cfa"
// const txt = document.querySelector('#text');
// const btn = document.querySelector('#btn');
const showWeatherData = document.querySelector('.showWeatherData');

const API_Key = "087d2d5670b960565c41ce98b2fb0cfa";

// add an event listener


const form = document.querySelector("form")
form.addEventListener("submit", e => {
    e.preventDefault()
    
    const valueOfCity = txt.value;
    return(valueOfCity);

    // fetch data from the API using GET
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueOfCity}&apikey=087d2d5670b960565c41ce98b2fb0cfa`)
        .then(res => res.json())
        .then(data => {
             console.log(data);
    });
});