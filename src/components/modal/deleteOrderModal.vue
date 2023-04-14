<template>
  <div class="modal-dialog">
    <div class="modal-content border-0">
      <div class="modal-header bg-danger text-white">
        <h5 id="delProductModalLabel" class="modal-title">
          <span>刪除訂單</span>
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        是否要刪除顧客：
        <strong class="text-danger">{{ userName }}</strong>
        的訂單<br />刪除後將無法恢復哦！
      </div>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-dismiss="modal"
        >
          取消
        </button>
        <button type="button" class="btn btn-danger" @click="deleteOrder">
          確認刪除
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["selectOrder", "deleteOrder"],
  data() {
    return {
      userName: "",
    };
  },
  watch: {
    selectOrder() {
      const obj = { ...this.selectOrder };
      this.userName = obj.user.name;
    },
  },
};
</script>
