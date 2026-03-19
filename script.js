// Navbar change color on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Mobile menu toggle
const toggleBtn = document.getElementById("toggleBtn");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});