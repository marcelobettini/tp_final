<template>
  <div>
    <table-home-header />

    <div class="row">
      <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-8 offset-2">
      <h4 class="mt-4 mb-4">INICIAR SESIÓN</h4>

      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo electrónico:</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Ingrese su email"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >Nunca compartiremos su dirección de correo electrónico</small
          >
        </div>
        <div class="form-group">
          <label for="pass">Contraseña:</label>
          <input
            type="password"
            class="form-control"
            id="pass"
            placeholder="Ingrese su contraseña"
            v-model="pass"
          />
        </div>
        <button type="submit" class="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
    <div class="container mt-3">
      <div class="alert alert-danger" role="alert" v-if="error">
        {{ error }}
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/firebase/init.js";
import firebase from "firebase";
import tableHomeHeader from "../tableHomeHeader";

export default {
  data() {
    return {      
      email: "",
      pass: "",
      error: "",
    };
  },
  components: { tableHomeHeader },
  name: "Login",
  methods: {
    login() {
      this.error = "";
      if (this.email && this.pass) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
          .then((user) => {
            
            this.$router.push({name: 'dashboard', params: {user}})            
          })
          .catch((err) => {
            if(err.code == "auth/user-not-found") {
              this.error = "No se encuentra el usuario. Debe registrarse";
            } else {
              this.error = "Usuario o contraseña no concuerdan"
            }
            
            
          });
      } else {
        this.error = "Debe completar todos los campos";
      }
    },
  },
};
</script>
