<template>
    <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="Homepage.html">
          <img src="../assets/LuzAdentro/Icono para NavBar.svg" width="180"  alt="Icono" loading="lazy">
        </a>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link "  to="/productosLA">Productos</router-link>    <!-- ARMAR EL RUTER -->
            </li>
           
          </ul>
        </div>
      </div>
     </nav>
    </div>
</template>