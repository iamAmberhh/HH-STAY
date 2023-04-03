<template>
  <ExploreComponent :explore="explore"></ExploreComponent>
</template>

<script>
import ExploreComponent from "@/components/ExploreComponent.vue";

export default {
  data() {
    return {
      explore: {
        title: "景點",
        engTitle: "spot",
      },
    };
  },
  components: {
    ExploreComponent,
  },
};
</script>
