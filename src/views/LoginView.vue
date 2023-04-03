<template>
  <div class="vh-100 d-flex align-items-center bg-light">
    <div class="container">
      <div class="row justify-content-center g-3 mb-5">
        <div class="col-10 col-md-8 text-center">
          <RouterLink to="/">
            <img
              src="/image/HHSTAY-logo.png"
              alt="logo"
              style="width: 300px; height: auto"
            />
          </RouterLink>
        </div>
        <div
          class="col-10 col-lg-6 border border-3 border-primary rounded-2 text-center p-2 p-md-5 bg-white shadow"
        >
          <h1 class="fs-3 text-center mb-3">管理員登入</h1>
          <form action="">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                required
                autofocus
                v-model="user.username"
              />
              <label for="username">帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
                v-model="user.password"
                @keyup.enter="submit"
              />
              <label for="password">密碼</label>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                @click="submit"
                class="btn btn-primary w-50"
              >
                登入
              </button>
            </div>
          </form>
        </div>
      </div>
      <footer class="text-center">
        <p class="mb-1">
          本網站僅供個人作品使用，不提供商業用途<span class="mx-2">|</span
          >Amberhh
        </p>
        <p>COPYRIGHT © 2023 All rights reserved.</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
const { VITE_APP_API } = import.meta.env;
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    submit() {
      this.$http
        .post(`${VITE_APP_API}v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexschool=${token}; expires=${expired};`;
          this.$router.push("/admin/products");
        })
        .catch(() => {
          alert(`登入失敗，請確認帳號密碼`);
        });
    },
  },
};
</script>
