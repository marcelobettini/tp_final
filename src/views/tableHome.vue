<template>
  <div>
    <carrusel/>
    <table-home-header />
    <table-home-banner />
    <table-home-footer />
  </div>
</template>

<script>
import tableHomeHeader from "../views/tableHomeHeader.vue";
import tableHomeBanner from "../views/tableHomeBanner.vue";
import tableHomeFooter from "../views/tableHomeFooter.vue";
import carrusel from "../components/carrusel"

export default {
  components: { carrusel, tableHomeHeader, tableHomeBanner, tableHomeFooter },
};
</script>

<style scoped></style>git