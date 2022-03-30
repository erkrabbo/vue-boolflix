import Vue from 'vue'
import App from './App.vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)
// Vue.component('PerfectScrollbar', PerfectScrollbar)
// require('default-passive-events')
// document.addEventListener('touchstart', scroll, { passive: false })
