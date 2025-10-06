
const initCountryFilterEvents = () => {

  const filterContainer = document.querySelector('[data-el="country-filter-letters-list"]');

  const letterButtons = document.querySelectorAll('[data-button="filter-letter-button"]');


  letterButtons.forEach((letterButton) => {
    letterButton.addEventListener('click', ()=> {

      letterButtons.forEach((btn) => {
        btn.classList.remove('country-filter__letters-list-button--is-active');
      });

      letterButton.classList.toggle('country-filter__letters-list-button--is-active');

      cleanList();
      listClone(letterButton);

    });
  });

  const listClone = (btn) => {
    const list = btn.nextElementSibling.cloneNode(true);

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

  listClone(letterButtons[0]);

};


export {initCountryFilterEvents};
