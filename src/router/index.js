import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "event",
          component: () => import("../views/front/EventView.vue"),
        },
        {
          path: "food",
          component: () => import("../views/front/FoodView.vue"),
        },
        {
          path: "hotel",
          component: () => import("../views/front/HotelView.vue"),
        },
        {
          path: "traffic",
          component: () => import("../views/front/TrafficView.vue"),
        },
        {
          path: "spot",
          component: () => import("../views/front/SpotView.vue"),
        },
        {
          path: "city/:name",
          component: () => import("../views/front/CityView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
          children: [
            {
              path: "",
              components: {
                timeline: () => import("../components/cart/TimelineBar.vue"),
                info: () => import("../components/cart/CartlistComponent.vue"),
              },
            },
            {
              path: "info",
              components: {
                timeline: () => import("../components/cart/TimelineBar.vue"),
                info: () => import("../components/cart/FillInfoComponent.vue"),
              },
            },
            {
              path: "finish",
              components: {
                timeline: () => import("../components/cart/TimelineBar.vue"),
                info: () => import("../components/cart/OrderFinish.vue"),
              },
            },
          ],
        },
        {
          path: "product/:id",
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("../views/front/ErrorView.vue"),
        },
      ],
    },
    {
      path: "/login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/DashboardView.vue"),
      children: [
        {
          path: "products",
          component: () => import("../views/admin/AdminProducts.vue"),
        },
        {
          path: "orders",
          component: () => import("../views/admin/AdminOrders.vue"),
        },
        {
          path: "chart",
          component: () => import("../views/admin/AdminChart.vue"),
        },
      ],
    },
  ],
});

export default router;
