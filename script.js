// ==============================
// VALUES SECTION - SCROLL REVEAL
// ==============================
const values = document.querySelectorAll('.value');

function checkValues() {
    const triggerBottom = window.innerHeight * 0.85; // 85% of viewport
    values.forEach(val => {
        const top = val.getBoundingClientRect().top;
        if (top < triggerBottom) {
            val.style.opacity = 1;
            val.style.transform = 'translateX(0)';
        } else {
            val.style.opacity = 0;
            val.style.transform = val.classList.contains('right') ? 'translateX(100px)' : 'translateX(-100px)';
        }
    });
}

// Trigger on scroll and page load
window.addEventListener('scroll', checkValues);
window.addEventListener('load', checkValues);

// ==============================
// GALLERY IMAGE REVEAL
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const galleryImages = document.querySelectorAll(".gallery-img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    galleryImages.forEach(img => observer.observe(img));
});

// ==============================
// BURGER MENU TOGGLE
// ==============================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
