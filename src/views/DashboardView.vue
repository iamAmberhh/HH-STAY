<template>
  <AdminDashboard />
  <main class="admin-main-block">
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from "vue-router";
import AdminDashboard from "@/components/AdminDashboard.vue";
export default {
  components: {
    RouterView,
    AdminDashboard,
  },
};
</script>
