<template>
  <ExploreComponent :explore="explore"></ExploreComponent>
</template>
<script>
import ExploreComponent from "@/components/ExploreComponent.vue";

export default {
  data() {
    return {
      explore: {
        title: "美食",
        engTitle: "food",
      },
    };
  },
  components: {
    ExploreComponent,
  },
};
</script>
