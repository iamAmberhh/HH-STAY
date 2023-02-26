<template>
  <!-- 圖片輪播 -->
  <!-- <section class="container mt-max">
    <Swiper
      class="product-img"
      :loop="true"
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }"
    >
      <SwiperSlide v-for="img in product.imagesUrl" :key="img">
        <img :src="img" alt="img" class="rounded-3 object-fit-cover" />
      </SwiperSlide>
    </Swiper>
  </section> -->

  <!-- 產品訊息 -->
  <section class="container my-5 my-lg-max">
    <div class="row">
      <div class="col-lg-7 mb-5 mb-lg-0">
        <span class="bg-primary text-dark rounded-pill px-2 fs-6"
          ><font-awesome-icon icon="fa-solid fa-location-dot" class="me-1" />{{
            product.area
          }}</span
        >
        <h2 class="mt-2 mb-4">
          {{ product.title }}
        </h2>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link px-1 active"
              id="intro-tab"
              data-bs-toggle="tab"
              data-bs-target="#intro"
              type="button"
              role="tab"
              aria-controls="intro"
              aria-selected="true"
            >
              票券介紹
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link px-1"
              id="notice-tab"
              data-bs-toggle="tab"
              data-bs-target="#notice"
              type="button"
              role="tab"
              aria-controls="notice"
              aria-selected="false"
            >
              購買須知
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link px-1"
              id="refund-tab"
              data-bs-toggle="tab"
              data-bs-target="#refund"
              type="button"
              role="tab"
              aria-controls="refund"
              aria-selected="false"
            >
              退票政策
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link px-1"
              id="useTicket-tab"
              data-bs-toggle="tab"
              data-bs-target="#useTicket"
              type="button"
              role="tab"
              aria-controls="useTicket"
              aria-selected="false"
            >
              使用票券
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active mt-5"
            ref="intro"
            id="intro"
            role="tabpanel"
            aria-labelledby="intro-tab"
          >
            <p class="mb-3"><span v-html="description"></span></p>
            <br />
            <font-awesome-icon
              icon="fa-solid fa-flag"
              class="me-1 text-primary"
            />開放時間：<br />
            <div v-html="product.content" class="mt-1"></div>
          </div>
          <div
            class="tab-pane fade mt-5"
            ref="notice"
            id="notice"
            role="tabpanel"
            aria-labelledby="notice-tab"
          >
            <ul class="list-style-disc ps-3 mb-5">
              <li>
                購買後，HH STAY 會將票券QR code
                寄到您的電子信箱，請務必妥善留存。
              </li>
              <li>
                下訂時請以「票券使用日」為主，下訂後即無法變更，敬請留意。
              </li>
              <li>
                若需變更使用日期或場次，請於票券使用前7日，將整筆訂單取消後，重新下訂。
              </li>
              <li>
                下單後請自行留意使用時間，請按照預訂日期及當天開放時間內使用，逾期失效。
              </li>
              <li>
                請勿於任何非主辦單位正式授權售票之通路、網站購買票劵，以免自身權益受損，若透過上述管道購票發生無法入場或其他交易糾紛問題，主辦單位及相關售票平台概不負責。
              </li>
            </ul>
            <p class="mb-3">票券費用包含／不包含</p>
            <div class="d-flex">
              <ul class="me-5">
                <li v-for="include in product.includes" :key="include">
                  <font-awesome-icon
                    icon="fa-solid fa-check"
                    class="me-1 text-primary fs-5"
                  />{{ include }}
                </li>
              </ul>
              <ul>
                <li v-for="exclude in product.excludes" :key="exclude">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    class="me-1 text-secondary fs-5"
                  />{{ exclude }}
                </li>
              </ul>
            </div>
          </div>
          <div
            class="tab-pane fade mt-5"
            ref="refund"
            id="refund"
            role="tabpanel"
            aria-labelledby="refund-tab"
          >
            <ul class="list-style-disc ps-3 mb-5">
              <li>使用日期前30日，可全額退費</li>
              <li>使用日期前15日，可退還70%之票券費用</li>
              <li>使用日期前7日，可退還50%之票券費用</li>
              <li>使用日期前6日起，恕無法受理退費</li>
            </ul>
            <p>
              <i class="fas fa-flag me-1"></i
              >您可以透過訂單內的「客服信箱」進行退費申請
            </p>
          </div>
          <div
            class="tab-pane fade mt-5"
            ref="useTicket"
            id="useTicket"
            role="tabpanel"
            aria-labelledby="useTicket-tab"
          >
            <ul class="list-style-disc ps-3 mb-3">
              <li>使用地點：{{ product.address }}</li>
              <li>請務必於票券使用當日，出示QR code進行兌換，逾期失效</li>
            </ul>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9591.764147743163!2d120.69637101158548!3d22.044592295685387!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471b9c4a1c1e32f%3A0x3fc2d412a3a7a1c4!2z5ZyL56uL5rW35rSL55Sf54mp5Y2a54mp6aSo!5e0!3m2!1szh-TW!2stw!4v1672914605870!5m2!1szh-TW!2stw"
              width="100%"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-4 offset-lg-1 text-dark fs-5">
        <p class="card-text text-center mb-3 bg-light rounded-2">
          TWD<span class="fs-2 fw-blod m-1 text-black text-shadow">{{
            product.price
          }}</span
          >起
        </p>
        <form action="">
          <div class="mb-3">
            <label for="date" class="form-label">使用日期：</label>
            <flatPickr
              v-if="product.category !== '住宿'"
              class="border-primary form-control flatpickr flatpickr-input fs-5 text-center"
              placeholder="請選擇使用日期"
              id="date"
              v-model="date"
              :config="flatpickrConfig"
            ></flatPickr>
            <p v-else class="form-control fs-5 text-center">請自行電話預定</p>
          </div>
          <p class="mb-3">選擇人數：</p>
          <ul class="mb-5">
            <li class="mb-3 d-flex align-items-center">
              <label :for="product.ticketA" class="form-label w-100 mb-0 me-4"
                >{{ product.ticketA }}
                <span class="text-secondary"
                  >$ {{ product.ticketA_price }}/{{ product.unit }}</span
                >
              </label>
              <div class="d-flex justify-content-center">
                <button type="button" class="border-0 bg-white fs-6">
                  <font-awesome-icon
                    icon="fa-solid fa-minus"
                    class="border-primary border border-2 text-dark rounded-circle p-1"
                    @click="changeQty('ticketA', 'minus')"
                  />
                </button>
                <input
                  type="text"
                  name="adult-ticket"
                  id="adult-ticket"
                  class="form-control w-25 border-0 mx-1 p-0 fs-3 text-center"
                  v-model="ticketA_qty"
                />
                <button type="button" class="border-0 bg-white fs-6">
                  <font-awesome-icon
                    icon="fa-solid fa-plus"
                    class="border-primary border border-2 text-dark rounded-circle p-1"
                    @click="changeQty('ticketA', 'plus')"
                  />
                </button>
              </div>
            </li>
            <li v-if="product.ticketB" class="mb-3 d-flex align-items-center">
              <label :for="product.ticketB" class="form-label w-100 mb-0 me-4"
                >{{ product.ticketB }}
                <span class="text-secondary"
                  >$ {{ product.ticketB_price }}/{{ product.unit }}</span
                >
              </label>
              <div class="d-flex justify-content-center">
                <button type="button" class="border-0 bg-white fs-6">
                  <font-awesome-icon
                    icon="fa-solid fa-minus"
                    class="border-primary border border-2 text-dark rounded-circle p-1"
                    @click="changeQty('ticketB', 'minus')"
                  />
                </button>
                <input
                  type="text"
                  name="adult-ticket"
                  id="adult-ticket"
                  class="form-control w-25 border-0 mx-1 p-0 fs-3 text-center"
                  v-model="ticketB_qty"
                />
                <button type="button" class="border-0 bg-white fs-6">
                  <font-awesome-icon
                    icon="fa-solid fa-plus"
                    class="border-primary border border-2 text-dark rounded-circle p-1"
                    @click="changeQty('ticketB', 'plus')"
                  />
                </button>
              </div>
            </li>
          </ul>
          <div></div>
          <div class="text-center">
            <button
              type="button"
              @click="
                addToCart(
                  product.id,
                  ticketA_qty,
                  ticketB_qty,
                  date,
                  product.ticketA_price,
                  product.ticketB_price
                )
              "
              class="btn btn-primary text-dark w-75 fs-5"
            >
              加入購物車
            </button>
          </div>
        </form>
      </div>
    </div>

    <button
      type="button"
      class="w-100 d-lg-none btn btn-primary text-dark"
      data-bs-toggle="modal"
      data-bs-target="#purchaseModal"
    >
      立即選購
    </button>
  </section>
