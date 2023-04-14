import axios from "axios";
import { defineStore } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;

export default defineStore("adminOderStore", {
  state: () => ({
    orders: [],
    pages: {},
    isLoading: false,
    allOrders: [],
    totalPages: 0,
    pageArr: [],
    marRevenue: 0,
    aprRevenue: 0,
    revenue: [0, 0],
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
    getTotalPages() {
      this.isLoading = true;
      this.pageArr = [];
      axios
        .get(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.totalPages = res.data.pagination.total_pages;
          for (let i = 1; i <= 5; i++) {
            this.pageArr.push(i);
          }
          this.getAllOrder();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    getAllOrder() {
      this.allOrders = [];
      Promise.all(
        this.pageArr.map((item) => {
          return axios
            .get(
              `${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/orders/?page=${item}`
            )
            .then((res) => {
              res.data.orders.forEach((order) => {
                this.allOrders.push(order);
              });
            });
        })
      ).then(() => {
        this.renderRevenueChart();
        this.isLoading = false;
      });
    },
    renderRevenueChart() {
      this.marRevenue = 0;
      this.aprRevenue = 0;
      this.revenue = [0, 0];
      this.allOrders.forEach((i) => {
        if (i.create_at >= 1677600050 && i.create_at <= 1680278399) {
          this.marRevenue += i.user.cartTotal;
        } else if (i.create_at >= 1680278400 && i.create_at <= 1682870399) {
          this.aprRevenue += i.user.cartTotal;
        }
      });
      this.revenue.push(this.marRevenue, this.aprRevenue, 0, 0);
    },
  },
});
