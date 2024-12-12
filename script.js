function handleCardClick(cardId) {
    const card = document.getElementById(`card${cardId}`);
    card.style.backgroundColor = "#e0f7fa";
    alert(`You interacted with Card ${cardId}!`);
}

async function fetchWeather() {
    const weatherElement = document.getElementById("weather");
    try {
        setTimeout(() => {
            weatherElement.textContent = "Sunny, 25°C";
        }, 1000);
    } catch (error) {
        weatherElement.textContent = "Failed to load weather data.";
    }
}

window.onload = () => {
    fetchWeather();
};
