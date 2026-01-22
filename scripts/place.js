// 1. Footer Date Logic
const currentYear = new Date().getFullYear();
document.querySelector('#currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `Last Modification: ${lastModified}`;


// 2. Weather Logic
const temperature = 10; // °C (Static value for testing)
const windSpeed = 5;    // km/h (Static value for testing)

// Function to calculate wind chill (Metric)
function calculateWindChill(temp, speed) {
    // Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
    return (13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

// Display static values
document.querySelector('#temp').textContent = temperature;
document.querySelector('#wind').textContent = windSpeed;

// Check conditions: Temp <= 10°C AND Wind > 4.8 km/h
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed) + " °C";
}

// Output result
document.querySelector('#chill').textContent = windChill;