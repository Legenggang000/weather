// Wrap the entire script in an IIFE to avoid polluting the global scope
(async () => {
    const apiKey = '8dcec3a3e0mshe96183a7337f432p1557aajsnfc6767237444';
    const apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

    const searchInput = document.getElementById('searchInput');
    const weatherSearchForm = document.getElementById('weatherSearchForm');

    // Function to fetch weather data for a given city
    const fetchWeatherData = async (city) => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`${apiUrl}?city=${city}`, options);

            if (!response.ok) {
                throw new Error('Weather data not available for the specified city.');
            }

            const result = await response.json();

            // Update HTML elements with the retrieved data
           // document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
            document.getElementById('title').innerHTML = 'Weather For ' + city;
            document.getElementById('temp').innerHTML = result.temp;
            document.getElementById('temp2').innerHTML = result.temp;
            document.getElementById('feels_like').innerHTML = result.feels_like;
            document.getElementById('humidity').innerHTML = result.humidity;
            document.getElementById('humidity2').innerHTML = result.humidity;
            document.getElementById('min-temp').innerHTML = result.min_temp;
            document.getElementById('max-temp').innerHTML = result.max_temp;
            document.getElementById('wind_speed').innerHTML = result.wind_speed;
            document.getElementById('wind_speed2').innerHTML = result.wind_speed;
            document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
            document.getElementById('sunrise-time').innerHTML = result.sunrise;
            document.getElementById('sunset-time').innerHTML = result.sunset;
        } catch (error) {
            console.error(error.message);
        }
    };

    // Event listener for form submission
    weatherSearchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const cityName = searchInput.value.trim();
        if (cityName !== '') {
            fetchWeatherData(cityName);
        }
    });

    // Initial fetch for default city (you may change this)
    fetchWeatherData('Lahore');
})();
