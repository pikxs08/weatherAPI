// Create variables of HTML elements
const temperature = document.querySelector(".current-temp");
const humidity = document.querySelector(".current-humidity");
const wind = document.querySelector(".current-wind");

// Call weather api to collect weather info from Spielberg austria

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=47.2167&longitude=14.7833&current=temperature_2m,relative_humidity_2m,precipitation,cloud_cover,wind_speed_10m&timezone=auto"
)
  .then((res) => res.json())
  .then((result) => {
    // Below is showing the developer the data being returned
    console.log(result);

    // below variable assigns current temperature received
    let currentTemp =
      result.current.temperature_2m + result.current_units.temperature_2m;

    // below variable assigns current humidity received
    let currentHumidity =
      result.current.relative_humidity_2m +
      result.current_units.relative_humidity_2m;

    // below variable assigns current wind speed received
    let currentWindSpeed =
      result.current.wind_speed_10m + result.current_units.wind_speed_10m;

    // Below assigns the html elements which the user sees, to the received variables above.
    temperature.textContent = currentTemp;
    humidity.textContent = currentHumidity;
    wind.textContent = currentWindSpeed;
  });
