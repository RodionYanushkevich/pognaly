
const breakpoint = window.matchMedia('(min-width: 1024px)');
const wrapper = document.querySelector('.wrapper');

const initMenuToggle = () => {
  const navigation = document.querySelector('[data-navigation="navigation"]');
  const navigationButton = document.querySelector('[data-button="navigation-button"]');
  const headerLogo = document.querySelector('[data-logo="header-logo"]');

  let isOpen = false;
  const openNavigationMenu = () => {
    navigationButton.classList.remove('main-nav__toggle--is-closed');
    navigation.classList.add('main-nav--is-open');
    headerLogo.classList.add('logo--menu-is-open');
    document.body.classList.add('scroll-lock');
    wrapper.classList.add('wrapper--modal-is-open');
    isOpen = true;

  };

  const closeNavigationMenu = () => {
    navigationButton.classList.add('main-nav__toggle--is-closed');
    navigation.classList.remove('main-nav--is-open');
    headerLogo.classList.remove('logo--menu-is-open');
    document.body.classList.remove('scroll-lock');
    wrapper.classList.remove('wrapper--modal-is-open');
    isOpen = false;
  };


  navigationButton.addEventListener('click', ()=>{
    if (!isOpen) {
      openNavigationMenu();
      return;
    }
    closeNavigationMenu();
  });

  const handleOutsideClick = (e) => {
    if (e.target === wrapper) {
      closeNavigationMenu();
    }
  };

  const breakpointChecker = () => {
    let resizeTimer;
    navigation.children[1].classList.add('no-transition');

    clearTimeout(resizeTimer);
    closeNavigationMenu();

    resizeTimer = setTimeout(() => {
      navigation.children[1].classList.remove('no-transition');
    }, 100);
  };


  document.addEventListener('click', handleOutsideClick);
  breakpoint.addEventListener('change', breakpointChecker);
};

export {initMenuToggle};


