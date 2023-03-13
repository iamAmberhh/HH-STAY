<template>
  <ExploreComponent :explore="explore"></ExploreComponent>
</template>

<script>
import ExploreComponent from "../../components/ExploreComponent.vue";

export default {
  data() {
    return {
      explore: {
        title: "交通",
        engTitle: "traffic",
      },
    };
  },
  components: {
    ExploreComponent,
  },
};
</script>
