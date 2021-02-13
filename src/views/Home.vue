<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-around align-items-center">
      <img alt="AMEMT logo" src="../assets/launcher/amemt.jpg" />    
      <img alt="CEPIT logo" src="../assets/launcher/cepit.png" />
      </div>    
    <Launcher
    class="mt-4 p-4"
      msg="Trabajo Final Front-End"
      devs="Micaela Perone - Marcelo Bettini"
    />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Launcher from "@/components/Launcher.vue";

export default {
  name: "Home",
  components: {
    Launcher,
  },
};
</script>
