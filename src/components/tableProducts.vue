<template>
  <div class="container">
    <div id="tableCtrl" class="container d-flex m-4 align-items-center">
      <button
        class="btn btn-warning"
        data-toggle="modal"
        data-target="#addModal"
      >
        agregar
      </button>
      <input type="checkbox" class="switch" @click="toggleShow" />
      <select v-model="selected" v-show="!show" name="filter" id="filter">
        <option selected disabled>Elija un filtro</option>
        <option selected name="maxPrice" id="maxPrice"
          >Filtrar precio máximo</option
        >
        <option selected name="minStock" id="minStock"
          >Filtrar stock mínimo</option
        >
      </select>
      <input
        v-model="numFilter"
        name="numFilter"
        id="numFilter"
        type="number"
        v-show="!show"
      />
      <button
        class="btn btn-sm btn-success ml-2"
        @click="filter"
        v-show="!show"
        :disabled="isDisabled"
      >
        filtrar
      </button>
    </div>

    <table class="table table-dark">
      <thead>
        <tr>
          <th
            class="text-warning"
            scope="col"
            v-for="key in keyNames"
            :key="key.index"
          >
            {{ key.toUpperCase() }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" product="product">
          <td>{{ product.id }}</td>
          <td>{{ product.item }}</td>
          <td>{{ product.marca }}</td>
          <td>{{ product.presentacion }}</td>
          <td>$ {{ product.precio }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button
              class="btn btn-sm btn-success"
              data-toggle="modal"
              data-target="#editModal"
              @click.prevent="passToEditModal(product)"
            >
              editar
            </button>
          </td>
          <td>
            <button
              class="btn btn-sm btn-danger"
              data-toggle="modal"
              data-target="#deleteModal"
              @click.prevent="passToDeleteModal(product)"
            >
              borrar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <add-modal @add-product="addProduct" />
    <delete-modal @delete-product="deleteProduct" :product="p" :url="url" />
    <edit-modal
      @edit-product="editProduct"
      @get-products="getProducts"
      :product="p"
      :url="url"
    />
  </div>
</template>

<script>
import editModal from "../components/editModal";
import deleteModal from "../components/deleteModal";
import addModal from "../components/addModal";

export default {
  components: {
    addModal,
    editModal,
    deleteModal,
  },
  data() {
    return {
      products: [],
      product: {
        type: Object,
        required: true,
      },
      keyNames: [],
      p: {},
      url: "https://5fc82e232af77700165ad172.mockapi.io/api/productos",
      show: true,
      selected: "Elija un filtro",
      numFilter: null,
      productsFiltered: [],
    };
  },
  computed: {
    isDisabled: function() {
      return this.selected === "Elija un filtro";
    },
  },
  mounted() {
    // const url = "https://5fc82e232af77700165ad172.mockapi.io/api/productos";
    this.getProducts(this.url);
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
    passToEditModal(product) {
      this.p = Object.assign(product);
    },
    passToDeleteModal(product) {
      this.p = Object.assign(product);
    },
    addProduct(p) {
      fetch(this.url, {
        method: "POST",
        body: JSON.stringify({
          item: p.product.item,
          marca: p.product.marca,
          presentacion: p.product.presentacion,
          precio: Number(p.product.precio),
          stock: Number(p.product.stock),
        }),
        headers: { "Content-Type": "application/JSON" },
      })
        .then((response) => response.json())
        .then(this.getProducts(this.url));
    },
    editProduct(p) {
      const url = `https://5fc82e232af77700165ad172.mockapi.io/api/productos/${p.product.id}`;
      fetch(url, {
        method: "PUT",
        body: JSON.stringify({
          id: p.product.id,
          item: p.product.item,
          marca: p.product.marca,
          precio: p.product.precio,
          presentacion: p.product.presentacion,
          stock: p.product.stock,
        }),
        headers: { "Content-Type": "application/JSON" },
      }).then((res) => res.json());
    },
    deleteProduct(p) {
      const url = `https://5fc82e232af77700165ad172.mockapi.io/api/productos/${p.product.id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then(this.getProducts(this.url));
    },
    toggleShow() {
      this.show = !this.show;
    },
    filter() {
      if (this.selected == "Filtrar precio máximo" && this.numFilter > 0) {
        this.productsFiltered = this.products.filter(
          (e) => e.precio <= Number(this.numFilter)
        );
      } else if (
        this.selected == "Filtrar stock mínimo" &&
        this.numFilter > 0
      ) {
        this.productsFiltered = this.products.filter(
          (e) => e.stock <= Number(this.numFilter)
        );
      }
      this.$router.push({
        name: "tableFiltered",
        params: { arreglo: this.productsFiltered },
      });
    },
  },
};
</script>
<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgb(41, 44, 43);
}
/* transformación del checkbox en toggle switch*/
input[type="checkbox"] {
  vertical-align: middle;
  position: relative;
  width: 50px;
  height: 25px;
  appearance: none;
  background-color: #ecb80e;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 4px #ffae00, inset 0 0 10px;
  margin-left: 10px;
  margin-right: 10px;
}
input[type="checkbox"]:hover {
  cursor: pointer;
}
input[type="checkbox"]:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  background: rgb(255, 255, 255);
  outline: none;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #ffae00;
  transform: scale(0.98, 0.96);
  transition: 0.2s;
}
input:checked[type="checkbox"]:before {
  left: 25px;
}
#numFilter {
  margin-left: 1em;
  width: 4em;
}
</style>
