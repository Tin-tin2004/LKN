const nextButton = document.querySelector('.rightButton');
const prevButton = document.querySelector('.leftButton');
const slides = document.querySelectorAll('.slides'); // <-- FIXED selector
const indicators = document.querySelectorAll('.carousel-indicators .indicator');

let currentSlide = 0;

// Function to update indicators
function updateIndicators(index) {
    indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Function to update slide position
function updateSlidePosition() {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
        // Optional: hide non-active slides for accessibility
        slide.style.display = i === currentSlide ? 'flex' : 'none';
    });
}

// Function to change slides
function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        updateSlidePosition();
        updateIndicators(index);
    }
}

// Event listeners for next/prev buttons
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
    updateIndicators(currentSlide);
});

prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
    updateIndicators(currentSlide);
});

// Allow clicking indicators
indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        goToSlide(i);
    });
});

// Initialize carousel
updateSlidePosition();
updateIndicators(currentSlide);

// Auto-slide every 3 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlidePosition();
    updateIndicators(currentSlide);
}, 3000);

// Redirect to makeOrder.html when Shop Now button is clicked
const shopNowBtn = document.querySelector('.shopnowButton');
if (shopNowBtn) {
    shopNowBtn.addEventListener('click', () => {
        window.location.href = 'Buy.html';
    });
}