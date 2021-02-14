<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col" v-for="key in keyNames" :key="key.index"> {{ key.toUpperCase() }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" product="product">
          <td>{{product.id}}</td>
          <td>{{product.item}}</td>
          <td>{{product.marca}}</td>
          <td>{{product.presentacion}}</td>
          <td>{{product.precio}}</td>
          <td>{{product.stock}}</td>
          <td><button>borrar</button></td>
          <td><button>editar</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      keyNames: []
    };
  },
  mounted() {
    const url = "https://5fc82e232af77700165ad172.mockapi.io/api/productos";
    this.getProducts(url);    
  },
  methods: {
    getProducts(url) {
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          this.products = data;          
          this.keyNames = Object.keys(data[0]);          
        });
        
    },
  },
};
</script>

<style scoped></style>
