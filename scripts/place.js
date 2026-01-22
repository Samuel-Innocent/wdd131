// Weather Logic for Nigeria Page

// Static values (Matches Rubric Requirements)
const temperature = 10; // °C 
const windSpeed = 5;    // km/h

// Function to calculate wind chill (Metric)
function calculateWindChill(temp, speed) {
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