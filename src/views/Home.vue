<template>
  <div class="container d-flex">
    <div>
      <img alt="AMEMT logo" src="../assets/launcher/amemt.jpg" />
    </div>
    <div>
      <img alt="CEPIT logo" src="../assets/launcher/cepit.png" />
    </div>
    <Launcher
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
