<template>
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";

export default {
  data() {
    return {};
  },
  components: {
    RouterView,
  },
};
</script>
<style lang="scss">
@import "flatpickr/dist/flatpickr.css";
@import "./assets/all.scss";
</style>
