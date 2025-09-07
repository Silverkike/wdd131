// getdates.js

// Año actual
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Fecha de última modificación
const lmSpan = document.getElementById('lastModified');
if (lmSpan) {
    lmSpan.textContent = document.lastModified;
}
