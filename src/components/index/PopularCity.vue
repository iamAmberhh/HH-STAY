<template>
  <section class="container pb-5 py-md-5">
    <h2 class="mb-3">熱門城市推薦</h2>
    <ul class="d-flex city-recommend" @mouseover.prevent="switchBlock">
      <li class="me-2 w-50">
        <RouterLink to="/city/taipei">
          <div class="position-relative">
            <div>
              <img
                src="/image/popular_city_taipei.jpg"
                alt="product"
                class="card-img-top object-fit-cover rounded-2"
                height="300"
              />
            </div>
            <span class="city-tag text-shadow text-white fs-3 text-vertical"
              >台北</span
            >
          </div>
        </RouterLink>
      </li>
      <li class="me-2 w-25">
        <RouterLink to="/city/penghu">
          <div class="position-relative">
            <div>
              <img
                src="/image/popular_city_penghu.jpg"
                alt="product"
                class="card-img-top object-fit-cover rounded-2"
                height="300"
              />
            </div>
            <span class="city-tag text-shadow text-white fs-3 text-vertical"
              >澎湖</span
            >
          </div>
        </RouterLink>
      </li>
      <li class="me-2 w-25">
        <RouterLink to="/city/liuqiu">
          <div class="position-relative">
            <div>
              <img
                src="/image/popular_city_liuqiu.jfif"
                alt="product"
                class="card-img-top object-fit-cover rounded-2"
                height="300"
              />
            </div>
            <span class="city-tag text-shadow text-white fs-3 text-vertical"
              >小琉球</span
            >
          </div></RouterLink
        >
      </li>
    </ul>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  methods: {
    switchBlock(e) {
      const cityRecommendItem = document.querySelectorAll(".city-recommend li");
      if (e.target.nodeName !== "IMG") {
        return;
      }
      cityRecommendItem.forEach((i) => {
        i.closest("li").classList.remove("w-50");
      });
      e.target.closest("li").classList.add("w-50");
    },
  },
  components: {
    RouterLink,
  },
};
</script>
