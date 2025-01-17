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








const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');
const progressBar = document.getElementById('progressBar');

// Update duration on load
audio.addEventListener('loadedmetadata', () => {
  const minutes = Math.floor(audio.duration / 60);
  const seconds = Math.floor(audio.duration % 60);
  durationDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Play/Pause toggle
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '❚❚'; // Pause icon
  } else {
    audio.pause();
    playPauseButton.textContent = '▶'; // Play icon
  }
});

// Update current time and progress bar
audio.addEventListener('timeupdate', () => {
  const minutes = Math.floor(audio.currentTime / 60);
  const seconds = Math.floor(audio.currentTime % 60);
  currentTimeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  progressBar.value = (audio.currentTime / audio.duration) * 100;
});

// Seek audio
progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});





