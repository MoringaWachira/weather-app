// get API Key from openweather
// "apikey": "087d2d5670b960565c41ce98b2fb0cfa"
// const txt = document.querySelector('#text');
// const btn = document.querySelector('#btn');
// const showWeatherData = document.querySelector('.showWeatherData');

// const API_Key = "087d2d5670b960565c41ce98b2fb0cfa";

// add an event listener
// get input value
// const submit = document.getElementById('submit');
// submit.addEventListener('submit', (e) => {

// })


// fetch API
// fetch("https://api.openweathermap.org/data/2.5/weather?q=London&apikey=087d2d5670b960565c41ce98b2fb0cfa")
// .then((res) => {
//     if(res.ok){
//     console.log("Success")
// }else{
//     console.log("Fail")
// }
// return res.json()
// })
// .then((weather) =>  fetchMyWeather(weather))
// .catch((err) => console.log(err))

// // fetch weather
// function fetchMyWeather(weather) {
//     console.log(weather) 
// }

// // On page load
// document.addEventListener("DOMContentLoaded", ()=>{
//     fetchMyWeather()
// })
// const form = document.querySelector("form")
// form.addEventListener("submit", e => {
//     e.preventDefault()
    
//     const valueOfCity = txt.value;
//     return(valueOfCity);

//     // fetch data from the API using GET
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valueOfCity}&apikey=087d2d5670b960565c41ce98b2fb0cfa`)
//         .then(res => res.json())
//         .then(data => {
//              console.log(data);
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')

    form.addEventListener ('submit', e => {
        e.preventDefault()
        results(e.target.city_name.value)
        form.reset()
    })

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=087d2d5670b960565c41ce98b2fb0cfa`)
         .then(response => response.json())
         .then(data => {
            const city = data['name'],
            temperature = data['main']['temp'],
            description = data['weather'][0]['description'],
            cloud = data['cloud']['all'],
            humidity = data['main']['humidity'],
            wind = data['wind']['speed']


            console.log(data)
         })
})

















