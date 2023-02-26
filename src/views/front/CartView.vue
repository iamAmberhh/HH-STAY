<template>
  <RouterView name="timeline"></RouterView>
  <RouterView name="info"></RouterView>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
};
</script>
