import {gsap} from '../../vendor/gsap.min';

const initCountryFilter = () => {
  const lettersListHideButton = document.querySelector('[data-button="country-filter-button"]');

  if (!lettersListHideButton) {
    return;
  }
  const sotrHideButton = document.querySelector('[data-button="country-sort-hide-button"]');

  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  const sortFilterList = document.querySelector('[data-el="country-filter-sort-list"]');


  const menuHideAnimation = () => {
    // const tl = gsap.timeline({
    //   onComplete: () => {
    //     gsap.set(filterContainer, {display: 'none'});
    //   },
    // });


    gsap.to(filterContainer, {
      opacity: 0,
      height: 0,
      duration: 0.5,
      ease: 'power2.out'});
  };

  const menuShowAnimation = () => {
    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(filterContainer, {display: 'grid'});
      },
    });

    gsap.set(filterContainer, {
      height: 0});

    tl.to(filterContainer, {
      opacity: 1,
      height: 'auto',
      duration: 1,
    });

  };


  const hideMenu = () => {
    menuHideAnimation();
    lettersListHideButton.classList.add('country-filter__list-hide-button--is-hidden');


    sotrHideButton.classList.add('country-filter__sort-hide-button--menu-is-open');
    if (window.innerWidth < 768) {

      sortFilterList.classList.add('country-filter__sort-list--is-hidden');
    }

    sotrHideButton.removeEventListener('click', hideMenu);
    sotrHideButton.addEventListener('click', showMenu);

  };

  const showMenu = () => {
    menuShowAnimation();
    filterContainer.classList.remove('country-filter__letters-list--is-hidden');
    lettersListHideButton.classList.remove('country-filter__list-hide-button--is-hidden');
    sotrHideButton.classList.remove('country-filter__sort-hide-button--menu-is-open');
    sortFilterList.classList.remove('country-filter__sort-list--is-hidden');

    sotrHideButton.removeEventListener('click', showMenu);
    sotrHideButton.addEventListener('click', hideMenu);
  };

  sotrHideButton.addEventListener('click', hideMenu);
  lettersListHideButton.addEventListener('click', hideMenu);
};

export {initCountryFilter};
