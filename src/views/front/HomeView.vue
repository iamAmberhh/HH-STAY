<template>
  <VeeLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <IndexBanner />
  <PopularProduct
    :renderProduct="popularProducts"
    :toThousand="toThousand"
  ></PopularProduct>
  <SwiperComponent
    :renderProduct="instagramProducts"
    :product="instagram"
    :toThousand="toThousand"
  ></SwiperComponent>
  <SwiperComponent
    :renderProduct="newestProducts"
    :product="newest"
    :toThousand="toThousand"
  ></SwiperComponent>
  <PopularCity />
</template>

<script>
import IndexBanner from "@/components/index/IndexBanner.vue";
import PopularProduct from "@/components/index/PopularProduct.vue";
import SwiperComponent from "@/components/SwiperComponent.vue";
import PopularCity from "@/components/index/PopularCity.vue";
import productStore from "@/stores/productStore";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
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
      "isLoading",
    ]),
  },
  methods: {
    ...mapActions(productStore, [
      "getEnableProduct",
      "getPopularProduct",
      "getInstagramProduct",
      "getNewestProduct",
      "toThousand",
    ]),
  },
  components: {
    IndexBanner,
    PopularProduct,
    SwiperComponent,
    PopularCity,
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
