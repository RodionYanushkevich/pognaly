import countriesData from '../../../json/countries.json';

const initSort = () => {
  const lettersContainer = document.querySelectorAll('[data-el="letters-list-item"]');
  const regionsButtons = document.querySelectorAll('[data-button="filter-sort-button"]');

  const regions = {};
  countriesData.forEach((country) => {
    const region = country.region;
    if (!regions[region]) {
      regions[region] = [];
    }
    regions[region].push(country);
  });

  const filterByRegion = (regionName) => {
    return regions[regionName] || [];
  };

  const sortCountries = (e) => {
    const button = e.target;

    regionsButtons.forEach((btn) => {
      btn.classList.remove('country-filter__sort-button--is-active');
    });

    button.classList.add('country-filter__sort-button--is-active');

    const buttonValue = button.textContent.trim();
    const filteredCountries = filterByRegion(buttonValue);

    sortCountriesLetters(filteredCountries);
  };

  const sortCountriesLetters = (regionsList) => {
    lettersContainer.forEach((letterContainer) => {
      const letterElement = letterContainer.children[0];
      const letterText = letterElement.textContent.trim().toUpperCase();

      if (letterContainer.children[0].nextElementSibling) {
        letterContainer.children[0].nextElementSibling.remove();
      }

      const newList = document.createElement('UL');
      newList.classList.add('country-filter__countries-list');
      regionsList.forEach((country) => {
        const firstLetter = country.name[0].toUpperCase();

        if (letterText === firstLetter) {
          createTemplate(newList, country.name);
        }
      });

      if (newList.hasChildNodes()) {
        letterContainer.appendChild(newList);
      }
    });
  };

  const createTemplate = (list, country) => {
    const item = document.createElement('LI');
    list.appendChild(item);

    const button = document.createElement('BUTTON');
    button.classList.add('country-filter__countries-list-button');
    button.textContent = country;
    item.appendChild(button);
  };

  regionsButtons.forEach((button) => {
    button.addEventListener('click', sortCountries);
  });
};

export {initSort};
