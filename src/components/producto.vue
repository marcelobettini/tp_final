<template >
<div deck class="d-flex">
  
  <b-card
    
    :img-src="producto.Imagen"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 15rem; mb-3; tarjeta"
    class="mb-2"
    border-variant="secondary"
    bg-variant="dark"
    text-variant="white"
    footer-tag="footer"
  >
    <template #header >
      <h5 class="mb-0 ">{{producto.Modelo | uCase}}</h5>
    </template>
    <b-card-text>
    {{producto.Texto}}
    </b-card-text>
    <template #footer>
      <b-button  href="https://www.luzadentro.com/" variant="outline-warning">Ver en la tienda</b-button>
    </template>
  </b-card>
 
</div>
</template>
<script>
export default {
    props:{
        producto:{
            type:Object,
            required: true
        }
    }
}
</script>
<style >
    .tarjeta{
      background-color: grey;
    
    }
</style>