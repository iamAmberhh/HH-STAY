<template>
  <section class="container my-max">
    <div class="row justify-content-center">
      <div
        class="col-10 col-lg-6 border border-3 border-primary rounded-2 text-center fs-5 px-2 py-5 p-lg-5 position-relative shadow"
      >
        <img
          src="/image/icon-ticket.png"
          alt="icon"
          width="150"
          class="border border-3 border-primary bg-white rounded-circle p-2 icon-ticket shadow-sm"
        />
        <h2 class="mt-5 mb-3 title-bg">訂單完成</h2>
        <p class="lh-lg mb-3">
          HH STAY 已將您的票券QR code<br />寄送至 {{ userEmail
          }}<br />請查收確認<br />祝您旅途愉快 ^__^
        </p>
        <RouterLink to="/" class="btn btn-primary text-dark w-100 fs-5"
          >繼續購物</RouterLink
        >
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
import cartStore from "@/stores/cartStore";
import { mapState, mapActions } from "pinia";
export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapState(cartStore, ["userEmail"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartList"]),
  },
  mounted() {
    this.getCartList();
  },
};
</script>
