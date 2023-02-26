<template>
  <NavbarComponent></NavbarComponent>
  <RouterView />
  <FooterComponent></FooterComponent>
</template>

<script>
import { RouterView } from "vue-router";
import NavbarComponent from "../components/NavbarComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  data() {
    return {};
  },
  components: {
    RouterView,
    NavbarComponent,
    FooterComponent,
  },
};
</script>
