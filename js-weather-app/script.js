let apiKey = "1ac41d822f470089588e62f6ac6cbdce";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let search = document.getElementById("search");
let cityInput = document.getElementById("city");
let weatherResult = document.getElementById("weather-result");

function fetchWeather(city) {
  fetch(`${apiUrl}&appid=${apiKey}&q=${city}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      weatherResult.innerHTML = "";
      cityInput.value = "";

      if (data.cod !== 200) {
        let noCity = document.createElement("p");
        noCity.textContent = "No city found or no data available.";
        weatherResult.appendChild(noCity);
        return;
      }

      let newcity = document.createElement("h1");
      newcity.textContent = data.name;

      let humidity = document.createElement("p");
      humidity.textContent = "Humidity: " + data.main.humidity;

      let feels_like = document.createElement("p");
      feels_like.textContent = "Feels Like: " + data.main.feels_like;

      let temp = document.createElement("p");
      temp.textContent = "Temperature: " + data.main.temp;

      let grnd_level = document.createElement("p");
      grnd_level.textContent = "Ground Level: " + data.main.grnd_level;

      let wind_speed = document.createElement("p");
      wind_speed.textContent = "Wind Speed: " + data.wind.speed;

      let degree = document.createElement("p");
      degree.textContent = "Degree: " + data.wind.deg;

      let weatherImage = document.createElement("img");

      if (data.main.temp < 30) {
        weatherImage.src = "assets/rainy-day.png";
      } else if (data.main.temp >= 30 && data.main.temp < 35) {
        weatherImage.src = "assets/cloudy.png";
      } else {
        weatherImage.src = "assets/sun.png";
      }

      weatherResult.append(
        newcity,humidity,feels_like,temp,grnd_level,wind_speed,degree,weatherImage
      );
    })

    .catch((error) => {
      console.error("Error:", error);
      alert("Could not fetch weather data. Please try again.");
    });
}

search.addEventListener("click", () => {
  let city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  fetchWeather(city);
});

fetchWeather("trichy");
