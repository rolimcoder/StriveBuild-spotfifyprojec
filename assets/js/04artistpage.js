// showArtistPage function

const entryPointForAlbums = document.getElementById(`entryPointForAlbums`) //<---------Add this reference to 01dom-refenrences.js

//Ardi's function refurbished to inject albums in our artistPage------------->

function injectAlbumsInArtistPage() {
    entryPointForAlbums.innerHTML = '';
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


function showArtistPage () {
jsEntryPoint.innerHTML = '';
const artistPage = `<!-----------------Artist Page content-------------------------->    
<!--Hero Section-->
<div class="jumbotron jumbotron-fluid d-flex justify-content-start align-items-end">
  <div class="col">
    <h1 class="display-1">Artist name</h1>
    <p class="lead">806.705 monthly listeners</p>
  </div>
</div>
<!--End of jumbotron-->
<div class="container-fluid">
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
  <div class="row row-cols-1 row-cols-lg-2 pt-4 text-white">
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
              <img src="https://via.placeholder.com/40" alt="minicover">
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
              <img src="https://via.placeholder.com/40" alt="minicover">
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
              <img src="https://via.placeholder.com/40" alt="minicover">
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
              <img src="https://via.placeholder.com/40" alt="minicover">
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
              <img src="https://via.placeholder.com/40" alt="minicover">
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
        <div class="container">
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
<div id="entryPointForAlbums"></div>
<!------------------------End content artist-page---------------->`;
jsEntryPoint.insertAdjacentHTML('beforeend', artistPage);
injectAlbumsInArtistPage() //Calling function to inject Albums
}



