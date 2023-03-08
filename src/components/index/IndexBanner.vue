<template>
  <header
    class="banner-section d-flex flex-column align-items-center position-relative mb-max"
  >
    <div class="row my-auto">
      <div class="col text-center">
        <h2 class="mb-3 mb-md-5">走向台灣的每個角落<br />探索未知的城市</h2>

        <div class="gsap-content fs-3">
          <span class="banner-text"></span>
          <span class="cursor">_</span>
        </div>
      </div>
    </div>
    <div class="bg-light shadow rounded-3 icon-bar px-1 px-md-4 py-2">
      <ul class="px-2 d-flex justify-content-around align-items-center">
        <li class="me-3">
          <RouterLink
            to="/event"
            class="d-flex flex-column justify-content-center align-items-center link-dark"
          >
            <img src="/image/snorkling.png" alt="activity-icon" class="mb-1" />
            <p class="d-flex">
              <span>活動</span>
              <span class="d-none d-lg-block">探索</span>
            </p>
          </RouterLink>
        </li>
        <li class="me-3">
          <RouterLink
            to="/food"
            class="d-flex flex-column justify-content-center align-items-center link-dark"
          >
            <img src="/image/bubble-tea.png" alt="activity-icon" class="mb-1" />
            <p class="d-flex">
              <span>美食</span>
              <span class="d-none d-lg-block">探索</span>
            </p>
          </RouterLink>
        </li>
        <li class="me-3">
          <RouterLink
            to="/hotel"
            class="d-flex flex-column justify-content-center align-items-center link-dark"
          >
            <img src="/image/review.png" alt="activity-icon" class="mb-1" />
            <p class="d-flex">
              <span>住宿</span>
              <span class="d-none d-lg-block">探索</span>
            </p>
          </RouterLink>
        </li>
        <li class="me-3">
          <RouterLink
            to="/traffic"
            class="d-flex flex-column justify-content-center align-items-center link-dark"
          >
            <img src="/image/bus.png" alt="activity-icon" class="mb-1" />
            <p class="d-flex">
              <span>交通</span>
              <span class="d-none d-lg-block">探索</span>
            </p>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/spot"
            class="d-flex flex-column justify-content-center align-items-center link-dark"
          >
            <img src="/image/sunbed.png" alt="activity-icon" class="mb-1" />
            <p class="d-flex">
              <span>景點</span>
              <span class="d-none d-lg-block">探索</span>
            </p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.to(".banner-text", {
      text: "馬上開始選擇你的旅程吧！",
      ease: "none",
      duration: 2,
      delay: 2,
      scrollTrigger: {
        trigger: ".banner-text",
        toggleActions: "play pause resume reset",
      },
    });
    gsap.fromTo(
      ".cursor",
      0,
      {
        visibility: "hidden",
      },
      {
        visibility: "visible",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.3,
      }
    );
  },
};
</script>

<style>
.gsap-content {
  text-shadow: -1px -1px 0 #f8f9fa, 1px -1px 0 #f8f9fa, -1px 1px 0 #f8f9fa,
    1px 1px 0 #f8f9fa;
}
</style>
