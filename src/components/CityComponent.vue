<template>
  <VeeLoading
    v-model:active="isLoading"
    :color="color"
    :is-full-page="fullPage"
  />
  <header
    class="page-banner-section d-flex flex-column align-items-center mb-5 position-relative"
    :class="`page-banner-section-${city.engTitle}`"
  >
    <div class="row my-auto page-banner-title">
      <div class="col">
        <h2
          class="text-center mb-3 mb-md-4 text-white page-banner-text-shadow fs-1"
        >
          <span class="raleway me-2">Welcome To</span>
          {{ city.title }}
        </h2>
        <form>
          <div class="d-flex rounded-pill bg-white px-2 py-0 py-sm-1 shadow">
            <input
              class="form-control pe-5 border-0"
              type="text"
              :placeholder="`輸入景點名稱... `"
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
      <div class="col-md-3">
        <form
          action=""
          class="border border-primary border-1 p-3 rounded-1 sidebar-sticky"
        >
          <!-- 篩選分類 -->
          <p class="mb-1">篩選分類</p>
          <div class="form-check ps-0">
            <select
              class="form-select border-primary"
              @change="selectCategory"
              v-model="category"
            >
              <option selected disabled>請選擇類別</option>
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
        </form>
      </div>
      <div class="col-md-9">
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

export default {
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
      city: {
        title: "",
        engTitle: "",
      },
      renderProduct: [],
      keyword: "",
      categories: ["活動", "美食", "住宿", "交通", "景點"],
      category:""
    };
  },
  computed: {
    ...mapState(productStore, ["enableProducts", "cityProducts", "isLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getEnableProduct", "getCityProduct"]),
    selectCity(name) {
      if (name === "taipei") {
        this.city.title = "台北";
        this.city.engTitle = "taipei";
      } else if (name === "penghu") {
        this.city.title = "澎湖";
        this.city.engTitle = "penghu";
      } else if (name === "liuqiu") {
        this.city.title = "小琉球";
        this.city.engTitle = "liuqiu";
      }
    },
    searchKeyword() {
      this.renderProduct = this.cityProducts.filter((i) => {
        return i.title.match(this.keyword);
      });
      if (this.keyword === "") {
        this.renderProduct = this.cityProducts;
      }
    },
    selectCategory() {
      this.renderProduct = this.cityProducts.filter((i) => {
        return i.category.match(this.category);
      });
    },
  },
  watch: {
    enableProducts() {
      this.getCityProduct(this.city.title);
      this.renderProduct = this.cityProducts;
    },
  },
  mounted() {
    const name = this.$route.params.name;
    this.selectCity(name);
    this.getEnableProduct();
  },
};
</script>
