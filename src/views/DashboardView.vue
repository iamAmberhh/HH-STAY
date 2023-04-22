<template>
  <AdminDashboard />
  <main class="admin-main-block">
    <RouterView />
  </main>
</template>

<script>
import AdminDashboard from "@/components/AdminDashboard.vue";
export default {
  components: {
    AdminDashboard,
  },
};
</script>
