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
    // pages: {},
    // isLoading: false,
  }),
  actions: {
    getCartList() {
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
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    removeCartItem(id) {
      axios
        .delete(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart/${id}`)
        .then(() => {
          alert(`已刪除購物車品項`);
          this.getCartList();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    removeAllCart() {
      axios
        .delete(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          alert(`已清空購物車`);
          this.getCartList();
        })
        .catch((err) => {
          alert(err.data.message);
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
      if (date === null) {
        alert("請選擇日期");
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
          alert(res.data.message);
          this.getCartList();
          // this.productId = "";
          // this.$refs.productModal.hideModal();
          // this.clearLoadingStatus();
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
        alert("是否要刪除該品項");
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
      axios
        .put(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart/${id}`, { data })
        .then(() => {
          alert("已更新產品數量");
          this.getCartList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    updateItemDate(id, product_id, date) {
      const data = {
        product_id,
        qty: 0,
        date,
      };
      axios
        .put(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/cart/${id}`, { data })
        .then(() => {
          alert("已更新產品日期");
          this.getCartList();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    changeStatus(status){
      this.orderStatus = `${status}`
    }
  },
});
