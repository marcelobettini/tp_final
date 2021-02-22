<template>
 <div>
 <Header/>
 <Presentacion/>
 <Footer/>
</div>
</template>

<script>
import Header from '../views/luzadentroHeader.vue'
import Presentacion from '../views/luzadentroPresentacion.vue'
import Footer from '../views/luzadentroFooter.vue'

export default {
    components:{
        Header, Presentacion, Footer
    }
}
</script>



