<template>
<div>
  <table-home-header></table-home-header>
  <div class="container">
    <table class="table table-dark">
      <thead>
        <tr>
           <th
            class="text-warning"
            scope="col"
            v-for="key in keyNames"
            :key="key.index"
          >
            {{ key | uCase }}
          </th>         
        </tr>
      </thead>
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
  data() {
    return {
      keyNames: [],
    }
  },
  props: {
    arreglo: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.keyNames = Object.keys(this.arreglo[0]);
  },
  methods: {
    goBack() {
    this.$router.go(-1)
    }
  },
};
</script>
