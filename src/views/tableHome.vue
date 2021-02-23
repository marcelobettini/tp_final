<template>
  <div>    
    <table-home-header />
    <table-home-banner />
    <table-home-footer />
  </div>
</template>

<script>
import tableHomeHeader from "../views/tableHomeHeader.vue";
import tableHomeBanner from "../views/tableHomeBanner.vue";
import tableHomeFooter from "../views/tableHomeFooter.vue";


export default {
  components: { tableHomeHeader, tableHomeBanner, tableHomeFooter },
};
</script>

<style scoped></style>git