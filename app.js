// init storage object
const storage = new Storage();

// init UI object
const ui = new UI();




// get stored location date
const weatherLocation = storage.getLocationData();

// init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);


// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);


// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // weather.changeLocation('Miami', 'FL');
    // change location data
    weather.changeLocation(city, state);

    // set location in local storage
    storage.setLocationData(city, state);

    // Get and displkay weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');

});

function getWeather() {


    weather.getWeather().then(results => {
        console.log(results);
        ui.paint(results);
    }).catch(err => console.log(err));


}