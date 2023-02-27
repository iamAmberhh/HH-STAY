<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center mt-max mb-5"
    style="height: calc(90vh - 320px)"
  >
    <h2 class="raleway display-1 fw-bold text-primary mb-2">404</h2>
    <p class="mb-2">您查看的頁面不存在<br />請回到首頁進行購物^^</p>
    <RouterLink to="/" class="btn btn-primary w-50 text-dark">
      繼續購物
    </RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
