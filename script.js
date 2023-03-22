const apiKey = "1dcb28502ff0da34a6b57f6f6551f9a0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".card .search input");
const searchBtn = document.querySelector(".card .search button");
const weatherSymbol = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/jam";
        if (data.weather[0].main == "Clouds") {
            weatherSymbol.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherSymbol.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherSymbol.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherSymbol.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherSymbol.src = "images/mist.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
