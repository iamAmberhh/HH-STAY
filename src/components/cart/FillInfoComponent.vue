<template>
  <section class="container mb-3 mb-lg-5">
    <div class="row justify-content-center g-5">
      <OrderDetail v-if="orderStatus !== 'finish'"></OrderDetail>
      <BuyerComponent :cartTotal="cartTotal"></BuyerComponent>
    </div>
  </section>
</template>

<script>
import OrderDetail from "./OrderDetail.vue";
import BuyerComponent from "./BuyerComponent.vue";
import cartStore from "@/stores/cartStore";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    OrderDetail,
    BuyerComponent,
  },
  computed: {
    ...mapState(cartStore, ["orderStatus", "cartTotal"]),
  },
  methods: {
    ...mapActions(cartStore, ["changeStatus"]),
  },
  mounted() {
    this.changeStatus("fillInfo");
  },
};
</script>
