<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
  <div
    class="top flex-column"
    :class="{ 'd-flex': showTopBtn, 'd-none': !showTopBtn }"
    @click="scrollTop"
  >
    <span class="raleway top-content fw-bold fs-4 text-dark">TOP</span>
    <img src="/image/top.png" alt="top-icon" />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  data() {
    return {
      showTopBtn: "",
    };
  },
  components: {
    RouterView,
    NavbarComponent,
    FooterComponent,
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showTopBtn = document.documentElement.scrollTop > 800;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

