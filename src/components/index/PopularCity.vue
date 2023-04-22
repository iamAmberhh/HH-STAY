<template>
  <section class="container pb-5 py-md-5">
    <h2 class="mb-3">熱門城市推薦</h2>
    <ul class="d-lg-flex city-recommend">
      <li class="me-0 mb-3 mb-lg-0 me-lg-2">
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
            <ul class="d-flex content-tag text-shadow text-white fs-5">
              <li class="me-1 p-1">時尚<br class="d-sm-none" />購物</li>
              <li class="me-1 p-1">質感<br class="d-sm-none" />飯店</li>
              <li class="p-1">文化<br class="d-sm-none" />藝術</li>
            </ul>
          </div>
        </RouterLink>
      </li>
      <li class="me-0 mb-3 mb-lg-0 me-lg-2">
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
            <ul class="d-flex content-tag text-shadow text-white fs-5">
              <li class="me-1 p-1">暢遊<br class="d-sm-none" />跳島</li>
              <li class="me-1 p-1">大飽<br class="d-sm-none" />口福</li>
              <li class="p-1">花火<br class="d-sm-none" />節慶</li>
            </ul>
          </div>
        </RouterLink>
      </li>
      <li class="mb-3 mb-lg-0">
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
            <ul class="d-flex content-tag text-shadow text-white fs-5">
              <li class="me-1 p-1">海龜<br class="d-sm-none" />之家</li>
              <li class="me-1 p-1">小島<br class="d-sm-none" />風情</li>
              <li class="p-1">浮潛<br class="d-sm-none" />度假</li>
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
