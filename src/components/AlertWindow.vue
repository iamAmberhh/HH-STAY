<template>
  <div ref="alert" class="alert">
    <div class="alert-window">
      <div class="mb-4">
        <font-awesome-icon
          v-if="alert.status === 'success'"
          icon="fa-solid fa-check"
          class="fs-1 text-primary text-shadow rounded-circle bg-white p-2 border border-3 border-primary shadow-sm"
          style="width: 30px; height: 30px"
        />
        <font-awesome-icon
          v-if="alert.status === 'fail'"
          icon="fa-solid fa-xmark"
          class="fs-1 text-primary text-shadow rounded-circle bg-white p-2 border border-3 border-primary shadow-sm"
          style="width: 30px; height: 30px"
        />
        <font-awesome-icon
          v-if="alert.status === 'info'"
          icon="fa-solid fa-exclamation"
          class="fs-1 text-danger text-shadow rounded-circle bg-white p-2 border border-3 border-danger shadow-sm"
          style="width: 30px; height: 30px"
        />
      </div>
      <p class="fs-2 mb-3">{{ alert.title }}</p>
      <div v-if="alert.needCheck">
        <div class="d-flex justify-content-center">
          <button class="btn btn-primary" @click="closeAlertWindow">
            沒問題
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartStore from "../stores/cartStore";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      alertModal: "",
    };
  },
  computed: {
    ...mapState(cartStore, ["alertShow", "alert"]),
  },
  methods: {
    ...mapActions(cartStore, ["closeAlert"]),
    openAlertWindow() {
      this.alertModal.classList.add("alert-active");
      if (!this.alert.needCheck) {
        this.autoClose();
      }
    },
    closeAlertWindow() {
      this.alertModal.classList.remove("alert-active");
      this.closeAlert();
    },
    autoClose() {
      setTimeout(() => {
        this.closeAlertWindow();
      }, 1500);
    },
  },

  watch: {
    alertShow() {
      if (this.alertShow === true) {
        this.openAlertWindow();
      } else {
        this.closeAlertWindow();
      }
    },
  },
  mounted() {
    this.alertModal = this.$refs.alert;
  },
};
</script>
