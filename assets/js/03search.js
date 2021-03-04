function showSearchPage() {
  jsEntryPoint.innerHTML = `
  <section class="cards-section mb-5">
  <h4 class="text-white font-weight-bold mb-2 display-5 pl-2">Brows All</h4>
  <div class="d-flex flex-wrap col-lg-12 col-md-12 row-albums mb-4">
      ${searchDatas
        .map(
          (searchDatas) => `
           <div class="px-2 mb-3" >
              <div class="card-custom shadow" style = "background-color:${searchDatas.color};">
                <div class="card-image-wrapper d-flex flex-column p-2 ">
                <div class="card-body-custom p-3">
                  <h6 class="card-title-custom text-white text-truncate">${searchDatas.title}</h6>
                  <img src="${searchDatas.url}" class="img-fluid rounded" style = "
                  right: 0;
                  cursor: wait;    
                  transform: rotate( 25deg) translate(18%,-2%);
                  margin-bottom: -50px;
                  " alt="" />
                </div>
                  
                </div>
              </div>
            </div>
      `
        )
        .join('')}
  </div>
</section>
  `;
}
