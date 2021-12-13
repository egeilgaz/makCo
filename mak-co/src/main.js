import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import svgIcon from "./components/icons/svgIcon.vue"

Vue.config.productionTip = false

Vue.component("svgIcon", svgIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
