<template >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/About">
          <img src="../assets/LuzAdentro/Icono para NavBar.svg" width="180"  alt="Icono" loading="lazy">
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link " to="/luzadentroProductos"  >Productos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/luzadentroContactos"  >Contacto</router-link>
            </li>
          </ul>
        </div>
      </div>
      </nav>
</template>


