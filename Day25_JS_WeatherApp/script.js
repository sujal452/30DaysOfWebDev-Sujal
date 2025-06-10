// DOM Elements
const elements = {
    city: document.getElementById('city'),
    date: document.getElementById('date'),
    weatherIcon: document.getElementById('weather-icon'),
    temp: document.getElementById('temp'),
    weatherDesc: document.getElementById('weather-desc'),
    humidity: document.getElementById('humidity'),
    wind: document.getElementById('wind')
};

// Weather Data Configuration
const weatherConfig = {
    seasons: {
        spring: {
            icons: ['🌸', '🌷', '🌱', '🌦️'],
            tempRange: [10, 20],
            descriptions: ['Pleasant breeze', 'Flowers blooming', 'Mild rain', 'Partly cloudy'],
            humidityRange: [50, 70],
            windRange: [5, 15]
        },
        summer: {
            icons: ['☀️', '🌞', '🌊', '⛱️'],
            tempRange: [25, 35],
            descriptions: ['Hot and sunny', 'Scorching heat', 'Heat wave', 'Dry spell'],
            humidityRange: [30, 50],
            windRange: [5, 10]
        },
        autumn: {
            icons: ['🍂', '🍁', '🌧️', '🌫️'],
            tempRange: [5, 15],
            descriptions: ['Cool breeze', 'Falling leaves', 'Misty morning', 'Drizzling'],
            humidityRange: [60, 80],
            windRange: [10, 20]
        },
        winter: {
            icons: ['❄️', '☃️', '⛄', '🌨️'],
            tempRange: [-5, 5],
            descriptions: ['Freezing cold', 'Snowfall', 'Frosty morning', 'Icy winds'],
            humidityRange: [40, 60],
            windRange: [15, 25]
        },
        night: {
            icons: ['🌙', '🌠', '🌌', '🌃'],
            tempAdjust: -5,
            descriptions: ['Clear night', 'Starry sky', 'Cool night', 'Peaceful evening']
        }
    },
    weatherTypes: {
        sunny: { icon: '☀️', tempMod: +2 },
        rainy: { icon: '🌧️', tempMod: -3 },
        cloudy: { icon: '☁️', tempMod: -1 },
        thunder: { icon: '⛈️', tempMod: 0 }
    }
};

// Helper Functions
const helpers = {
    randomInRange: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    randomArrayItem: (array) => array[Math.floor(Math.random() * array.length)],
    formatDate: (date) => date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
};

// Weather Simulation Functions
const weatherSimulator = {
    getSeason: (date) => {
        const month = date.getMonth();
        const hour = date.getHours();
        
        if (hour >= 20 || hour < 5) return 'night';
        if (month >= 2 && month <= 4) return 'spring';
        if (month >= 5 && month <= 7) return 'summer';
        if (month >= 8 && month <= 10) return 'autumn';
        return 'winter';
    },
    
    generateWeather: () => {
        const now = new Date();
        const season = weatherSimulator.getSeason(now);
        const seasonData = weatherConfig.seasons[season];
        
        // Set basic info
        elements.date.textContent = helpers.formatDate(now);
        
        // Set theme
        document.body.className = `${season}-theme`;
        
        // Generate random weather values
        const weatherType = helpers.randomArrayItem(Object.keys(weatherConfig.weatherTypes));
        const weatherTypeData = weatherConfig.weatherTypes[weatherType];
        
        let temp = helpers.randomInRange(...seasonData.tempRange);
        if (season === 'night') temp += seasonData.tempAdjust;
        temp += weatherTypeData.tempMod;
        
        // Update DOM
        elements.weatherIcon.textContent = helpers.randomArrayItem(seasonData.icons);
        elements.temp.textContent = temp;
        elements.weatherDesc.textContent = helpers.randomArrayItem(seasonData.descriptions);
        
        if (season !== 'night') {
            elements.humidity.textContent = `${helpers.randomInRange(...seasonData.humidityRange)}%`;
            elements.wind.textContent = `${helpers.randomInRange(...seasonData.windRange)} km/h`;
        }
    },
    
    init: () => {
        // Try geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    elements.city.textContent = `Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`;
                },
                () => {
                    elements.city.textContent = 'Local Area';
                }
            );
        }
        
        // Initial update and set interval
        weatherSimulator.generateWeather();
        setInterval(weatherSimulator.generateWeather, 60000);
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', weatherSimulator.init);