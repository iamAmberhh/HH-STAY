<template>
  <section class="container mb-max">
    <div class="text-center" v-if="!cartStatus">
      <p class="mb-3">購物車內還沒有商品，快去選購吧！</p>
      <RouterLink to="/" class="btn btn-primary text-dark w-50 fs-5"
        >開始購物</RouterLink
      >
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gx-lg-4">
      <div class="col" v-for="item in carts.carts" :key="item.id">
        <div class="card h-100 overflow-hidden position-relative">
          <div
            class="card-header bg-primary d-flex justify-content-between align-items-center"
          >
            <h5 class="card-title fw-blod ellipsis2 mb-0 me-2">
              {{ item.product.title }}
            </h5>
            <button
              type="button"
              @click="removeCartItem(item.id)"
              class="btn link-dark fs-5"
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
          </div>
          <div class="card-body">
            <flatPickr
              class="form-control flatpickr flatpickr-input fs-5 text-center mb-2"
              placeholder="請選擇使用日期"
              id="date"
              v-model="item.date"
              :config="flatpickrConfig"
              @change="updateItemDate(item.id, item.product_id, item.date)"
            ></flatPickr>
            <ul>
              <li class="mb-3 d-flex align-items-center">
                <label for="adult-ticket" class="form-label w-100 mb-0 me-4"
                  >{{ item.product.ticketA }}<br />
                  <span class="text-secondary"
                    >$ {{ item.product.ticketA_price }}/{{
                      item.product.unit
                    }}</span
                  >
                </label>
                <div class="d-flex justify-content-end">
                  <button type="button" class="border-0 bg-white fs-6">
                    <font-awesome-icon
                      icon="fa-solid fa-minus"
                      class="border-primary border border-2 text-dark rounded-circle p-1"
                      @click="
                        updateItemQty(
                          item.id,
                          item.product_id,
                          item.ticketA_qty - 1,
                          item.ticketB_qty,
                          item.product.ticketA_price,
                          item.product.ticketB_price
                        )
                      "
                    />
                  </button>
                  <input
                    readonly
                    type="text"
                    name="adult-ticket"
                    id="adult-ticket"
                    class="form-control w-25 border-0 mx-1 mb-1 p-0 fs-3 text-center"
                    :value="item.ticketA_qty"
                  />
                  <button type="button" class="border-0 bg-white fs-6">
                    <font-awesome-icon
                      icon="fa-solid fa-plus"
                      class="border-primary border border-2 text-dark rounded-circle p-1"
                      @click="
                        updateItemQty(
                          item.id,
                          item.product_id,
                          item.ticketA_qty + 1,
                          item.ticketB_qty,
                          item.product.ticketA_price,
                          item.product.ticketB_price
                        )
                      "
                    />
                  </button>
                </div>
              </li>
              <li v-if="item.product.ticketB" class="d-flex align-items-center">
                <label for="adult-ticket" class="form-label w-100 mb-0 me-4"
                  >{{ item.product.ticketB }}<br />
                  <span class="text-secondary"
                    >$ {{ item.product.ticketB_price }}/{{
                      item.product.unit
                    }}</span
                  >
                </label>
                <div class="d-flex justify-content-end">
                  <button type="button" class="border-0 bg-white fs-6">
                    <font-awesome-icon
                      icon="fa-solid fa-minus"
                      class="border-primary border border-2 text-dark rounded-circle p-1"
                      @click="
                        updateItemQty(
                          item.id,
                          item.product_id,
                          item.ticketA_qty,
                          item.ticketB_qty - 1,
                          item.product.ticketA_price,
                          item.product.ticketB_price
                        )
                      "
                    />
                  </button>
                  <input
                    readonly
                    type="text"
                    name="adult-ticket"
                    id="adult-ticket"
                    class="form-control w-25 border-0 mx-1 mb-1 p-0 fs-3 text-center"
                    :value="item.ticketB_qty"
                  />
                  <button type="button" class="border-0 bg-white fs-6">
                    <font-awesome-icon
                      icon="fa-solid fa-plus"
                      class="border-primary border border-2 text-dark rounded-circle p-1"
                      @click="
                        updateItemQty(
                          item.id,
                          item.product_id,
                          item.ticketA_qty,
                          item.ticketB_qty + 1,
                          item.product.ticketA_price,
                          item.product.ticketB_price
                        )
                      "
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div class="card-footer text-end bg-white border-top-0">
            <p class="fs-7 text-secondary">
              TWD<span class="fs-5 fw-blod ms-1 text-black">{{
                item.cartItemTotal
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container mb-3 mb-lg-5" v-if="cartStatus">
    <div class="row justify-content-center justify-content-lg-end">
      <div class="col-lg-5 text-center text-lg-end">
        <div class="mb-3">
          <span>{{ cartLength }}件商品</span>
          <span>總共{{ cartTotal }}元</span>
        </div>
        <ul class="d-flex">
          <li class="me-2 w-50">
            <RouterLink to="/" class="btn btn-outline-primary text-dark w-100"
              >繼續購物</RouterLink
            >
          </li>
          <li class="w-50">
            <RouterLink to="/cart/info" class="btn btn-primary text-dark w-100"
              >前往結帳</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "../../stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      flatpickrConfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altInput: true,
        minDate: "today",
        // defaultDate: "today",
        dateFormat: "Y-m-d",
        disable: [
          function (date) {
            return date.getDay() === 4;
          },
        ],
      },
    };
  },
  computed: {
    ...mapState(cartStore, [
      "carts",
      "cartLength",
      "cartStatus",
      "cartTotal",
      "orderStatus",
    ]),
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartList",
      "removeCartItem",
      "removeAllCart",
      "updateItemQty",
      "updateItemDate",
      "changeStatus",
    ]),
  },
  mounted() {
    this.getCartList();
    this.changeStatus("cartlist");
  },
};
</script>
