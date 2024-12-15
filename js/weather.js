//API key: 05cb765f27ee41b98b6235603241412

const apiKey = '05cb765f27ee41b98b6235603241412'; 
const city = 'Madrid'; 
const country = 'ES'; 

async function fetchWeatherData() {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no&days=1&lang=en`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // datos actuales
        const current = data.current;
        const location = data.location;
        
        // Actualizar la ciudad y el país
        document.getElementById('city').textContent = location.name;
        document.getElementById('country').textContent = location.country;
        
        
        document.getElementById('temperature').textContent = `${current.temp_c} °C`;
        document.getElementById('condition').textContent = current.condition.text;
        document.getElementById('precipitation').textContent = current.precip_mm;
        document.getElementById('humidity').textContent = current.humidity;
        document.getElementById('wind-speed').textContent = current.wind_kph;
        
        
        const iconUrl = `https:${current.condition.icon}`;
        document.getElementById('weather-icon').setAttribute('src', iconUrl);

        // Previsión por horas
        const hourly = data.forecast.forecastday[0].hour;
        const hourlyContainer = document.getElementById('hourly-forecast');
        hourlyContainer.innerHTML = ''; // Limpiar el anterior

        hourly.forEach(hour => {
            const hourItem = document.createElement('div');
            hourItem.classList.add('hourly-item');
            hourItem.innerHTML = `
                <p>${hour.time.split(' ')[1]}</p>
                <img src="https:${hour.condition.icon}" alt="${hour.condition.text}">
                <p>${hour.temp_c} °C</p><p>${hour.condition.text}</p>
            `;
            hourlyContainer.appendChild(hourItem);
        });

    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}


document.addEventListener('DOMContentLoaded', fetchWeatherData);
