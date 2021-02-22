<template >
<div>
  <b-card
    :title="producto.Modelo " 
    :img-src="producto.Imagen"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text :>
    <p>"producto.Texto"</p> 
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
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
    .b-card{
        color: black;
    }
</style>