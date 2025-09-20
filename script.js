// ========================
// Values Section Animation
// ========================
const values = document.querySelectorAll('.value');

function checkValues() {
    const triggerBottom = window.innerHeight * 0.85;
    values.forEach(val => {
        const top = val.getBoundingClientRect().top;
        if(top < triggerBottom) {
            val.style.opacity = 1;
            val.style.transform = 'translateX(0)';
        } else {
            val.style.opacity = 0;
            if(val.classList.contains('right')) val.style.transform = 'translateX(100px)';
            else val.style.transform = 'translateX(-100px)';
        }
    });
}

window.addEventListener('scroll', checkValues);
window.addEventListener('load', checkValues);

// ========================
// Gallery Image Intersection Observer
// ========================
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-img");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("show");
        });
    }, { threshold: 0.3 });
    galleryImages.forEach(img => observer.observe(img));
});

// ========================
// Burger Menu Toggle
// ========================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
