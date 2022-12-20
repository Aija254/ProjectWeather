let weather = {
    // API key for OpenWeatherMap
    "apiKey": "e4f410a84aa1002deee0ad7e1d4a5528",
  
    // Function to fetch weather data for a given city
    fetchWeather: function (city) {
      // Use fetch API to call OpenWeatherMap API to get weather data
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
      )
        // Parse the response as JSON
        .then((response) => response.json())
        // Call displayWeather function to display the weather data
        .then((data) => this.displayWeather(data));
      }
    }