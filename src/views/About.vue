<template>
 <div>
 <Header/>
 <Carrusel/>
 <Presentacion/>
 <Footer/>
</div>
</template>

<script>
import Header from '../views/luzadentroHeader.vue'
import Presentacion from '../views/luzadentroPresentacion.vue'
import Footer from '../views/luzadentroFooter.vue'
import Carrusel from '../components/luzAdentroCarrusel.vue'


export default {
    components:{
        Header, Presentacion, Footer, Carrusel,
    }
}
</script>



