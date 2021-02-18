<template>
    <div>
        <table-home-header/>
        <table-products/>        

    </div>
</template>

<script>
import tableHomeHeader from '../views/tableHomeHeader.vue'
import tableProducts from '../components/tableProducts.vue'
    export default {
        components: { tableHomeHeader, tableProducts }        
    }
</script>

<style scoped>
    navbar a.router-link-exact-active {
        color: #42b983;
    }
</style>