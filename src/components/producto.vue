<template >
<div >
 
  <b-card
    :title="producto.Modelo " 
    :img-src="producto.Imagen"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; mb-3; tarjeta"
    class="mb-2"
    border-variant="secondary"
    bg-variant="dark"
    text-variant="white"
  >
    <b-card-text>
    {{producto.Texto}}
    </b-card-text>

    <b-button href="https://www.luzadentro.com/" variant="warning">Ver en la tienda</b-button>
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