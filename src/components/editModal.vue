<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="editModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
    data-backdrop="static"
    data-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
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
            @click.prevent="getProducts"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <Label for="item">ITEM</Label><br />
          <input name="item" v-model="p.item" /><br />
          <Label for="marca">MARCA</Label><br />
          <input name="marca" v-model="p.marca" /><br />
          <Label for="presentacion">PRESENTACIÓN</Label><br />
          <input name="presentacion" v-model="p.presentacion" /><br />
          <Label for="precio">PRECIO</Label><br />
          <input name="precio" v-model="p.precio" /><br />
          <Label for="stock">STOCK</Label><br />
          <input name="stock" v-model="p.stock" />
        </div>
            
        <div class="modal-footer">          
          <button
            type="button"
            class="btn btn-secondary"
            @click.prevent="getProducts"
            data-dismiss="modal"
          >
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
      p: {},
      url: "https://5fc82e232af77700165ad172.mockapi.io/api/productos"
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  updated() {
    this.p = Object.assign(this.product);
  },
  methods: {
    editProduct() {
      this.$emit("edit-product", {
        product: this.p,        
      });
      this.$router.push('progress')
    },
    getProducts() {
      this.$emit("get-products",
      this.url )
    }
  },
};
</script>

<style scoped></style>
