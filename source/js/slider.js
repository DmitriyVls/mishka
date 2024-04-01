
const slides = document.querySelectorAll('.slider__slide');
const sliderButtonLeft = document.querySelector('.slider__button--left');
const sliderButtonRight = document.querySelector('.slider__button--right');
let index = 0;


const activeSlide = (n)=> {
  for (const slide of slides) {
    slide.classList.remove('slider__slide--active');
  }
  slides[n].classList.add('slider__slide--active');
};

const prepearCurrentSlide = () => {
  activeSlide(index);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepearCurrentSlide(index);

  } else {
    index++;
    prepearCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepearCurrentSlide(index);

  } else {
    index--;
    prepearCurrentSlide(index);
  }
};

sliderButtonRight.addEventListener('click', nextSlide);
sliderButtonLeft.addEventListener('click', prevSlide);
