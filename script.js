// Typed.js initialization
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "YouTuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    if (body.classList.contains('light-theme')) {
        themeToggle.classList.remove('bx-moon');
        themeToggle.classList.add('bx-sun');
    } else {
        themeToggle.classList.remove('bx-sun');
        themeToggle.classList.add('bx-moon');
    }
});
function makeCircle() {
    const image = document.querySelector('.circle-image');
    image.classList.toggle('circle-image'); // Toggle the circular shape
}
// JavaScript to toggle the animation
function toggleAnimation() {
    const image = document.querySelector('.circle-image');
    image.classList.toggle('pause-animation'); // Toggle the pause class
}

// Add a button to toggle the animation (optional)
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Animation';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '10px';
toggleButton.style.left = '10px';
toggleButton.style.padding = '10px 20px';
toggleButton.style.backgroundColor = '#0ef';
toggleButton.style.color = '#081b29';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.onclick = toggleAnimation;
document.body.appendChild(toggleButton);

// CSS for pausing the animation
const style = document.createElement('style');
style.innerHTML = `
    .pause-animation {
        animation-play-state: paused;
    }
`;
document.head.appendChild(style);



const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Function to handle screen resize
function handleResize() {
    if (window.innerWidth <= 768) {
        // For smaller screens
        navbar.style.display = 'none'; // Hide navbar by default
        menuIcon.style.display = 'block'; // Show hamburger icon
        menuIcon.style.gridColumn='column';
    } else {
        // For larger screens
        navbar.style.display = 'flex'; // Show navbar
        menuIcon.style.display = 'none'; // Hide hamburger icon
    }
}

// Function to toggle navbar visibility
function toggleNavbar() {
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'flex'; // Show navbar
    } else {
        navbar.style.display = 'none'; // Hide navbar
    }
}

// Add event listeners
window.addEventListener('resize', handleResize);
menuIcon.addEventListener('click', toggleNavbar);

// Initial check on page load
handleResize();

    // Fade-in on scroll
    document.addEventListener('DOMContentLoaded', function() {
        const fadeElements = document.querySelectorAll('.fade-in');

        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                // Trigger fade when element is 80% in view
                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('active');
                }
            });
        }

        // Run on load and scroll
        window.addEventListener('load', checkFade);
        window.addEventListener('scroll', checkFade);
    });
