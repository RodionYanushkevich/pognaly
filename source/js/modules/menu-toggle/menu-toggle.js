
const breakpoint = window.matchMedia('(min-width: 767px)');
// const wrapper = document.querySelector('.wrapper');

const initMenuToggle = () => {
  const navigation = document.querySelector('[data-navigation="navigation"]');
  const navigationButton = document.querySelector('[data-button="navigation-button"]');
  const headerLogo = document.querySelector('[data-logo="header-logo"]');

  navigationButton.addEventListener('click', ()=>{
    navigationButton.classList.toggle('main-nav__toggle--is-closed');
    navigation.classList.toggle('main-nav--is-open');
    headerLogo.classList.toggle('logo--menu-is-open');
    // document.body.classList.toggle('scroll-lock');
    // wrapper.classList.toggle('wrapper--overlay');
  });

  // const handleOutsideClick = (e) => {
  //   if (!e.target.closest('[data-toggle="navigation"]') || e.target.classList.contains('navigation') || e.target.classList.contains('navigation__sublist')) {
  //     closeAllSubmenus();
  //   }
  //   if (e.target === wrapper) {
  //     navigationContainer.classList.remove('navigation--is-open');
  //     navigationButton.classList.remove('navigation__button--cross');
  //     document.body.classList.remove('scroll-lock');
  //     wrapper.classList.remove('wrapper--overlay');

//     closeAllSubmenus();
//   }
};


export {initMenuToggle};


