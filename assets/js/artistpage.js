//Src artist
const infoUrlArtist = [
  'https://i.scdn.co/image/ab67616d0000485140f115acccc5ab265b54f472',
  'https://i.scdn.co/image/ab67616d00001e02ae33b6bc69fe5405f6884b7e',
  'https://i.scdn.co/image/ab67616d00001e02365b3fb800c19f7ff72602da',
  'https://i.scdn.co/image/ab67616d00001e0256ff19308ebeb48e2ba6094b',
  'https://i.scdn.co/image/ab67616d00001e02a4fe49eb27e8152710e7a590',
  'https://i.scdn.co/image/ab67616d00001e02fe6a98e875958c7d7080584e',
  'https://i.scdn.co/image/ab67706c0000da848bc5396ddce052e8763bb7f0',
  'https://i.scdn.co/image/f603978d2974c3132fc13202f8555305dbd71710',
  'https://i.scdn.co/image/ab67616d0000b273844c2527b8254266a3d8d300',
  'https://i.scdn.co/image/ab67616d0000b273ae33b6bc69fe5405f6884b7e',
  'https://i.scdn.co/image/ab67706f0000000243a034d458fe6e8c1904bc77',
  'https://seeded-session-images.scdn.co/v1/img/artist/3DiDSECUqqY1AuBP8qtaIa/es',
  'https://i.scdn.co/image/783792fe8f8a91c62685a3d686c8aa03366dc505',
  'https://i.scdn.co/image/21ea1b285cbfa15ea93d2d943947b483d8e842aa',
  'https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da',
  'https://i.scdn.co/image/ab67616d0000b273fec1b815bb3c50a64a90fd10',
  'https://i.scdn.co/image/ab67706c0000da846ca83241d5de78db8b8dc235',
  'https://i.scdn.co/image/ab67706c0000da848bc5396ddce052e8763bb7f0',
  'https://i.scdn.co/image/ab67616d0000485140f115acccc5ab265b54f472',
];
//---------------------------------------<<----------------------------->>
// showArtistPage function
const srcImgforPlayerMusic =
  'https://i.scdn.co/image/ab67616d0000485140f115acccc5ab265b54f472';
const srcImgTop5 = [
  'https://i.scdn.co/image/ab67616d00001e02ae33b6bc69fe5405f6884b7e',
  'https://i.scdn.co/image/ab67616d00001e02365b3fb800c19f7ff72602da',
  'https://i.scdn.co/image/ab67616d00001e0256ff19308ebeb48e2ba6094b',
  'https://i.scdn.co/image/ab67616d00001e02a4fe49eb27e8152710e7a590',
  'https://i.scdn.co/image/ab67616d00001e02fe6a98e875958c7d7080584e',
];

//<---------Add this reference to 01dom-refenrences.js

