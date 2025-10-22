import {gsap} from '../../vendor/gsap.min';

let mm = gsap.matchMedia();

const sizeInRem = (sizeInPx, baseFontSize = 24) => {
  return `${sizeInPx / baseFontSize}rem`;
};

const initHeroAnimaton = () => {
  const container = document.querySelector('[data-el="hero-list"]');
  if (!container) {
    return;
  }
  const elements = Array.from(container.children).reverse();

  mm.add('(min-width: 1024px)', () => {
    const desktopTl = gsap.timeline({
      onComplete: () => {
        elements.forEach((el, i) => {
          el.style.position = 'static';
          gsap.set(el, {
            x: 0,
            y: 0,
          });
          if (i % 4 > 0) {
            gsap.set(el, {
              x: 0,
              y: 0,
              marginLeft: '-1.25rem',
            });
          }
        });
      },
    });

    desktopTl.set(elements, {
      x: 0,
      y: 0,
      autoAlpha: 0,
    });

    desktopTl.to(elements, {
      x: (index) => sizeInRem([968, 646, 323, -30][index % 4]),
      autoAlpha: 1,
      duration: 0.3,
      stagger: 0.2,
    });

    return () => {
      desktopTl.kill();
    };
  });

  mm.add('(min-width: 767px) and (max-width: 1023px)', () => {
    const tabletTl = gsap.timeline({
      onStart: () => {
        elements.forEach((el) => {
          el.style.position = 'absolute';
          gsap.set(el, {
            x: 0,
            y: 0,
          });
        });
      },
    });

    tabletTl.set(elements, {
      x: 0,
      y: (index) =>[62, 62, -78, -78][index],

      autoAlpha: 0,
    });

    tabletTl.to(elements, {
      autoAlpha: 1,

      x: (index) => [387, 0, 387, 0][index % 4],
      y: (index) => [62, 62, -78, -78][index],
      duration: 0.3,
    });

    return () => {
      tabletTl.kill();
    };
  });

  mm.add('(max-width: 766px)', () => {


    const mobieTl = gsap.timeline({
      onStart: () => {

        elements.forEach((el) => {
          el.style.position = 'static';
          gsap.set(el, {
            x: 0,
            y: 0,
          });
        });
      },
    });

    mobieTl.set(elements, {
      x: (index) => [0, 0, 0, 0][index],
      y: (index) =>[-238, -157, -78, 0][index],

      autoAlpha: 0,
    });

    mobieTl.to(elements.reverse(), {
      autoAlpha: 1,

      x: (index) => [0, 0, 0, 0][index],
      y: (index) => [0, 0, 0, 0][index],
      duration: 0.3,
      // stagger: 0.3,
    });

    return () => {
      elements.reverse();
      mobieTl.kill();
    };
  });
};

export {initHeroAnimaton};
