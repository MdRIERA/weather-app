# 🌤️ Weather App

A simple and clean weather application built with:
**HTML**
**CSS**
**JavaScript**  
This app consumes a **RESTful API** — the [OpenWeatherMap API](https://openweathermap.org/api) — to fetch real-time weather data based on the city name entered by the user.

---

## 🔧 Features

- Search weather information for any city worldwide
- Calls a **REST API** (OpenWeatherMap) using JavaScript's `fetch()` method
- Displays:
  - City name
  - Temperature in Celsius
  - Weather description (e.g. sunny, cloudy)
  - Wind speed and humidity
  - Weather icon based on current condition
- Handles errors (e.g. city not found)
- Minimal and responsive design

---

## 📡 How It Works

The app sends an HTTP `GET` request to the **OpenWeatherMap REST API** with the user's input (city name).  
The API responds with a JSON object containing the current weather data.  
JavaScript then dynamically updates the UI using this data.

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=YOUR_API_KEY`)
  .then(response => response.json())
  .then(data => {
    // Extract and display weather info
  });
```
1. Clone the repository:
   ```bash
   git clone https://github.com/MdRIERA/weather-app.git
