function fillUsersPlayList(array) {
  const ul = document.createElement('ul');
  userPlaylists.appendChild(ul);
  ul.innerHTML = array
    .map(
      (album) => `
      <li class="text-truncate">
        <a href="#" class="playlist-title ">${album.title}</a>
      </li>
  `
    )
    .join('');
}
