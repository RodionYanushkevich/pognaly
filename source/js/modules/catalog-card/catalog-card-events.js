import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min.js';

gsap.registerPlugin(ScrollTrigger);

const ANIMATION_START = 'top 80%';

const initCatalogCardEvents = () => {
  const likesButtons = document.querySelectorAll('[data-button="catalog-card-like"]');
  const paginationArrows = document.querySelectorAll('[data-button="pagination-arrow"]');
  const paginationButtons = document.querySelectorAll('[data-button="pagination-button"]');

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


    if (window.innerWidth >= 1024) {
      gsap.to(elements, {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });

      gsap.to(level, {
        'duration': 1,
        'ease': 'power2.out',
        onUpdate() {
          const computedStyle = getComputedStyle(level);
          const currentValue = Math.round(computedStyle.getPropertyValue('--level'));
          levelText.textContent = currentValue;
        },
        '--level': levelValue,
      });
    } else {

      gsap.to(elements, {
        scrollTrigger: {
          trigger: card,
          start: ANIMATION_START,
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
          start: ANIMATION_START,
          toggleActions: 'play none none none',
        },
        onUpdate() {
          const computedStyle = getComputedStyle(level);
          const currentValue = Math.round(computedStyle.getPropertyValue('--level'));
          levelText.textContent = currentValue;
        },
        '--level': levelValue,
      });
    }
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

  paginationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      paginationButtons.forEach((btn) => {
        btn.classList.remove('is-active');
      });

      button.classList.add('is-active');
    });
  });

  paginationArrows.forEach((arrow, i) => {
    arrow.addEventListener('click', () => {
      let currentIndex;

      paginationButtons.forEach((btn, index) => {
        if (btn.classList.contains('is-active')) {
          currentIndex = index;
        }
        btn.classList.remove('is-active');
      });

      let newIndex;
      if (i === 0) {
        newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = 0;
        }
      } else {
        newIndex = currentIndex + 1;
        if (newIndex >= paginationButtons.length) {
          newIndex = paginationButtons.length - 1;
        }
      }
      paginationButtons[newIndex].classList.add('is-active');
    });
  });
};

export {initCatalogCardEvents};
