inputField.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();

    jsEntryPoint.innerHTML = `
    <div class="container-fluid p-3 vh-100" style="cursor: pointer">
      <div class="row m-1 text-white my-border-light">
        <div class="col-12 col-lg-3 h-100 animate__animated animate__faster animate__fadeInDown">
          <img
            src="./David-Z/AssetsArtistPage/Card-img-artist.png"
            alt="img-card-artist"
            class="img-fluid w-100 alicia-keys"
          />
        </div>

        <div class="col-12 col-lg-12 mt-3 animate__animated animate__faster animate__fadeInUp">
          <div class="row no-gutters w-100">
            <div class="col-12">
              <h5 class="card-title mb-0">Alicia Keys</h5>
            </div>
            <div class="col-12">
              <p class="text-white-50 mb-0">806.705 monthly listeners</p>
            </div>
            <div class="col-12">
              <p class="card-text">
                <small class="text-muted ">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
    `;
    const img = document.querySelector('.alicia-keys');
    img.addEventListener('click', showArtistPage);
  }
});
