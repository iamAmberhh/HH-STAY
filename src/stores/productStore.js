import axios from "axios";
import { defineStore } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;

export default defineStore("productStore", {
  state: () => ({
    filterProducts: [],
    enableProducts: [],
    popularProducts: [],
    instagramProducts: [],
    newestProducts: [],
    cityProducts: [],
    allProduct: [],
    pages: {},
    isLoading: false,
    product: [],
    openDate: [],
  }),
  actions: {
    getEnableProduct() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.isLoading = true;
      axios
        .get(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.enableProducts = res.data.products;
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getAllProduct(pages = 1) {
      this.isLoading = true;
      axios
        .get(
          `${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/products/?page=${pages}`
        )
        .then((res) => {
          this.allProduct = res.data.products;
          this.pages = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getProduct(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.isLoading = true;
      axios
        .get(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.filterOpenDate();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    filterOpenDate() {
      this.openDate = this.product.openDate.map((i) => {
        if (i === "星期日") {
          return 0;
        } else if (i === "星期一") {
          return 1;
        } else if (i === "星期二") {
          return 2;
        } else if (i === "星期三") {
          return 3;
        } else if (i === "星期四") {
          return 4;
        } else if (i === "星期五") {
          return 5;
        } else if (i === "星期六") {
          return 6;
        }
      });
    },
    getPopularProduct() {
      this.popularProducts = this.enableProducts.filter((product) => {
        return product.itemFilter === "熱門";
      });
    },
    getInstagramProduct() {
      this.instagramProducts = this.enableProducts.filter((product) => {
        return product.itemFilter === "打卡";
      });
    },
    getNewestProduct() {
      this.newestProducts = this.enableProducts.filter((product) => {
        return product.itemFilter === "最新";
      });
    },
    getCityProduct(city) {
      this.cityProducts = this.enableProducts.filter((product) => {
        return product.area === city;
      });
    },
    filterProduct(category) {
      this.filterProducts = this.enableProducts.filter((product) => {
        return product.category === category;
      });
    },
    toThousand(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
});
