<template>
  <div>
    <h3>vamos a la tabla filtrada {{ this.sms }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    sms: {
      type: String,
      required: true,
    },
  },
};
</script>
