<template>
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
              data-target="#Modal"
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
        <deleteModal
      @delete-product="deleteProduct"
      @get-products="getProducts"
      :product="p"
      :url="url"
    />
    <editModal
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
export default {
  components: {
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
      url: "",
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
    passToEditModal(product) {
      this.p = Object.assign(product);
    },
    passToDeleteModal(product) {
      this.p = Object.assign(product);
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
      fetch(url, { method: "DELETE" }).then((res) => res.json());
      this.getProducts('https://5fc82e232af77700165ad172.mockapi.io/api/productos')
    },
  },
};
</script>
<style scoped>
tbody tr:nth-child(odd) {
  background-color: rgb(41, 44, 43);
}
</style>
