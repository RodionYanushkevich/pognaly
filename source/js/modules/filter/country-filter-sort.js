import {gsap} from '../../vendor/gsap.min';
import {initSort} from './country-list-sort';

const tabletBreakpoint = window.matchMedia('(min-width: 767px)');
const desktopBreakpoint = window.matchMedia('(min-width: 1024px)');

const initCountryFilter = () => {
  const lettersListHideButton = document.querySelector('[data-button="country-filter-button"]');

  if (!lettersListHideButton) {
    return;
  }

  const sortDescriptionButton = document.querySelector('[data-button="filter-sort-description"]');
  const sortHideButton = document.querySelector('[data-button="country-sort-hide-button"]');
  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  const sortFilterList = document.querySelector('[data-el="country-filter-sort-list"]');

  const container = filterContainer.parentNode;

  sortDescriptionButton.disabled = true;

  initSort();

  const menuHideAnimation = () => {
    const tl = gsap.timeline({
      onStart: () => {
        sortHideButton.classList.add('country-filter__sort-hide-button--menu-is-open');
        sortHideButton.removeEventListener('click', hideMenu);
      },
      onComplete: () => {
        gsap.set([filterContainer, lettersListHideButton], {display: 'none'});

        if (window.innerWidth < 768) {
          gsap.set(sortFilterList, {display: 'none'});
        }

        sortHideButton.addEventListener('click', showMenu);
      },
    });

    tl.to([filterContainer, lettersListHideButton], {
      autoAlpha: 0,
      maxHeight: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    }).to(container, {
      gap: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    }, '<');

    if (window.innerWidth < 768) {
      tl.to(sortFilterList, {
        autoAlpha: 0,
        maxHeight: 0,
        duration: 0.3,
        ease: 'power2.inOut',
      }, '<');
    }

    sortDescriptionButton.disabled = false;
  };

  const menuShowAnimation = () => {
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(filterContainer, {display: 'grid'});
        gsap.set(lettersListHideButton, {display: 'flex'});
        gsap.set([filterContainer, lettersListHideButton], {maxHeight: 0, autoAlpha: 0});

        if (window.innerWidth < 768) {
          gsap.set(sortFilterList, {display: 'flex'});
        }

        filterContainer.classList.remove('country-filter__letters-list--is-hidden');
        lettersListHideButton.classList.remove('country-filter__list-hide-button--is-hidden');
        sortHideButton.classList.remove('country-filter__sort-hide-button--menu-is-open');
        sortFilterList.classList.remove('country-filter__sort-list--is-hidden');
        sortHideButton.removeEventListener('click', showMenu);
      },
      onComplete: () => {
        sortHideButton.addEventListener('click', hideMenu);
      },
    });

    tl.to(filterContainer, {
      maxHeight: 3000,
      autoAlpha: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    }).to(lettersListHideButton, {
      maxHeight: 3000,
      autoAlpha: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    }, '<').to(container, {
      gap: 20,
      duration: 0.3,
      ease: 'power2.inOut',
    }, '<');

    if (window.innerWidth < 768) {
      tl.to(sortFilterList, {
        autoAlpha: 1,
        maxHeight: 3000,
        duration: 0.3,
        ease: 'power2.inOut',
      }, '<');
    }

    sortDescriptionButton.disabled = true;
  };

  const hideMenu = () => {
    menuHideAnimation();
  };

  const showMenu = () => {
    menuShowAnimation();
  };

  const initBasedOnBreakpoint = () => {
    sortDescriptionButton.disabled = true;
    filterContainer.style.display = 'grid';
    lettersListHideButton.style.display = 'flex';
    sortFilterList.style.display = 'flex';

    gsap.set([filterContainer, lettersListHideButton, sortFilterList], {
      autoAlpha: 1,
      maxHeight: 3000,
    });

    filterContainer.classList.remove('country-filter__letters-list--is-hidden');
    lettersListHideButton.classList.remove('country-filter__list-hide-button--is-hidden');
    sortHideButton.classList.remove('country-filter__sort-hide-button--menu-is-open');
    sortFilterList.classList.remove('country-filter__sort-list--is-hidden');

    sortHideButton.removeEventListener('click', showMenu);
    sortHideButton.addEventListener('click', hideMenu);
    lettersListHideButton.removeEventListener('click', showMenu);
    lettersListHideButton.addEventListener('click', hideMenu);
    sortDescriptionButton.removeEventListener('click', showMenu);
    sortDescriptionButton.addEventListener('click', showMenu);
  };

  const handleBreakpointChange = () => {
    initBasedOnBreakpoint();
  };

  sortDescriptionButton.addEventListener('click', showMenu);
  sortHideButton.addEventListener('click', hideMenu);
  lettersListHideButton.addEventListener('click', hideMenu);

  tabletBreakpoint.addEventListener('change', handleBreakpointChange);
  desktopBreakpoint.addEventListener('change', handleBreakpointChange);
};

export {initCountryFilter};
