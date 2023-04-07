<template>
  <div class="container p-3 position-relative">
    <VeeLoading
      v-model:active="isLoading"
      :color="color"
      :is-full-page="fullPage"
    />
    <h2 class="fs-3 mb-2">圖表分析</h2>
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist" ref="chartTab">
        <button
          class="nav-link active"
          id="revenue"
          data-bs-toggle="tab"
          data-bs-target="#revenue-chart"
          type="button"
          role="tab"
          aria-controls="revenue-chart"
          aria-selected="true"
        >
          每月營收
        </button>
        <button
          class="nav-link"
          id="best-seller"
          data-bs-toggle="tab"
          data-bs-target="#best-seller-chart"
          type="button"
          role="tab"
          aria-controls="best-seller-chart"
          aria-selected="false"
        >
          熱銷商品
        </button>
      </div>
    </nav>
    <div class="tab-content mt-3" id="nav-tabContent">
      <div
        class="tab-pane fade show active chart"
        id="revenue-chart"
        role="tabpanel"
        aria-labelledby="revenue-chart"
      >
        <canvas id="revenueChart" ref="revenueChart"></canvas>
      </div>
      <div
        class="tab-pane fade chart"
        id="best-seller-chart"
        role="tabpanel"
        aria-labelledby="best-seller-chart"
      >
        <canvas id="bestSellerChart" ref="bestSellerChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from "bootstrap/js/dist/tab";
import Chart from "chart.js/auto";
import adminOrderStore from "@/stores/adminOrderStore";
import { mapState, mapActions } from "pinia";
export default {
  data() {
    return {
      color: "#ffdf65",
      fullPage: false,
      chartTab: null,
      revenueValue: null,
    };
  },
  computed: {
    ...mapState(adminOrderStore, ["isLoading", "revenue"]),
  },
  methods: {
    ...mapActions(adminOrderStore, [
      "getAllOrder",
      "getTotalPages",
      "renderRevenueChart",
    ]),
  },
  watch: {
    revenue() {
      this.revenueValue = this.revenue;
      new Chart(this.$refs.revenueChart, {
        type: "line",
        data: {
          labels: ["一月", "二月", "三月", "四月", "五月", "六月"],
          datasets: [
            {
              label: "2023 每月營收報表",
              data: this.revenueValue,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },
  },
  mounted() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common["Authorization"] = token;
    this.getTotalPages();
    this.chartTab = new Tab(this.$refs.chartTab);

    new Chart(this.$refs.bestSellerChart, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style>
.chart {
  height: 80vh;
  width: 90%;
}
</style>
