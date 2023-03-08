<template>
  <AlertWindow></AlertWindow>

  <form>
    <div class="mb-3">
      <p>訂購資訊</p>
    </div>
    <div class="mb-3">
      <p>訂購大名：{{ user.name }}</p>
    </div>
    <div class="mb-3">
      <p>手機號碼：{{ user.tel }}</p>
    </div>
    <div class="mb-3">
      <p>電子信箱：{{ user.email }}</p>
    </div>
    <div class="mb-3">
      <p>付款方式：{{ user.pay }}</p>
    </div>
    <div class="mb-3" v-if="message">
      <p>備註留言：{{ message }}</p>
    </div>
    <ul class="d-flex justify-content-end">
      <li class="w-50">
        <button
          type="button"
          class="btn btn-primary text-dark w-100"
          @click="pay(orderId)"
        >
          確認付款
        </button>
      </li>
    </ul>
  </form>
</template>

<script>
import cartStore from "../../stores/cartStore";
import { mapState, mapActions } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["user", "message", "orderId"],
  computed: {
    ...mapState(cartStore, ["orderStatus"]),
  },
  methods: {
    ...mapActions(cartStore, ["changeStatus", "showAlert"]),
    pay(orderId) {
      this.$http
        .post(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/pay/${orderId}`)
        .then(() => {
          this.changeStatus("finish");
          this.$router.push("/cart/finish");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
};
</script>
