const API_KEY = "4ae04986f307408ba4222015240104";
const weatherIconElement = document.getElementById("weather-icon");
const weatherConditionElement = document.getElementById("weather-condition");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");

function getWeatherData() {
  fetch(`https://api.weatherapi.com/v1/current.json?q=HaNoi&key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      const windSpeed = data.current.wind_kph; // Lấy tốc độ gió (km/h)

      // Cập nhật các phần tử HTML
      weatherIconElement.src = data.current.condition.icon;
      weatherConditionElement.textContent = data.current.condition.text;
      temperatureElement.textContent = `${data.current.temp_c}°C`;
      windElement.textContent = `Gió: ${windSpeed} km/h`;
    });
}

getWeatherData();
