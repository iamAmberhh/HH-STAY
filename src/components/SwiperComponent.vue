<template>
  <section class="container pb-5 py-md-5 position-relative">
    <h2 class="mb-3">{{ product.title }}</h2>
    <ul class="d-none d-md-flex justify-content-between fs-2 text-dark">
      <li
        style="cursor: pointer"
        class="swiper-product-btn-prev"
        :class="{
          instagramPrevBtn: product.category === 'instagram',
          newestPrevBtn: product.category === 'newest',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-angles-left"
          class="rounded-circle bg-white p-2 border border-3 border-primary shadow"
        />
      </li>
      <li
        style="cursor: pointer"
        class="swiper-product-btn-next"
        :class="{
          instagramNextBtn: product.category === 'instagram',
          newestNextBtn: product.category === 'newest',
        }"
      >
        <font-awesome-icon
          icon="fa-solid fa-angles-right"
          class="rounded-circle bg-white p-2 border border-3 border-primary shadow"
        />
      </li>
    </ul>
    <div>
      <swiper
        :modules="modules"
        grabCursor
        :navigation="navigation"
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
        <swiper-slide v-for="product in renderProduct" :key="product.id">
          <RouterLink :to="`/product/${product.id}`">
            <div class="card shadow-sm overflow-hidden">
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
                <h5 class="card-title fw-bold ellipsis2" style="height: 50px">
                  {{ product.title }}
                </h5>
                <p class="card-text fs-7 text-end text-secondary">
                  TWD<span class="fs-5 fw-bold mx-1 text-black">{{
                    toThousand(product.price)
                  }}</span
                  >起
                </p>
              </div>
            </div>
          </RouterLink>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  props: ["renderProduct", "product", "toThousand"],
  data() {
    return {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: "",
        prevEl: "",
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
  methods: {
    routerPush(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  mounted() {
    this.navigation.nextEl = `.${this.product.category}NextBtn`;
    this.navigation.prevEl = `.${this.product.category}PrevBtn`;
  },
};
</script>

<style></style>
