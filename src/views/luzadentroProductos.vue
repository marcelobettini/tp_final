<template >
    <div>
    <Header/>
    <Lista/>          <!-- ACA VAN LAS CARDS DE PRODUCTOS -->
    <Footer/>
    </div>
</template>

<script>
import Header from '../views/luzadentroHeader.vue'
import Footer from '../views/luzadentroFooter.vue'
import Lista from '../components/luzAdentroListaProd.vue'
export default {
    components:{
        Header, Footer, Lista
    }
}
</script>
<style >
    
</style>