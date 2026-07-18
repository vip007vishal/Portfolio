// ===============================
// Mobile Navigation
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// ===============================
// Close Menu After Clicking Link
// ===============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.12)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.08)";
    }

});

// ===============================
// Current Year in Footer
// ===============================

const footerText = document.querySelector("footer p");

footerText.innerHTML = `© ${new Date().getFullYear()} Vishal. All Rights Reserved.`;