document.addEventListener("DOMContentLoaded", () => {
    // === Footer dynamic content ===
    const yearSpan = document.getElementById("currentyear");
    const modifiedSpan = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        const modifiedDate = new Date(document.lastModified);
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        };
        modifiedSpan.textContent = modifiedDate.toLocaleString("en-US", options);
    }

    // === Contact form functionality ===
    const form = document.getElementById("contactForm");
    const responseDiv = document.getElementById("response");

    if (form && responseDiv) {
        function validateForm(data) {
            return data.name && data.email && data.message;
        }

        function showResponse(message, isError = false) {
            responseDiv.innerHTML = `<p style="color:${isError ? 'red' : 'green'};">${message}</p>`;
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                type: form.type.value,
                message: form.message.value.trim(),
                timestamp: new Date().toISOString()
            };

            if (!validateForm(data)) {
                showResponse("Please fill out all required fields.", true);
                return;
            }

            let submissions = JSON.parse(localStorage.getItem("submissions")) || [];
            submissions.push(data);
            localStorage.setItem("submissions", JSON.stringify(submissions));

            showResponse(`Thank you, ${data.name}! Your ${data.type} has been received.`);
            form.reset();
        });
    }

    // === Hamburger menu functionality ===
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
});
