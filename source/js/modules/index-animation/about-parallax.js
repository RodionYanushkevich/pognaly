const mobileBreakpoint = window.matchMedia('(max-width: 767px)');

const START_OFFSET = 500;
const MAX_OFFSET = -100;
const SPEED = 0.2;

const initParallax = () => {
  const imageContainer = document.querySelector('[data-el="parallax-container"]');
  if (!imageContainer) {
    return;
  }

  const image = imageContainer.querySelector('img');

  const handleParallax = () => {
    const scrolled = window.pageYOffset;

    let offset = 0;

    if (scrolled > START_OFFSET) {
      const parallaxScroll = scrolled - START_OFFSET;
      offset = parallaxScroll * SPEED * -1;
      offset = Math.max(offset, MAX_OFFSET);
    }

    image.style.transform = `translateY(${offset}px) translateZ(-2px)`;
  };

  const resetParallax = () => {
    image.style.transform = 'translateY(0px) translateZ(0px)';
  };

  const handleMediaChange = (e) => {
    if (e.matches) {
      window.addEventListener('scroll', handleParallax);
    } else {
      window.removeEventListener('scroll', handleParallax);
      resetParallax();
    }
  };

  if (mobileBreakpoint.matches) {
    window.addEventListener('scroll', handleParallax);
  } else {
    resetParallax();
  }

  mobileBreakpoint.addEventListener('change', handleMediaChange);
};

export {initParallax};