</template>

<script>
import Tab from "bootstrap/js/dist/tab";
import productStore from "../stores/productStore";
import cartStore from "../stores/cartStore";
import { mapState, mapActions } from "pinia";
import xss from "xss";
// import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  data() {
    return {
      description: "",
      date: null,
      daysOfWeek: [],
      flatpickrConfig: {
        wrap: true, // set wrap to true only when using 'input-group'
        altInput: true,
        altFormat: "Y-m-d",
        minDate: "today",
        maxDate: new Date().fp_incr(90),
        dateFormat: "Y-m-d",
      },
      ticketA_qty: 1,
      ticketB_qty: 0,
      cartItemTotal: 0,
    };
  },
  watch: {
    product() {
      if (this.product.category === "住宿") {
        this.date = "自行電話預定";
      }
      this.switchDescription(this.product.description);
      this.switchContent(this.product.content);
    },
    openDate() {
      this.daysOfWeek = this.openDate;
      this.flatpickrConfig.enable = this.enableFunction();
    },
  },
  computed: {
    ...mapState(productStore, ["product", "openDate"]),
  },
  methods: {
    ...mapActions(productStore, ["getProduct", "filterOpenDate"]),
    ...mapActions(cartStore, ["addToCart"]),
    changeQty(ticket, status) {
      if (ticket === "ticketA") {
        if (status === "plus") {
          if (this.ticketA_qty >= 10) {
            return;
          }
          this.ticketA_qty++;
        } else if (status === "minus") {
          if (this.ticketA_qty <= 0) {
            return;
          }
          this.ticketA_qty--;
        }
      } else if (ticket === "ticketB") {
        if (status === "plus") {
          if (this.ticketB_qty >= 10) {
            return;
          }
          this.ticketB_qty++;
        } else if (status === "minus") {
          if (this.ticketB_qty <= 0) {
            return;
          }
          this.ticketB_qty--;
        }
      }
    },
    countTotal() {
      if (Object.prototype.hasOwnProperty.call(this.product, "ticketB")) {
        this.cartItemTotal =
          this.product.ticketA_price * this.ticketA_qty +
          this.product.ticketB_price * this.ticketB_qty;
      } else {
        this.cartItemTotal = this.product.ticketA_price * this.ticketA_qty;
      }
    },
    enableFunction() {
      const pickDate = this.daysOfWeek;
      return [
        function (date) {
          return pickDate.includes(date.getDay());
        },
      ];
    },
    switchDescription(userInputHtml) {
      const safeHtml = xss(userInputHtml);
      this.description = safeHtml;
    },
    switchContent(userInputHtml) {
      const safeHtml = xss(userInputHtml);
      this.content = safeHtml;
    },
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
  mounted() {
    const id = this.$route.params.id;
    this.getProduct(id);
  },
};
</script>
