<template>
  <section class="container pb-5 py-md-5 position-relative">
    <h2 class="mb-3">最新優惠套票</h2>
    <ul
      class="d-none d-md-flex justify-content-between fs-2 text-dark sales-product-btn"
    >
      <li class="sales-product-btn-left">
        <font-awesome-icon
          icon="fa-solid fa-angles-left"
          class="rounded-circle bg-white p-2 border border-3 border-primary shadow"
        />
      </li>
      <li class="sales-product-btn-right">
        <font-awesome-icon
          icon="fa-solid fa-angles-right"
          class="rounded-circle bg-white p-2 border border-3 border-primary shadow"
        />
      </li>
    </ul>
    <div class="sales-product">
      <swiper
        :modules="modules"
        grabCursor
        :navigation="{
          nextEl: '.sales-product-btn-right',
          prevEl: '.sales-product-btn-left',
        }"
        class="top10-product"
        :loop="true"
        :slidesPerView="1"
        :spaceBetween="10"
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }"
      >
        <swiper-slide v-for="product in enableProducts" :key="product.id">
          <div class="card shadow-sm overflow-hidden">
            <div @click="routerPush(product.id)">
              <div class="position-relative">
                <div class="product-item-hover overflow-hidden">
                  <img
                    :src="product.imageUrl"
                    alt="product"
                    class="card-img-top object-fit-cover card-img-height"
                  />
                </div>
                <span
                  class="location-tag bg-primary text-dark rounded-pill px-2 fs-7"
                >
                  <font-awesome-icon
                    icon="fa-solid fa-location-dot"
                    class="me-1"
                  />
                  {{ product.area }}</span
                >
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold ellipsis2">
                  {{ product.title }}
                </h5>
                <p class="card-text fs-7 text-end text-secondary">
                  TWD<span class="fs-5 fw-bold ms-1 text-black">{{
                    product.price
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
import productStore from "../../stores/productStore";
import { mapState, mapActions } from "pinia";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  data() {
    return {
      modules: [Navigation, Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    ...mapState(productStore, ["enableProducts"]),
  },
  methods: {
    ...mapActions(productStore, ["getEnableProduct"]),
    routerPush(id) {
      this.$router.push(`/product/${id}`);
    },
  },
};
</script>

<style></style>
