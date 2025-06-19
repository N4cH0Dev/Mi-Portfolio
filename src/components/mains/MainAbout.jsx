import React from "react";

const MainAbout = () => {
  return (
    <main className="main-about">
      <div className="flex-educacion">
        <aside className="card-tecnologias"></aside>
        <div className="card-titulos"></div>
      </div>
      <hr />
      <div className="flex-certificaciones">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://www.genexus.com/media/images/logo_genexuscom_share-link-image.jpg?timestamp=20250113195359q"
                class="d-block w-50 h-50"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainAbout;
