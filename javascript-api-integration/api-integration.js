// Using Openweather API
window.onload = function () {
  const apiKey = "3bddd89db98e8ef0084df2043e7141e6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const locationEl = document.getElementById("location");
      const tempEl = document.getElementById("temperature");
      const condEl = document.getElementById("conditions");

      const city = data.name;
      const temp = Math.round(data.main.temp);

      let conditions = data.weather[0].description;
      conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1) + ".";

      locationEl.textContent = `City: ${city}`;
      tempEl.innerHTML = `Temperature: ${temp} &deg;C`;
      condEl.textContent = `Conditions: ${conditions}`;
    })
    .catch(error => {
      const locationEl = document.getElementById("location");
      const tempEl = document.getElementById("temperature");
      const condEl = document.getElementById("conditions");

      locationEl.textContent = "Could not load weather data.";
      tempEl.textContent = "";
      condEl.textContent = "";
    });
};