import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import svgIcon from "./components/icons/svgIcon.vue"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.component("svgIcon", svgIcon)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
