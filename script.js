const slides = document.querySelectorAll('.slider-item');
const sliderWidth = document.querySelector('.slides-wrapper').getBoundingClientRect().width;
const nextBtn = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let nextSlideIndex = 1;
let previousSlideIndex = 0;
let nextSlide = slides[nextSlideIndex];
let previousSlide = slides[previousSlideIndex];


slides.forEach((slide, index) => {
    if(index !== 0) {
        slide.style.left = sliderWidth * index + 'px'; 
    }
});

//Slider Nav
(sliderNav = () => {
    nextSlideIndex === 0 ? nextBtn.classList.add('btn-disable') : nextBtn.classList.remove('btn-disable');
    previousSlideIndex === 0 ? prevButton.classList.add('btn-disable') : prevButton.classList.remove('btn-disable');
})();

//Next Button Click
nextBtn.onclick = () => {
    nextSlide.style.left = '0px';
    if(nextSlideIndex < slides.length-1) {
        nextSlideIndex++;
        previousSlideIndex = nextSlideIndex - 1;
    } else {
        nextSlideIndex = 0;
        previousSlideIndex = slides.length-1;
    }
    sliderNav();
    nextSlide = slides[nextSlideIndex];
    previousSlide = slides[previousSlideIndex];
}

//Previous Button Click
prevButton.onclick = () => {
    previousSlide.style.left = sliderWidth + 'px';
    if(previousSlideIndex > 0) {
        previousSlideIndex = previousSlideIndex - 1;
        nextSlideIndex = previousSlideIndex + 1;
    } else {
        previousSlideIndex = 0;
        nextSlideIndex = 0;
    }
    sliderNav();
    previousSlide = slides[previousSlideIndex];
    nextSlide = slides[nextSlideIndex];
}

