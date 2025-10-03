import noUiSlider from '../../vendor/nouislider';


const initNOUISlider = () => {
  const slider = document.querySelector('[data-slider="noui-slider"]');
  const form = document.querySelector('[data-form]');
  const minInput = document.getElementById('min-level');
  const maxInput = document.getElementById('max-level');

  const catalogButtons = document.querySelectorAll('[data-button="catalog-form-button"]');
  if (!slider) {
    return;
  }

  catalogButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
      button.classList.toggle('catalog-form__button--is-active');

    });
  });

  noUiSlider.create(slider, {
    start: [30, 80],
    connect: true,
    range: {min: 0, max: 100},
  });

  slider.noUiSlider.on('update', function (values) {
    minInput.value = Math.round(values[0]);
    maxInput.value = Math.round(values[1]);
  });

  minInput.addEventListener('change', function () {
    slider.noUiSlider.set([minInput.value, null]);
  });

  maxInput.addEventListener('change', function () {
    slider.noUiSlider.set([null, maxInput.value]);
  });

  form.addEventListener('submit', (event)=> {
    event.preventDefault();
  });
};

export {initNOUISlider};
