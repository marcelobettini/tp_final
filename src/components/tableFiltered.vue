<template>
  <div>
    <h3 v-for="item in arreglo" :key="item.id">{{ item }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    arreglo: {
      type: Array,
      required: true
    },
  },
};
</script>
