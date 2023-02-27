<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div
        class="modal-header"
        :class="{ 'bg-primary': isNew, 'bg-secondary': !isNew }"
      >
        <h5 v-if="isNew" class="modal-title" id="productModalLabel">
          新增商品
        </h5>
        <h5 v-else class="modal-title text-white" id="productModalLabel">
          編輯商品
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <VForm class="modal-body" v-slot="{ errors }">
        <div class="row">
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label"
                >標題<span class="text-danger"> *</span></label
              >
              <VField
                id="title"
                name="標題"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['標題'] }"
                placeholder="請輸入標題"
                rules="required"
                v-model="selectProduct.data.title"
              ></VField>
              <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label"
                  >分類<span class="text-danger"> *</span></label
                >
                <select
                  class="form-select"
                  id="category"
                  v-model="selectProduct.data.category"
                >
                  <option selected disabled>請選擇類別</option>
                  <option value="景點">景點</option>
                  <option value="美食">美食</option>
                  <option value="住宿">住宿</option>
                  <option value="交通">交通</option>
                  <option value="活動">活動</option>
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label for="unit" class="form-label"
                  >單位<span class="text-danger"> *</span></label
                >
                <VField
                  id="unit"
                  name="單位"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['單位'] }"
                  placeholder="請輸入單位"
                  rules="required"
                  v-model="selectProduct.data.unit"
                ></VField>
                <ErrorMessage
                  name="單位"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label"
                  >原價<span class="text-danger"> *</span></label
                >
                <input
                  id="origin_price"
                  min="0"
                  type="number"
                  class="form-control"
                  placeholder="請輸入原價"
                  v-model="selectProduct.data.origin_price"
                />
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label"
                  >售價<span class="text-danger"> *</span></label
                >
                <input
                  id="price"
                  min="0"
                  type="number"
                  class="form-control"
                  placeholder="請輸入最低售價"
                  v-model="selectProduct.data.price"
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="area" class="form-label"
                  >地區<span class="text-danger"> *</span></label
                >
                <VField
                  id="area"
                  name="地區"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地區'] }"
                  placeholder="請輸入地區"
                  rules="required"
                  v-model="selectProduct.data.area"
                ></VField>
                <ErrorMessage
                  name="地區"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3 col-md-6">
                <label for="address" class="form-label"
                  >使用地點<span class="text-danger"> *</span></label
                >
                <VField
                  id="address"
                  name="兌換地點"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['兌換地點'] }"
                  placeholder="請輸入兌換地點"
                  rules="required"
                  v-model="selectProduct.data.address"
                ></VField>
                <ErrorMessage
                  name="兌換地點"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <label for="mapUrl" class="form-label">嵌入地圖</label>
                <input
                  id="mapUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入地圖網址"
                  v-model="selectProduct.data.mapUrl"
                />
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="ticketA" class="form-label">票種 A</label>
                <select
                  class="form-select"
                  id="ticketA"
                  v-model="selectProduct.data.ticketA"
                >
                  <option selected disabled>請選擇票種</option>
                  <option value="一般票">一般票</option>
                  <option value="成人票">成人票</option>
                  <option value="學生票">學生票</option>
                  <option value="兒童票">兒童票</option>
                  <option value="平日券">平日券</option>
                  <option value="假日券">假日券</option>
                  <option value="抵用券">抵用券</option>
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label for="ticketA_price" class="form-label"
                  >票種 A 售價</label
                >
                <input
                  id="ticketA_price"
                  min="0"
                  type="number"
                  class="form-control"
                  placeholder="請輸入票種 A 售價"
                  v-model="selectProduct.data.ticketA_price"
                />
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="ticketB" class="form-label">票種 B</label>
                <select
                  class="form-select"
                  id="ticketB"
                  v-model="selectProduct.data.ticketB"
                >
                  <option selected disabled>請選擇票種</option>
                  <option value="一般票">一般票</option>
                  <option value="成人票">成人票</option>
                  <option value="學生票">學生票</option>
                  <option value="兒童票">兒童票</option>
                  <option value="平日券">平日券</option>
                  <option value="假日券">假日券</option>
                  <option value="抵用券">抵用券</option>
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label for="ticketB_price" class="form-label"
                  >票種 B 售價</label
                >
                <input
                  id="ticketB_price"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入售價"
                  v-model="selectProduct.data.ticketB_price"
                />
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="mb-3">
                <p class="form-label">
                  費用包含<span class="text-danger"> *</span>
                </p>
                <div
                  class="form-check form-check-inline"
                  v-for="(fee, key) in fees"
                  :key="'fee' + key"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="'include' + key"
                    :value="fee"
                    v-model="selectProduct.data.includes"
                  />
                  <label class="form-check-label" :for="'include' + key">{{
                    fee
                  }}</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mb-3">
                <p class="form-label">
                  費用不包含<span class="text-danger"> *</span>
                </p>
                <div
                  class="form-check form-check-inline"
                  v-for="(fee, key) in fees"
                  :key="'fee' + key"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="'exclude' + key"
                    :value="fee"
                    v-model="selectProduct.data.excludes"
                  />
                  <label class="form-check-label" :for="'exclude' + key">{{
                    fee
                  }}</label>
                </div>
              </div>
            </div>
            <hr />
            <div class="mb-3">
              <label for="description" class="form-label">商品描述</label>
              <ckeditor
                :editor="editor"
                v-model="selectProduct.data.description"
                :config="editorConfig"
              ></ckeditor>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <ckeditor
                :editor="editor"
                v-model="selectProduct.data.content"
                :config="editorConfig"
              ></ckeditor>
            </div>
            <div class="row">
              <div class="mb-3">
                <p class="form-label">
                  開放日/營業日<span class="text-danger"> *</span>
                </p>
                <div
                  class="form-check form-check-inline"
                  v-for="(day, key) in days"
                  :key="'day' + key"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="'day' + key"
                    :value="day"
                    v-model="selectProduct.data.openDate"
                  />
                  <label class="form-check-label" :for="'day' + key">{{
                    day
                  }}</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="itemFilter" class="form-label">顯示類別</label>
                <select
                  class="form-select"
                  id="itemFilter"
                  v-model="selectProduct.data.itemFilter"
                >
                  <option selected disabled>請選擇分類</option>
                  <option value="熱門">熱門</option>
                  <option value="打卡">打卡</option>
                  <option value="最新">最新</option>
                </select>
              </div>
              <div class="mb-3 col-md-6">
                <label for="is_enabled" class="form-label">商品啟用</label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="is_enabled"
                    checked
                    :true-value="1"
                    :false-value="0"
                    v-model="selectProduct.data.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用銷售</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="mb-2">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">主要圖片</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="selectProduct.data.imageUrl"
                />
              </div>
              <img
                v-if="selectProduct.data.imageUrl"
                class="img-fluid"
                alt="img"
                :src="selectProduct.data.imageUrl"
              />
            </div>
            <div>
              <h5>其他圖片</h5>
              <div
                v-for="(image, key) in selectProduct.data.imagesUrl"
                :key="'image' + key"
              >
                <div class="mb-3 d-flex flex-column align-items-end">
                  <img class="img-fluid mb-3" alt="img" :src="image" />
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-50"
                    :data-key="key"
                    @click="deleteImg(key)"
                  >
                    刪除
                  </button>
                </div>
              </div>
              <div v-if="addImg" class="mb-3">
                <label for="image" class="form-label">圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  @input="inputImg"
                />
                <img class="img-fluid" alt="img" v-if="newImg" :src="newImg" />
              </div>
              <button
                type="button"
                class="btn btn-outline-primary text-dark btn-sm d-block w-100 mb-2"
                @click="$emit('addImg')"
                v-if="!addImg"
              >
                新增圖片
              </button>
              <div v-if="addImg" class="d-flex mb-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm d-block w-50 me-2"
                  @click="clearImg"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary text-dark btn-sm d-block w-50"
                  @click="$emit('addNewImg')"
                >
                  確認
                </button>
              </div>
              <div v-if="uploadImg" class="mb-3">
                <label for="image" class="form-label">上傳圖片</label>
                <input type="text" class="form-control" @input="inputImg" />
                <img class="img-fluid" alt="img" v-if="newImg" :src="newImg" />
              </div>
              <img
                class="img-fluid"
                alt="img"
                v-if="uploadImgUrl"
                :src="uploadImgUrl"
              />
              <input
                type="file"
                class="form-control btn btn-outline-primary text-dark"
                id="file"
                placeholder="上傳圖片"
                v-if="!uploadImg"
                @change="uploadNewImg"
                ref="fileInput"
              />
              <div v-if="uploadImgUrl" class="d-flex mb-2">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm d-block w-50 me-2"
                  @click="clearUploadImg"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary text-dark btn-sm d-block w-50"
                  @click="pushUploadImg"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </VForm>
      <div class="modal-footer">
        <button
          type="button"
          class="btn btn-outline-secondary w-25"
          data-bs-dismiss="modal"
          @click="clearProduct"
        >
          取消
        </button>
        <button
          type="button"
          class="btn btn-primary text-dark w-25"
          @click="updateProduct"
        >
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const { VITE_APP_API, VITE_APP_PATH } = import.meta.env;
export default {
  props: [
    "productId",
    "selectProduct",
    "clearProduct",
    "isNew",
    "fees",
    "days",
    "deleteImg",
    "addImg",
    "newImg",
    "clearImg",
    "addNewImg",
    "updateProduct",
  ],
  emits: ["addImg", "addNewImg", "newImg", "inputImg"],
  data() {
    return {
      uploadImg: false,
      uploadImgUrl: "",
      editor: ClassicEditor,
      editorData: "",
      editorConfig: {
        toolbar: [
          "heading",
          "|",
          "bold",
          "numberedList",
          "bulletedList",
          "alignment",
          "undo",
          "redo",
          "Indent",
          "Outdent",
        ],
        dataProcessor: {
          writer: {
            enter: "<br>",
          },
        },
      },
    };
  },
  methods: {
    inputImg(e) {
      let imgUrl = e.target.value;
      this.$emit("inputImg", imgUrl);
    },
    clearUploadImg() {
      this.uploadImgUrl = "";
      this.$refs.fileInput.value = "";
    },
    uploadNewImg() {
      if (
        !Object.prototype.hasOwnProperty.call(
          this.selectProduct.data,
          "imagesUrl"
        )
      ) {
        this.selectProduct.data.imagesUrl = [];
      }
      const file = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.$http
        .post(`${VITE_APP_API}v2/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.uploadImgUrl = res.data.imageUrl;
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    pushUploadImg() {
      const arr = this.selectProduct.data.imagesUrl;
      arr.push(this.uploadImgUrl);
      this.clearUploadImg();
    },
  },
  components: {
    ErrorMessage,
  },
};
</script>
