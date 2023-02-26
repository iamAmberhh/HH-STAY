<template>
  <IndexBanner></IndexBanner>
  <PopularProduct :renderProduct="popularProducts"></PopularProduct>
  <SwiperComponent
    :renderProduct="instagramProducts"
    :product="instagram"
  ></SwiperComponent>
  <SwiperComponent
    :renderProduct="newestProducts"
    :product="newest"
  ></SwiperComponent>
</template>

<script>
import IndexBanner from "../../components/index/IndexBanner.vue";
import PopularProduct from "../../components/index/PopularProduct.vue";
import SwiperComponent from "../../components/SwiperComponent.vue";

import productStore from "../../stores/productStore";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      // instagram: "打卡拍照必去",
      // newest: "最新優惠套票",
      instagram: {
        title: "打卡拍照必去",
        category: "instagram",
      },
      newest: {
        title: "最新優惠套票",
        category: "newest",
      },
    };
  },
  computed: {
    ...mapState(productStore, [
      "enableProducts",
      "popularProducts",
      "instagramProducts",
      "newestProducts",
    ]),
  },
  methods: {
    ...mapActions(productStore, [
      "getEnableProduct",
      "getPopularProduct",
      "getInstagramProduct",
      "getNewestProduct",
    ]),
    routerPush(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  components: {
    IndexBanner,
    PopularProduct,
    SwiperComponent,
  },
  watch: {
    enableProducts() {
      this.getPopularProduct();
      this.getInstagramProduct();
      this.getNewestProduct();
    },
  },
  mounted() {
    this.getEnableProduct();
  },
};
</script>
