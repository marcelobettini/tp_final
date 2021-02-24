<template >
    <div >
    <Header/>
    <Contacto/>          
    <Footer class="fixed-bottom"/>
    </div>
</template>

<script>
import Header from '../views/luzadentroHeader.vue'
import Footer from '../views/luzadentroFooter.vue'
import Contacto from '../components/contacto.vue'
export default {
    components:{
        Header, Footer, Contacto
    }
}
</script>
<style >
    
</style>