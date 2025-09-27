const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
];

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
            alert(`You clicked on the image of the ${templeName}!`);
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

    function displayTemples(templesList) {
        const container = document.getElementById("temples");
        container.innerHTML = ""; // Limpiar contenido previo

        templesList.forEach((temple) => {
            const card = document.createElement("section");

            const name = document.createElement("h3");
            name.textContent = temple.templeName;

            const location = document.createElement("p");
            location.textContent = `Location: ${temple.location}`;

            const dedicated = document.createElement("p");
            dedicated.textContent = `Dedicated: ${temple.dedicated}`;

            const area = document.createElement("p");
            area.textContent = `Area: ${temple.area} sq ft`;

            const image = document.createElement("img");
            image.setAttribute("src", temple.imageUrl);
            image.setAttribute("alt", `Image of ${temple.templeName}`);
            image.setAttribute("loading", "lazy");
            image.classList.add("temple-img");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedicated);
            card.appendChild(area);
            card.appendChild(image);

            container.appendChild(card);
        });
    }
    displayTemples(temples);

    function filterTemples(criteria) {
        let filtered = [];

        switch (criteria) {
            case "old":
                filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
                break;
            case "new":
                filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
                break;
            case "large":
                filtered = temples.filter(t => t.area > 90000);
                break;
            case "small":
                filtered = temples.filter(t => t.area < 10000);
                break;
            default:
                filtered = temples;
        }

        displayTemples(filtered);
    }

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que el enlace recargue la página
            const filter = link.textContent.toLowerCase(); // "home", "old", etc.
            filterTemples(filter);
        });
    });
});
