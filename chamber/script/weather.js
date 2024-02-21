//HTML ELEMENTS 
const myIcon = document.querySelector('#weather-icon');
const myDescription = document.querySelector('#description');
const myTemp = document.querySelector('#current-temp')

// VARIABLES 

const myKey = "36e30455ba97eba1d1f2dd7f6060cb01"
const myLat = "12.13"
const myLong = "-86.24"

//URL
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`

//GRABBING THE CURRENT WEATHER.

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());

        }
    } catch (error) {
        console.log(error);
    }
};


//Displaying JSON

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    myTemp.innerHTML = `${data.main.temp}&deg;C -`;
    myDescription.innerHTML = data.weather[0].description
    myIcon.setAttribute('src', iconsrc);
    myIcon.setAttribute('alt', data.weather[0].description);

}

apiFetch();