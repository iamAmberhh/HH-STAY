<template>
  <section class="container my-max lh-lg">
    <h2 class="text-dark mb-3">聯絡我們</h2>
    <p>親愛的訪客們：</p>
    <ul class="">
      <li>
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          class="text-primary me-1"
        />
        對於票券商品或是使用兌換、退票等相關問題，歡迎透過客服信箱：
        service@hhstay.com.tw 跟我們聯繫 :D
      </li>
      <li>
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          class="text-primary me-1"
        />
        如有企業合作、產品開發等需求 ，歡迎透過合作信箱： industry@hhstay.com.tw
        跟我們聯繫 :D
      </li>
    </ul>
    <br />
    <h2 class="text-dark mb-3">企業資訊</h2>
    <ul>
      <li>代表人：Amberhh</li>
      <li>聯絡地址：台灣新北市神奇區寶貝一路24巷15號5樓</li>
      <li>聯絡電話：02-2233-4455</li>
      <li>統一編號：12345678</li>
    </ul>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>
