///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== login scripts ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* loginBtn.addEventListener('click', () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
});
 */
window.onload = () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
};

// change navbar color on scroll
window.addEventListener('scroll', changeNavBg);

function changeNavBg() {
  console.log(pageYOffset);
  if (pageYOffset > 250) {
    if (navBar.classList.contains('backdrop-blur')) return;
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.classList.remove('bg-transparent');
      navBar.classList.add('backdrop-blur');
      navBar.style.transform = 'translateY(0)';
    }, 100);
  }

  if (pageYOffset === 0) {
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.style.transform = 'translateY(0)';
      navBar.classList.add('bg-transparent');
      navBar.classList.remove('backdrop-blur');
    }, 100);
  }
}

// open side-mobile menu
openSideMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  homeWrapper.classList.toggle('main-translated-out');
  footer.classList.toggle('main-translated-out');
  mobileBottomMenu.classList.toggle('main-translated-out');
  console.log(sideMenuMobile);
  sideMenuMobile.classList.toggle('side-mobile-menu-translated-in');
  if (sideMenuMobile.classList.contains('side-mobile-menu-translated-in')) {
    sideMenuMobile.style.transform = 'translateX(0)';
  } else {
    sideMenuMobile.style.transform = 'translateX(-100%)';
  }
});

///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== mobile menu bottom ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const [homeBtnMobile, searchBtnMobile, libraryBtnMobile] = [
  ...document.querySelectorAll('#mobileBottomMenu a'),
];
const root = document.querySelector(':root');

const mobileMenuBottomBtns = document.querySelectorAll('#mobileBottomMenu a');
homeBtnMobile.addEventListener('click', goToHome);
searchBtnMobile.addEventListener('click', goTosearch);
libraryBtnMobile.addEventListener('click', goTolibrary);

// animate active button
const makeActive = (target) => {
  mobileMenuBottomBtns.forEach((btn) => btn.classList.remove('active'));
  target.classList.add('active');
  switch (target.id) {
    case 'homeBottom':
      root.style.setProperty('--left-postition-bottom-menu', '-97px');
      break;
    case 'searchBottom':
      root.style.setProperty('--left-postition-bottom-menu', '0px');
      break;
    case 'libraryBottom':
      root.style.setProperty('--left-postition-bottom-menu', '+97px');
      break;
  }
};

function goToHome(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
  showHomePage();
}
function goTosearch(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
  showSearchPage();
}
function goTolibrary(e) {
  e.preventDefault();
  makeActive(e.currentTarget);
}
