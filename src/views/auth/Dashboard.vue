<template>
  <div>
    <table-home-header />
    <h1 class="m-4">Bienvenido a ningún lugar</h1>
    <h4 class="m-4">Ud. se ha logueado con el mail: {{ this.user.user.email }}</h4>
    
    <button type="button" class="btn btn-sm btn-danger mt-4" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import tableHomeHeader from "../tableHomeHeader";
import firebase from "firebase";
export default {
  components: {
    tableHomeHeader,
  },
  props: {
      user: {
          type: Object,
          required: true
      }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "tableHome" });
        });
    },
  },
}
</script>

<style lang="scss" scoped></style>
