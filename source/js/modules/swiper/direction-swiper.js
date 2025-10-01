// import Swiper, {Navigation} from 'swiper';


const breakpoint = window.matchMedia('(min-width: 767px)');
const SWIPER_DELAY_AUTOPLAY = 3000;
const VISIBLE_SLIDES = 3;

const initDirectionSwiper = () => {
  const container = document.querySelector('[data-swiper="directions"]');

  const containerWrapper = container.children[0];
  const slides = Array.from(containerWrapper.children);

  let directionSwiper = null;
  let previousClampedIndex = null;

  const swiperClasslistAdd = () => {
    containerWrapper.classList.add('swiper-wrapper');
    container.classList.add('swiper-container');
    slides.forEach((slide) => {
      slide.classList.add('swiper-slide');
    });
  };


  const swiperClasslistRemove = () => {
    container.classList.remove('swiper-container');
    containerWrapper.classList.remove('swiper-wrapper');
    slides.forEach((slide) => {
      slide.classList.remove('swiper-slide');
    });
  };

  const removeScaleClass = (swiper) => {
    swiper.slides.forEach((slide) => slide.classList.remove('swiper-slide--isCentred'));
  };
  const addScaleClass = (swiper) => {
    swiper.slides[swiper.activeIndex].classList.add('swiper-slide--isCentred');
  };

  const swiperScaleEvents = (swiper) => {

    const totalSlides = swiper.slides.length;
    const progressPerSlide = 1 / (totalSlides - VISIBLE_SLIDES + 2);
    const currentIndex = Math.round(swiper.progress / progressPerSlide);

    const clampedIndex = Math.max(0, Math.min(totalSlides - 1, currentIndex));
    if (clampedIndex !== previousClampedIndex) {
      removeScaleClass(swiper);
      previousClampedIndex = clampedIndex;
      swiper.slides[clampedIndex].classList.add('swiper-slide--isCentred');
    }
  };


  const initSwiper = () => {
    directionSwiper = new window.Swiper(container, {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      direction: 'vertical',
      spaceBetween: 10,
      initialSlide: 1,
      autoplay: {
        delay: SWIPER_DELAY_AUTOPLAY,
        disableOnInteraction: false,
      },
      on: {
        sliderMove() {
          swiperScaleEvents(this);
        },
        slideChange() {
          removeScaleClass(this);
          addScaleClass(this);
        },
      },
    }
    );
  };


  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (!directionSwiper) {
        swiperClasslistAdd();
        initSwiper();
      }
    } else {
      if (directionSwiper) {
        directionSwiper.destroy(true, true);
        directionSwiper = null;
        swiperClasslistRemove();
      }
    }
  };

  breakpointChecker();
  breakpoint.addEventListener('change', breakpointChecker);
};

export {initDirectionSwiper};
