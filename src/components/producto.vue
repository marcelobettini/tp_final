<template >
<div >
  <b-card
    :title="producto.Modelo " 
    :img-src="producto.Imagen"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; negro; mb-3"
    class="mb-2"
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
    .negro{
        color: black;
    }
</style>