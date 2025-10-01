
// import Swiper, {Navigation} from 'swiper';


const breakpoint = window.matchMedia('(min-width: 767px)');

const initMenuToggle = () => {
  const navigation = document.querySelector('[data-navigation="navigation"]');
  const navigationButton = document.querySelector('[data-button="navigation-button"]');
  const headerLogo = document.querySelector('[data-logo="header-logo"]');
  console.log(navigation);
  navigationButton.addEventListener('click', ()=>{
    // navigationContainer.classList.toggle('main-nav__toggle main-nav__toggle--is-closed');
    navigationButton.classList.toggle('main-nav__toggle--is-closed');
    navigation.classList.toggle('main-nav--is-open');
    headerLogo.classList.toggle('logo--menu-is-open');
    // document.body.classList.toggle('scroll-lock');
    // wrapper.classList.toggle('wrapper--overlay');
    // closeAllSubmenus();
  });


  //   navigationSubmenuButtons.forEach((submenuButton) => {
  //     const subMenuContainer = submenuButton.parentNode;

  //     submenuButton.addEventListener('click', () => {
  //       if (!subMenuContainer.classList.contains('navigation__sublist-item--is-open')) {
  //         closeAllSubmenus();
  //       }
  //       subMenuContainer.classList.toggle('navigation__sublist-item--is-open');
  //       subMenuContainer.children[1].classList.toggle('navigation__sublist-links-list--is-open');
  //     });
  //   });
  //   closeAllSubmenus();

  //   document.addEventListener('click', handleOutsideClick);
  //   document.addEventListener('keydown', handleEscapeKey);
  //   document.addEventListener('keydown', handleEscapeKey);
  //   tabletBreakPoint.addEventListener('change', closeAllSubmenus);
  // };


};


export {initMenuToggle};


// const wrapper = document.querySelector('.wrapper');

// const tabletBreakPoint = window.matchMedia('(max-width: 1024px)');

// const navigationSubmenuButtons = document.querySelectorAll('[data-button="navigation-submenu-button"]');

// const closeAllSubmenus = () => {
//   navigationSubmenuButtons.forEach((submenuButton) => {
//     const subMenuContainer = submenuButton.parentNode;
//     subMenuContainer.classList.remove('navigation__sublist-item--is-open');
//     const linksList = subMenuContainer.querySelector('.navigation__sublist-links-list');
//     linksList.classList.remove('navigation__sublist-links-list--is-open');
//   });
// };

// const handleEscapeKey = (e) => {
//   if (e.key === 'Escape') {
//     closeAllSubmenus();
//   }
// };

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
// };


// const initNavigationMenu = () => {

//   navigationButton.addEventListener('click', ()=>{
//     navigationContainer.classList.toggle('navigation--is-open');
//     navigationButton.classList.toggle('navigation__button--cross');
//     document.body.classList.toggle('scroll-lock');
//     wrapper.classList.toggle('wrapper--overlay');
//     closeAllSubmenus();
//   });


//   navigationSubmenuButtons.forEach((submenuButton) => {
//     const subMenuContainer = submenuButton.parentNode;

//     submenuButton.addEventListener('click', () => {
//       if (!subMenuContainer.classList.contains('navigation__sublist-item--is-open')) {
//         closeAllSubmenus();
//       }
//       subMenuContainer.classList.toggle('navigation__sublist-item--is-open');
//       subMenuContainer.children[1].classList.toggle('navigation__sublist-links-list--is-open');
//     });
//   });
//   closeAllSubmenus();

//   document.addEventListener('click', handleOutsideClick);
//   document.addEventListener('keydown', handleEscapeKey);
//   document.addEventListener('keydown', handleEscapeKey);
//   tabletBreakPoint.addEventListener('change', closeAllSubmenus);
// };

// export {initNavigationMenu};

