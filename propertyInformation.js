(function() {
    // Fetching weather data
    fetch('https://europe-west1-amigo-actions.cloudfunctions.net/recruitment-mock-weather-endpoint/forecast?appid=a2ef86c41a&lat=27.987850&lon=86.925026')
        .then(response => response.json())
        .then(data => {
            // Displaying weather data
            if (data && data.list && data.list.length > 0) {
                const weatherInfo = data.list[0]; // Geting first weather data
                const iconCode = weatherInfo.weather[0].icon; //weather icon code

                const weatherElement = document.createElement('div');
                weatherElement.id = 'weather-info';
                weatherElement.style.border = '1px solid #ccc';
                weatherElement.style.padding = '10px';
                weatherElement.style.marginTop = '10px';
                weatherElement.style.backgroundColor = '#f9f9f9';
                weatherElement.style.display = 'flex';
                weatherElement.style.justifyContent = 'space-between';
                weatherElement.style.alignItems = 'center';

                const weatherDetails = `
                    <div>
                        <h3>Current Location Weather</h3>
                        <p>Temperature: ${weatherInfo.main.temp}°C</p>
                        <p>Weather: ${weatherInfo.weather[0].description}</p>
                        <p>Wind Speed: ${weatherInfo.wind.speed} m/s</p>
                    </div>
                `;

                const weatherIcon = `
                    <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${weatherInfo.weather[0].description}" style="margin-left: 20px;" />
                `;

                weatherElement.innerHTML = weatherDetails + weatherIcon;

                // Append the weather element to the container
                const container = document.querySelector('.Placestyle__StyledPlaceSummaryLinks-sc-7yy3d-8.evLkd');
                if (container) {
                    container.appendChild(weatherElement);
                } else {
                    console.error('Container element not found.');
                }
            } else {
                console.error('Weather data is invalid.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
})();
