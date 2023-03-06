<template>
  <section class="container pb-5 py-md-5">
    <div class="row">
      <div class="col-md-3 d-flex flex-column py-1 py-md-3">
        <h2 class="mb-md-3">
          熱門 <br class="d-none d-md-block d-lg-none" />TOP 10
        </h2>
        <p class="d-none d-md-block position-relative fs-5">
          <br />原來大家都喜歡這些！<br />跟著玩保證不踩雷
        </p>
        <ul class="d-flex justify-content-end mt-auto me-2 text-secondary fs-3">
          <li class="me-1 top10-product-btn-left">
            <font-awesome-icon icon="fa-solid fa-circle-left" />
          </li>
          <li class="top10-product-btn-right">
            <font-awesome-icon icon="fa-solid fa-circle-right" />
          </li>
        </ul>
      </div>
      <div class="col-md-9 px-2">
        <swiper
          :modules="modules"
          grabCursor
          :navigation="{
            nextEl: '.top10-product-btn-right',
            prevEl: '.top10-product-btn-left',
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
          <swiper-slide v-for="product in renderProduct" :key="product.id">
            <RouterLink :to="`/product/${product.id}`">
              <div class="card shadow-sm overflow-hidden">
                <div class="position-relative">
                  <div class="product-item-hover overflow-hidden">
                    <img
                      :src="product.imageUrl"
                      alt="product image"
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
                </div>
                <div class="card-footer text-end bg-white border-top-0">
                  <p class="card-text fs-7 text-end text-secondary">
                    TWD<span class="fs-5 fw-bold mx-1 text-black">{{
                      product.price
                    }}</span
                    >起
                  </p>
                </div>
              </div>
            </RouterLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default {
  props: ["renderProduct"],
  data() {
    return {
      modules: [Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    RouterLink,
  },
};
</script>

<style>
.swiper-slide {
  height: auto;
}
</style>
