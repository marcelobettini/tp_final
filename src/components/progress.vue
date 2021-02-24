<template>
<div class="container d-flex justify-content-center align-items-center">
  <div class="progress-container">
    <div class="progress-slider align-items-center" :style="{ width: percent + '%' }"><span>{{`${this.percent} %`}}</span></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 0,
    };
  },
  created() {
    const scopeThis = this;
    const interval = setInterval(() => {     
      scopeThis.percent++      
      if(scopeThis.percent > 100) {         
        clearInterval(interval)
        this.$router.go(-1)
      }
    },15)
    
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100vh;
}
.progress-container {
  width: 50vw;  
}

.progress-slider {
  font-size: 18px;
  color: blanchedalmond;
  padding: 5px;
  height: 40px;
  background-color: rgb(7, 116, 204);
  
}

</style>
