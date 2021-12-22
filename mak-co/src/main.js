import Vue from "vue"
import App from "./App.vue"
import "./assets/tailwind.css"
import svgIcon from "./components/icons/svgIcon.vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from) {
    if (to.name != from.name) return { x: 0, y: 0 }
  }
})

Vue.config.productionTip = false;

Vue.component("svgIcon", svgIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
