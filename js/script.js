// Create variables of HTML elements
const temp = document.querySelector(".current-temp");
const humidity = document.querySelector(".current-humidity");
const wind = document.querySelector(".current-wind");

// Call weather api to collect weather info from Spielberg austria

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=47.2167&longitude=14.7833&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m&timezone=auto"
)
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
    let currentTemp =
      result.current.temperature_2m + result.current_units.temperature_2m;
    let currentHumidity =
      result.current.relative_humidity_2m +
      result.current_units.relative_humidity_2m;
    let currentWindSpeed =
      result.current.wind_speed_10m + result.current_units.wind_speed_10m;
    temp.textContent = currentTemp;
    humidity.textContent = currentHumidity;
    wind.textContent = currentWindSpeed;
  });
