import countriesData from '../../../json/countries.json';
import {updateClone} from './country-filter-events';

const initSort = () => {
  const lettersContainer = document.querySelectorAll('[data-el="letters-list-item"]');
  const regionsButtons = document.querySelectorAll('[data-button="filter-sort-button"]');

  const defaultCountriesState = {};

  const initDefaultCountriesState = () => {
    countriesData.forEach((country) => {
      const firstLetter = country.name[0];
      if (!defaultCountriesState[firstLetter]) {
        defaultCountriesState[firstLetter] = [];
      }
      defaultCountriesState[firstLetter].push(country);
    });
  };
  initDefaultCountriesState();

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

    if (button.classList.contains('country-filter__sort-button--is-active')) {
      button.classList.remove('country-filter__sort-button--is-active');
      sortCountriesLetters(defaultCountriesState);
      updateClone(); // Добавлено: обновляем клон после сброса
      return;
    }

    regionsButtons.forEach((btn) => {
      btn.classList.remove('country-filter__sort-button--is-active');
    });
    button.classList.add('country-filter__sort-button--is-active');

    const buttonValue = button.textContent.trim();

    const regionCountries = filterByRegion(buttonValue);
    const filteredCountries = {};
    regionCountries.forEach((country) => {
      const firstLetter = country.name[0].toUpperCase();
      if (!filteredCountries[firstLetter]) {
        filteredCountries[firstLetter] = [];
      }
      filteredCountries[firstLetter].push(country);
    });

    sortCountriesLetters(filteredCountries);
    updateClone();
  };

  const sortCountriesLetters = (countriesByLetter) => {
    lettersContainer.forEach((letterContainer) => {
      const letterElement = letterContainer.children[0];
      const letterText = letterElement.textContent.toUpperCase();

      if (letterContainer.children[0].nextElementSibling) {
        letterContainer.children[0].nextElementSibling.remove();
      }

      const countriesForLetter = countriesByLetter[letterText] || [];
      if (countriesForLetter.length > 0) {
        const newList = document.createElement('UL');
        newList.classList.add('country-filter__countries-list');

        countriesForLetter.forEach((country) => {
          createTemplate(newList, country.name);
        });

        letterContainer.appendChild(newList);
        letterElement.removeAttribute('disabled');
      } else {
        letterElement.setAttribute('disabled', true);
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
