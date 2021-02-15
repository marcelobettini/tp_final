<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="Modal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">
            MODIFICAR PRODUCTO - id: {{ product.id }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Label for="item">ITEM</Label><br />
          <input name="item" :value="product.item"/><br />
          <Label for="marca">MARCA</Label><br />
          <input name="marca" :value="product.marca"/><br />
          <Label for="presentacion">PRESENTACIÓN</Label><br />
          <input name="presentacion" :value="product.presentacion"/><br />
          <Label for="precio">PRECIO</Label><br />
          <input name="precio" :value="product.precio"/><br />
          <Label for="stock">STOCK</Label><br />
          <input name="stock" :value="product.stock"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="editProduct"
            data-dismiss="modal"
          >
            Modificar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localProd: {
        type: Object,
        required: true,
      },
    };
  },
  props: {
    product: {},
  },
  renderTracked() {
    this.getProduct(this.product.id);    
  },
  methods: {
    getProduct(id) {
      fetch(`https://5fc82e232af77700165ad172.mockapi.io/api/productos/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
          this.localProd = data;
          console.log(this.localProd);
        });
    },
    editProduct() {
      this.$emit("edit-product", {
        product: this.product,
      });
    },
  },
};
</script>

<style scoped></style>
