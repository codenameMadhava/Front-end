const apiKey = '2d6647c525b8a9065f68737640db40d8';

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
        });
});

function displayWeather(data) {
    const weatherData = document.getElementById('weatherData');
    weatherData.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
function displayWeather(data) {
	const weatherData = document.getElementById('weatherData');
	const weatherIconCode = data.weather[0].icon;
	const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}.png`;
        
	weatherData.innerHTML = `
	    <h2>${data.name}, ${data.sys.country}</h2>
	    <div class="weather-icon">
	        <img src="${weatherIconUrl}" alt="Weather Icon">
	    </div>
	    <p>Temperature: ${data.main.temp}°C</p>
	    <p>Weather: ${data.weather[0].description}</p>
	    <p>Humidity: ${data.main.humidity}%</p>
	    <p>Wind Speed: ${data.wind.speed} m/s</p>
	`;
        }
// script.js
// script.js

// Function to animate clear sky
function animateClearSky() {
	gsap.to("#sky", { duration: 2, backgroundColor: '#00aaff' }); // Change background color to blue
	gsap.to("#sky", { duration: 2, opacity: 1 }); // Fade in the sky
	gsap.to("#clouds", { duration: 2, opacity: 0 }); // Fade out clouds
	gsap.to("#sun", { duration: 2, opacity: 1 }); // Fade in sun
	gsap.to("#rain", { duration: 2, opacity: 0 }); // Fade out rain
	gsap.to("#thunderstorm", { duration: 2, opacity: 0 }); // Fade out thunderstorm
        }
        
        // Function to animate thunderstorm
        function animateThunderstorm() {
	gsap.to("#sky", { duration: 2, backgroundColor: '#333' }); // Change background color to dark
	gsap.to("#sky", { duration: 2, opacity: 1 }); // Fade in the sky
	gsap.to("#clouds", { duration: 2, opacity: 1 }); // Fade in clouds
	gsap.to("#sun", { duration: 2, opacity: 0 }); // Fade out sun
	gsap.to("#rain", { duration: 2, opacity: 1 }); // Fade in rain
	gsap.to("#thunderstorm", { duration: 2, opacity: 1 }); // Fade in thunderstorm
        }
        
        // Function to fade out the sky
        function fadeOutSky() {
	gsap.to("#sky", { duration: 2, opacity: 0 }); // Fade out the sky
        }
        
        // Example: Simulate weather change after 5 seconds
        setTimeout(() => {
	animateThunderstorm(); // Simulate thunderstorm
        }, 5000);
        
        setTimeout(() => {
	fadeOutSky(); // Fade out the sky
        }, 10000);
        
        setTimeout(() => {
	animateClearSky(); // Simulate clear sky
        }, 15000);

