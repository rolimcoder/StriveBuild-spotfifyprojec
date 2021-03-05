///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== login scripts ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/* loginBtn.addEventListener('click', () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
});
 */

//  this is for auto login, in order to start coding right away without having to click each time login
window.onload = () => {
  login.classList.add('d-none');
  home.classList.remove('d-none');
  showHomePage();
  fillUsersPlayList(musicStore, [userPlaylists, sideMenuMobile]);
};

// collect the username in a varible

// set the userName.innerText = to the var

// call the showHomePage()

// call fillUsersPlayList(musicStore, [userPlaylists, sideMenuMobile]);
