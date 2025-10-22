const desktopBreakpoint = window.matchMedia('(min-width: 1023px)');

let activeLetterButton = null;
let filterContainer = null;
let letterButtons = null;

const listClone = (btn) => {
  const list = btn.nextElementSibling ? btn.nextElementSibling.cloneNode(true) : null;
  if (!list) {
    return;
  }

  const liEl = document.createElement('LI');
  liEl.classList.add('country-filter__letters-list-item--is-visible');
  liEl.appendChild(list);

  filterContainer.appendChild(liEl);
};

const cleanList = () => {
  const listItems = filterContainer.children;
  if (filterContainer.children.length !== 25) {
    listItems[listItems.length - 1].remove();
  }
};

const updateClone = () => {
  if (activeLetterButton) {
    cleanList();
    listClone(activeLetterButton);
  }
};

const initCountryFilterEvents = () => {
  filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');
  if (!filterContainer) {
    return;
  }
  letterButtons = document.querySelectorAll('[data-button="filter-letter-button"]');

  letterButtons.forEach((letterButton) => {
    letterButton.addEventListener('click', () => {
      letterButtons.forEach((btn) => {
        btn.classList.remove('country-filter__letters-list-button--is-active');
      });

      letterButton.classList.toggle('country-filter__letters-list-button--is-active');

      activeLetterButton = letterButton.classList.contains('country-filter__letters-list-button--is-active') ? letterButton : null;

      cleanList();
      listClone(letterButton);
    });
  });

  if (window.innerWidth < 1023) {
    listClone(letterButtons[0]);
    activeLetterButton = letterButtons[0];
  }

  const defaultDesktopLetters = () => {
    if (filterContainer.children.length !== 25) {
      filterContainer.children[filterContainer.children.length - 1].remove();
    }
    if (window.innerWidth < 1023) {
      listClone(letterButtons[0]);
      activeLetterButton = letterButtons[0];
      letterButtons.forEach((btn) => {
        btn.classList.remove('country-filter__letters-list-button--is-active');
      });
      activeLetterButton.classList.add('country-filter__letters-list-button--is-active');
    }
    activeLetterButton = null;
  };

  desktopBreakpoint.addEventListener('change', defaultDesktopLetters);
};

export {initCountryFilterEvents, updateClone};
