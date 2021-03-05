// jsEntryPoint.addEventListener('click', getCardInfo);

function getCardsInfo(e) {
  console.log('hi');
  const card = e.target.closest('.card-custom');
  const title = card.querySelector('.card-title-custom').innerText;
  const img = card.querySelector('img');
  const url = img.src;
  console.log(title);
  console.log(url);
  showAlbumPage(url, title);
}
