import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min.js';
gsap.registerPlugin(ScrollTrigger);

const initCatalogCardEvents = () => {
  const likesButtons = document.querySelectorAll('[data-button="catalog-card-like"]');
  const cards = document.querySelectorAll('[data-el="catalog-card"]');
  if (!likesButtons.length) {
    return;
  }

  cards.forEach((card)=>{
    const level = card.querySelector('[data-level]');
    const levelText = card.querySelector('.level__count');
    const levelValue = Number(level.dataset.level);


    gsap.set(level, {'--level': 0});

    const elements = Array.from(card.children).filter((element) => {
      return element !== level;
    });


    gsap.set(elements, {
      opacity: 0,
    });

    gsap.to(elements, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
    });


    gsap.to(level, {
      'duration': 1,
      'ease': 'power2.out',
      'scrollTrigger': {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      onUpdate() {
        const computedStyle = getComputedStyle(level);
        const currentValue = Math.round(computedStyle.getPropertyValue('--level'));
        levelText.textContent = currentValue;
      },

      '--level': levelValue,
    });
  });


  likesButtons.forEach((button) => {
    const likesValue = button.nextElementSibling;

    button.addEventListener('click', () => {
      button.classList.toggle('is-active');

      let currentValue = Number(likesValue.textContent);

      if (button.classList.contains('is-active')) {
        likesValue.textContent = currentValue + 1;
      } else {
        likesValue.textContent = currentValue - 1;
      }
    });
  });
};

export {initCatalogCardEvents};
