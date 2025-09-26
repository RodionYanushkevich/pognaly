// const desktop = window.matchMedia('(min-width: 1024px)');
// const tablet = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
// const mobile = window.matchMedia('(max-width: 767px)');

// const initUpdateImage = () => {
//   const updateImage = () => {
//     const images = document.querySelectorAll('[data-image-adaptive]');
//     const pixelRatio = window.devicePixelRatio || 1;
//     const suffix = pixelRatio >= 2 ? '2x' : '';

//     images.forEach((image) => {
//       const getSrc = (key) => image.dataset[key] || null;

//       const desktopSrc = getSrc(`srcDesktop${suffix}`) || getSrc('srcDesktop') || image.getAttribute('src') || '';
//       const tabletSrc = getSrc(`srcTablet${suffix}`) || getSrc('srcTablet') || desktopSrc;
//       const mobileSrc = getSrc(`srcMobile${suffix}`) || getSrc('srcMobile') || tabletSrc;

//       if (desktop.matches) {
//         image.src = desktopSrc;
//         console.log(desktopSrc);
//       } else if (tablet.matches) {
//         image.src = tabletSrc;
//       } else if (mobile.matches) {
//         image.src = mobileSrc;
//       }
//     });
//   };


//   desktop.addEventListener('change', updateImage);
//   tablet.addEventListener('change', updateImage);
//   mobile.addEventListener('change', updateImage);


//   updateImage();
// };

// export {initUpdateImage};
