<template>
  <div class="container p-3 position-relative">
    <VeeLoading
      v-model:active="isLoading"
      :color="color"
      :is-full-page="fullPage"
    />
    <h2 class="fs-3">商品列表</h2>
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
      ref="productModal"
    >
      <productModal
        :productId="productId"
        :selectProduct="selectProduct"
        :isNew="isNew"
        :fees="fees"
        :days="days"
        :clearProduct="clearProduct"
        :updateProduct="updateProduct"
        :deleteImg="deleteImg"
        :clearImg="clearImg"
        @addImg="addImgBtn"
        :addImg="addImg"
        @addNewImg="addNewImg"
        @inputImg="inputImgUrl"
        :newImg="newImg"
      ></productModal>
    </div>
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModalLabel"
      aria-hidden="true"
      ref="deleteModal"
    >
      <deleteModal
        :clearProduct="clearProduct"
        :selectProduct="selectProduct"
        :deleteProduct="deleteProduct"
      ></deleteModal>
    </div>
    <div class="text-end mb-2">
      <button
        type="button"
        class="btn btn-primary text-dark w-25"
        @click="openModal('new')"
      >
        新增商品
      </button>
    </div>
    <table class="table table-hover mb-3">
      <thead class="bg-primary text-dark">
        <tr>
          <th width="180">商品名稱</th>
          <th width="60">類別</th>
          <th width="60">地區</th>
          <th width="60" class="text-center">原價</th>
          <th width="60" class="text-center">售價</th>
          <th width="80" class="text-center">銷售狀態</th>
          <th width="80" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :class="{ 'table-primary': product.is_enabled }"
          v-for="product in allProduct"
          :key="product.id"
        >
          <td>{{ product.title }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.area }}</td>
          <td class="text-end pe-5">{{ product.origin_price }}</td>
          <td class="text-end pe-5">{{ product.price }}</td>
          <td class="text-center">
            <label for="status">{{
              product.is_enabled ? "銷售中" : "未開放"
            }}</label>
          </td>
          <td class="text-center">
            <div
              class="btn-group"
              role="group"
              aria-label="Basic mixed styles example"
            >
              <button
                type="button"
                class="btn btn-outline-secondary border-left-0"
                @click="openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="openModal('delete', product)"
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PagePagination :pages="pages" :renderData="getAllProduct"></PagePagination>
  </div>
</template>
<script>
import Modal from "bootstrap/js/dist/modal";
import productModal from "../../components/modal/productModal.vue";
import deleteModal from "../../components/modal/deleteModal.vue";
import PagePagination from "../../components/PagePagination.vue";

import productStore from "@/stores/productStore";
import { mapState, mapActions } from "pinia";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
      isNew: "",
      productModal: "",
      deleteModal: "",
      productId: "",
      addImg: false,
      newImg: "",
      fees: [
        "餐飲折抵",
        "入園門票",
        "服務費",
        "房費",
        "船票",
        "車票",
        "體驗費用",
        "教學費用",
        "司機導覽",
        "其他消費",
      ],
      days: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      selectProduct: {
        data: {
          title: " ",
          category: "",
          origin_price: null,
          price: null,
          unit: "",
          description: "",
          content: "",
          is_enabled: 0,
          imageUrl: "",
          imagesUrl: [],
          area: "",
          address: "",
          itemFilter: "",
          ticketA: "",
          ticketA_price: null,
          ticketB: "",
          ticketB_price: null,
          includes: [],
          excludes: [],
          openDate: [],
        },
      },
    };
  },
  computed: {
    ...mapState(productStore, ["allProduct", "pages", "isLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getAllProduct"]),
    checkAdmin() {
      this.$http
        .post(`${VITE_APP_API}v2/api/user/check`)
        .then(() => {})
        .catch((err) => {
          this.$router.push("/login");
          alert(err.response.data.message);
        });
    },
    openModal(status, product) {
      if (status === "new") {
        this.isNew = true;
        this.selectProduct.data = {
          title: " ",
          unit: "",
          area: "",
          address: "",
          imagesUrl: [],
          includes: [],
          excludes: [],
          openDate: [],
        };
        this.productModal.show();
      } else if (status === "edit") {
        this.isNew = false;
        this.selectProduct.data = { ...product };
        this.productId = this.selectProduct.data.id;
        this.productModal.show();
      } else if (status === "delete") {
        this.selectProduct.data = { ...product };
        this.deleteModal.show();
      }
    },
    updateProduct() {
      let url = `${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/product`;
      let method = "post";
      const id = this.selectProduct.data.id;
      const product = this.selectProduct.data;
      if (product.includes.length === 0 || product.excludes.length === 0) {
        alert("費用項目尚未完成，請再次確認");
        return;
      }
      if (product.openDate.length === 0) {
        alert("開放日尚未完成，請再次確認");
        return;
      }
      // 選擇編輯按鈕，api會用put
      if (!this.isNew) {
        url = `${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/product/${id}`;
        method = "put";
      }
      this.$http[method](url, this.selectProduct)
        .then((res) => {
          alert(res.data.message);
          this.productModal.hide();
          this.getAllProduct();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    deleteProduct() {
      const id = this.selectProduct.data.id;
      this.$http
        .delete(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/product/${id}`)
        .then((res) => {
          alert(res.data.message);
          this.getAllProduct();
          this.deleteModal.hide();
        })
        .catch((err) => {
          alert(err.data.message);
          this.deleteModal.hide();
        });
    },
    clearProduct() {
      this.isNew = false;
      this.selectProduct.data = {};
      this.clearImg();
    },
    addImgBtn() {
      this.addImg = true;
    },
    inputImgUrl(img) {
      this.newImg = img;
    },
    addNewImg() {
      if (
        !Object.prototype.hasOwnProperty.call(
          this.selectProduct.data,
          "imagesUrl"
        )
      ) {
        this.selectProduct.data.imagesUrl = [];
      }
      if (this.newImg.trim() === "") {
        return;
      }
      this.selectProduct.data.imagesUrl.push(this.newImg);
      this.clearImg();
    },
    deleteImg(key) {
      this.selectProduct.data.imagesUrl.splice(key, 1);
    },
    clearImg() {
      this.newImg = "";
      this.addImg = false;
    },
  },
  components: {
    productModal,
    deleteModal,
    PagePagination,
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    this.checkAdmin();
    this.productModal = new Modal(this.$refs.productModal, {
      keyboard: false,
      backdrop: "static",
    });
    this.deleteModal = new Modal(this.$refs.deleteModal, {
      keyboard: false,
    });
    this.getAllProduct();
  },
};
</script>
