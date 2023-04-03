<template>
  <div class="container p-3 position-relative">
    <VeeLoading
      v-model:active="isLoading"
      :color="color"
      :is-full-page="fullPage"
    />
    <div class="modal fade" tabindex="-1" aria-hidden="true" ref="orderModal">
      <OrderModal :selectOrder="selectOrder"></OrderModal>
    </div>
    <div
      class="modal fade"
      tabindex="-1"
      aria-hidden="true"
      ref="deleteOrderModal"
    >
      <DeleteOrderModal
        :selectOrder="selectOrder"
        :deleteOrder="deleteOrder"
      ></DeleteOrderModal>
    </div>

    <h2 class="fs-3 mb-2">訂單列表</h2>
    <table class="table table-hover mb-3">
      <thead class="bg-primary text-dark">
        <tr>
          <th width="120">訂單日期</th>
          <th width="120">訂單編號</th>
          <th width="100">訂購大名</th>
          <th width="100" class="text-center">訂單金額</th>
          <th width="80" class="text-center">付款狀態</th>
          <th width="80" class="text-center">訂單詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="order in orders"
          :key="order.id"
          :class="{ 'table-primary': order.is_paid }"
        >
          <td>{{ switchDate(order.create_at) }}</td>
          <td>{{ order.id }}</td>
          <td>{{ order.user.name }}</td>
          <td class="text-end pe-5">{{ order.user.cartTotal }}</td>
          <td class="text-center">{{ order.is_paid ? "已付款" : "未付款" }}</td>
          <td class="text-center">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-outline-secondary border-left-0"
                @click="openModal('check', order)"
              >
                查看
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openModal('delete', order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PagePagination :pages="pages" :renderData="getOrder"></PagePagination>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
import OrderModal from "@/components/modal/OrderModal.vue";
import adminOrderStore from "@/stores/adminOrderStore";
import DeleteOrderModal from "@/components/modal/DeleteOrderModal.vue";
import PagePagination from "@/components/PagePagination.vue";
import { mapState, mapActions } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
      selectOrder: "",
      orderModal: "",
      deleteOrderModal: "",
    };
  },
  computed: {
    ...mapState(adminOrderStore, ["orders", "pages", "isLoading"]),
  },
  methods: {
    ...mapActions(adminOrderStore, ["getOrder"]),
    openModal(status, order) {
      if (status === "check") {
        this.orderModal.show();
        this.selectOrder = { ...order };
      } else if (status === "delete") {
        this.selectOrder = { ...order };
        this.deleteOrderModal.show();
      }
    },
    deleteOrder() {
      const id = this.selectOrder.id;
      this.$http
        .delete(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/order/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getOrder();
          this.deleteOrderModal.hide();
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.deleteOrderModal.hide();
        });
    },
    switchDate(timestamp) {
      let date = new Date(timestamp * 1000); 
      let formatted_date = date.toISOString().slice(0, 10);
      return formatted_date;
    },
  },
  components: {
    OrderModal: OrderModal,
    DeleteOrderModal,
    PagePagination,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    this.getOrder();
    this.orderModal = new Modal(this.$refs.orderModal, {
      keyboard: false,
    });
    this.deleteOrderModal = new Modal(this.$refs.deleteOrderModal, {
      keyboard: false,
    });
  },
};
</script>
