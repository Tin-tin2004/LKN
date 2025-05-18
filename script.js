const track = document.querySelector('.slides-container');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightButton');
const prevButton = document.querySelector('.leftButton');

// Set each slide's width to 100vw (full viewport)
slides.forEach(slide => {
    slide.style.minWidth = '100vw';
    slide.style.maxWidth = '100vw';
});

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

const allSlides = Array.from(track.children);
let currentSlide = 1;

// Set initial position
track.style.transform = `translateX(-${100 * currentSlide}vw)`;

function updateSlidePosition() {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${100 * currentSlide}vw)`;
}

track.addEventListener('transitionend', () => {
    if (currentSlide === allSlides.length - 1) {
        track.style.transition = 'none';
        currentSlide = 1;
        track.style.transform = `translateX(-${100 * currentSlide}vw)`;
    } else if (currentSlide === 0) {
        track.style.transition = 'none';
        currentSlide = allSlides.length - 2;
        track.style.transform = `translateX(-${100 * currentSlide}vw)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentSlide < allSlides.length - 1) {
        currentSlide++;
        updateSlidePosition();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlidePosition();
    }
});