function showArtistPage() {
  jsEntryPoint.innerHTML = `<!-----------------Artist Page content-------------------------->    
<!--Hero Section-->
<div class="jumbotron pb-0 jumbotron-fluid d-flex justify-content-start align-items-end animate__animated animate__faster animate__fadeInDown">
  <div class="col">
    <span>
    <i class="fas fa-certificate text-primary"></i>
    Artista Verificado
    </span>
    <h1 class="display-1">Alicia Keys</h1>
    <p class="lead">806.705 monthly listeners</p>
  </div>
</div>
<!--End of jumbotron-->
<div class="container-fluid animate__animated animate__faster animate__fadeInLeft">
  <div class="row justify-content-start align-items-center">
      
        <div class="d-flex">
        <button type="button" class="btn my-btn-lg my-button">
         <i class="fas fa-play"></i>
         <i class="fas fa-pause d-none"></i>
        </button>
      </div>
      <div class="d-flex mx-4">
        <button type="button" class="btn btn-outline-light">Seguir</button>
      </div>  
        <!--button collapsable md-->
      <div class="d-flex mx-4">
        <div class="btn-group dropdown">
          <button
            type="button"
            class="my-btn btn btn-outline-light  dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div class="dropdown-menu">
            <div
              class="col px-1 py-1 list-next d-flex justify-content-center align-items-center"
            >
            <a href="#">Stop Following</a>
            </div>
            <div
              class="col px-1 py-1 devices d-flex justify-content-center align-items-center"
            >
            <a href="#">Go artist radio</a>
            </div>
            <div
              class="col px-1 py-1 volume-control d-flex justify-content-center align-items-center"
            >
            <a href="#">Share</a>
            </div>
            <div
              class="col px-1 py-1 volume-control d-flex justify-content-center align-items-center"
            >
            <a href="#">Open in desktopApp</a>
            </div>
          </div>
        </div>
      </div>
        <!-- end of button-->
    </div>
  </div>
  <!--Section Popular releases and artist pick-->        
  <div class="row row-cols-1 row-cols-lg-2 pt-4 text-white animate__animated animate__faster animate__fadeInRight">
      <div class="col">
        
        <div class="container top-five-asrtist">
          <h2 class="popular-releases-title text-white">Popular releases</h2>
          <!--#1-->
          <div class="row pb-3 align-items-center justify-content-around text-center">
            <div class="d-flex">
              <span class="d-none">#P</span>
              <span> <i class="fas fa-play"></i></span>
            </div>
            <div class="d-flex align-items-center">
              <img id="imgArtistTop1" class="top-five-img" src="https://via.placeholder.com/40" alt="minicover">
              <Span class="mx-2">Title</Span>
            </div>
            <div class="d-flex">
              <span>Listeners</span>
            </div>
            <div class="d-flex">
              <Span><i class="px-2 far fa-heart px-1"></i></Span>
            </div>
            <div class="d-flex">
              <span>05:58</span>
            </div>
          </div>
          <!--#2-->
          <div class="row pb-3 align-items-center justify-content-around text-center">
            <div class="d-flex">
              <span class="d-none">#P</span>
              <span> <i class="fas fa-play"></i></span>
            </div>
            <div class="d-flex align-items-center">
              <img id="imgArtistTop2" class="top-five-img" src="https://via.placeholder.com/40" alt="minicover">
              <Span class="mx-2">Title</Span>
            </div>
            <div class="d-flex">
              <span>Listeners</span>
            </div>
            <div class="d-flex">
              <Span><i class="px-2 far fa-heart px-1"></i></Span>
            </div>
            <div class="d-flex">
              <span>05:58</span>
            </div>
          </div>
          <!--#3-->
          <div class="row pb-3 align-items-center justify-content-around text-center">
            <div class="d-flex">
              <span class="d-none">#P</span>
              <span> <i class="fas fa-play"></i></span>
            </div>
            <div class="d-flex align-items-center">
              <img id="imgArtistTop3" class="top-five-img" src="https://via.placeholder.com/40" alt="minicover">
              <Span class="mx-2">Title</Span>
            </div>
            <div class="d-flex">
              <span>Listeners</span>
            </div>
            <div class="d-flex">
              <Span><i class="px-2 far fa-heart px-1"></i></Span>
            </div>
            <div class="d-flex">
              <span>05:58</span>
            </div>
          </div>
          <!--#4-->
          <div class="row pb-3 align-items-center justify-content-around text-center">
            <div class="d-flex">
              <span class="d-none">#P</span>
              <span> <i class="fas fa-play"></i></span>
            </div>
            <div class="d-flex align-items-center">
              <img id="imgArtistTop4" class="top-five-img" src="https://via.placeholder.com/40" alt="minicover">
              <Span class="mx-2">Title</Span>
            </div>
            <div class="d-flex">
              <span>Listeners</span>
            </div>
            <div class="d-flex">
              <Span><i class="px-2 far fa-heart px-1"></i></Span>
            </div>
            <div class="d-flex">
              <span>05:58</span>
            </div>
          </div>
          <!--#5-->
          <div class="row pb-3 align-items-center justify-content-around text-center">
            <div class="d-flex">
              <span class="d-none">#P</span>
              <span> <i class="fas fa-play"></i></span>
            </div>
            <div class="d-flex align-items-center">
              <img id="imgArtistTop5" class="top-five-img" src="https://via.placeholder.com/40" alt="minicover">
              <Span class="mx-2">Title</Span>
            </div>
            <div class="d-flex">
              <span>Listeners</span>
            </div>
            <div class="d-flex">
              <Span><i class="px-2 far fa-heart px-1"></i></Span>
            </div>
            <div class="d-flex">
              <span>05:58</span>
            </div>
          </div>
          <span><a class="link-more" href="#">See more</a></span>
        </div>
      </div>
      <!--Artist Pick-->
      <div class="col">
        <div class="container my-4">
          <!-- <div class="row"> -->
            <h2 class="artist-pick-title">Artist Pick</h2> 
            <div class="d-flex artist-pick">
              <div>
                <img src="https://via.placeholder.com/76" alt="minicover-artispick">
              </div>
              <div class="container">
                <div>
                  <img src="https://via.placeholder.com/24" alt="mini-pick-profile">
                  <span>Posted By</span>
                </div>
                <div>
                  <a class="link-artis-pick" href="">Artist name: Best of</a>
                </div>
                <div>Playlist</div>
              </div>
            </div>
          <!-- </div> -->
      </div> 
      </div>
  </div>
</div>
<!--End Hero Section-->
<div id="entryPointForAlbums" class="d-flex flex-wrap justify-content-center justify-content-center"></div>
<!------------------------End content artist-page---------------->`;
  const imgTargetTop5Html = document.querySelectorAll('.top-five-img');
  imgTargetTop5Html.forEach((img, i) => {
    img.src = srcImgTop5[i];
  });
  injectAlbumsInArtistPage(); //Calling function to inject Albums
}

//Ardi's function refurbished to inject albums in our artistPage------------->
function injectAlbumsInArtistPage() {
  const entryPointForAlbums = document.getElementById(`entryPointForAlbums`);
  entryPointForAlbums.innerHTML = '';
  const coversHtml = musicStore
    .map(
      (album) => `
             <div class="pl-2 d-inline-block mb-3">
                <div class="card-custom shadow">
                  <div class="card-image-wrapper d-flex flex-column p-2">
                    <img src="${album.coverUrl}" class="img-fluid rounded" alt="" />
                    <a href="#" class="card-play-btn align-self-end d-none"><i class="fas fa-play-circle fa-3x"></i></a>
                    <a href="#" class="card-pause-btn align-self-end d-none"><i class="fas fa-pause-circle fa-3x"></i></a>
                  </div>
                  <div class="card-body-custom p-3">
                    <h6 class="card-title-custom text-white text-truncate">${album.title}</h6>
                    <p class="card-text-custom text-muted d-none">random text</p>
                  </div>
                </div>
              </div>
        `
    )
    .join('');

  entryPointForAlbums.insertAdjacentHTML('beforeend', coversHtml);
  const cards = document.querySelectorAll('.card-custom');
  cards.forEach((card) => {
    card.addEventListener('click', getCardsInfo);
    card.classList.remove('animate__fadeInUp');
    card.classList.add('animate__fadeInUp');
  });
}
