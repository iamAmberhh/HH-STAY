import axios from "axios";
import { defineStore } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;

export default defineStore("cartStore", {
  state: () => ({
    carts: [],
    cartStatus: false,
    cartLength: null,
    cartTotal: null,
    cartItemTotal: null,
    orderStatus: "cartlist",
    userEmail: "",
    isLoading: false,
    alertShow: false,
    alert: {
      title: "",
      needCheck: null,
      status: "",
    },
  }),
  actions: {
    getCartList() {
      this.isLoading = true;
      axios
        .get(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
          this.cartLength = this.carts.carts.length;
          if (this.cartLength === 0) {
            this.cartStatus = false;
          } else {
            this.cartStatus = true;
          }
          this.countCartTotal();
          this.isLoading = false;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCartItem(id) {
      this.isLoading = true;
      axios
        .delete(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart/${id}`)
        .then(() => {
          this.alertShow = true;
          this.alert = {
            title: "已刪除購物車品項",
            needCheck: false,
            status: "success",
          };
          this.getCartList();
        })
        .catch(() => {
          this.alertShow = true;
          this.alert = {
            title: "API不存在，請確認",
            needCheck: true,
            status: "fail",
          };
        });
    },
    addToCart(
      product_id,
      ticketA_qty,
      ticketB_qty,
      date,
      ticketA_price = 0,
      ticketB_price = 0
    ) {
      this.isLoading = true;
      if (date === null) {
        this.alertShow = true;
        this.alert = {
          title: "請選擇日期",
          needCheck: true,
          status: "info",
        };
        return;
      }
      const data = {
        product_id,
        qty: 0,
        ticketA_qty,
        ticketB_qty,
        date,
        cartItemTotal:
          ticketA_qty * ticketA_price + ticketB_qty * ticketB_price,
      };

      axios
        .post(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.alertShow = true;
          this.alert = {
            title: res.data.message,
            needCheck: false,
            status: "success",
          };
          this.getCartList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    countCartTotal() {
      this.cartTotal = this.carts.carts.reduce((acc, i) => {
        return acc + i.cartItemTotal;
      }, 0);
    },
    updateItemQty(
      id,
      product_id,
      ticketA_qty = 0,
      ticketB_qty = 0,
      ticketA_price = 0,
      ticketB_price = 0
    ) {
      if (ticketA_qty <= 0 && ticketB_qty <= 0) {
        this.removeCartItem(id);
        return;
      }
      if (ticketA_qty <= -1) {
        return;
      }
      if (ticketB_qty <= -1) {
        return;
      }
      const data = {
        product_id,
        qty: 0,
        ticketA_qty,
        ticketB_qty,
        cartItemTotal:
          ticketA_qty * ticketA_price + ticketB_qty * ticketB_price,
      };
      this.isLoading = true;
      axios
        .put(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart/${id}`, { data })
        .then(() => {
          this.getCartList();
          this.alertShow = true;
          this.alert = {
            title: "已更新產品數量",
            needCheck: false,
            status: "success",
          };
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    changeStatus(status) {
      this.orderStatus = `${status}`;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    getUserEmail(email) {
      this.userEmail = email;
    },
    closeAlert() {
      this.alertShow = false;
    },
    showAlert(title, needCheck, status) {
      this.alertShow = true;
      this.alert.title = title;
      this.alert.needCheck = needCheck;
      this.alert.status = status;
    },
  },
});
