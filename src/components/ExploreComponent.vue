<template>
  <VeeLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <header
    class="page-banner-section d-flex flex-column align-items-center mb-5 position-relative"
    :class="`page-banner-section-${explore.engTitle}`"
  >
    <div class="row my-auto page-banner-title">
      <div class="col">
        <h2
          class="text-center mb-3 mb-md-4 text-white page-banner-text-shadow fs-1"
        >
          {{ explore.title }}探索
        </h2>
        <form>
          <div class="d-flex rounded-pill bg-white px-2 py-0 py-sm-1 shadow">
            <input
              class="form-control pe-5 border-0"
              type="text"
              :placeholder="`輸入目的地、${explore.title}名稱... `"
              aria-label="Search"
              v-model="keyword"
              @keyup.enter="searchKeyword"
            />
            <button
              type="button"
              class="border-0 bg-white"
              @click="searchKeyword"
            >
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </header>

  <section class="container">
    <div class="row">
      <div class="d-none d-md-block col-md-3">
        <form
          action=""
          class="border border-primary border-1 p-3 rounded-1 sidebar-sticky"
        >
          <!-- 關鍵字搜尋 -->
          <div class="mb-3">
            <label for="keyWordSearch" class="form-label">關鍵字搜尋</label>
            <div
              class="d-flex rounded-pill border border-1 border-primary border-1"
            >
              <input
                id="keyWordSearch"
                class="form-control border-0 bg-transparent"
                type="text"
                placeholder="請輸入關鍵字"
                aria-label="Search"
                v-model="keyword"
                @keyup.enter="searchKeyword"
              />
              <button
                type="button"
                class="border-0 bg-transparent ms-auto me-1"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <!-- 篩選目的地 -->
          <p class="mb-1">篩選目的地</p>
          <div class="form-check ps-0">
            <select
              class="form-select border-primary"
              @change="selectArea"
              v-model="city"
            >
              <option selected disabled>請選擇類別</option>
              <option v-for="city in cities" :key="city" :value="city">
                {{ city }}
              </option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-9">
        <ul class="d-flex justify-content-end mb-3">
          <li>
            <a href="#" class="link-dark" @click.prevent="priceDecrease"
              >價格高到低↓</a
            ><span class="mx-1">|</span>
          </li>
          <li>
            <a href="#" class="link-dark" @click.prevent="priceIncrease"
              >價格低到高↑</a
            >
          </li>
        </ul>
        <div
          v-if="renderProduct.length === 0"
          style="height: 200px"
          class="d-flex flex-column justify-content-center align-items-center mb-5"
        >
          <p class="raleway display-1 fw-bold text-primary">Oh ...</p>
          <p v-if="keyword">
            目前沒有『<span class="text-danger fw-bold mx-1">{{ keyword }}</span
            >』的相關商品<br />請查詢其他關鍵字
          </p>
          <p v-if="city">
            目前沒有『<span class="text-danger fw-bold mx-1">{{ city }}</span
            >』的相關商品<br />請查詢其他城市
          </p>
        </div>
        <ul class="mb-5" v-else>
          <li
            class="card overflow-hidden mb-2"
            v-for="product in renderProduct"
            :key="product.id"
          >
            <RouterLink :to="`/product/${product.id}`">
              <div class="row g-0 align-items-center">
                <div class="col-4">
                  <img
                    :src="product.imageUrl"
                    class="img-fluid product-item-hover overflow-hidden object-fit-cover card-img-height"
                    alt="pic"
                  />
                </div>
                <div class="col-8">
                  <div class="card-body px-2 py-1 px-lg-3 py-lg-2">
                    <h5 class="card-title fw-blod ellipsis2 mb-2">
                      {{ product.title }}
                    </h5>
                    <p class="ellipsis2 mb-2" v-html="product.description"></p>
                    <p class="card-text fs-7 text-end text-secondary">
                      TWD<span class="fs-5 fw-blod mx-1 text-black">{{
                        product.price
                      }}</span
                      >起
                    </p>
                  </div>
                </div>
              </div>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import productStore from "../stores/productStore";
import { mapState, mapActions } from "pinia";
import { RouterLink } from "vue-router";
export default {
  props: ["explore"],
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
      cities: [
        "台北",
        "新北",
        "基隆",
        "桃園",
        "新竹",
        "苗栗",
        "台中",
        "南投",
        "彰化",
        "雲林",
        "嘉義",
        "台南",
        "高雄",
        "屏東",
        "宜蘭",
        "花蓮",
        "台東",
        "澎湖",
        "金門",
        "馬祖",
      ],
      keyword: "",
      city: "",
      renderProduct: [],
    };
  },
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(productStore, [
      "enableProducts",
      "filterProducts",
      "isLoading",
    ]),
  },
  methods: {
    ...mapActions(productStore, ["getEnableProduct", "filterProduct"]),
    priceDecrease() {
      this.renderProduct.sort((a, b) => {
        return b.price - a.price;
      });
    },
    priceIncrease() {
      this.renderProduct.sort((a, b) => {
        return a.price - b.price;
      });
    },
    searchKeyword() {
      this.city = "";
      this.renderProduct = this.filterProducts.filter((i) => {
        return i.title.match(this.keyword);
      });
      if (this.city === "" && this.keyword === "") {
        this.renderProduct = this.filterProducts;
      }
    },
    selectArea() {
      this.keyword = "";
      this.renderProduct = this.filterProducts.filter((i) => {
        return i.area.match(this.city);
      });
    },
  },
  watch: {
    enableProducts() {
      window.scrollTo(0, 0);
      this.filterProduct(this.explore.title);
      this.renderProduct = this.filterProducts;
    },
  },
  mounted() {
    this.getEnableProduct();
  },
};
</script>
