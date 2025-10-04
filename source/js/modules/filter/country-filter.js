

const initCountryFilter = () => {
  const lettersListHideButton = document.querySelector('[data-button="country-filter-button"]');
  const sotrHideButton = document.querySelector('[data-button="country-sort-hide-button"]');

  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  const sortFilterList = document.querySelector('[data-el="country-filter-sort-list"]');

  let isHidden = false;


  const hideMenu = () => {
    isHidden = true;
    filterContainer.classList.add('country-filter__letters-list--is-hidden');

    lettersListHideButton.classList.add('country-filter__list-hide-button--is-hidden');
    sotrHideButton.classList.add('country-filter__sort-hide-button--menu-is-open');
    sortFilterList.classList.add('country-filter__sort-list--is-hidden');

    sotrHideButton.removeEventListener('click', hideMenu);
    sotrHideButton.addEventListener('click', showMenu);

  };

  const showMenu = () => {
    isHidden = false;

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
