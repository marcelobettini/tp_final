<template >
    <div>
    <Header/>
    <Contacto/>          
    <Footer/>
    </div>
</template>

<script>
import Header from '../views/luzadentroHeader.vue'
import Footer from '../views/luzadentroFooter.vue'
import Contacto from '../components/contactos.vue'
export default {
    components:{
        Header, Footer, Contacto
    }
}
</script>
<style lang="">
    
</style>