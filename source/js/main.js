import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {initDirectionSwiper} from './modules/swiper/direction-swiper';
import {initMenuToggle} from './modules/menu-toggle/menu-toggle';
import {initMap} from './modules/map/yandex-map';
import {initNOUISlider} from './modules/noui-slider/noui-slider';

import {initCountryFilter} from './modules/filter/country-filter-sort';
import {initCountryFilterEvents} from './modules/filter/countries-btn-events';
import {initValidation} from './modules/email-validation/email-validation';
import {test} from './modules/test';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();
  initNOUISlider()
  initCountryFilter()
  initCountryFilterEvents()
  initValidation()
  test()
  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    initModals();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initMenuToggle()
    initDirectionSwiper();


  });

  window.addEventListener('load', async () => {
      await initMap();

  });

});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
