<template>
  <ExploreComponent :explore="explore"></ExploreComponent>
</template>

<script>
import ExploreComponent from "../../components/ExploreComponent.vue";

export default {
  data() {
    return {
      explore: {
        title: "活動",
        engTitle: "event",
      },
    };
  },
  components: {
    ExploreComponent,
  },
 
};
</script>
