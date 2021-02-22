<template >
    <div class="d-flex flex-wrap justify-content-around mt-4 ">
        <Producto v-for="producto in productos" :key="producto.id" :producto="producto">
        </Producto>
    </div>
</template>
<script>
import Producto from './producto'
export default {
    components:{
        Producto
    } , 
    data(){
        return{
            productos:[
        {
            "id": 1,
            "Modelo": "Billetera Clásica",
            "Tela": "Lona",
            "Color": "Amarilla",
            "Brillo": "Opaca",
            "Stock": "Si",
            "Imagen": "https://scontent-eze1-1.xx.fbcdn.net/https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/153104197_10224698587402735_1861169826785847615_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_ohc=WCqfWRSF1m4AX_-1Yog&_nc_ht=scontent-eze1-1.xx&oh=504a8ecc0770535b1d2278dd694ada8f&oe=6059BD68/t1.0-9/153104197_10224698587402735_1861169826785847615_o.jpg?_nc_cat=100&ccb=3&_nc_sid=0debeb&_nc_ohc=WCqfWRSF1m4AX_-1Yog&_nc_ht=scontent-eze1-1.xx&oh=504a8ecc0770535b1d2278dd694ada8f&oe=6059BD68",
            "Texto": "7 compartimentos. Uno con abrojo especialmente para las monedas"
            
        },
        {
            "id": 2,
            "Modelo": "Billetera Máxima",
            "Tela": "Cuerina",
            "Color": "Negra",
            "Brillo": "Opaca",
            "Stock": "Si",
            "Imagen": "https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/152755026_10224698587682742_8732729198665341431_o.jpg?_nc_cat=101&ccb=3&_nc_sid=0debeb&_nc_ohc=OnMD6npfIFUAX_nyvug&_nc_ht=scontent-eze1-1.xx&oh=a53dd23d4d5bfa47d1d155ca37b95f17&oe=60573CA4",
            "Texto": "14 compartimentos para que lleves todo lo que necesitás."
        },
        {
            "id": 3,
            "Modelo": "Billetera Quark",
            "Tela": "Vinilo",
            "Color": "Verde",
            "Brillo": "Brillante",
            "Stock": "Si",
            "Imagen": "https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/152443822_10224698587722743_2126588051032735549_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=Tyegiqy24tsAX_KIAg5&_nc_ht=scontent-eze1-1.xx&oh=7a9cac3217affa882e48c5e29a5656ad&oe=6058E956",
            "Texto": "La mínima expresión posible de la #BilleClasica."
          },
        {
            "id": 4,
            "Modelo": "Tabaquera Clásica",
            "Tela": "Lona",
            "Color": "Roja",
            "Brillo": "Opaca",
            "Stock": "No",
            "Imagen": "https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/152893630_10224698588122753_6564925870632993726_o.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=xHVP_xGjPgIAX-tf6Hh&_nc_ht=scontent-eze1-1.xx&oh=24981bd53800df10925751b15393c497&oe=60570866",
            "Texto": "Tiene espacio para que pongas los filtros, el encendedor y los papelillos."
          },
        {
            "id": 5  ,
            "Modelo": "Riñonera Inés",
            "Tela": "Pul",
            "Color": "Negra",
            "Brillo": "Brillante",
            "Stock": "No",
            "Imagen": "https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/152333821_10224698587762744_6966977701542946527_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=oUsjQKDOCRIAX-bHaMG&_nc_ht=scontent-eze1-1.xx&oh=3ff2d5271c2438d6c25266793005d130&oe=6057FEC0",
            "Texto" : "Dos espacios con una capacidad que te va a asombrar para que lleves con vos todo lo que necesitas."
        }
    
      ]
        }
    }
}
</script>
<style >
    
</style>