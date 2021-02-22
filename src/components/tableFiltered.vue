<template>
<div>
  <table-home-header></table-home-header>
  <div class="container">
    <table class="table table-dark">
      <tbody>
        <tr v-for="item in arreglo" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.item }}</td>
          <td>{{ item.marca }}</td>
          <td>{{ item.presentacion }}</td>
          <td>$ {{ item.precio }}</td>
          <td>{{ item.stock }}</td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="6">
          <button class="btn btn-primary" @click="goBack">Volver</button>
        </td>
      </tfoot>
    </table>
  </div>
  </div>
</template>
<script>

import tableHomeHeader from '../views/tableHomeHeader'
export default {
  components: {
    tableHomeHeader
  },
  props: {
    arreglo: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goBack() {
    this.$router.go(-1)
    }
  },
};
</script>
