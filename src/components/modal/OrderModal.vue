<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header bg-secondary">
        <h5 class="modal-title text-white" id="exampleModalLabel">訂單詳情</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-6">
            <div class="row g-3">
              <div class="col-12">
                <label for="order_id" class="form-label">訂單編號</label>
                <p class="form-control">{{ selectOrder.id }}</p>
              </div>

              <div class="col-6">
                <label for="order_date" class="form-label">訂購日期</label>
                <p class="form-control">{{ create_at }}</p>
              </div>
              <div class="col-6">
                <label class="form-label">訂單總額</label>
                <p class="form-control">{{ user.cartTotal }}</p>
              </div>
              <div class="col-6">
                <label for="order_name" class="form-label">訂購大名</label>
                <p class="form-control">{{ user.name }}</p>
              </div>
              <div class="col-6">
                <label for="order_phone" class="form-label">聯絡電話</label>
                <p class="form-control">{{ user.tel }}</p>
              </div>
              <div class="col-12">
                <label for="order_email" class="form-label">電子信箱</label>
                <p class="form-control">{{ user.email }}</p>
              </div>
              <div class="col-12">
                <label class="form-label">顧客留言</label>
                <p class="form-control">
                  {{ selectOrder.message ? selectOrder.message : "沒有留言" }}
                </p>
              </div>
              <div class="col-6">
                <label for="order_pay" class="form-label">付款方式</label>
                <p class="form-control">{{ user.pay }}</p>
              </div>
              <div class="col-6">
                <label class="form-label">付款狀態</label>
                <p
                  class="form-control"
                  :class="{ 'text-danger': !selectOrder.is_paid }"
                >
                  {{ selectOrder.is_paid ? "已付款" : "未付款" }}
                </p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <p class="form-label">購買明細</p>
            <ul>
              <li
                class="card mb-3"
                v-for="item in selectOrder.products"
                :key="item.id"
              >
                <div class="row g-0">
                  <div
                    class="col-2 d-flex align-items-center justify-content-center border-end border-1 border-primary"
                  >
                    <span>1</span>
                  </div>
                  <div class="col-10">
                    <div class="card-body">
                      <h5 class="card-title fw-bold ellipsis2">
                        {{ item.product.title }}
                      </h5>
                      <p class="mb-2">使用日期：{{ item.date }}</p>
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <ul class="text-muted">
                          <li>
                            {{ item.product.ticketA }} x {{ item.ticketA_qty }}
                          </li>
                          <li v-if="item.product.ticketB">
                            {{ item.product.ticketB }} x {{ item.ticketB_qty }}
                          </li>
                        </ul>
                        <p class="fs-7 text-secondary">
                          TWD<span class="fs-5 fw-bold ms-1 text-black">{{
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["selectOrder"],
  data() {
    return {
      user: {},
      create_at: "",
    };
  },
  watch: {
    selectOrder() {
      const obj = { ...this.selectOrder };
      this.user = obj.user;
      this.create_at = this.switchDate(this.selectOrder.create_at);
    },
  },
  methods: {
    switchDate(timestamp) {
      let date = new Date(timestamp * 1000);
      let formatted_date = date.toISOString().slice(0, 10);
      return formatted_date;
    },
  },
};
</script>
