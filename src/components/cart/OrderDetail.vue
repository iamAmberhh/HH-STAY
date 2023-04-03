<template>
  <div class="col-lg-7">
    <p class="mb-2">購物明細</p>
    <ul>
      <li class="card mb-3" v-for="(item, index) in carts.carts" :key="item.id">
        <div class="row g-0">
          <div
            class="col-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"
          >
            <span>{{ index + 1 }}</span>
          </div>
          <div class="col-10">
            <div class="card-body">
              <h5 class="card-title fw-bold ellipsis2">
                {{ item.product.title }}
              </h5>
              <p class="mb-2">使用日期：{{ item.date }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <ul class="text-muted">
                  <li>{{ item.product.ticketA }} x {{ item.ticketA_qty }}</li>
                  <li v-if="item.product.ticketB">
                    {{ item.product.ticketB }} x {{ item.ticketB_qty }}
                  </li>
                </ul>
                <p class="fs-7 text-secondary">
                  TWD<span class="fs-5 fw-bold ms-1 text-black">{{
                    toThousand(item.cartItemTotal)
                  }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="row justify-content-end">
      <div class="col-lg-5 text-end">
        <div class="mb-3">
          <span>{{ cartLength }}件商品</span>
          <span>總共{{ toThousand(cartTotal) }}元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "@/stores/cartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["carts", "cartLength", "cartTotal"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCartList", "toThousand"]),
  },
};
</script>
