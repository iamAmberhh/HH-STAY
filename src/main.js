import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
// font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
// flatpickr
import flatPickr from "vue-flatpickr-component";

// veeValidate
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
defineRule("email", email);
defineRule("required", required);
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW");
// ckeditor
import CKEditor from '@ckeditor/ckeditor5-vue'
// import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
// font awesome
library.add(fas);
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.config.productionTip = false;
// flatrPickr
app.component("flatPickr", flatPickr);
// veeloading
app.component("VeeLoading", Loading);
// veeValidate
app.component("VForm", Form);
app.component("VField", Field);
app.component("ErrorMessage", ErrorMessage);
// ckeditor
app.use(CKEditor)


app.mount("#app");
