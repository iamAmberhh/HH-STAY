<template>
  <ExploreComponent :explore="explore"></ExploreComponent>
</template>
<script>
import ExploreComponent from "@/components/ExploreComponent.vue";

export default {
  data() {
    return {
      explore: {
        title: "住宿",
        engTitle: "hotel",
      },
    };
  },
  components: {
    ExploreComponent,
  },
};
</script>
