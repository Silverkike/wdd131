// Año dinámico
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Última modificación
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// Clima estático
const temperature = 9;   // °C
const windSpeed = 5;    // km/h
const condition = 'Partly Cloudy';

document.getElementById('temperature').textContent = `${temperature}°C`;
document.getElementById('condition').textContent = condition;
document.getElementById('wind').textContent = `${windSpeed} km/h`;

// Función de una línea para el wind chill (métrico)
function calculateWindChill(t, v) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(v, 0.16) +
        0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
}

// Mostrar wind chill solo si aplica
let windChill = 'N/A';
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed)}°C`;
}
document.getElementById('windChill').textContent = windChill;