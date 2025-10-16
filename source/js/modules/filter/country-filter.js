import {gsap} from '../../vendor/gsap.min';
import {initSort} from './country-sort';

const tabletBreakpoint = window.matchMedia('(min-width: 767px)');
const desktopBreakpoint = window.matchMedia('(min-width: 1024px)');

const initCountryFilter = () => {
  const lettersListHideButton = document.querySelector('[data-button="country-filter-button"]');

  if (!lettersListHideButton) {
    return;
  }

  const sortDescriptionButton = document.querySelector('[data-button="filter-sort-desctiption');

  const sortHideButton = document.querySelector('[data-button="country-sort-hide-button"]');

  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  const sortFilterList = document.querySelector('[data-el="country-filter-sort-list"]');

  const defaultPaddingFilter = gsap.getProperty(filterContainer, 'padding');
  const defaultPaddingButton = gsap.getProperty(lettersListHideButton, 'padding');
  const container = filterContainer.parentNode;

  sortDescriptionButton.disabled = true;

  initSort();

  const menuHideAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set([filterContainer, lettersListHideButton], {padding: 0});
        gsap.set([filterContainer, lettersListHideButton], {display: 'none'});

        if (window.innerWidth < 768) {
          gsap.set(sortFilterList, {display: 'none'});
        }
      },
    });


    tl.to([filterContainer, lettersListHideButton], {
      autoAlpha: 0,
      duration: 0.3,
    }).to([filterContainer, lettersListHideButton], {
      height: 0,
      padding: 0,
    }).to(container, {
      gap: 0,
    });

    if (window.innerWidth < 768) {
      tl.to(sortFilterList, {
        autoAlpha: 0,
        height: 0,
      });
    }


    sortDescriptionButton.disabled = false;
  };

  const menuShowAnimation = () => {
    let newGap = 20;

    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(filterContainer, {display: 'grid'});
        gsap.set(lettersListHideButton, {display: 'flex'});
        gsap.set([filterContainer, lettersListHideButton], {height: 0, autoAlpha: 0, padding: 0});

        if (window.innerWidth < 768) {
          gsap.set(sortFilterList, {display: 'flex'});
        }
      },
    });


    tl.to(filterContainer, {
      height: 'auto',
      autoAlpha: 1,
      padding: defaultPaddingFilter,
      duration: 0.3,
    }).to(lettersListHideButton, {
      height: 'auto',
      autoAlpha: 1,
      duration: 0.3,
    }, '<') .to(container, {
      gap: newGap,
    }, '<');

    if (window.innerWidth < 768) {
      tl.to(sortFilterList, {
        autoAlpha: 1,
        height: 'auto',
      });
    }
    sortDescriptionButton.disabled = true;
  };


  const hideMenu = () => {
    menuHideAnimation();
    sortHideButton.classList.add('country-filter__sort-hide-button--menu-is-open');
    sortHideButton.removeEventListener('click', hideMenu);
    sortHideButton.addEventListener('click', showMenu);
  };

  const showMenu = () => {
    menuShowAnimation();
    filterContainer.classList.remove('country-filter__letters-list--is-hidden');
    lettersListHideButton.classList.remove('country-filter__list-hide-button--is-hidden');
    sortHideButton.classList.remove('country-filter__sort-hide-button--menu-is-open');
    sortFilterList.classList.remove('country-filter__sort-list--is-hidden');

    sortHideButton.removeEventListener('click', showMenu);
    sortHideButton.addEventListener('click', hideMenu);
  };

  const initBasedOnBreakpoint = () => {
    sortDescriptionButton.disabled = true;
    filterContainer.style.display = 'grid';
    lettersListHideButton.style.display = 'flex';
    sortFilterList.style.display = 'flex';

    gsap.set([filterContainer, lettersListHideButton, sortFilterList], {autoAlpha: 1, height: 'auto'});


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
