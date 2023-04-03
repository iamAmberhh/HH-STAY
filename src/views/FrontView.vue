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

<style lang="scss">
.top {
  position: fixed;
  z-index: 50;
  right: 20px;
  bottom: 45px;
  cursor: pointer;
  &:hover {
    transform: rotate(5deg);
  }
}
.top-content {
  position: absolute;
  top: 15px;
  right: 21px;
  text-shadow: -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff,
    2px 2px 0 #fff;
}
</style>
