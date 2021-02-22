<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      
      <b-carousel-slide img-src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/153708843_10224698158552014_8884491429068194352_o.jpg?_nc_cat=108&ccb=3&_nc_sid=0debeb&_nc_ohc=f10s86Cc0MQAX8sRKv0&_nc_ht=scontent-eze1-1.xx&oh=93071b0598b47261f5d8d80b6695f970&oe=605A5231" ></b-carousel-slide>
      <b-carousel-slide img-src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/153282573_10224698158112003_1699712238095091187_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=QoXiJdaAFQcAX_mMVVY&_nc_ht=scontent-eze1-1.xx&oh=d0879bfaa7901be9684e0b4a555dc66e&oe=605A26A5" ></b-carousel-slide>
      <b-carousel-slide img-src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/152351272_10224698155831946_8396526145120581314_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=t-jf51AGMB0AX-cFh1C&_nc_ht=scontent-eze1-1.xx&oh=6860bff3cc9b5b94fdda6075ef140286&oe=605A5811" ></b-carousel-slide>
      <b-carousel-slide img-src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/153181802_10224698165992200_1060148796549475757_o.jpg?_nc_cat=107&ccb=3&_nc_sid=0debeb&_nc_ohc=vsir6ZteJXMAX-ai9Gc&_nc_ht=scontent-eze1-1.xx&oh=8ec8aa10d5921d865f8948877f31524e&oe=6059B645" ></b-carousel-slide>
      <b-carousel-slide img-src="https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/153119002_10224698159272032_3185030374925991355_o.jpg?_nc_cat=104&ccb=3&_nc_sid=0debeb&_nc_ohc=AuIAZusg1ocAX_OJcbG&_nc_ht=scontent-eze1-1.xx&oh=7d7ab87b2221ad52275fc187c5af9fab&oe=605855E7" ></b-carousel-slide>
      
      </b-carousel>
        

    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>