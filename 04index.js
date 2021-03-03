///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== login scripts ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// showHomePage function
function showHomePage() {
  jsEntryPoint.innerHTML = '';
  sectionsData.forEach((section, idx) => {
    const { sectionName, albums } = section;
    const sectionHTML = `
  <section id="section-${idx + 1}" class="cards-section mb-5">
    <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2">${sectionName}</h4>
    <div class="d-flex flex-md-wrap row-albums mb-4">
        ${albums
          .map(
            (album) => `
             <div class="px-2 mb-3">
                <div class="card-custom shadow">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${album.coverUrl}" class="img-fluid rounded" alt="" />
                    <a href="#" class="card-play-btn align-self-end d-none"><i class="fas fa-play-circle fa-3x"></i></a>
                    <a href="#" class="card-pause-btn align-self-end d-none"><i class="fas fa-pause-circle fa-3x"></i></a>
                  </div>
                  <div class="card-body-custom p-3">
                    <h6 class="card-title-custom text-white text-truncate">${album.title}</h6>
                    <p class="card-text-custom text-muted">random text</p>
                  </div>
                </div>
              </div>
        `
          )
          .join('')}
    </div>
  </section>
  `;
    jsEntryPoint.insertAdjacentHTML('beforeend', sectionHTML);
  });
}

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
