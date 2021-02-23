<template>
  <div>
    <section>
      <h1 class="display-3 text-center">Monstruo Mercado</h1>
      <h2 class="lead text-center">F.D.S.*</h2>
    </section>
    <section>
      <div class="container-fluid">
        <div class="row my-5 justify-content-between">
          <div class="card pt-3 col-lg-3 col-md-6 col-sm-12">
            <div class="zoom">
              <img
                src="../assets/part2/carnes.jpg"
                class="card-img"
                alt="carnes"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Carnes</h5>
              <p class="card-text">
                Carnes de gran calidad provenientes de nuestro Feedlot modelo y
                de productores locales que certifican sus estándares bajo normas
                internacionales.
              </p>
            </div>
          </div>
          <div class="card pt-3 col-lg-3 col-md-6 col-sm-12">
            <div class="zoom">
              <img
                src="../assets/part2/lacteos.jpg"
                class="card-img"
                alt="lácteos"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Lácteos</h5>
              <p class="card-text">
                Productos destacados de la Cuenca Lechera Mar y Sierras junto a
                una selección de las marcas tradicionales. Estos lácteos no
                pueden faltar en la mesa argentina.
              </p>
            </div>
          </div>
          <div class="card pt-3 col-lg-3 col-md-6 col-sm-12">
            <div class="zoom">
              <img
                src="../assets/part2/frutas_verduras.jpg"
                class="card-img"
                alt="frutas y verduras"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Frutas y Vegetales</h5>
              <p class="card-text">
                Provenientes de los mercados concentradores de Mar del Plata y
                Buenos Aires, pero también del cordón hortícola del Gran La
                Plata e incluso de quinteros de Tandil.
              </p>
            </div>
          </div>
          <div class="card pt-3 col-lg-3 col-md-6 col-sm-12">
            <div class="zoom">
              <img
                src="../assets/part2/chacinados.jpg"
                class="card-img"
                alt="charcutería"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Charcutería</h5>
              <p class="card-text">
                Embutidos y fiambres elaborados en Tandil, los mismos que
                destacan en todo el país. Ofrecemos chacinados de todos los
                productores locales y el salame D.O.T.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.zoom {
  overflow: hidden;
}
.zoom img {
  transition: all 1.5s ease;
}
.zoom:hover img {
  transform: scale(1.5);
}
</style>
