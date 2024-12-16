// Toggle the dropdown menu on mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slide'); // Assuming you have elements with the class "slide"

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');
    
    // Increment the slideIndex and reset it to 0 if it goes past the last slide
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    
    // Show the current slide
    slides[slideIndex].style.display = 'block';
}

// Initial call to display the first slide
showSlides();

// Set an interval to change slides every 5 seconds (5000ms)
setInterval(showSlides, 5000);
// Function to check if the section is in view
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

// Select all sections that need to be animated
const section = document.querySelectorAll('.animate-section');

// On scroll event, check if each section is in view and add a class to trigger the animation
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

// Trigger check on page load in case sections are already in view
window.addEventListener('load', () => {
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        }
    });
});

// Function to check if the section is in view
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Select all sections that need to be animated
const sections = document.querySelectorAll('.animate-section');

// On scroll event, check if each section is in view and add a class to trigger the animation
function checkVisibility() {
  sections.forEach(section => {
      if (isElementInViewport(section)) {
          section.classList.add('visible');
      }
  });
}

// Trigger the check on scroll
window.addEventListener('scroll', checkVisibility);

// Trigger the check when the page loads (in case sections are already in view)
window.addEventListener('load', checkVisibility);
// Wait for the window to load
window.onload = function () {
  // Hide the loading screen
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";

  // Show the main content
  const mainContent = document.getElementById("main-content");
  mainContent.classList.remove("hidden");
};

