// get API Key from openweather
"apikey": "087d2d5670b960565c41ce98b2fb0cfa"
const txt = document.querySelector('#text');
const btn = document.querySelector('#btn');
const showWeatherData document.querySelector('.showWeatherData');

// add an event listener
btn.addEventListener("click", ()=> {
    const valueOfCity = txt.value;
    console.log(valueOfCity);

    // fetch data from the API using get
    fetch(``)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
})