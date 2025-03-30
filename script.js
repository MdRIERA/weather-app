const API_KEY = "your_KEY";

function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");
  const errorMsg = document.getElementById("errorMsg");

  if (!city) {
    showError("Por favor, ingresa una ciudad.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${API_KEY}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ciudad no encontrada.");
      }
      return response.json();
    })
    .then((data) => {
        console.log(data)
      document.getElementById("cityName").textContent = data.name;
      document.getElementById("description").textContent = data.weather[0].description;
      document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp} °C`;
      document.getElementById("humidity").textContent = `Humedad: ${data.main.humidity}%`;
      document.getElementById("wind").textContent = `Viento: ${data.wind.speed} m/s`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherResult.classList.remove("hidden");
      errorMsg.classList.add("hidden");
    })
    .catch((error) => {
      showError(error.message);
    });
}

function showError(message) {
  const weatherResult = document.getElementById("weatherResult");
  const errorMsg = document.getElementById("errorMsg");

  weatherResult.classList.add("hidden");
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
}
