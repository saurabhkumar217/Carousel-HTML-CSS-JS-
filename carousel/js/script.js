let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const dots = document.getElementsByClassName('dot');
// console.log(dots);
const totalSlides = slides.length;
document.getElementById('carousel__button--next').addEventListener('click', function () {
    moveToNextSlide();
});
document.getElementById('carousel__button--prev').addEventListener('click', function () {
    moveToPrevSlide();
});
function updateSlidePosition() {
    for(let slide of slides){
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }    
    slides[slidePosition].classList.add('carousel__item--visible');
};
function moveToNextSlide() {
    dots[slidePosition].classList.remove('dot__active');
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    }else{
        slidePosition++;
    }
    dots[slidePosition].classList.add('dot__active');
    updateSlidePosition();
};
function moveToPrevSlide() {
    dots[slidePosition].classList.remove('dot__active');
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;      
    }else{
        slidePosition--;
    }
    dots[slidePosition].classList.add('dot__active');
    updateSlidePosition();
};
