<template>
  <section class="container py-5 mt-max mb-5 text-dark">
    <div class="row justify-content-center">
      <div
        class="col-9 col-lg-9 timeline"
        :class="{
          'timeline-fillInfo': orderStatus === 'fillInfo',
          'timeline-pay': orderStatus === 'pay',
          'timeline-finish': orderStatus === 'finish',
        }"
      ></div>
    </div>
    <div class="row text-center">
      <div class="col-3">
        <div
          class="timeline-pointer timeline-pointer-first timeline-pointer-active"
        >
          <p>購物<br class="d-lg-none" />清單</p>
        </div>
      </div>
      <div class="col-3">
        <div
          class="timeline-pointer timeline-pointer-second"
          :class="{ 'timeline-pointer-active': orderStatus !== 'cartlist' }"
        >
          <p class="mb-0">訂購<br class="d-lg-none" />資訊</p>
        </div>
      </div>
      <div class="col-3">
        <div
          class="timeline-pointer timeline-pointer-third"
          :class="{
            'timeline-pointer-active':
              orderStatus === 'pay' || orderStatus === 'finish',
          }"
        >
          <p>確認<br class="d-lg-none" />付款</p>
        </div>
      </div>
      <div class="col-3">
        <div
          class="timeline-pointer timeline-pointer-fourth"
          :class="{ 'timeline-pointer-active': orderStatus === 'finish' }"
        >
          <p>訂單<br class="d-lg-none" />完成</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "pinia";
import cartStore from "../../stores/cartStore";
export default {
  computed: {
    ...mapState(cartStore, ["orderStatus"]),
  },
};
</script>
