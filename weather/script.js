const apiKey = "51fad4c1b3b34879bb375406240912";   
async function getWeather() {
    const city = document.getElementById("city").value;
    const weatherInfoDiv = document.getElementById("weatherInfo");

    if (city === "") {
        weatherInfoDiv.innerHTML = "Please enter a city name.";
        return;
    }

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=51fad4c1b3b34879bb375406240912&q=${city}&aqi=no`);
        const data = await response.json();

        if (!data.location) {
            weatherInfoDiv.innerHTML = "City not found. Please try again.";
            console.log(data)
            return;
        }
        console.log(data)

        const cityName = data.location.name;
        const country = data.location.country;
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;
        const humidity = data.current.humidity;
        const windSpeed = data.current.wind_kph;

        weatherInfoDiv.innerHTML = `
            <h2>Weather in ${cityName}, ${country}</h2>
            <p><strong>Temperature:</strong> ${temperature}°C</p>
            <p><strong>Description:</strong> ${description.charAt(0).toUpperCase() + description.slice(1)}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>
            <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
        `;
    } catch (error) {
        weatherInfoDiv.innerHTML = "An error occurred. Please try again later.";
    }
}
