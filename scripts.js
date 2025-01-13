// script.js

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const animateOnScrollElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    animateOnScrollElements.forEach((el) => observer.observe(el));
});


// Open and Close Menu Overlay
function openMenu() {
    document.getElementById('menuOverlay').classList.add('active');
}

function closeMenu() {
    document.getElementById('menuOverlay').classList.remove('active');
}



function redirectWithDelay(url) {
    // Add active class to play the animation
    event.target.classList.add('active');
    
    // Wait 1 second before redirecting
    setTimeout(() => {
        window.location.href = url;
    }, 1000); // 1000ms = 1 second
}










