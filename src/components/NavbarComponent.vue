<template>
  <nav
    class="navbar navbar-expand-lg navbar-light border-bottom border-2 border-primary fixed-top bg-light py-0"
  >
    <div class="container-fluid">
      <h1>
        <RouterLink to="/">
          <img
            src="/image/HHSTAY-logo.png"
            alt="logo"
            style="height: 50px; width: 200px"
          />
        </RouterLink>
      </h1>

      <div
        class="position-relative"
        v-if="
          this.$route.path !== '/cart' &&
          this.$route.path !== '/cart/info' &&
          this.$route.path !== '/cart/finish'
        "
      >
        <RouterLink to="/cart" v-if="mobileScreen">
          <img
            src="/image/cart.png"
            alt="cart"
            width="32"
            class="me-2 me-md-5"
          />
        </RouterLink>
        <img
          v-else
          src="/image/cart.png"
          alt="cart"
          width="32"
          class="me-2 me-md-5"
          @mouseenter="showCartBlock()"
        />
        <div v-if="cartLength" class="cart-dot text-white fs-sm px-1">
          {{ cartLength }}
        </div>
      </div>
    </div>
  </nav>
  <!-- 購物車清單 -->
  <div
    @mouseleave="closeCartBlock()"
    ref="cartHover"
    class="d-none cart-hover-block bg-light shadow-lg rounded-2"
  >
    <p class="text-center bg-primary text-dark p-2 fs-5 rounded-top">
      購物車清單
    </p>
    <div
      v-if="!cartStatus"
      class="d-flex flex-column justify-content-center align-items-center p-5"
    >
      <p class="mb-3">購物車內沒有商品<br />馬上開始選購吧～</p>
      <img src="/image/cart.png" alt="cart" class="img-fluid" width="100" />
    </div>
    <div v-else class="p-3" style="height: 350px; overflow-y: scroll">
      <ul>
        <li
          class="card mb-3"
          v-for="(item, index) in carts.carts"
          :key="item.id"
        >
          <div class="row g-0">
            <div
              class="d-none d-md-flex col-md-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"
            >
              <span>{{ index + 1 }}</span>
            </div>
            <div class="col-12 col-md-10">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="card-title fw-blod ellipsis2 me-2">
                    {{ item.product.title }}
                  </h5>
                  <button
                    @click="removeCartItem(item.id)"
                    class="d-none d-md-block btn ms-3 link-secondary"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash-can" />
                  </button>
                </div>

                <p class="mb-2">使用日期：{{ item.date }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <ul class="text-muted">
                    <li>{{ item.product.ticketA }} x {{ item.ticketA_qty }}</li>
                    <li v-if="item.ticketB_qty">
                      {{ item.product.ticketB }} x {{ item.ticketB_qty }}
                    </li>
                  </ul>
                  <p class="fs-7 text-secondary">
                    TWD<span class="fs-5 fw-blod ms-1 text-black">{{
                      item.cartItemTotal
                    }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div
      v-if="cartStatus"
      class="px-3 pb-3 d-flex justify-content-between align-items-center"
    >
      <div>
        <span>{{ cartLength }}件商品</span>
        <span>總共{{ cartTotal }}元</span>
      </div>
      <RouterLink to="/cart" class="btn btn-primary text-dark">
        查看購物車
      </RouterLink>
    </div>
  </div>
</template>

<script>
import cartStore from "@/stores/cartStore";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      mobileScreen: window.innerWidth <= 600,
    };
  },
  computed: {
    ...mapState(cartStore, [
      "carts",
      "cartStatus",
      "cartLength",
      "cartTotal",
      "orderStatus",
    ]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartList", "removeCartItem"]),
    showCartBlock() {
      this.$refs.cartHover.classList.remove("d-none");
    },
    closeCartBlock() {
      this.$refs.cartHover.classList.add("d-none");
    },
  },
  mounted() {
    this.getCartList();
  },
};
</script>
