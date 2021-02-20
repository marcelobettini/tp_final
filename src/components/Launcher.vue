<template>
  <div class="hello">
    <h1 class="m-4 p-4">{{ msg }}</h1>
    <h3 class="m-4 p-4">{{ devs }}</h3>  
    <div class="container m-4 p-4">    
    <a href="https://github.com/marcelobettini/tp_final" target="blank"><img class="github" title="GO TO REPO" src="../assets/part2/github.svg" alt="GitHub Logo" ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Launcher',
  props: {
    msg: String,
    devs: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.github {
  width: 50px;
}
.github:hover {
  width: 60px;
  background-color: rgb(240, 255, 24);  
  border-radius: 30px;
  }
</style>
