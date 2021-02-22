<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="addModal"
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
            AGREGAR PRODUCTO
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
          <div class="input-div" :class="{invalid: $v.item.$error}">
          <Label for="item">ITEM</Label><br />
          <input type="text" required="true" name="item" v-model="item" @input="$v.item.$touch()"/><br />
          <p class="alert alert-warning" v-if="!$v.item.required">Este campo no puede estar vacío</p>
          <p class="alert alert-warning" v-if="!$v.item.minLength">Al menos dos caracteres (EJ: Té)</p>         
          <Label for="marca">MARCA</Label><br />
          <input type="text" name="marca" v-model="marca" /><br />
          <p class="alert alert-warning" v-if="!$v.marca.required">Este campo no puede estar vacío</p>
          <Label for="presentacion">PRESENTACIÓN</Label><br />
          <input type="text" name="presentacion" v-model="presentacion" /><br />
          <p class="alert alert-warning" v-if="!$v.presentacion.required">Este campo no puede estar vacío</p>
          <p class="alert alert-warning" v-if="!$v.presentacion.minLength">Al menos tres caracteres (EJ: 6 g)</p>         
          <Label for="precio">PRECIO</Label><br />
          <input type="number" name="precio" v-model="precio" /><br />
          <p class="alert alert-warning" v-if="!$v.precio.required">Este campo no puede estar vacío</p>
          <p class="alert alert-warning" v-if="!$v.precio.decimal">Debe ingresar un número</p>         
          <p class="alert alert-warning" v-if="!$v.precio.minValue">Valor mínimo: 10</p>         
          <Label for="stock">STOCK</Label><br />
          <input type="number" name="stock" v-model="stock" />
          <p class="alert alert-warning" v-if="!$v.stock.required">Este campo no puede estar vacío</p>
          <p class="alert alert-warning" v-if="!$v.stock.numeric">Debe ingresar un número</p>         
          <p class="alert alert-warning" v-if="!$v.stock.minValue">Stock mínimo: 1</p>         
           </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cancelar
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click.prevent="addProduct"
            data-dismiss="modal"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, numeric, decimal, minValue } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      p: {},
      item: "",
      marca: "",
      presentacion: "",
      precio: "",
      stock: "",
      url: "https://5fc82e232af77700165ad172.mockapi.io/api/productos",
    };
  },
  validations: {
    item: {
      required,
      minLength: minLength(2)       
    },
    marca: {
      required
    },
   presentacion: {
      required,
      minLength: minLength(2)       
    },
    precio: {
      decimal,
      required,
      minValue: minValue(10)
    },
    stock: {
      numeric,
      required,
      minValue: minValue(1)
    },
  },
  methods: {
    addProduct() {
      this.p.item = this.item;
      this.p.marca = this.marca;
      this.p.presentacion = this.presentacion;
      this.p.precio = this.precio;
      this.p.stock = this.stock;

      this.$emit("add-product", {
        product: this.p,
      });
      this.$router.push("progress");
    },
    getProducts() {
      this.$emit("get-products", this.url);
    },
  },
};
</script>

<style scoped></style>
