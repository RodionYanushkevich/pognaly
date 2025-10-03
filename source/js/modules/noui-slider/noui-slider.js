import noUiSlider from '../../vendor/nouislider';


const initNOUISlider = () => {

  const slider = document.querySelector('[data-slider="noui-slider"]');

  if (!slider) {
    return;
  }

  noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
      min: 0,
      max: 100,
    },
  });
};

export {initNOUISlider};
