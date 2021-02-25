<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="deleteModal"
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
          <h5 v-myDirective:back="'#d9534f'" class="modal-title" id="ModalLabel">
            ELIMINAR PRODUCTO - id: {{ product.id }}
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
          <input name="item" v-model="p.item" disabled="true"/><br />
          <Label for="marca">MARCA</Label><br />
          <input name="marca" v-model="p.marca" disabled="true"/><br />
          <Label for="presentacion">PRESENTACIÓN</Label><br />
          <input name="presentacion" v-model="p.presentacion" disabled="true" /><br />
          <Label for="precio">PRECIO</Label><br />
          <input name="precio" v-model="p.precio" disabled="true"/><br />
          <Label for="stock">STOCK</Label><br />
          <input name="stock" v-model="p.stock" disabled="true"/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="deleteProduct"            
            data-dismiss="modal"
          >
            Eliminar
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
    deleteProduct() {
      this.$emit("delete-product", {
        product: this.p,
      });
      this.$router.push('progress')
    },    
  },
};
</script>
<style scoped>
</style>
