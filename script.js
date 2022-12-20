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
    },
  
    // Function to display the weather data on the page
    displayWeather: function( data ) {
      // Destructure the data object to get relevant data
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
  
      // Log the data to the console for debugging purposes
      console.log(name, icon, description, temp, humidity, speed);
  
      // Update the page elements with the weather data
      document.querySelector(".city").innerText = "weather in " + name;
      document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".description").innerText = description;
      document.querySelector(".humidity").innerText = ` Humidity: ${humidity}%`;
      document.querySelector(".wind").innerText = " Wind Speed: " + speed + "m/s";
      document.body.style.backgroundImage = "url ('https://source.unsplash.com/1600x900/? + name +')"
    },
  
    // Function to search for weather by city
    search: function() {
      // Call fetchWeather function with the search query entered by the user
      this.fetchWeather(document.querySelector(".search-bar").value);
    }
  };
  
  // Add event listener for click event on the search button
  document.querySelector(".search button").addEventListener("click", function () {
    // Call search function on the weather object
    weather.search();
  });
  
  // Add event listener for keyup event on the search input field
  document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    // If the key pressed is "Enter"
    if (event.key === "Enter") {
      // Call search function on the weather object
      weather.search();
    }
  });
  
