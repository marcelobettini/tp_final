<template>
  <nav id="tblnav" class="navbar sticky-top navbar-expand bg-warning">
    <a class="navbar-brand badge-pill">
      <router-link class="nav-link" to="/tableHome"
        ><img
          src="../assets/part2/monster.svg"
          width="35"
          height="35"
          alt="logo monster"
      /></router-link>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/tableTbl">Productos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link disabled" to="#">Clientes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link disabled" to="#"
            >Proveedores</router-link
          >
        </li>
      </ul>
    </div>
    <div
      class="collapse navbar-collapse justify-content-end d-none"
      id="navbarSupportedContent"
    >
      <router-link class="btn btn-secondary btn-sm m-1 text-white" to="/Login"
        >Ingresar</router-link
      >
      <router-link
        class="btn btn-secondary btn-sm m-1 text-white"
        to="/Register"
        >Registro</router-link
      >
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {};
  },

  created() {
    firebase.auth().onAuthStateChanged((user) => {
      //recibe en user el cambio de sesión
      if (user) {
        this.user = user; //si usuario inició sesión
      } else {
        this.user = null; //si cerró sesión
      }
    });
  },
};
</script>
<style>
#tblnav {
  padding: 30px;
}

#tblnav a {
  font-weight: bold;
  color: #2c3e50;
}

#tblnav a.router-link-exact-active {
  color: #42b983;
}
</style>
