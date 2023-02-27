<template>
  <div class="col-lg-5">
    <VForm
      ref="form"
      v-slot="{ errors }"
      @submit="onSubmit"
      v-if="orderStatus === 'fillInfo'"
    >
      <div class="mb-3">
        <label for="orderName" class="form-label"
          >訂購大名<span class="ms-1 text-danger">*</span></label
        >
        <VField
          id="orderName"
          name="姓名"
          type="text"
          class="form-control shadow-sm"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入訂購者姓名"
          rules="required"
          v-model="user.name"
        ></VField>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="orderPhone" class="form-label"
          >手機號碼<span class="ms-1 text-danger">*</span></label
        >
        <VField
          id="orderPhone"
          name="手機號碼"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['手機號碼'] }"
          placeholder="請輸入手機號碼 ex: 0912345678"
          :rules="isPhone"
          v-model="user.tel"
        ></VField>
        <ErrorMessage name="手機號碼" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label"
          >電子信箱<span class="ms-1 text-danger">*</span></label
        >
        <VField
          id="email"
          name="電子信箱"
          type="email"
          class="form-control shadow-sm"
          :class="{ 'is-invalid': errors['電子信箱'] }"
          placeholder="請輸入電子信箱"
          rules="email|required"
          v-model="user.email"
        ></VField>
        <ErrorMessage name="電子信箱" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="orderPay" class="form-label"
          >付款方式<span class="ms-1 text-danger">*</span></label
        >
        <VField
          class="form-select shadow-sm"
          id="orderPay"
          v-model="user.pay"
          name="付款方式"
          :class="{ 'is-invalid': errors['付款方式'] }"
          rules="required"
          as="select"
        >
          <option value="" selected disabled class="text-muted">
            請選擇付款方式
          </option>
          <option value="信用卡">信用卡</option>
          <option value="超商代碼">超商代碼</option>
          <option value="行動支付">行動支付</option>
          <option value="銀行轉帳">銀行轉帳</option>
        </VField>
        <ErrorMessage name="付款方式" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb-3">
        <label for="orderMessage" class="form-label">備註留言</label>
        <textarea
          id="orderMessage"
          class="form-control shadow-sm"
          cols="30"
          rows="10"
          v-model="message"
          placeholder="有什麼想和我們說的嗎"
        ></textarea>
      </div>
      <ul class="d-flex justify-content-end">
        <li class="me-2 w-50">
          <RouterLink to="/cart" class="btn btn-outline-primary text-dark w-100"
            >修改訂單</RouterLink
          >
        </li>
        <li class="w-50">
          <button type="submit" class="btn btn-outline-primary text-dark w-100">
            送出訂單
          </button>
        </li>
      </ul>
    </VForm>
    <OrderEstablished
      v-if="orderStatus === 'pay'"
      :user="user"
      :message="message"
      :orderId="orderId"
    ></OrderEstablished>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore";
import { mapState, mapActions } from "pinia";
import { ErrorMessage } from "vee-validate";
import OrderEstablished from "./OrderEstablished.vue";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default {
  props: ["cartTotal"],
  data() {
    return {
      user: {
        cartTotal: null,
        email: "",
        name: "",
        tel: "",
        pay: "",
        address: "不需要地址",
      },
      message: "",
      orderId: null,
    };
  },
  computed: {
    ...mapState(cartStore, ["orderStatus"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartList","changeStatus"]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的手機號碼";
    },
    onSubmit() {
      const data = {
        user: this.user,
        message: this.message,
      };

      this.$http
        .post(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          this.orderId = res.data.orderId;
          alert(res.data.message);
          this.changeStatus("pay");

        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  components: {
    ErrorMessage,
    OrderEstablished,
  },
  mounted() {
    this.user.cartTotal = this.cartTotal;
  },
};
</script>
