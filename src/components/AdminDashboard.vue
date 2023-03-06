<template>
  <aside class="bg-light px-0 admin-aside-bar d-flex flex-column">
    <h1 class="h1-logo mx-auto my-2">
      <img
        src="/image/HHSTAY-logo.png"
        alt="logo"
        style="width: 200px; height: auto"
      />
    </h1>
    <ul class="nav">
      <li class="nav-item w-100">
        <RouterLink to="/" class="nav-link p-2 d-flex align-items-center"
          ><font-awesome-icon
            icon="fa-solid fa-house-chimney"
            class="mx-2"
          />返回前台</RouterLink
        >
      </li>
      <li class="nav-item w-100">
        <RouterLink
          to="/admin/products"
          class="nav-link p-2 d-flex align-items-center"
          ><font-awesome-icon
            icon="fa-solid fa-ticket"
            class="mx-2"
          />商品管理</RouterLink
        >
      </li>
      <li class="nav-item w-100">
        <RouterLink
          to="/admin/orders"
          class="nav-link p-2 d-flex align-items-center"
          ><font-awesome-icon
            icon="fa-solid fa-table-list"
            class="mx-2"
          />訂單管理</RouterLink
        >
      </li>
      <li class="nav-item w-100">
        <RouterLink
          to="/admin/chart"
          class="nav-link p-2 d-flex align-items-center"
          ><font-awesome-icon
            icon="fa-solid fa-chart-simple"
            class="mx-2"
          />圖表分析</RouterLink
        >
      </li>
    </ul>
    <div class="mt-auto">
      <div class="mb-1 d-flex justify-content-start align-items-center">
        <img
          src="/image/administrator.jpg"
          alt="img"
          class="rounded-circle ms-3 me-2 admin-img"
        />
        <div>
          <p>管理員：Amberhh</p>
          <p>編號：#2465</p>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary w-100 rounded-0 text-dark"
        @click.prevent="logout"
      >
        管理員登出
      </button>
    </div>
  </aside>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {
    RouterLink,
  },
  methods: {
    logout() {
      document.cookie = `hexschool=; expires=;`;
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.nav-item:hover {
  background: #ffdf65;
}
.nav-item > .router-link-exact-active {
  background: #ffdf65;
}
</style>
