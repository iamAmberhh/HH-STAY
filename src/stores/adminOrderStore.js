import axios from "axios";
import { defineStore } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;

export default defineStore("adminOderStore", {
  state: () => ({
    orders: [],
    pages: {},
    isLoading: false,
  }),
  actions: {
    getOrder(pages = 1) {
      this.isLoading = true;
      axios
        .get(
          `${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/orders/?page=${pages}`
        )
        .then((res) => {
          this.orders = res.data.orders;
          this.pages = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
});
