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

  mm.add('(min-width: 1024px)', () => {
    const elements = Array.from(container.children).reverse();

    gsap.set(elements, {
      x: (index) => sizeInRem([-900, -600, -300, -30][index % 4]),

      autoAlpha: 0,
    });


    const desktopTl = gsap.timeline();

    desktopTl.to(elements, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration: 0.3,
      marginLeft: '-1.25rem',

      stagger: 0.2,
    });

    return () => {
      elements.forEach((el) => {
        gsap.set(el, {
          x: 0,
          y: 0,
          autoAlpha: 1,
          // marginLeft: '',
        });
      });
      desktopTl.kill();
    };
  });

  mm.add('(min-width: 767px) and (max-width: 1023px)', () => {
    const elements = Array.from(container.children).reverse();

    elements.forEach((el) => {
      gsap.set(el, {
        x: 0,
        y: 0,
        autoAlpha: 0,
      });
    });

    const tabletTl = gsap.timeline();

    tabletTl.set(elements, {
      x: (index) => [-387, 0, -387, 0][index % 4],
      y: 0,
      autoAlpha: 0,
    });

    tabletTl.to(elements, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      duration: 0.3,
    });

    return () => {
      elements.forEach((el) => {
        gsap.set(el, {
          x: 0,
          y: 0,
          autoAlpha: 1,
        });
      });
      tabletTl.kill();
    };
  });

  mm.add('(max-width: 766px)', () => {
    const elements = Array.from(container.children).reverse();

    elements.forEach((el) => {
      gsap.set(el, {
        x: 0,
        y: 0,
        autoAlpha: 0,
      });
    });

    const mobileTl = gsap.timeline();

    mobileTl.set(elements, {
      x: 0,
      y: (index) => [-238, -157, -78, 0][index],
      autoAlpha: 0,
    });

    mobileTl.to(elements, {
      y: 0,
      autoAlpha: 1,
      duration: 0.3,
    });

    return () => {
      elements.forEach((el) => {
        gsap.set(el, {
          x: 0,
          y: 0,
          autoAlpha: 1,
        });
      });
      mobileTl.kill();
    };
  });
};

export {initHeroAnimaton};
