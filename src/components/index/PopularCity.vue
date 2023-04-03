<template>
  <section class="container pb-5 py-md-5">
    <h2 class="mb-3">熱門城市推薦</h2>
    <ul class="d-flex city-recommend">
      <li class="me-2">
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
            <ul
              class="d-none d-lg-flex content-tag text-shadow text-white fs-5"
            >
              <li class="me-1 p-1">時尚購物</li>
              <li class="me-1 p-1">質感飯店</li>
              <li class="p-1">文化藝術</li>
            </ul>
          </div>
        </RouterLink>
      </li>
      <li class="me-2">
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
            <ul
              class="d-none d-lg-flex content-tag text-shadow text-white fs-5"
            >
              <li class="me-1 p-1">暢遊跳島</li>
              <li class="me-1 p-1">大飽口福</li>
              <li class="p-1">花火節慶</li>
            </ul>
          </div>
        </RouterLink>
      </li>
      <li>
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
            <ul
              class="d-none d-lg-flex content-tag text-shadow text-white fs-5"
            >
              <li class="me-1 p-1">海龜之家</li>
              <li class="me-1 p-1">小島風情</li>
              <li class="p-1">浮潛度假</li>
            </ul>
          </div></RouterLink
        >
      </li>
    </ul>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>
