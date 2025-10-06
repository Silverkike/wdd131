const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "jj-2020", name: "Jetpack" },
    { id: "tr-9090", name: "Time Machine" },
    { id: "sp-4040", name: "Space Suit" }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName");
    select.innerHTML = ""; // Limpia opciones previas

    const placeholder = document.createElement("option");
    placeholder.textContent = "Choose a Product ...";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });

    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
