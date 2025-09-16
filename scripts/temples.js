document.addEventListener("DOMContentLoaded", () => {
    // Mostrar año actual
    const yearElement = document.getElementById("currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Mostrar fecha de última modificación
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }

    // Funcionalidad de clic en imágenes
    const templeImages = document.querySelectorAll('.temple-img');
    templeImages.forEach(img => {
        img.addEventListener('click', () => {
            const templeName = img.alt;
            alert(`¡Has hecho clic en la imagen del ${templeName}!`);
        });
    });

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        // Cambiar el icono a X cuando se abre
        hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
    });
});
