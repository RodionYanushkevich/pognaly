import {gsap} from '../../vendor/gsap.min';
import {initSort} from './country-sort';

const initCountryFilter = () => {
  const lettersListHideButton = document.querySelector('[data-button="country-filter-button"]');
  const sortDescriptionButton = document.querySelector('[data-button="filter-sort-desctiption');

  if (!lettersListHideButton) {
    return;
  }
  initSort();
  const sotrHideButton = document.querySelector('[data-button="country-sort-hide-button"]');

  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  const sortFilterList = document.querySelector('[data-el="country-filter-sort-list"]');


  const menuHideAnimation = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set([filterContainer, lettersListHideButton], {display: 'none'});
      },
    });


    tl.to([filterContainer, lettersListHideButton], {
      opacity: 0}, 0.3)
        .to([filterContainer, lettersListHideButton], {
          height: 0}, '+=0.3');
  };

  const menuShowAnimation = () => {

    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(filterContainer, {display: 'grid'});
        gsap.set(lettersListHideButton, {display: 'flex'});
      },
    });

    // gsap.set([filterContainer, lettersListHideButton], {
    //   height: 0});

    tl.to([filterContainer, lettersListHideButton], {
      height: 'auto'}, 0.3)
        .to([filterContainer, lettersListHideButton], {
          opacity: 1}, '+=0.15');

  };


  // let tl = gsap.timeline();
  // tl.to("#green", {duration: 1, x: 854}, .5)
  //   .to("#blue", {duration: 1, x: 854}, "-=0.75") //overlaps by 0.75 seconds
  //   .to("#orange", {duration: 1, x: 854}, "+=1") //adds a 1-second gap before
  //   };


  const hideMenu = () => {
    menuHideAnimation();
    // lettersListHideButton.classList.add('country-filter__list-hide-button--is-hidden');


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
  sortDescriptionButton.addEventListener('click', showMenu);
  sotrHideButton.addEventListener('click', hideMenu);
  lettersListHideButton.addEventListener('click', hideMenu);
};

export {initCountryFilter};
